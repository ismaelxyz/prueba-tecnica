/** @type {import('next').NextConfig} */


const nextConfig = {
    images: {
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'netsocs.com',
            port: '',
            pathname: '/logo-netsocs-03.png',
        },
        ],
    },
    async rewrites() {
        return [
          {
            source: '/api/pages/:id',
            destination: 'http://localhost:12345/pages/:id',
          },
        ]
      },
}

export default nextConfig;
