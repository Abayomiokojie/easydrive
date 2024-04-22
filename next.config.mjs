/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            // 'cdn.imagin.studio'
            {
                protocol: 'https',
                hostname: 'cdn.imagin.studio',
                pathname: '**',
            },
        ],
    }
}
export default nextConfig;
