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
}

export default nextConfig;
