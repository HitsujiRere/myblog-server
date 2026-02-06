import { component, defineMarkdocConfig, nodes } from "@astrojs/markdoc/config";
import shiki from "@astrojs/markdoc/shiki";

export default defineMarkdocConfig({
  tags: {
    counter: {
      render: component("./src/components/ClientCounter.astro"),
      attributes: {
        type: { type: String },
      },
    },
  },
  nodes: {
    document: {
      ...nodes.document,
      render: component("./src/layouts/Markdown.astro"),
    },
    image: {
      ...nodes.image,
      render: component("./src/components/MarkdocImage.astro"),
    },
  },
  extends: [shiki()],
});
