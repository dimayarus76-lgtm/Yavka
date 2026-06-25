/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Настройки для работы через туннели и внешние подключения
  output: 'standalone',
  poweredByHeader: false,
};

export default nextConfig;
