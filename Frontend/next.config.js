/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/dashboard/tests',
            permanent: false,
          },
        ]
      },
}

module.exports = nextConfig
