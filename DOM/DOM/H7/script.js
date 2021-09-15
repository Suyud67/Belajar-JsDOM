// latihan kasus 1
const submit = document.getElementById('click');

submit.addEventListener('click', function () {
  document.body.classList.toggle('ubahBg');
});

// latihan kasus 2
// membuat button baru menggunakan JS
const button = document.createElement('button');
const isiBtn = document.createTextNode('Click Me Too!!');
// menggabungkan elemen yang dibuat
button.appendChild(isiBtn);
// memeberikan type di button yang dibuat
button.setAttribute('type', 'button');
// mengeksekusi setelah button yang dibuat di html
submit.after(button);

// memberikan event pada button yang baru dibuat
// memberikan warna random ketika button baru di click
button.addEventListener('click', function () {
  // untuk merandom angka untuk value dari rgb
  const r = Math.round(Math.random() * 255 + 0);
  const g = Math.round(Math.random() * 255 + 0);
  const b = Math.round(Math.random() * 255 + 0);
  document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
});

// latihan kasus ke 3
// menngubah warna dengan slider
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

sHijau.addEventListener('input', function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

sBiru.addEventListener('input', function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

// latihan kasus ke 4
// mengubah warna dengan menggerakan kursor

document.body.addEventListener('mousemove', function (event) {
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yPos = Math.round((event.clientY / window.innerHeight) * 255);
  // console.log(xPos);
  document.body.style.backgroundColor = 'rgb(' + xPos + ',' + yPos + ',100)';
});
