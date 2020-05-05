const socket = io();
const loadBtn = document.querySelector('.btn');
const inputMessage = document.querySelector('.inputMessage');
const messageArea = document.querySelector('.messageArea');
const articleList = document.querySelector('.articleList');

async function getArticleById(data) {
  try {
    await socket.emit('article/get', { _id: data }, (cb) => {
      if (!cb) {
        messageArea.innerText = 'Id invalid';
      } else {
        messageArea.innerText = cb.articleContent;
      }
    });
  } catch (error) {
    console.log(error);
  }
}

async function getArticleList() {
  try {
    await socket.emit('article/getList', (cb) => {
      if (!cb) {
        messageArea.innerText = 'data error';
      } else {
        let temp = '';
        for (let i = 0; i < cb.length; i++) {
          temp += `<option value='${cb[i]._id}'>${cb[i]._id} - ${cb[i].articleTitle}</option>`;
        }
        articleList.innerHTML = temp;
      }
    });
  } catch (error) {
    console.log(error);
  }
}

loadBtn.onclick = () => {
  const input = inputMessage.value;
  if (input !== '') {
    getArticleById(input);
    setTimeout(() => {
      getArticleList();
    }, 1000);
  }
};

articleList.addEventListener('change', (e) => {
  const id = e.target.value;
  alert(id);
});
