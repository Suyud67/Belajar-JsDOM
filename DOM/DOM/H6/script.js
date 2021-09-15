// DOM Manipulation
// membuat element baru
const pBaru = document.createElement('p');
// isi dari elemen baru
const isiP = document.createTextNode('paragraf baru');

// simpan tulisan di elemen yang dibuat
pBaru.appendChild(isiP);

// memasukan elemen baru beserta isinya ke tempat yang dituju
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

const liBaru = document.createElement('li');
const isiLi = document.createTextNode('ini isi li baru');
// menggabungkan elemen dengan isinya
liBaru.appendChild(isiLi);

// disimpan dimana elemen yang baru dibuat
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);

// removeChild() => hapus
const link = sectionA.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// replaceChild() => menggantikan
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

// buat elemnt baru
const h2 = document.createElement('h2');
const isiH2 = document.createTextNode('Ini Judul Baru');
// menggabungkan
h2.appendChild(isiH2);

// replace
sectionB.replaceChild(h2, p4);
