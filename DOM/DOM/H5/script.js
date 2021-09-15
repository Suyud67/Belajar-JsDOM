// innerHTML
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Suyud Setiawan </em>';

// style.atributeCSS
// const sectionB = document.querySelector('section#b');
// const li = sectionB.getElementsByTagName('li');

// for (let i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = 'lightblue';
// }

// element.getAttribute();
// element.setAttribute(); => nambah attribute tapi menimpa attribute yang lama
// element.removeAttribute(); => hapus attribute
// const p1 = document.querySelector('section#a .p1');

// p1.setAttribute('id', 'paragraf1');
// p1.removeAttribute('id');

// Element.classList.add(); => meambahkan
// Element.classList.remove(); => menghapus
// Element.classList.toggle(); => kalau class tidak ada maka ditambah kalau class ada class itu akan dihapus
// Element.classList.item(); => menegetahui suatu class dalam element, hitungan index atau dihitung dari 0
// Element.classList.contains(); => mengecek apakah dalam suatu element punya class tertentu, value 'true' and 'false'
// Element.classList.replace(); => menimpa class yang sudah ada dengan class yang baru

const p2 = document.querySelector('.p2');
// p2.classList.add('label');
// p2.classList.remove('label');
p2.classList.toggle('label');
