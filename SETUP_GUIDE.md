# Networsys Project Management - React Setup Guide

## Quick Start

### Prerequisites
- Node.js >= 16
- npm >= 8

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   Server will run on `http://localhost:5173` (or next available port)

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

5. **Run Linter**
   ```bash
   npm run lint
   ```

## Project Structure

```
networsys-project-management/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.jsx       # App header with user menu
│   │   ├── Sidebar.jsx      # Navigation sidebar
│   │   ├── Layout.jsx       # Page layout wrapper
│   │   └── index.js         # Component exports
│   ├── pages/               # Page components
│   │   ├── SignIn.jsx       # Login page
│   │   ├── SignUp.jsx       # Registration page
│   │   ├── PasswordReset.jsx # Password reset page
│   │   ├── Dashboard.jsx    # Main dashboard
│   │   ├── MyTask.jsx       # Task management page
│   │   ├── Team.jsx         # Team management page
│   │   ├── Calendar.jsx     # Calendar page
│   │   └── Project.jsx      # Projects page
│   ├── contexts/            # React Context providers
│   │   └── ThemeContext.jsx # Theme & UI state management
│   ├── hooks/               # Custom React hooks
│   │   └── useBootstrapComponents.js # Bootstrap initialization
│   ├── utils/               # Utility functions
│   │   └── index.js         # Helper functions
│   ├── styles/              # Stylesheets
│   │   └── cdn-imports.css  # External CDN imports
│   ├── assets/              # Static assets
│   │   ├── css/             # CSS files
│   │   ├── images/          # Images and logos
│   │   ├── fonts/           # Font files
│   │   └── bundles/         # Pre-built JS bundles
│   ├── App.jsx              # Root app component
│   ├── App.css              # App styles
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── package.json             # Dependencies
├── eslint.config.js         # ESLint config
├── MIGRATION_GUIDE.md       # Migration documentation
└── README.md                # Project README
```

## Key Features

### 1. **Authentication**
- Sign In page with email/password
- Sign Up with validation
- Password reset flow
- Remember device option

### 2. **Navigation**
- React Router for client-side routing
- Responsive sidebar navigation
- Mobile-friendly menu
- Smooth page transitions

### 3. **State Management**
- Theme switching
- Sidebar/Rightbar toggles
- Monochrome and gradient modes
- Box layout toggle
- All persisted with React Context

### 4. **Bootstrap Integration**
- Bootstrap 5 CSS framework
- Bootstrap JS components
- Automatic component initialization
- Responsive grid system

### 5. **Styling**
- Bootstrap utilities
- Font Awesome icons (CDN)
- Custom CSS for components
- Theme color variables
- Responsive design

## Environment Setup

### Required Environment Variables
Create a `.env` file if needed:
```env
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME=Networsys Project Management
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

## Development Workflow

### Adding a New Page

1. **Create Page Component** in `src/pages/NewPage.jsx`:
```javascript
import React from 'react';
import { Layout } from '../components/Layout';

export const NewPage = () => {
  return (
    <Layout>
      <div className="px-md-4 px-2 py-4">
        {/* Your content here */}
      </div>
    </Layout>
  );
};
```

2. **Add Route** in `src/App.jsx`:
```javascript
import { NewPage } from './pages/NewPage';

<Route path="/new-page" element={<NewPage />} />
```

3. **Add Navigation Link** in `src/components/Sidebar.jsx`:
```javascript
<li>
  <Link to="/new-page" aria-label="New Page">
    <i className="fa-solid fa-icon-name" />
    <span className="mx-2">New Page</span>
  </Link>
</li>
```

### Adding a New Component

1. **Create Component** in `src/components/MyComponent.jsx`:
```javascript
import React from 'react';

export const MyComponent = ({ title, children }) => {
  return <div className="my-component">{children}</div>;
};
```

2. **Export from** `src/components/index.js`:
```javascript
export { MyComponent } from './MyComponent';
```

3. **Use in Pages**:
```javascript
import { MyComponent } from '../components';

export const MyPage = () => {
  return (
    <Layout>
      <MyComponent title="Hello">Content</MyComponent>
    </Layout>
  );
};
```

### Using Theme Context

```javascript
import { useTheme } from '../contexts/ThemeContext';

