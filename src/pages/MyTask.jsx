import React from 'react';
import { Layout } from '../components/Layout';

export const MyTask = () => {
  return (
    <Layout>
      <div className="px-md-4 px-2 py-4">
        <div className="row">
          <div className="col-12">
            <h1 className="h3 title-font mb-4">My Tasks</h1>
          </div>
        </div>

        <div className="row g-3">
          <div className="col-12">
            <div className="card border-0">
              <div className="card-header">
                <h5 className="card-title mb-0">Task List</h5>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover mb-0">
                    <thead>
                      <tr>
                        <th>Task Name</th>
                        <th>Project</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Due Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Complete design mockups</td>
                        <td>Website Redesign</td>
                        <td><span className="badge bg-danger">High</span></td>
                        <td><span className="badge bg-warning">In Progress</span></td>
                        <td>Feb 15, 2026</td>
                      </tr>
                      <tr>
                        <td>Backend API implementation</td>
                        <td>Mobile App</td>
                        <td><span className="badge bg-warning">Medium</span></td>
                        <td><span className="badge bg-info">Not Started</span></td>
                        <td>Feb 20, 2026</td>
                      </tr>
                      <tr>
                        <td>Database optimization</td>
                        <td>Backend Infrastructure</td>
                        <td><span className="badge bg-success">Low</span></td>
                        <td><span className="badge bg-success">Completed</span></td>
                        <td>Feb 10, 2026</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
