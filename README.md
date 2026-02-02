# Networsys Project Management - React Application

A modern, fully-functional project management dashboard built with React, Bootstrap, and best practices. This application provides comprehensive project and task management capabilities with a clean, responsive UI.

## 🚀 Features

- **Authentication System**
  - Sign In with email/password
  - User registration with validation
  - Password reset functionality
  - Remember device option

- **Dashboard**
  - Overview of projects and tasks
  - Project statistics
  - Quick access to important features

- **Project Management**
  - Create and manage projects
  - Track project progress
  - Assign team members
  - View project details

- **Task Management**
  - Create and assign tasks
  - Set priorities and due dates
  - Track task status
  - Task filtering and sorting

- **Team Management**
  - Manage team members
  - Assign roles
  - Track member status
  - Send invitations

- **Calendar**
  - View events and deadlines
  - Schedule meetings
  - Track important dates

- **Theme System**
  - Multiple theme options
  - Light/Dark mode toggle
  - Customizable UI
  - Responsive design

## 🛠 Tech Stack

- **Frontend Framework:** React 19
- **Routing:** React Router 7
- **UI Framework:** Bootstrap 5
- **Icons:** Font Awesome 7
- **Build Tool:** Vite
- **Package Manager:** npm
- **CSS:** Bootstrap CSS + Custom CSS

## 📋 Prerequisites

- Node.js >= 16.x
- npm >= 8.x

## 🚦 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The application will open at `http://localhost:5173`

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.jsx       # App header
│   ├── Sidebar.jsx      # Navigation sidebar
│   └── Layout.jsx       # Page layout wrapper
├── pages/               # Page components
│   ├── SignIn.jsx
│   ├── SignUp.jsx
│   ├── Dashboard.jsx
│   ├── MyTask.jsx
│   ├── Team.jsx
│   ├── Calendar.jsx
│   └── Project.jsx
├── contexts/            # React Context
│   └── ThemeContext.jsx # Global state management
├── hooks/               # Custom hooks
│   └── useBootstrapComponents.js
├── utils/               # Utility functions
│   └── index.js
├── styles/              # CSS files
├── assets/              # Static assets
├── App.jsx              # Root component
└── main.jsx             # Entry point
```

## 🎯 Available Routes

### Authentication
- `/signin` - Sign In page
- `/signup` - Sign Up page
- `/password-reset` - Password Reset page

### Application
- `/dashboard` - Dashboard overview
- `/my-task` - Task management
- `/team` - Team management
- `/calendar` - Calendar view
- `/projects` - Projects list

## 📚 Documentation

### Setup Guide
Detailed setup and development instructions: [SETUP_GUIDE.md](./SETUP_GUIDE.md)

### Migration Guide
Complete migration documentation from HTML to React: [MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md)

## 🚀 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file for environment-specific variables:
```env
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME=Networsys Project Management
```

## 📝 Features Implemented

### State Management
- Theme switching
- Sidebar toggle
- Rightbar toggle
- Monochrome mode
- Gradient mode
- Box layout toggle

### Component Features
- Responsive sidebar navigation
- User profile dropdown
- Notification center
- Theme switcher
- Mobile-friendly menu

### Bootstrap Integration
- Bootstrap 5 CSS framework
- Bootstrap JS components
- Automatic component initialization
- Responsive grid system
- Utility classes

## 🎨 Styling

The application uses:
- Bootstrap CSS framework for layout and components
- Custom CSS for component-specific styling
- CSS variables for theme colors
- Font Awesome icons for UI elements

### Theme Colors
- Primary: #5f63f1 (Indigo)
- Secondary: #868caf (Gray-blue)
- Success: #50cd89 (Green)
- Danger: #f1416c (Red)
- Warning: #ffc107 (Amber)
- Info: #17a2b8 (Cyan)

## 🔒 Security

- Client-side form validation
- Secure password handling
- User session management
- Protected routes ready for implementation
- CSRF protection ready

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1200px and above)
- Tablet (768px - 1199px)
- Mobile (up to 767px)

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | Latest 2 |
| Firefox | Latest 2 |
| Safari  | Latest 2 |
| Edge    | Latest 2 |

## 🚀 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Traditional Server
```bash
npm run build
# Copy dist/ to your server
```

## 🐛 Troubleshooting

### Port Already in Use
The app will automatically try the next available port if 5173 is in use.

### CSS Not Loading
Ensure all CSS imports are in `src/App.jsx`

### Routes Not Working
Verify Router configuration in `App.jsx`

### Bootstrap Components Not Initializing
Call `useBootstrapComponents()` hook in your page component

## 📖 Learning Resources

- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [Bootstrap Documentation](https://getbootstrap.com)
- [Vite Documentation](https://vitejs.dev)

## 🤝 Contributing

To contribute to this project:
1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

This project is private and proprietary to Networsys Technologies LLP.

## 📧 Support

For support and questions:
- Email: support@networsys.com
- Documentation: See [SETUP_GUIDE.md](./SETUP_GUIDE.md) and [MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md)

## 🎉 Changelog

### Version 1.0.0 (February 2, 2026)
- Initial React migration from HTML
- React Router integration
- Bootstrap 5 integration
- Theme context implementation
- Responsive design
- All original features preserved

---

**Created by:** Networsys Technologies LLP  
**Last Updated:** February 2, 2026  
**Version:** 1.0.0
