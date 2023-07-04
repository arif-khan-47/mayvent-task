/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com', 'localhost:1337', 'localhost','assets.coingecko.com'],
    
  }
}

module.exports = nextConfig