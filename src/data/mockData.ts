import { StockItem, Supplier, StockMovement, DashboardStats } from '../types';

export const mockStockItems: StockItem[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro',
    sku: 'IPH-15-PRO-256',
    quantity: 25,
    price: 999.99,
    category: 'Electronics',
    supplier: 'Apple Inc.',
    lastUpdated: '2024-01-15T10:30:00Z',
    minStock: 10
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24',
    sku: 'SAM-S24-128',
    quantity: 5,
    price: 799.99,
    category: 'Electronics',
    supplier: 'Samsung',
    lastUpdated: '2024-01-14T14:22:00Z',
    minStock: 15
  },
  {
    id: '3',
    name: 'MacBook Pro 16"',
    sku: 'MBP-16-M3-512',
    quantity: 12,
    price: 2499.99,
    category: 'Computers',
    supplier: 'Apple Inc.',
    lastUpdated: '2024-01-13T09:15:00Z',
    minStock: 5
  },
  {
    id: '4',
    name: 'Dell XPS 13',
    sku: 'DEL-XPS13-I7',
    quantity: 8,
    price: 1299.99,
    category: 'Computers',
    supplier: 'Dell Technologies',
    lastUpdated: '2024-01-12T16:45:00Z',
    minStock: 10
  },
  {
    id: '5',
    name: 'AirPods Pro',
    sku: 'APP-PRO-3RD',
    quantity: 50,
    price: 249.99,
    category: 'Audio',
    supplier: 'Apple Inc.',
    lastUpdated: '2024-01-11T11:20:00Z',
    minStock: 20
  }
];

export const mockSuppliers: Supplier[] = [
  {
    id: '1',
    name: 'Apple Inc.',
    email: 'contact@apple.com',
    phone: '+1-800-275-2273',
    address: 'One Apple Park Way, Cupertino, CA 95014',
    stockItems: 15
  },
  {
    id: '2',
    name: 'Samsung',
    email: 'business@samsung.com',
    phone: '+1-800-726-7864',
    address: '85 Challenger Road, Ridgefield Park, NJ 07660',
    stockItems: 8
  },
  {
    id: '3',
    name: 'Dell Technologies',
    email: 'orders@dell.com',
    phone: '+1-800-289-3355',
    address: 'One Dell Way, Round Rock, TX 78682',
    stockItems: 12
  }
];

export const mockStockMovements: StockMovement[] = [
  {
    id: '1',
    itemId: '1',
    itemName: 'iPhone 15 Pro',
    type: 'in',
    quantity: 20,
    timestamp: '2024-01-15T10:30:00Z',
    reference: 'PO-2024-001',
    notes: 'Monthly stock replenishment'
  },
  {
    id: '2',
    itemId: '2',
    itemName: 'Samsung Galaxy S24',
    type: 'out',
    quantity: 10,
    timestamp: '2024-01-14T14:22:00Z',
    reference: 'SO-2024-045',
    notes: 'Bulk sale to corporate client'
  },
  {
    id: '3',
    itemId: '3',
    itemName: 'MacBook Pro 16"',
    type: 'in',
    quantity: 5,
    timestamp: '2024-01-13T09:15:00Z',
    reference: 'PO-2024-002',
    notes: 'Emergency restock'
  }
];

export const mockDashboardStats: DashboardStats = {
  totalItems: 100,
  totalValue: 157499.5,
  lowStockItems: 3,
  recentMovements: 25
};