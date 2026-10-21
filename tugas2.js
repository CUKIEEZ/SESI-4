var motoGP = [
  {
    circuit: 'Losail',
    location: 'Qatar',
    winner: { firstName: 'Andrea', lastName: 'Dovizioso', country: 'Italy' }
  },
  {
    circuit: 'Autodromo',
    location: 'Argentine',
    winner: { firstName: 'Cal', lastName: 'Crutchlow', country: 'UK' }
  },
  {
    circuit: 'De Jerez',
    location: 'Spain',
    winner: { firstName: 'Valentino', lastName: 'Rossi', country: 'Italy' }
  },
  {
    circuit: 'Mugello',
    location: 'Italy',
    winner: { firstName: 'Andrea', lastName: 'Dovizioso', country: 'Italy' }
  }
];

let groupedData = {};

for (let i = 0; i < motoGP.length; i++) {
  let race = motoGP[i];
  let country = race.winner.country;
  let fullName = race.winner.firstName + ' ' + race.winner.lastName;
  let winLoc = race.circuit + ', ' + race.location;

  // Jika properti negara belum ada di objek groupedData, buat kerangkanya
  if (!groupedData[country]) {
    groupedData[country] = {
      winningCircuits: [],
      totalWin: 0
    };
  }

  // Masukkan data pemenang dan sirkuit ke dalam array winningCircuits
  groupedData[country].winningCircuits.push({
    name: fullName,
    winLocation: winLoc
  });
  
  // Tambahkan total kemenangan
  groupedData[country].totalWin++;
}

// Menampilkan hasil grouping
console.log(JSON.stringify(groupedData, null, 2));