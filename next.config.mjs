import { remarkCodeHike } from "@code-hike/mdx";

import mdxConfig from "@next/mdx";

export default mdxConfig({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      [
        remarkCodeHike,
        {
          theme: "github-from-css",
          staticMediaQuery: "not screen, (max-width: 1060px)",
        },
      ],
    ],
  },
})({
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});
