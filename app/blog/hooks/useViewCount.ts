import { supabase } from "@/lib/supabase";
import { useEffect, useState, useMemo, useCallback } from "react";

// TO DO: Add SWR or React Query for caching - see it refetching and taking second to load in views after clicking into post

const useViewCount = (slug: string, isIndividualPost: boolean) => {
  const [viewsCount, setViewsCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchViewCount = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from("views")
        .select("count")
        .eq("slug", slug);

      if (error) {
        throw new Error(error.message);
      }

      if (data && data.length > 0) {
        const { count } = data[0];
        setViewsCount(count);

        if (isIndividualPost) {
          await supabase
            .from("views")
            .update({ count: count + 1 })
            .eq("slug", slug);
        }
      } else {
        // Blog post with the given slug not found, create a new row in the "views" table
        const { data: newView, error: newViewError } = await supabase
          .from("views")
          .insert([{ slug, count: 1 }])
          .single();

        if (newViewError) {
          throw new Error(newViewError.message);
        }

        console.log("newView", newView);

        setViewsCount(1);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [slug, isIndividualPost]);

  useEffect(() => {
    fetchViewCount();
    return () => {
      // Perform any necessary cleanup here (e.g., cancel ongoing requests)
    };
  }, [fetchViewCount]);

  const memoizedFetchViewCount = useMemo(
    () => fetchViewCount,
    [fetchViewCount]
  );

  return { viewsCount, loading, error, refetch: memoizedFetchViewCount };
};

export default useViewCount;
