/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/cloths',
                permanent: true,
            },
        ]
    }
};

export default nextConfig;
