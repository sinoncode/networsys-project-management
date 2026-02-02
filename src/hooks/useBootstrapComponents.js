import { useEffect } from 'react';

export const useBootstrapComponents = () => {
  useEffect(() => {
    // Load Bootstrap and initialize tooltips and popovers
    const initBootstrapComponents = async () => {
      const bootstrap = window.bootstrap;
      if (!bootstrap) return;

      // Initialize tooltips
      const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
      tooltipTriggerList.forEach(tooltipTriggerEl => {
        new bootstrap.Tooltip(tooltipTriggerEl);
      });

      // Initialize popovers
      const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
      popoverTriggerList.forEach(popoverTriggerEl => {
        new bootstrap.Popover(popoverTriggerEl);
      });
    };

    // Delay initialization to ensure DOM is ready
    const timer = setTimeout(initBootstrapComponents, 100);
    return () => clearTimeout(timer);
  }, []);
};

export const useCardFullscreen = () => {
  const toggleFullscreen = (cardElement) => {
    if (cardElement) {
      cardElement.classList.toggle('fullscreen');
    }
  };

  const removeCard = (cardElement) => {
    if (cardElement) {
      cardElement.remove();
    }
  };

  return { toggleFullscreen, removeCard };
};

export const useToggleShowClass = () => {
  const toggleShow = (element, selector) => {
    const target = element.querySelector(selector);
    if (target) {
      target.classList.toggle('show');
    }
  };

  return { toggleShow };
};
