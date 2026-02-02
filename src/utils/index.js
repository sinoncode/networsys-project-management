/**
 * Utility functions for the Networsys Project Management application
 */

/**
 * Toggle theme between multiple themes
 */
export const toggleTheme = (themeName) => {
  const body = document.querySelector('body');
  if (body) {
    body.setAttribute('data-bvite', `theme-${themeName}`);
    localStorage.setItem('theme', themeName);
  }
};

/**
 * Get current theme
 */
export const getCurrentTheme = () => {
  return localStorage.getItem('theme') || 'theme-CeruleanBlue';
};

/**
 * Format date to readable format
 */
export const formatDate = (date) => {
  if (!date) return '';
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options);
};

/**
 * Debounce function
 */
export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

/**
 * Throttle function
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Check if user is authenticated
 */
export const isAuthenticated = () => {
  return localStorage.getItem('auth_token') !== null;
};

/**
 * Set authentication token
 */
export const setAuthToken = (token) => {
  localStorage.setItem('auth_token', token);
};

/**
 * Remove authentication token
 */
export const removeAuthToken = () => {
  localStorage.removeItem('auth_token');
};

/**
 * Get avatar color based on string
 */
export const getAvatarColor = (str) => {
  const colors = [
    '#FF6B6B',
    '#4ECDC4',
    '#45B7D1',
    '#FFA07A',
    '#98D8C8',
    '#F7DC6F',
    '#BB8FCE',
    '#85C1E2',
  ];
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
};
