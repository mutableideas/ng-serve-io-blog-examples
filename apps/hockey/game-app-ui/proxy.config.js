module.exports = {
  '/api/hockey/game-stats/*': {
      target: 'http://localhost:3000',
      changeOrigin: true
  }
};