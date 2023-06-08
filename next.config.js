/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'gstatic.gvn360.com',
      'cdn.cloudflare.steamstatic.com',
      'www.derekyu.com'
    ]
  }
}

module.exports = nextConfig
