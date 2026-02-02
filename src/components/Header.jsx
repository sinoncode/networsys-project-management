import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import logo from '../assets/images/logo/logo4.png'
import avatar from '../assets/images/xs/avatar1.jpg'
import { useBootstrapComponents } from '../hooks/useBootstrapComponents';

export const Header = () => {
  useBootstrapComponents();

  return (
    <>
      {/* Brand Section */}
      {/* <div className="px-md-4 px-2 pt-2 pb-2 brand" data-bs-theme="none">
        <div>
          <div className="d-flex align-items-center pt-1">
            <button
              className="btn d-inline-flex d-xl-none border-0 p-0 pe-2"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvas_Navbar"
            >
              <svg
                className="svg-stroke"
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 6l16 0" />
                <path d="M4 12l16 0" />
                <path d="M4 18l16 0" />
              </svg>
            </button>
            <a href="/" className="brand-icon text-decoration-none d-flex align-items-center">
              <img src={logo} alt="logo" />
            </a>
          </div>
        </div>

        <div className="layout-a-action">
          <div className="mb-2">
            <a
              className="d-flex align-items-center lh-sm p-0"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              title="User"
            >
              <img
                className="avatar rounded-circle border border-3 shadow"
                src={avatar}
                alt="avatar"
              />
            </a>
            <div className="dropdown-menu dropdown-menu-end shadow p-2 p-xl-3 rounded-4">
              <div className="bg-body p-3 rounded-3">
                <h4 className="mb-1 title-font text-gradient">Michelle Glover</h4>
                <p className="small text-muted">michelle.glover@gmail.com</p>
              </div>
              <ul className="list-unstyled mt-3">
                <li>
                  <a className="dropdown-item rounded-pill" aria-label="my wallet" href="/my-wallet">
                    <span className="align-middle">
                      Balance: <span className="fw-bold text-success">
                        <span className="purecounter">$14000</span>
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item rounded-pill" aria-label="my profile" href="/my-profile">
                    My Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item rounded-pill" aria-label="my task" href="/my-task">
                    My Taskboard
                  </a>
                </li>
                <li>
                  <a className="dropdown-item rounded-pill" aria-label="account settings" href="/account-settings">
                    Settings
                  </a>
                </li>
                <li className="dropdown-divider" />
                <li>
                  <a className="dropdown-item rounded-pill" aria-label="Add another account" href="#">
                    Add another account
                  </a>
                </li>
              </ul>
              <a className="btn py-2 btn-primary w-100 mt-3 rounded-pill" href="/signin">
                Logout
              </a>
              <div className="mt-3 text-center small">
                <a className="text-muted me-1" href="#!">
                  Privacy policy
                </a>
                •<a className="text-muted mx-1" href="#!">
                  Terms
                </a>
                •<a className="text-muted ms-1" href="#!">
                  Cookies
                </a>
              </div>
            </div>
          </div>

        </div>
      </div> */}

      {/* Page Header */}
      <header className="pe-5" data-bs-theme="none">
        <div className="d-flex justify-content-between align-items-center py-2 w-100">
          <div className="pb-2 brand w-100" data-bs-theme="none">
        <div>
          <div className="d-flex align-items-center pt-1">
            <button
              className="btn d-inline-flex d-xl-none border-0 p-0 pe-2"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvas_Navbar"
            >
              <svg
                className="svg-stroke"
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 6l16 0" />
                <path d="M4 12l16 0" />
                <path d="M4 18l16 0" />
              </svg>
            </button>
            {/* Brand Logo */}
            <a href="/" className="brand-icon text-decoration-none d-flex align-items-center">
              <img src={logo} alt="logo" />
            </a>
          </div>
        </div>
  <ul className="header-menu flex-grow-1">
            {/* Notifications */}
            <li className="nav-item dropdown px-md-1 d-none d-md-inline-flex">
              <a
                className="dropdown-toggle gray-6"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                title="notification"
              >
                <span className="bullet-dot bg-primary animation-blink" />
                <svg
                  className="svg-stroke"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                  <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                  <path d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727" />
                  <path d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727" />
                </svg>
              </a>
              <div className="dropdown-menu shadow rounded-4 notification">
                <div className="card border-0">
                  <div className="card-header d-flex justify-content-between align-items-center py-3">
                    <h4 className="mb-0 text-gradient title-font">Notifications</h4>
                    <a href="#" className="btn btn-link" title="view all">
                      View all
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        {/* User Dropdown (Desktop Only) */}
        <div className="layout-a-action">
          <div className="mb-2">
            <a
              className="d-flex align-items-center lh-sm p-0"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              title="User"
            >
              <img
                className="avatar rounded-circle border border-3 shadow"
                src={avatar}
                alt="avatar"
              />
            </a>
            <div className="dropdown-menu dropdown-menu-end shadow p-2 p-xl-3 rounded-4">
              <div className="bg-body p-3 rounded-3">
                <h4 className="mb-1 title-font text-gradient">Michelle Glover</h4>
                <p className="small text-muted">michelle.glover@gmail.com</p>
              </div>
              <ul className="list-unstyled mt-3">
                <li>
                  <a className="dropdown-item rounded-pill" aria-label="my wallet" href="/my-wallet">
                    <span className="align-middle">
                      Balance: <span className="fw-bold text-success">
                        <span className="purecounter">$14000</span>
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item rounded-pill" aria-label="my profile" href="/my-profile">
                    My Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item rounded-pill" aria-label="my task" href="/my-task">
                    My Taskboard
                  </a>
                </li>
                <li>
                  <a className="dropdown-item rounded-pill" aria-label="account settings" href="/account-settings">
                    Settings
                  </a>
                </li>
                <li className="dropdown-divider" />
                <li>
                  <a className="dropdown-item rounded-pill" aria-label="Add another account" href="#">
                    Add another account
                  </a>
                </li>
              </ul>
              <a className="btn py-2 btn-primary w-100 mt-3 rounded-pill" href="/signin">
                Logout
              </a>
              <div className="mt-3 text-center small">
                <a className="text-muted me-1" href="#!">
                  Privacy policy
                </a>
                •<a className="text-muted mx-1" href="#!">
                  Terms
                </a>
                •<a className="text-muted ms-1" href="#!">
                  Cookies
                </a>
              </div>
            </div>
          </div>

          {/* <a href="/signin" className="btn p-1" title="Sign out">
            <svg
              className="svg-stroke"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 6a7.75 7.75 0 1 0 10 0" />
              <path d="M12 4l0 8" />
            </svg>
          </a> */}
        </div>
      </div>
        
        </div>
      </header>
    </>
  );
};
