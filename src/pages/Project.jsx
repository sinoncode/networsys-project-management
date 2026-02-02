import React from 'react';
import { Layout } from '../components/Layout';

export const Project = () => {
  const projects = [
    { id: 1, name: 'Website Redesign', status: 'In Progress', progress: 65, team: 5 },
    { id: 2, name: 'Mobile App', status: 'Planning', progress: 20, team: 4 },
    { id: 3, name: 'Backend Infrastructure', status: 'In Progress', progress: 80, team: 3 },
  ];

  return (
    <Layout>
      <div className="px-md-4 px-2 py-4">
        <div className="row">
          <div className="col-12">
            <h1 className="h3 title-font mb-4">My Projects</h1>
          </div>
        </div>

        <div className="row g-3">
          {projects.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-4">
              <div className="card border-0 h-100">
                <div className="card-body">
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text small text-muted">{project.team} team members</p>
                  
                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-2">
                      <span className="small">Progress</span>
                      <span className="small fw-bold">{project.progress}%</span>
                    </div>
                    <div className="progress" style={{ height: '6px' }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${project.progress}%` }}
                        aria-valuenow={project.progress}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <span className={`badge ${project.status === 'In Progress' ? 'bg-info' : 'bg-warning'}`}>
                      {project.status}
                    </span>
                    <button className="btn btn-sm btn-link">View Details</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
