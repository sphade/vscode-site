module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/...',
        destination: '/',
        permanent: true,
      },
    ]
  },
}
