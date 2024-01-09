const PROXY_CONFIG = [
  {
    context: ['/ma-boot/'],
    target: 'http://localhost:8089',
    changeOrigin: true,
    secure: false,
    logLevel: 'debug'
  }
];

module.exports = PROXY_CONFIG;
