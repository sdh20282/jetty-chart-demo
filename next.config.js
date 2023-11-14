// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

const withTM = require('next-transpile-modules')(['jetty-chart']);

module.exports = withTM();