export const MyComponent = () => {
  const { theme, setTheme, sidebarHidden, toggleSidebar } = useTheme();
  
  return (
    <button onClick={toggleSidebar}>
      {sidebarHidden ? 'Show' : 'Hide'} Sidebar
    </button>
  );
};
```

### Using Bootstrap Components

Bootstrap components are automatically initialized:

```javascript
import { useBootstrapComponents } from '../hooks/useBootstrapComponents';

export const MyPage = () => {
  useBootstrapComponents(); // Initialize tooltips, popovers, etc.
  
  return (
    <button 
      data-bs-toggle="tooltip" 
      title="Hello World"
    >
      Hover me
    </button>
  );
};
```

## Common Tasks

### Import Assets
```javascript
// Images
<img src="/assets/images/logo.png" alt="Logo" />

// CSS (already imported in App.jsx)
// Available globally

// Bootstrap classes
<div className="btn btn-primary">Click me</div>
```

### Format Date
```javascript
import { formatDate } from '../utils';

const dateStr = formatDate(new Date());
```

### Toggle Theme
```javascript
import { useTheme } from '../contexts/ThemeContext';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <button onClick={() => setTheme('theme-Dark')}>
      Change Theme
    </button>
  );
}
```

## API Integration

### Example API Call
```javascript
import { useState, useEffect } from 'react';

export const MyPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/endpoint')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error(err));
  }, []);

  return <div>{/* Use data */}</div>;
};
```

### Using Axios (Optional)
```bash
npm install axios
```

```javascript
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default api;
```

## Styling Best Practices

### CSS Classes
- Use Bootstrap utility classes
- Keep custom CSS minimal
- Follow BEM naming convention
- Leverage CSS variables

### Example
```jsx
<div className="card border-0 shadow-sm">
  <div className="card-header bg-primary">
    <h5 className="card-title text-white mb-0">Title</h5>
  </div>
  <div className="card-body">Content</div>
</div>
```

## Performance Tips

1. **Lazy Load Components**
```javascript
import { Suspense, lazy } from 'react';

const Dashboard = lazy(() => import('./pages/Dashboard'));

<Suspense fallback={<div>Loading...</div>}>
  <Dashboard />
</Suspense>
```

2. **Memoize Components**
```javascript
import { memo } from 'react';

export const MyComponent = memo(({ data }) => {
  return <div>{data}</div>;
});
```

3. **Use useCallback**
```javascript
import { useCallback } from 'react';

const handleClick = useCallback(() => {
  // Handle click
}, [dependency]);
```

## Deployment

### Build
```bash
npm run build
```

Output: `dist/` directory

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Connect repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Deploy to Traditional Server
```bash
# Build
npm run build

# Copy dist/ to server
scp -r dist/* user@server:/var/www/app/

# Configure web server (nginx/apache)
# Point to dist/index.html for all routes (SPA)
```

## Troubleshooting

### Issue: CSS Not Loading
**Solution:** Check that imports are in `src/App.jsx`

### Issue: Routes Not Working
**Solution:** Ensure `<BrowserRouter>` wraps all routes

### Issue: Bootstrap Components Not Initializing
**Solution:** Call `useBootstrapComponents()` in the component

### Issue: Images Not Loading
**Solution:** Use absolute paths starting with `/assets/`

### Issue: Hot Reload Not Working
**Solution:** Try restarting dev server with `npm run dev`

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome  | ✅ Latest 2 versions |
| Firefox | ✅ Latest 2 versions |
| Safari  | ✅ Latest 2 versions |
| Edge    | ✅ Latest 2 versions |
| IE 11   | ❌ Not supported |

## Resources

- [React Docs](https://react.dev)
- [React Router](https://reactrouter.com)
- [Bootstrap](https://getbootstrap.com)
- [Vite](https://vitejs.dev)
- [MDN Web Docs](https://developer.mozilla.org)

## Support

For issues or questions:
1. Check the [MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md)
2. Review component files and comments
3. Check browser console for errors
4. Review React and Bootstrap documentation

---

**Last Updated:** February 2, 2026
**Version:** 1.0.0
