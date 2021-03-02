const data = [
    [
      {
        transaksi: {
          id: 1,
          name: "Pepsodent",
          harga: 5000,
          qty: 1
        }
      },
      {
        transaksi: {
          id: 2,
          name : "Kecap ABC",
          harga: 10000,
          qty: 12
        }
      }
    ],
    [
      {
        transaksi: {
          id: 12,
          name: "Shampo Pantene",
          harga: 20000,
          qty: 10
        }
      }
    ]
  ]

// 1. Dapatkan nilai kuantitas barang Kecap Abc dari variabel data
// 2. Hitung semua total transaksi yang ada dalam variabel data
// 3. Dapatkan nilai satuan dari barang Shampo Pantene

console.log(data[0][1].transaksi.qty);
console.log(data[0].length+ data[1].length);
console.log(data[1][0].transaksi.harga/data[1][0].transaksi.qty);

const transaksi = data[1][0].transaksi;
console.log(transaksi.harga/transaksi.qty);