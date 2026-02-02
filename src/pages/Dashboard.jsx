import React from 'react';
import { Layout } from '../components/Layout';

export const Dashboard = () => {
  return (
    <Layout>
      <div className="px-md-4 px-2 py-4">
        <div className="row">
          <div className="col-12">
            <h1 className="h3 title-font mb-4">Dashboard</h1>
          </div>
        </div>

        {/* Welcome Section */}
        <div className="row g-3 mb-4">
          <div className="col-12">
            <div className="card border-0">
              <div className="card-body">
                <h5 className="card-title">Welcome to Networsys Project Management</h5>
                <p className="card-text">
                  This is your dashboard. Here you can manage your projects, tasks, team, and calendar.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="row g-3">
          <div className="col-md-3 col-sm-6">
            <div className="card border-0 stat-card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <p className="text-muted small">Total Projects</p>
                    <h3 className="h2 mb-0">12</h3>
                  </div>
                  <i className="fa-regular fa-clipboard text-primary fs-4" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="card border-0 stat-card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <p className="text-muted small">Active Tasks</p>
                    <h3 className="h2 mb-0">28</h3>
                  </div>
                  <i className="fa-solid fa-list-check text-success fs-4" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="card border-0 stat-card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <p className="text-muted small">Team Members</p>
                    <h3 className="h2 mb-0">8</h3>
                  </div>
                  <i className="fa-solid fa-people-group text-info fs-4" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="card border-0 stat-card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <p className="text-muted small">Completion Rate</p>
                    <h3 className="h2 mb-0">78%</h3>
                  </div>
                  <i className="fa-solid fa-chart-pie text-warning fs-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
