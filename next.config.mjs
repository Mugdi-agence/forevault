/** @type {import('next').NextConfig} */

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval'
        https://www.googletagmanager.com
        https://www.google-analytics.com
        https://pagead2.googlesyndication.com
        https://googleads.g.doubleclick.net
        https://www.googleadservices.com;
      style-src 'self' 'unsafe-inline';
      img-src 'self' data: https:;
      connect-src 'self'
        https://www.google-analytics.com
        https://pagead2.googlesyndication.com;
      frame-src
        https://googleads.g.doubleclick.net
        https://tpc.googlesyndication.com;
      font-src 'self' data:;
    `.replace(/\n/g, "")
  }
];

const nextConfig = {
  reactCompiler: true,

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;