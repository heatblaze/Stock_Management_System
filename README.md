# Stock Management System

A modern, responsive stock management system built with React, TypeScript, and Tailwind CSS. This application provides a comprehensive solution for managing inventory, tracking stock movements, and maintaining supplier relationships.

![Stock Management System](https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop)

## ✨ Features

### 📊 Dashboard
- **Real-time Analytics**: Overview of total items, stock value, and recent movements
- **Interactive Charts**: Bar charts for stock value by category and pie charts for distribution
- **Low Stock Alerts**: Immediate visibility of items requiring attention
- **Recent Activity Feed**: Track latest stock movements and changes

### 📦 Inventory Management
- **Advanced Search & Filtering**: Find items by name, SKU, or category
- **Smart Sorting**: Sort by any column with visual indicators
- **Stock Status Indicators**: Color-coded badges for stock levels
- **Bulk Operations**: Manage multiple items efficiently

### ➕ Stock Operations
- **Add New Items**: Comprehensive form with validation
- **Stock Movement Tracking**: Log incoming and outgoing inventory
- **Supplier Management**: Maintain supplier relationships and contact information
- **Movement History**: Complete audit trail of all stock changes

### 🎨 User Experience
- **Dark/Light Mode**: Toggle between themes with persistent preferences
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Intuitive Navigation**: Clean sidebar navigation with active state indicators

## 🚀 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth transitions
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React icon library
- **Routing**: React Router DOM
- **Build Tool**: Vite for fast development and building
- **Code Quality**: ESLint with TypeScript support

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/stock-management-system.git
   cd stock-management-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI components (Button, Card, Badge)
│   ├── layout/         # Layout components (Header, Sidebar, Layout)
│   └── charts/         # Chart components for data visualization
├── contexts/           # React contexts (Theme, etc.)
├── data/              # Mock data and API utilities
├── pages/             # Page components for routing
├── types/             # TypeScript type definitions
└── App.tsx            # Main application component
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory for any environment-specific configurations:

```env
VITE_APP_TITLE=Stock Management System
VITE_API_URL=your-api-endpoint
```

### Tailwind CSS

The project uses a custom Tailwind configuration with:
- Dark mode support
- Custom animations
- Extended color palette
- Responsive breakpoints

## 📱 Features Overview

### Dashboard Page
- **Key Metrics**: Total items, stock value, low stock alerts
- **Visual Analytics**: Interactive charts showing stock distribution
- **Quick Actions**: Direct access to critical functions
- **Activity Feed**: Recent stock movements and updates

### Inventory Page
- **Comprehensive Listing**: All stock items with detailed information
- **Advanced Filtering**: Filter by category, supplier, or stock status
- **Search Functionality**: Quick search by name or SKU
- **Sortable Columns**: Click any column header to sort

### Add Stock Page
- **Detailed Form**: Complete product information capture
- **Validation**: Client-side validation for data integrity
- **Category Management**: Organized product categorization
- **Supplier Integration**: Link products to suppliers

### Stock Movement Page
- **Movement History**: Complete log of all stock changes
- **Filter Options**: Filter by movement type and date range
- **Export Functionality**: Download movement reports
- **Reference Tracking**: Track purchase orders and sales orders

### Suppliers Page
- **Supplier Directory**: Complete supplier contact information
- **Stock Relationship**: View items supplied by each vendor
- **Contact Management**: Email, phone, and address information
- **Performance Metrics**: Track supplier reliability

### Settings Page
- **Profile Management**: User account settings
- **Theme Preferences**: Dark/light mode toggle
- **Notification Settings**: Customize alert preferences
- **Data Management**: Export and backup options

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3B82F6) for main actions and navigation
- **Success**: Green (#10B981) for positive states
- **Warning**: Yellow (#F59E0B) for caution states
- **Error**: Red (#EF4444) for error states
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Headings**: Bold weights for hierarchy
- **Body Text**: Regular weight for readability
- **Code**: Monospace font for technical content

### Spacing
- **8px Grid System**: Consistent spacing throughout
- **Responsive Breakpoints**: Mobile-first approach
- **Container Widths**: Optimized for different screen sizes

## 🔒 Security Considerations

- **Input Validation**: All forms include client-side validation
- **XSS Protection**: Proper data sanitization
- **Type Safety**: TypeScript for compile-time error checking
- **Secure Routing**: Protected routes for authenticated users

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push to main branch

### Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style and conventions
- Write meaningful commit messages
- Add comments for complex logic
- Ensure responsive design compatibility
- Test on multiple browsers and devices

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Lucide** for beautiful icons
- **Recharts** for data visualization components

## 📞 Support

If you have any questions or need help with the project:

- **Create an Issue**: [GitHub Issues](https://github.com/yourusername/stock-management-system/issues)
- **Email**: your.email@example.com
- **Documentation**: Check the inline code comments and component documentation

## 🔮 Future Enhancements

- [ ] **Real-time Updates**: WebSocket integration for live data
- [ ] **Advanced Analytics**: More detailed reporting and insights
- [ ] **Mobile App**: React Native companion app
- [ ] **API Integration**: Backend service integration
- [ ] **Multi-language Support**: Internationalization (i18n)
- [ ] **Advanced Permissions**: Role-based access control
- [ ] **Barcode Scanning**: Mobile barcode integration
- [ ] **Automated Reordering**: Smart inventory replenishment

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**