import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/style.min.css';
import logo from '../assets/images/logo/logo4.png';

export const Sidebar = () => {
  return (
    <aside className="ps-4 pe-3 py-3 sidebar" data-bs-theme="none">
      <nav className="navbar navbar-expand-xl py-0">
        <div
          className="offcanvas offcanvas-start"
          data-bs-scroll="true"
          tabIndex="-1"
          id="offcanvas_Navbar"
        >
          <div className="offcanvas-header">
            <div>
              <Link to="/" className="brand-icon me-2">
                 <a href="/" className="brand-icon text-decoration-none d-flex align-items-center">
                              <img src={logo} alt="logo" /></a>
              </Link>
            </div>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body flex-column custom_scroll ps-4 ps-xl-0 gap-4">
            {/* Workspace Section */}
            <div className="d-flex align-items-center workspace-title">
              <img src="/assets/images/logo/speedometer.png" alt="speedometer" />
              <h6 className="title ps-2 mt-2">Dashboard</h6>
            </div>

            {/* Menu List */}
            <ul className="list-unstyled mb-4 menu-list">
              <li>
                <Link to="/dashboard" aria-label="My Dashboard">
                  <i className="fa-regular fa-clipboard" />
                  <span className="mx-2">My Projects</span>
                </Link>
              </li>
              <li>
                <Link to="/my-task" aria-label="My Task">
                  <i className="fa-solid fa-list-check" />
                  <span className="mx-2">My Task</span>
                </Link>
              </li>
              <li>
                <Link to="/team" aria-label="My Team">
                  <i className="fa-solid fa-people-group" />
                  <span className="mx-2">My Team</span>
                </Link>
              </li>
              <li>
                <Link to="/calendar" aria-label="Calendar">
                  <i className="fa-regular fa-calendar-days" />
                  <span className="mx-2">Calendar</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </aside>
  );
};
