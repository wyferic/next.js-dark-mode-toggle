const isProd = process.env.NODE_ENV === 'production';

console.log(`process.env.NODE_ENV: ${process.env.NODE_ENV}`)

const nextConfig = {
  basePath: isProd ? '/test' : '',
  output: "export", 
  reactStrictMode: true,
};

export default nextConfig;
