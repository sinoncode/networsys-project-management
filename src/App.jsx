import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { PasswordReset } from './pages/PasswordReset';
import { Dashboard } from './pages/Dashboard';
import { MyTask } from './pages/MyTask';
import { Team } from './pages/Team';
import { Calendar } from './pages/Calendar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/cdn-imports.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Auth Routes */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/password-reset" element={<PasswordReset />} />

          {/* App Routes */}
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my-task" element={<MyTask />} />
          <Route path="/team" element={<Team />} />
          <Route path="/calendar" element={<Calendar />} />

          {/* Catch-all redirect */}
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
