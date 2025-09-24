export interface User {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: 'user' | 'admin';
  avatar?: string;
  createdAt: string;
  isActive: boolean;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}

export const users: User[] = [
  {
    id: 'admin-1',
    email: 'admin@example.com',
    password: 'admin123',
    firstName: 'Admin',
    lastName: 'User',
    role: 'admin',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    createdAt: '2024-01-15T10:00:00Z',
    isActive: true,
    phone: '+1-555-0100'
  },
  {
    id: 'user-1',
    email: 'user@example.com',
    password: 'user123',
    firstName: 'John',
    lastName: 'Doe',
    role: 'user',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    createdAt: '2024-02-01T14:30:00Z',
    isActive: true,
    phone: '+1-555-0101',
    address: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'USA'
    }
  },
  {
    id: 'user-2',
    email: 'sarah.johnson@example.com',
    password: 'sarah123',
    firstName: 'Sarah',
    lastName: 'Johnson',
    role: 'user',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    createdAt: '2024-02-15T09:45:00Z',
    isActive: true,
    phone: '+1-555-0102',
    address: {
      street: '456 Oak Ave',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90210',
      country: 'USA'
    }
  },
  {
    id: 'user-3',
    email: 'mike.wilson@example.com',
    password: 'mike123',
    firstName: 'Mike',
    lastName: 'Wilson',
    role: 'user',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    createdAt: '2024-03-01T16:20:00Z',
    isActive: true,
    phone: '+1-555-0103'
  },
  {
    id: 'user-4',
    email: 'emily.brown@example.com',
    password: 'emily123',
    firstName: 'Emily',
    lastName: 'Brown',
    role: 'user',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    createdAt: '2024-03-10T11:15:00Z',
    isActive: false,
    phone: '+1-555-0104',
    address: {
      street: '789 Pine Rd',
      city: 'Chicago',
      state: 'IL',
      zipCode: '60601',
      country: 'USA'
    }
  },
  {
    id: 'user-5',
    email: 'alex.garcia@example.com',
    password: 'alex123',
    firstName: 'Alex',
    lastName: 'Garcia',
    role: 'user',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    createdAt: '2024-03-20T08:30:00Z',
    isActive: true,
    phone: '+1-555-0105'
  }
];