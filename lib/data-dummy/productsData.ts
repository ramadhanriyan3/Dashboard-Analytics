// Product
export type ProductType = {
  id: string;
  name: string;
  quantity: number;
  imageUrl: string;
  price: number;
  createdAt: Date | string;
  updatedAt: Date | string;
};

export const productList = [
  {
    id: "p1",
    name: "Laptop",
    quantity: 10,
    price: 300,
    imageUrl: "https://i.ibb.co.com/kQD8P3g/Laptop.jpg",
    createdAt: "2024-09-01T10:00:00Z",
    updatedAt: "2024-09-02T12:00:00Z",
  },
  {
    id: "p2",
    name: "Smartphone",
    quantity: 25,
    price: 150,
    imageUrl: "https://i.ibb.co.com/cD3gxWd/Smartphone.jpg",
    createdAt: "2024-09-01T11:00:00Z",
    updatedAt: "2024-09-02T13:00:00Z",
  },
  {
    id: "p3",
    name: "Smartwatch",
    quantity: 15,
    price: 100,
    imageUrl: "https://i.ibb.co.com/BtHP9Pv/Smartwatch.png",
    createdAt: "2024-09-01T12:00:00Z",
    updatedAt: "2024-09-02T14:00:00Z",
  },
  {
    id: "p4",
    name: "Headphone",
    quantity: 30,
    price: 50,
    imageUrl: "https://i.ibb.co.com/xXZ0BNx/Headphone.jpg",
    createdAt: "2024-09-01T13:00:00Z",
    updatedAt: "2024-09-02T15:00:00Z",
  },
];

export const products = [
  { id: "C1", name: "Smartphone", value: "smartphone" },
  { id: "C2", name: "Laptop", value: "laptop" },
  { id: "C3", name: "Headphone", value: "headphone" },
  { id: "C4", name: "Smartwatch", value: "smartwatch" },
];
