"use client";

import useViewCount from "./hooks/useViewCount";

export default function ViewCounter({
  slug,
  trackView,
}: {
  slug: string;
  trackView: boolean;
}) {

  const { viewsCount, loading, error, refetch } = useViewCount(slug, trackView);
  console.log(viewsCount);

  return (
    <p className="font-mono text-sm text-neutral-400 tracking-tighter">
      {viewsCount ? `${viewsCount} views` : "​"}
    </p>
  );
}
