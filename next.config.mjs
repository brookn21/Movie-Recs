/** @type {import('next').NextConfig} */
const nextConfig = {
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'a.ltrbxd.com',
            },
            // {
            //   protocol: 'https',
            //   hostname: 'i.ebayimg.com',
            // },
          ],
        },
        
};

export default nextConfig;
