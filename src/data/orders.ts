export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
  productName: string;
  productImage: string;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
  updatedAt: string;
  shippingAddress: {
    firstName: string;
    lastName: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    phone: string;
  };
  paymentMethod: string;
  trackingNumber?: string;
}

export const orders: Order[] = [
  {
    id: 'order-001',
    userId: 'user-1',
    items: [
      {
        productId: '1',
        quantity: 1,
        price: 1299,
        productName: 'iPhone 15 Pro Max',
        productImage: 'https://images.unsplash.com/photo-1696427407805-9b8e9bf9bd42?w=100&h=100&fit=crop'
      },
      {
        productId: '7',
        quantity: 1,
        price: 429,
        productName: 'Apple Watch Series 9',
        productImage: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=100&h=100&fit=crop'
      }
    ],
    total: 1728,
    status: 'delivered',
    createdAt: '2024-03-15T10:30:00Z',
    updatedAt: '2024-03-18T14:20:00Z',
    shippingAddress: {
      firstName: 'John',
      lastName: 'Doe',
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'USA',
      phone: '+1-555-0101'
    },
    paymentMethod: 'Credit Card',
    trackingNumber: 'TRK001234567890'
  },
  {
    id: 'order-002',
    userId: 'user-2',
    items: [
      {
        productId: '3',
        quantity: 2,
        price: 149,
        productName: 'Nike Air Max 270',
        productImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop'
      },
      {
        productId: '11',
        quantity: 3,
        price: 39,
        productName: 'Fenty Beauty Foundation',
        productImage: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=100&h=100&fit=crop'
      }
    ],
    total: 415,
    status: 'shipped',
    createdAt: '2024-03-20T15:45:00Z',
    updatedAt: '2024-03-22T09:15:00Z',
    shippingAddress: {
      firstName: 'Sarah',
      lastName: 'Johnson',
      street: '456 Oak Ave',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90210',
      country: 'USA',
      phone: '+1-555-0102'
    },
    paymentMethod: 'PayPal',
    trackingNumber: 'TRK001234567891'
  },
  {
    id: 'order-003',
    userId: 'user-3',
    items: [
      {
        productId: '2',
        quantity: 1,
        price: 2299,
        productName: 'Samsung Galaxy Book3 Ultra',
        productImage: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=100&h=100&fit=crop'
      }
    ],
    total: 2299,
    status: 'processing',
    createdAt: '2024-03-22T12:00:00Z',
    updatedAt: '2024-03-22T12:00:00Z',
    shippingAddress: {
      firstName: 'Mike',
      lastName: 'Wilson',
      street: '789 Elm St',
      city: 'Seattle',
      state: 'WA',
      zipCode: '98101',
      country: 'USA',
      phone: '+1-555-0103'
    },
    paymentMethod: 'Credit Card'
  },
  {
    id: 'order-004',
    userId: 'user-1',
    items: [
      {
        productId: '4',
        quantity: 1,
        price: 399,
        productName: 'Sony WH-1000XM5 Headphones',
        productImage: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=100&h=100&fit=crop'
      },
      {
        productId: '9',
        quantity: 2,
        price: 16,
        productName: 'The Psychology of Money',
        productImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=100&h=100&fit=crop'
      }
    ],
    total: 431,
    status: 'pending',
    createdAt: '2024-03-23T16:30:00Z',
    updatedAt: '2024-03-23T16:30:00Z',
    shippingAddress: {
      firstName: 'John',
      lastName: 'Doe',
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'USA',
      phone: '+1-555-0101'
    },
    paymentMethod: 'Debit Card'
  },
  {
    id: 'order-005',
    userId: 'user-5',
    items: [
      {
        productId: '5',
        quantity: 1,
        price: 379,
        productName: 'KitchenAid Stand Mixer',
        productImage: 'https://images.unsplash.com/photo-1586201375761-83865001e8c3?w=100&h=100&fit=crop'
      },
      {
        productId: '8',
        quantity: 1,
        price: 749,
        productName: 'Dyson V15 Vacuum Cleaner',
        productImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop'
      }
    ],
    total: 1128,
    status: 'shipped',
    createdAt: '2024-03-21T11:20:00Z',
    updatedAt: '2024-03-23T08:45:00Z',
    shippingAddress: {
      firstName: 'Alex',
      lastName: 'Garcia',
      street: '321 Maple Dr',
      city: 'Miami',
      state: 'FL',
      zipCode: '33101',
      country: 'USA',
      phone: '+1-555-0105'
    },
    paymentMethod: 'Credit Card',
    trackingNumber: 'TRK001234567892'
  }
];

// Analytics data derived from orders
export const getOrderAnalytics = () => {
  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
  const totalOrders = orders.length;
  const averageOrderValue = totalRevenue / totalOrders;
  
  const statusCounts = orders.reduce((acc, order) => {
    acc[order.status] = (acc[order.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const monthlyData = orders.reduce((acc, order) => {
    const month = new Date(order.createdAt).toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
    if (!acc[month]) acc[month] = { orders: 0, revenue: 0 };
    acc[month].orders += 1;
    acc[month].revenue += order.total;
    return acc;
  }, {} as Record<string, { orders: number; revenue: number }>);

  return {
    totalRevenue,
    totalOrders,
    averageOrderValue,
    statusCounts,
    monthlyData: Object.entries(monthlyData).map(([month, data]) => ({
      month,
      ...data
    }))
  };
};