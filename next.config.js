/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/.',
        destination: '/',
        permanent: true,
      },
    ]
  },
  images: {
    formats:['image/webp']
  }
}

module.exports = nextConfig
