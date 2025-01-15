import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export const GET = async (ctx) => {
  return rss({
    title: "Astro Learner | Blog",
    description: "My journey learning Astro",
    site: ctx.site,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-us</language>`,
  });
};
