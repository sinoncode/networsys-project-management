import React from 'react';
import { Layout } from '../components/Layout';

export const Team = () => {
  const teamMembers = [
    { id: 1, name: 'Michelle Glover', email: 'michelle@example.com', role: 'Project Manager', status: 'Active' },
    { id: 2, name: 'John Doe', email: 'john@example.com', role: 'Developer', status: 'Active' },
    { id: 3, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer', status: 'Away' },
    { id: 4, name: 'Robert Johnson', email: 'robert@example.com', role: 'QA Engineer', status: 'Active' },
  ];

  return (
    <Layout>
      <div className="px-md-4 px-2 py-4">
        <div className="row">
          <div className="col-12">
            <h1 className="h3 title-font mb-4">My Team</h1>
          </div>
        </div>

        <div className="row g-3">
          <div className="col-12">
            <div className="card border-0">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="card-title mb-0">Team Members</h5>
                <button className="btn btn-sm btn-primary">Add Member</button>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover mb-0">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teamMembers.map((member) => (
                        <tr key={member.id}>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="avatar sm me-2" style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#ccc' }}>
                                {member.name[0]}
                              </div>
                              {member.name}
                            </div>
                          </td>
                          <td>{member.email}</td>
                          <td>{member.role}</td>
                          <td>
                            <span className={`badge ${member.status === 'Active' ? 'bg-success' : 'bg-warning'}`}>
                              {member.status}
                            </span>
                          </td>
                          <td>
                            <button className="btn btn-sm btn-link">Edit</button>
                            <button className="btn btn-sm btn-link text-danger">Remove</button>
                          </td>
                        </tr>
                      ))}
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
