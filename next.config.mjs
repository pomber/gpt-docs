import { remarkCodeHike } from "@code-hike/mdx"
import remarkGfm from "remark-gfm"
import theme from "./theme.mjs"

import mdxConfig from "@next/mdx"

export default mdxConfig({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      [
        remarkCodeHike,
        {
          theme,
          staticMediaQuery: "not screen, (max-width: 1060px)",
        },
      ],
      remarkGfm,
    ],
  },
})({
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
})
