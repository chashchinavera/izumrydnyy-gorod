/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.node$/,
      use: "url-loader",
    });

    if (isServer) {
      config.module.rules.push({
        test: /\.node$/,
        use: "file-loader",
      });
    }

    return config;
  },
};

module.exports = nextConfig;
