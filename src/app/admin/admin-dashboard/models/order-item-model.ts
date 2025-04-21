export interface OrderItem {
  id:number; 
  name: string;
    image: string;
    qty: number;
    orderDate: string;
    amount: number;
    status: 'Pending' | 'Approved' | 'In Process';
  }