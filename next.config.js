/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Add static export for Netlify
  images: {
    unoptimized: true, // Required for static export
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  webpack(config) {
    // Configure SVG handling
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    
    return config;
  },
};

export default nextConfig; 