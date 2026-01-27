// @ts-check

/** @type {import("prettier").Options} */
export default {
  plugins: ["prettier-plugin-astro", "@ianvs/prettier-plugin-sort-imports"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
