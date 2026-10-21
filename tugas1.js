let studentsScore = [
  { name: 'Andi', score: 90 },
  { name: 'Rudi', score: 80 },
  { name: 'Dira', score: 100 }
];

// Inisialisasi siswa dengan nilai tertinggi dari elemen pertama
let topStudent = studentsScore[0];

// Looping untuk mencari nilai terbesar
for (let i = 1; i < studentsScore.length; i++) {
  if (studentsScore[i].score > topStudent.score) {
    topStudent = studentsScore[i];
  }
}

// Menampilkan hasil
console.log(`Siswa dengan nilai terbesar adalah ${topStudent.name} dengan nilai ${topStudent.score}`);



