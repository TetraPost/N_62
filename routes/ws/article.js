const io = require('wsServ');
const { getArticleById } = require('controllers/ws/article');
const { getListArticle } = require('controllers/ws/article');


io.on('connection', (socket) => {

  socket.on('article/get', async (data, cb) => {
    try {
      const payload = await getArticleById(data);
      cb(payload);
    } catch (error) {
      throw new Error('shit is happens');
    }
  });

  socket.on('article/getList', async (cb) => {
    try {
      const payload = await getListArticle();
      cb(payload);
    } catch (error) {
      throw new Error('shit is happens');
    }
  });

});
