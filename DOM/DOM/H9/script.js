// DOM Selecetion
// const tombolX = document.querySelector('span.close');
// const container = document.querySelector('div.container');

// tombolX.addEventListener('click', function () {
//   container.style.display = 'none';
// });

// DOM Travelsal
// const tombolX = document.querySelectorAll('.close');
// const cards = document.querySelectorAll('.card');

// // menggunakan for
// // for (let i = 0; i < tombolX.length; i++) {
// //   tombolX[i].addEventListener('click', function (e) {
// //     tombolX[i].parentElement.style.display = 'none';
// //     e.target.parentElement.style.display = 'none';
// *catatan*
//   select tombol lalu dicek siapa parent dari tombol, lalu kalau sudah dapet parentnya di isi display 'none';
// e juga di sebut object event, karena e atau apapun yang ada di dalam function event menyimpan informasi dari event yang terjadi,
//   });
// }

// // menggunakan foreach
// tombolX.forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.target.parentElement.style.display = 'none';
//     e.preventDefault();
//     e.stopPropagation();
//   });
// });

// cards.forEach(function (card) {
//   card.addEventListener('click', function (e) {
//     alert('hello');
//   });
// });

const container = document.querySelector('.container');

container.addEventListener('click', function (e) {
  if (e.target.className == 'close') {
    e.target.parentElement.style.display = 'none';
    e.preventDefault();
  }
});
