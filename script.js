const img = document.querySelector('img');
const newBtn = document.getElementById('newBtn');
const submit = document.getElementById('submit');
let keyword = 'cat';

// function generateGIF(searchTerm) {
//   fetch(
//     `https://api.giphy.com/v1/gifs/translate?api_key=jVMZDjWHB1SPdyV047G5DPIcB5syIxoh&s=${searchTerm}`,
//     { mode: 'cors' }
//   )
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (response) {
//       img.src = response.data.images.original.url;
//     });
// }

async function generateGIF(searchTerm) {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=jVMZDjWHB1SPdyV047G5DPIcB5syIxoh&s=${searchTerm}`,
    { mode: 'cors' }
  );
  const imgData = await response.json();
  img.src = imgData.data.images.original.url;
}

function refreshGIF() {
  img.src = '#';
  generateGIF(keyword);
}

newBtn.addEventListener('click', refreshGIF);

function searchGIF() {
  keyword = `'${search.value}'`;
  generateGIF(keyword);
}

submit.addEventListener('click', searchGIF);

generateGIF(keyword);
