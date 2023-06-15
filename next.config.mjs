import { remarkCodeHike } from "@code-hike/mdx";
import rehypeSlug from "rehype-slug";
import mdxConfig from "@next/mdx";

export default mdxConfig({
  extension: /\.mdx?$/,
  options: { rehypePlugins: [rehypeSlug], remarkPlugins: [remarkCodeHike] },
})({
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});
