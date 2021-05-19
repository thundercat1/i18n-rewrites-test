// next.config.js
module.exports = {
  i18n: {
    locales: ["en-US", "fr", "nl-NL"],
    defaultLocale: "en-US",
  },
  async rewrites() {
    afterFiles: [
      {
        source: "/blog/:id",
        destination: "/blog/:id",
      },
    ],
  },
  fallback: [
    {
      source: "/:path*",
      destination: `https://www.nextjs.org/:path*`,
      locale: false,
    },
  ],
};
