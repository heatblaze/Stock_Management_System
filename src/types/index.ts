export interface StockItem {
  id: string;
  name: string;
  sku: string;
  quantity: number;
  price: number;
  category: string;
  supplier: string;
  lastUpdated: string;
  minStock: number;
}

export interface Supplier {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  stockItems: number;
}

export interface StockMovement {
  id: string;
  itemId: string;
  itemName: string;
  type: 'in' | 'out';
  quantity: number;
  timestamp: string;
  reference: string;
  notes?: string;
}

export interface DashboardStats {
  totalItems: number;
  totalValue: number;
  lowStockItems: number;
  recentMovements: number;
}