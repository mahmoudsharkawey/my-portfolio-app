/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['http://192.168.1.7:3000'],
  images: {
    remotePatterns: [new URL('https://lh3.googleusercontent.com/a/ACg8ocIqGEtb3ONENhYaRQbeQOfYeHr9kqDIBixq8qR8A2ST76qf9_o=s360-c-no')],
  },
}

module.exports = nextConfig
