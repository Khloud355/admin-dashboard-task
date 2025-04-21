import { OrderItem } from "../models/order-item-model";

export const mockOrders: OrderItem[] = [
    {
      id:1,
      name: 'Iphone 13',
      image: '../../../../assets/admin-dashoard-images/iphone.png', 
      qty: 1,
      orderDate: 'January 20, 2022',
      amount: 799.0,
      status: 'Pending'
    },
    {
      id:2,
      name: 'Xiaomi Redmi Note 10',
      image: '../../../../assets/admin-dashoard-images/mobile.png',
      qty: 1,
      orderDate: 'January 20, 2022',
      amount: 799.0,
      status: 'Approved'
    },
    {
      id:3,
      name: 'Iphone 13',
      image: '../../../../assets/admin-dashoard-images/any.png', 
      qty: 1,
      orderDate: 'January 20, 2022',
      amount: 799.0,
      status: 'In Process'
    },
    {
      id:4,
      name: 'Iphone 18',
      image: '../../../../assets/admin-dashoard-images/mobile.png',
      qty: 1,
      orderDate: 'January 20, 2022',
      amount: 799.987,
      status: 'Approved'
    },
    {
      id:5,
      name: 'Iphone 23',
      image: '../../../../assets/admin-dashoard-images/any.png', 
      qty: 1,
      orderDate: 'January 20, 2022',
      amount: 799.0,
      status: 'In Process'
    }
  ];