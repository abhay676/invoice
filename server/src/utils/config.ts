export default () => ({
  Chowkidar: {
    baseUrl: process.env.CHOWKIDAR_BASE_URL,
    register: process.env.CHOWKIDAR_REGISTER_NEW_USER,
    login: process.env.CHOWKIDAR_LOGIN,
  },
  TRIMMER: {
    baseUrl: process.env.TRIMMER_BASE_URL,
    generateShortUrl: process.env.TRIMMER_SHORT_URL,
  },
});
