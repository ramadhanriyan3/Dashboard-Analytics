const salesData = [
  {
    transactionId: 1,
    product: "Laptop",
    quantity: 2,
    pricePerUnit: 15000000,
    totalPrice: 30000000,
    customer: "Riyan Ramadhan",
    date: "2024-12-10",
  },
  {
    transactionId: 2,
    product: "Smartphone",
    quantity: 5,
    pricePerUnit: 3500000,
    totalPrice: 17500000,
    customer: "Siti Nurhaliza",
    date: "2024-12-11",
  },
  {
    transactionId: 3,
    product: "Headphone",
    quantity: 3,
    pricePerUnit: 500000,
    totalPrice: 1500000,
    customer: "Budi Santoso",
    date: "2024-12-12",
  },
  {
    transactionId: 4,
    product: "Smartwatch",
    quantity: 7,
    pricePerUnit: 2000000,
    totalPrice: 14000000,
    customer: "Ayu Pratiwi",
    date: "2024-12-13",
  },
  {
    transactionId: 5,
    product: "Laptop",
    quantity: 1,
    pricePerUnit: 15000000,
    totalPrice: 15000000,
    customer: "Dewi Lestari",
    date: "2024-12-13",
  },
  {
    transactionId: 6,
    product: "Smartphone",
    quantity: 3,
    pricePerUnit: 3500000,
    totalPrice: 10500000,
    customer: "Andi Setiawan",
    date: "2024-12-12",
  },
  {
    transactionId: 7,
    product: "Headphone",
    quantity: 4,
    pricePerUnit: 500000,
    totalPrice: 2000000,
    customer: "Rina Maulida",
    date: "2024-12-11",
  },
  {
    transactionId: 8,
    product: "Smartwatch",
    quantity: 2,
    pricePerUnit: 2000000,
    totalPrice: 4000000,
    customer: "Eko Prasetyo",
    date: "2024-12-10",
  },
  {
    transactionId: 9,
    product: "Laptop",
    quantity: 3,
    pricePerUnit: 15000000,
    totalPrice: 45000000,
    customer: "Tina Jaya",
    date: "2024-12-09",
  },
  {
    transactionId: 10,
    product: "Smartphone",
    quantity: 10,
    pricePerUnit: 3500000,
    totalPrice: 35000000,
    customer: "Dani Alamsyah",
    date: "2024-12-08",
  },
  {
    transactionId: 11,
    product: "Laptop",
    quantity: 1,
    pricePerUnit: 15000000,
    totalPrice: 15000000,
    customer: "Rudi Hartono",
    date: "2024-12-14",
  },
  {
    transactionId: 12,
    product: "Smartphone",
    quantity: 2,
    pricePerUnit: 3500000,
    totalPrice: 7000000,
    customer: "Sari Dewi",
    date: "2024-12-13",
  },
  {
    transactionId: 13,
    product: "Headphone",
    quantity: 6,
    pricePerUnit: 500000,
    totalPrice: 3000000,
    customer: "Andini Kusuma",
    date: "2024-12-12",
  },
  {
    transactionId: 14,
    product: "Smartwatch",
    quantity: 5,
    pricePerUnit: 2000000,
    totalPrice: 10000000,
    customer: "Joko Widodo",
    date: "2024-12-11",
  },
  {
    transactionId: 15,
    product: "Laptop",
    quantity: 2,
    pricePerUnit: 15000000,
    totalPrice: 30000000,
    customer: "Lina Marlina",
    date: "2024-12-10",
  },
  {
    transactionId: 16,
    product: "Smartphone",
    quantity: 1,
    pricePerUnit: 3500000,
    totalPrice: 3500000,
    customer: "Hendra Gunawan",
    date: "2024-12-09",
  },
  {
    transactionId: 17,
    product: "Headphone",
    quantity: 3,
    pricePerUnit: 500000,
    totalPrice: 1500000,
    customer: "Rina Puspita",
    date: "2024-12-08",
  },
  {
    transactionId: 18,
    product: "Smartwatch",
    quantity: 2,
    pricePerUnit: 2000000,
    totalPrice: 4000000,
    customer: "Bayu Saputra",
    date: "2024-12-07",
  },
  {
    transactionId: 19,
    product: "Laptop",
    quantity: 4,
    pricePerUnit: 15000000,
    totalPrice: 60000000,
    customer: "Maya Sari",
    date: "2024-12-06",
  },
  {
    transactionId: 20,
    product: "Smartphone",
    quantity: 6,
    pricePerUnit: 3500000,
    totalPrice: 21000000,
    customer: "Fajar Pratama",
    date: "2024-12-05",
  },
  {
    transactionId: 21,
    product: "Headphone",
    quantity: 2,
    pricePerUnit: 500000,
    totalPrice: 1000000,
    customer: "Intan Lestari",
    date: "2024-12-04",
  },
  {
    transactionId: 22,
    product: "Smartwatch",
    quantity: 3,
    pricePerUnit: 2000000,
    totalPrice: 6000000,
    customer: "Aldi Firmansyah",
    date: "2024-12-03",
  },
  {
    transactionId: 23,
    product: "Laptop",
    quantity: 2,
    pricePerUnit: 15000000,
    totalPrice: 30000000,
    customer: "Wina Ayu",
    date: "2024-12-02",
  },
  {
    transactionId: 24,
    product: "Smartphone",
    quantity: 5,
    pricePerUnit: 3500000,
    totalPrice: 17500000,
    customer: "Bambang Irawan",
    date: "2024-12-01",
  },
  {
    transactionId: 25,
    product: "Headphone",
    quantity: 1,
    pricePerUnit: 500000,
    totalPrice: 500000,
    customer: "Fitri Andriyani",
    date: "2024-11-30",
  },
  {
    transactionId: 26,
    product: "Smartwatch",
    quantity: 4,
    pricePerUnit: 2000000,
    totalPrice: 8000000,
    customer: "Yusuf Bachtiar",
    date: "2024-11-29",
  },
  {
    transactionId: 27,
    product: "Laptop",
    quantity: 3,
    pricePerUnit: 15000000,
    totalPrice: 45000000,
    customer: "Alfi Ramdani",
    date: "2024-11-28",
  },
  {
    transactionId: 28,
    product: "Smartphone",
    quantity: 7,
    pricePerUnit: 3500000,
    totalPrice: 24500000,
    customer: "Sinta Kurnia",
    date: "2024-11-27",
  },
  {
    transactionId: 29,
    product: "Headphone",
    quantity: 4,
    pricePerUnit: 500000,
    totalPrice: 2000000,
    customer: "Vina Salsabila",
    date: "2024-11-26",
  },
  {
    transactionId: 30,
    product: "Smartwatch",
    quantity: 3,
    pricePerUnit: 2000000,
    totalPrice: 6000000,
    customer: "Yoga Prasetya",
    date: "2024-11-25",
  },
  {
    transactionId: 31,
    product: "Laptop",
    quantity: 1,
    pricePerUnit: 15000000,
    totalPrice: 15000000,
    customer: "Agus Subekti",
    date: "2024-11-24",
  },
  {
    transactionId: 32,
    product: "Smartphone",
    quantity: 3,
    pricePerUnit: 3500000,
    totalPrice: 10500000,
    customer: "Dewi Lestari",
    date: "2024-11-23",
  },
  {
    transactionId: 33,
    product: "Headphone",
    quantity: 5,
    pricePerUnit: 500000,
    totalPrice: 2500000,
    customer: "Ahmad Ridwan",
    date: "2024-11-22",
  },
  {
    transactionId: 34,
    product: "Smartwatch",
    quantity: 2,
    pricePerUnit: 2000000,
    totalPrice: 4000000,
    customer: "Kartika Sari",
    date: "2024-11-21",
  },
  {
    transactionId: 35,
    product: "Laptop",
    quantity: 2,
    pricePerUnit: 15000000,
    totalPrice: 30000000,
    customer: "Andi Wijaya",
    date: "2024-11-20",
  },
  {
    transactionId: 36,
    product: "Smartphone",
    quantity: 4,
    pricePerUnit: 3500000,
    totalPrice: 14000000,
    customer: "Mega Pratiwi",
    date: "2024-11-19",
  },
  {
    transactionId: 37,
    product: "Headphone",
    quantity: 3,
    pricePerUnit: 500000,
    totalPrice: 1500000,
    customer: "Yudha Saputra",
    date: "2024-11-18",
  },
  {
    transactionId: 38,
    product: "Smartwatch",
    quantity: 1,
    pricePerUnit: 2000000,
    totalPrice: 2000000,
    customer: "Vania Oktavia",
    date: "2024-11-17",
  },
  {
    transactionId: 39,
    product: "Laptop",
    quantity: 3,
    pricePerUnit: 15000000,
    totalPrice: 45000000,
    customer: "Dedi Firmansyah",
    date: "2024-11-16",
  },
  {
    transactionId: 40,
    product: "Smartphone",
    quantity: 2,
    pricePerUnit: 3500000,
    totalPrice: 7000000,
    customer: "Farah Anindya",
    date: "2024-11-15",
  },
  {
    transactionId: 41,
    product: "Headphone",
    quantity: 6,
    pricePerUnit: 500000,
    totalPrice: 3000000,
    customer: "Zainal Abidin",
    date: "2024-11-14",
  },
  {
    transactionId: 42,
    product: "Smartwatch",
    quantity: 5,
    pricePerUnit: 2000000,
    totalPrice: 10000000,
    customer: "Lilis Setyawati",
    date: "2024-11-13",
  },
  {
    transactionId: 43,
    product: "Laptop",
    quantity: 1,
    pricePerUnit: 15000000,
    totalPrice: 15000000,
    customer: "Teguh Ramadhan",
    date: "2024-11-12",
  },
  {
    transactionId: 44,
    product: "Smartphone",
    quantity: 7,
    pricePerUnit: 3500000,
    totalPrice: 24500000,
    customer: "Hesti Kurniawati",
    date: "2024-11-11",
  },
  {
    transactionId: 45,
    product: "Headphone",
    quantity: 4,
    pricePerUnit: 500000,
    totalPrice: 2000000,
    customer: "Fikri Hidayat",
    date: "2024-11-10",
  },
  {
    transactionId: 46,
    product: "Smartwatch",
    quantity: 3,
    pricePerUnit: 2000000,
    totalPrice: 6000000,
    customer: "Rina Marlina",
    date: "2024-11-09",
  },
  {
    transactionId: 47,
    product: "Laptop",
    quantity: 2,
    pricePerUnit: 15000000,
    totalPrice: 30000000,
    customer: "Arif Susanto",
    date: "2024-11-08",
  },
  {
    transactionId: 48,
    product: "Smartphone",
    quantity: 5,
    pricePerUnit: 3500000,
    totalPrice: 17500000,
    customer: "Riska Dwi",
    date: "2024-11-07",
  },
  {
    transactionId: 49,
    product: "Headphone",
    quantity: 2,
    pricePerUnit: 500000,
    totalPrice: 1000000,
    customer: "Anwar Husain",
    date: "2024-11-06",
  },
  {
    transactionId: 50,
    product: "Smartwatch",
    quantity: 4,
    pricePerUnit: 2000000,
    totalPrice: 8000000,
    customer: "Winda Ariyani",
    date: "2024-11-05",
  },
  {
    transactionId: 51,
    product: "Laptop",
    quantity: 2,
    pricePerUnit: 15000000,
    totalPrice: 30000000,
    customer: "Riyan Ramadhan",
    date: "2024-12-10",
  },
  {
    transactionId: 52,
    product: "Smartphone",
    quantity: 5,
    pricePerUnit: 3500000,
    totalPrice: 17500000,
    customer: "Siti Nurhaliza",
    date: "2024-12-11",
  },
  {
    transactionId: 53,
    product: "Headphone",
    quantity: 3,
    pricePerUnit: 500000,
    totalPrice: 1500000,
    customer: "Budi Santoso",
    date: "2024-12-12",
  },
  {
    transactionId: 54,
    product: "Tablet",
    quantity: 4,
    pricePerUnit: 4000000,
    totalPrice: 16000000,
    customer: "Joko Widodo",
    date: "2024-10-01",
  },
  {
    transactionId: 55,
    product: "Smartwatch",
    quantity: 2,
    pricePerUnit: 2000000,
    totalPrice: 4000000,
    customer: "Diana Putri",
    date: "2024-10-02",
  },
  {
    transactionId: 56,
    product: "Smartphone",
    quantity: 3,
    pricePerUnit: 3500000,
    totalPrice: 10500000,
    customer: "Budi Santoso",
    date: "2024-10-03",
  },
  {
    transactionId: 57,
    product: "Laptop",
    quantity: 1,
    pricePerUnit: 15000000,
    totalPrice: 15000000,
    customer: "Agus Salim",
    date: "2024-10-04",
  },
  {
    transactionId: 58,
    product: "Smartwatch",
    quantity: 5,
    pricePerUnit: 2000000,
    totalPrice: 10000000,
    customer: "Rini Sari",
    date: "2024-10-05",
  },
  {
    transactionId: 59,
    product: "Tablet",
    quantity: 6,
    pricePerUnit: 4000000,
    totalPrice: 24000000,
    customer: "Ali Kurniawan",
    date: "2024-10-06",
  },
  {
    transactionId: 60,
    product: "Headphone",
    quantity: 10,
    pricePerUnit: 500000,
    totalPrice: 5000000,
    customer: "Dwi Prasetyo",
    date: "2024-10-07",
  },
  {
    transactionId: 61,
    product: "Smartphone",
    quantity: 2,
    pricePerUnit: 3500000,
    totalPrice: 7000000,
    customer: "Rudianto",
    date: "2024-10-08",
  },
  {
    transactionId: 62,
    product: "Laptop",
    quantity: 4,
    pricePerUnit: 15000000,
    totalPrice: 60000000,
    customer: "Siti Rahmawati",
    date: "2024-10-09",
  },
  {
    transactionId: 63,
    product: "Headphone",
    quantity: 1,
    pricePerUnit: 500000,
    totalPrice: 500000,
    customer: "Budi Santoso",
    date: "2024-09-01",
  },
  {
    transactionId: 64,
    product: "Smartphone",
    quantity: 7,
    pricePerUnit: 3500000,
    totalPrice: 24500000,
    customer: "Riani Mustika",
    date: "2024-09-02",
  },
  {
    transactionId: 65,
    product: "Smartwatch",
    quantity: 3,
    pricePerUnit: 2000000,
    totalPrice: 6000000,
    customer: "Hendi Irawan",
    date: "2024-09-03",
  },
  {
    transactionId: 66,
    product: "Tablet",
    quantity: 2,
    pricePerUnit: 4000000,
    totalPrice: 8000000,
    customer: "Tina Hartati",
    date: "2024-09-04",
  },
  {
    transactionId: 67,
    product: "Smartphone",
    quantity: 4,
    pricePerUnit: 3500000,
    totalPrice: 14000000,
    customer: "Bobby Lesmana",
    date: "2024-09-05",
  },
  {
    transactionId: 68,
    product: "Smartwatch",
    quantity: 1,
    pricePerUnit: 2000000,
    totalPrice: 2000000,
    customer: "Fandi Rizky",
    date: "2024-09-06",
  },
  {
    transactionId: 69,
    product: "Laptop",
    quantity: 2,
    pricePerUnit: 15000000,
    totalPrice: 30000000,
    customer: "Widiya Haryanto",
    date: "2024-09-07",
  },
  {
    transactionId: 70,
    product: "Smartphone",
    quantity: 6,
    pricePerUnit: 3500000,
    totalPrice: 21000000,
    customer: "Siti Sumiyati",
    date: "2024-09-08",
  },
  {
    transactionId: 71,
    product: "Headphone",
    quantity: 2,
    pricePerUnit: 500000,
    totalPrice: 1000000,
    customer: "Hendra Prawira",
    date: "2024-09-09",
  },
  {
    transactionId: 72,
    product: "Smartphone",
    quantity: 1,
    pricePerUnit: 3500000,
    totalPrice: 3500000,
    customer: "Rudi Wijaya",
    date: "2024-09-10",
  },
  {
    transactionId: 73,
    product: "Smartwatch",
    quantity: 4,
    pricePerUnit: 2000000,
    totalPrice: 8000000,
    customer: "Fitri Wulandari",
    date: "2024-09-11",
  },
  {
    transactionId: 74,
    product: "Laptop",
    quantity: 3,
    pricePerUnit: 15000000,
    totalPrice: 45000000,
    customer: "Nita Suryani",
    date: "2024-09-12",
  },
  {
    transactionId: 75,
    product: "Headphone",
    quantity: 7,
    pricePerUnit: 500000,
    totalPrice: 3500000,
    customer: "Wahyu Prasetyo",
    date: "2024-09-13",
  },
  {
    transactionId: 76,
    product: "Tablet",
    quantity: 5,
    pricePerUnit: 4000000,
    totalPrice: 20000000,
    customer: "Putri Anggraeni",
    date: "2024-09-14",
  },
  {
    transactionId: 77,
    product: "Smartphone",
    quantity: 4,
    pricePerUnit: 3500000,
    totalPrice: 14000000,
    customer: "Amelia Citra",
    date: "2024-09-15",
  },
  {
    transactionId: 78,
    product: "Smartwatch",
    quantity: 8,
    pricePerUnit: 2000000,
    totalPrice: 16000000,
    customer: "Andre Hartono",
    date: "2024-09-16",
  },
  {
    transactionId: 79,
    product: "Tablet",
    quantity: 2,
    pricePerUnit: 4000000,
    totalPrice: 8000000,
    customer: "Haryanto Sudirman",
    date: "2024-09-17",
  },
  {
    transactionId: 80,
    product: "Smartphone",
    quantity: 3,
    pricePerUnit: 3500000,
    totalPrice: 10500000,
    customer: "Putra Saputra",
    date: "2024-09-18",
  },
];

export type SaleType = {
  transactionId: number;
  product: string;
  quantity: number;
  pricePerUnit: number;
  totalPrice: number;
  customer: string;
  date: string;
};

function sortSales(salesData: SaleType[]) {
  return salesData.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
}

export const sales = sortSales(salesData);

export const categoryList = [
  {
    id: "c1",
    value: "Laptop",
    label: "Laptop",
  },
  {
    id: "c2",
    value: "Smartphone",
    label: "Smartphone",
  },
  {
    id: "c3",
    value: "Smartwatch",
    label: "Smartwatch",
  },
  {
    id: "c4",
    value: "Headphone",
    label: "Headphone",
  },
];
