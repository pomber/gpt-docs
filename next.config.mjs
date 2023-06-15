import { remarkCodeHike } from "@code-hike/mdx";

import mdxConfig from "@next/mdx";

export default mdxConfig({
  extension: /\.mdx?$/,
  options: { remarkPlugins: [[remarkCodeHike, { theme: "github-from-css" }]] },
})({
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});
