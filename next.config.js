
module.exports = {
  reactStrictMode: true,

  images: {
    domains: [
      'bayut-production.s3.eu-central-1.amazonaws.com',
      'images.unsplash.com',
    ],
  },

  webpack: (config) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: [
        '**/node_modules/**',
        '**/.git/**',
        '**/.next/**',
      ],
    };

    return config;
  },
};
