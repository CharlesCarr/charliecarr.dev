import Image from "next/image"
import { Callout } from "./callout"
import { useMDXComponent } from "next-contentlayer/hooks"

const mdxComponents = {
  Image,
  Callout,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const MDXContent: any = useMDXComponent(code) // adding any type here to remove err temporarily

  return <MDXContent components={mdxComponents} />
}
