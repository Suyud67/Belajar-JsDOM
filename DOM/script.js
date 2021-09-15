// protortpe
// function Siswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }

// Siswa.prototype.olahraga = function (otot) {
//   this.energi += otot * 3;
//   return `halo ${this.nama}, selamat berolahraga`;
// };

// const suyud = new Siswa('suyud', 15);

// classes with js
class Siswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }
  olahraga(otot) {
    this.energi += otot * 3;
    return `hallo ${this.nama}, selamat berolahraga`;
  }
}

const suyud = new Siswa('suyud', 20);
