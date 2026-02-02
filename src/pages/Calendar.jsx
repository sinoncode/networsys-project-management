import React from 'react';
import { Layout } from '../components/Layout';

export const Calendar = () => {
  return (
    <Layout>
      <div className="px-md-4 px-2 py-4">
        <div className="row">
          <div className="col-12">
            <h1 className="h3 title-font mb-4">Calendar</h1>
          </div>
        </div>

        <div className="row g-3">
          <div className="col-12">
            <div className="card border-0">
              <div className="card-header">
                <h5 className="card-title mb-0">Event Calendar</h5>
              </div>
              <div className="card-body">
                <div className="alert alert-info" role="alert">
                  <i className="fa-solid fa-calendar-days me-2" />
                  Calendar component will be implemented with a calendar library (e.g., React Calendar)
                </div>
                <div style={{ minHeight: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <p className="text-muted">Calendar placeholder - Ready for calendar integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
