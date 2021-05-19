// next.config.js
module.exports = {
  i18n: {
    locales: ["en-US", "fr", "nl-NL"],
    defaultLocale: "en-US",
  },
  async rewrites() {
    return {
      afterFiles: [
        {
          source: "/posts/:id",
          destination: "/posts/:id",
        },
        // {
        //   source: "/:path*",
        //   destination: `https://www.nextjs.org/:path*`,
        //   locale: false,
        // },
      ],
      fallback: [],
    };
  },
};
