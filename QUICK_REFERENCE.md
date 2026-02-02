# Quick Reference - Networsys React App

## 🚀 Quick Start Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 📍 Important URLs

| Purpose | URL |
|---------|-----|
| Dev Server | http://localhost:5173 |
| Sign In | http://localhost:5173/signin |
| Dashboard | http://localhost:5173/dashboard |
| My Tasks | http://localhost:5173/my-task |
| Team | http://localhost:5173/team |
| Calendar | http://localhost:5173/calendar |
| Projects | http://localhost:5173/projects |

## 📁 Key Files

| File | Purpose |
|------|---------|
| `src/App.jsx` | Main app component with routing |
| `src/contexts/ThemeContext.jsx` | Global state management |
| `src/components/Layout.jsx` | Page layout wrapper |
| `src/components/Header.jsx` | App header |
| `src/components/Sidebar.jsx` | Navigation sidebar |
| `vite.config.js` | Vite build configuration |
| `package.json` | Dependencies and scripts |
| `index.html` | HTML template |

## 🎨 Common CSS Classes

```html
<!-- Bootstrap Classes -->
<div class="container">           <!-- Max-width container -->
<div class="row g-3">             <!-- Grid with 3px gap -->
<div class="col-md-6">            <!-- 50% width on medium screens -->

<!-- Button Classes -->
<button class="btn btn-primary">  <!-- Primary button -->
<button class="btn btn-secondary"> <!-- Secondary button -->

<!-- Text Classes -->
<p class="text-muted">            <!-- Muted text -->
<p class="text-gradient">         <!-- Gradient text -->
```

## 🔧 Component Usage Examples

### Using Layout in a Page
```javascript
import { Layout } from '../components/Layout';

export const MyPage = () => {
  return (
    <Layout>
      <div className="px-md-4 px-2 py-4">
        {/* Your content */}
      </div>
    </Layout>
  );
};
```

### Using Theme Context
```javascript
import { useTheme } from '../contexts/ThemeContext';

export const MyComponent = () => {
  const { theme, setTheme, toggleSidebar } = useTheme();
  return <button onClick={toggleSidebar}>Toggle</button>;
};
```

### Using Bootstrap Components Hook
```javascript
import { useBootstrapComponents } from '../hooks/useBootstrapComponents';

export const MyPage = () => {
  useBootstrapComponents();
  return <button data-bs-toggle="tooltip" title="Hello">Hover</button>;
};
```

## 📦 File Structure Reference

```
src/
├── components/    # Reusable UI components
├── pages/        # Page components (one per route)
├── contexts/     # React Context providers
├── hooks/        # Custom React hooks
├── utils/        # Utility functions
├── styles/       # CSS files
├── assets/       # Images, fonts, icons
├── App.jsx       # Root component
└── main.jsx      # Entry point
```

## 🛣️ Route Reference

```javascript
// In App.jsx
<Routes>
  <Route path="/signin" element={<SignIn />} />
  <Route path="/signup" element={<SignUp />} />
  <Route path="/password-reset" element={<PasswordReset />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/my-task" element={<MyTask />} />
  <Route path="/team" element={<Team />} />
  <Route path="/calendar" element={<Calendar />} />
</Routes>
```

## 🎯 Adding New Pages

1. Create file: `src/pages/NewPage.jsx`
2. Add to `App.jsx`: `<Route path="/new-page" element={<NewPage />} />`
3. Update sidebar in `src/components/Sidebar.jsx`

## 📝 Adding New Components

1. Create file: `src/components/MyComponent.jsx`
2. Export from: `src/components/index.js`
3. Import and use: `import { MyComponent } from '../components'`

## 🎨 Theme Colors

```css
--primary-color: #5f63f1;        /* Indigo */
--secondary-color: #868caf;      /* Gray-blue */
--success-color: #50cd89;        /* Green */
--danger-color: #f1416c;         /* Red */
--warning-color: #ffc107;        /* Amber */
--info-color: #17a2b8;           /* Cyan */
```

## 🔗 Link Navigation

```javascript
import { Link } from 'react-router-dom';

<Link to="/dashboard">Go to Dashboard</Link>
<a href="/assets/images/logo.png">Static asset</a>
```

## 📚 Documentation Files

| File | Content |
|------|---------|
| `README.md` | Project overview |
| `SETUP_GUIDE.md` | Development setup |
| `MIGRATION_GUIDE.md` | Migration details |
| `MIGRATION_SUMMARY.md` | Summary report |

## 💡 Tips & Tricks

### Use Relative Assets
```javascript
// ✅ Correct
<img src="/assets/images/logo.png" alt="Logo" />

// ❌ Wrong
<img src="./assets/images/logo.png" alt="Logo" />
```

### Bootstrap Responsive Classes
```html
<!-- Hidden on small screens -->
<div class="d-none d-md-block">Content</div>

<!-- Visible only on small screens -->
<div class="d-md-none">Mobile Content</div>

<!-- Responsive spacing -->
<div class="px-md-4 px-2">Content</div>
```

### Form Validation Bootstrap
```html
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="check">
  <label class="form-check-label" for="check">Remember me</label>
</div>
```

## 🐛 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Port in use | App auto-selects next port |
| CSS not loading | Check imports in `App.jsx` |
| Routes not working | Verify `App.jsx` routing config |
| Images not showing | Use absolute paths `/assets/...` |
| Bootstrap components not working | Call `useBootstrapComponents()` |

## 🚀 Deployment Commands

```bash
# Build production
npm run build

# Output location
./dist/

# Deploy to Vercel
npm install -g vercel
vercel

# Deploy to Netlify
# Connect repo, set: build = "npm run build", publish = "dist"
```

## 📊 Project Statistics

- **Components:** 11
- **Pages:** 8
- **Routes:** 8
- **Context Providers:** 1
- **Custom Hooks:** 1
- **Documentation Files:** 4
- **Lines of Code:** ~2000+
- **Build Size:** ~1.5MB

## 🎓 Learning Resources

| Topic | URL |
|-------|-----|
| React | https://react.dev |
| React Router | https://reactrouter.com |
| Bootstrap | https://getbootstrap.com |
| Vite | https://vitejs.dev |
| JavaScript | https://developer.mozilla.org |

## 📞 Support

For help:
1. Check documentation files
2. Review component comments
3. Check browser console for errors
4. Refer to links in Resources section

---

**Last Updated:** February 2, 2026  
**Version:** 1.0.0  
**Status:** Production Ready ✅
