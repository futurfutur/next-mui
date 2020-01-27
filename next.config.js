module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      "/": { page: "/" }
    };
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      "/": { page: "/" }
    };
  }
};
