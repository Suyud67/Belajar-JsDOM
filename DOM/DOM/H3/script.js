// dom selection
// document.getElementById() => element

const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = 'lightblue';
judul.innerHTML = 'Suyud Setiawan';

// document.getElementsByTagName() => HTMLCollection

const p = document.getElementsByTagName('p');
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = 'lightgreen';
}

// document.getElementsByClassName() => HTMLCollection

const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'henshin dari js';
