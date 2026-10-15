let produk = {
    nama: "Laptop",
    harga: 5000000,
    stok: 5,
    diskon: 0.5,

   
    tampilkanProduk: function() {
        console.log(` ${this.nama}`);
        console.log(`Harga : Rp${this.harga}`);
        console.log(`Stok tersedia: ${this.stok}`);
        console.log("----------------------------------------");
    },

    
    hargaDiskon: function() {
        return this.harga - (this.harga * this.diskon);
    },

    
    beliProduk: function(jumlahBeli) {
        if (this.stok <= 0) {
            console.log(" Maaf, stok produk sudah habis!");
            console.log("----------------------------------------");
            return;
        }

        if (jumlahBeli <= this.stok) {
            this.stok -= jumlahBeli;
            console.log(` Pembelian berhasil! Anda membeli ${jumlahBeli} ${this.nama}.`);
            console.log(`Sisa stok sekarang: ${this.stok}`);
            
            if (this.stok === 0) {
                console.log(" Stok produk kini habis, segera restock!");
            }
        } else {
            console.log(` Stok tidak cukup! Permintaan pembelian (${jumlahBeli}), sisa stok (${this.stok}).`);
        }
        console.log("----------------------------------------");
    }
};


produk.tampilkanProduk();


console.log(` Harga setelah diskon: Rp${produk.hargaDiskon()}`);
console.log("----------------------------------------");

produk.beliProduk(1);  
produk.beliProduk(2);  
produk.beliProduk(3);  