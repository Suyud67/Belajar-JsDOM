// DOM Selecetion
// const tombolX = document.querySelector('span.close');
// const container = document.querySelector('div.container');

// tombolX.addEventListener('click', function () {
//   container.style.display = 'none';
// });

// DOM Travelsal
const tombolX = document.querySelectorAll('.close');

// menggunakan for
// for (let i = 0; i < tombolX.length; i++) {
//   tombolX[i].addEventListener('click', function (e) {
//        tombolX[i].parentElement.style.display = 'none';
//        e.target.parentElement.style.display = 'none';
// *penjelasan*
//select tombol lalu dicek siapa parent dari tombol, lalu kalau sudah dapet parentnya di isi display 'none';
//e atau apapun yang ada di dalam function event menyimpan informasi dari event yang terjadi;
//   });
// }

// menggunakan foreach
tombolX.forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.target.parentElement.style.display = 'none';
  });
});
