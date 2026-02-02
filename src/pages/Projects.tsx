import { useState } from 'react';
import type { Role } from '../roles';
import Modal from './components/Modal';
import FormField from './components/FormField';

export default function Projects({ role }: { role: Role }) {
  const [isCreateProjectOpen, setIsCreateProjectOpen] = useState(false);
  const [isAssignContractorOpen, setIsAssignContractorOpen] = useState(false);
  const [isViewDetailsOpen, setIsViewDetailsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const getProjectData = () => {
    if (role === 'PMU') {
      return {
        title: 'All Projects Overview',
        subtitle: 'Complete list of projects across all PIUs',
        canCreate: true,
        projects: [
          { id: 'NH-01', name: 'Indore-Bhopal Corridor', piu: 'PIU-Central', status: 'Ongoing', progress: 72, budget: '₹8,500 Cr', contractor: 'ABC Constructions' },
          { id: 'NH-02', name: 'Jabalpur-Rewa Highway', piu: 'PIU-East', status: 'Ongoing', progress: 65, budget: '₹6,200 Cr', contractor: 'XYZ Builders' },
          { id: 'NH-03', name: 'Gwalior Bypass', piu: 'PIU-North', status: 'Completed', progress: 100, budget: '₹3,800 Cr', contractor: 'PQR Infrastructure' },
          { id: 'NH-04', name: 'Ujjain-Ratlam Section', piu: 'PIU-West', status: 'Planning', progress: 15, budget: '₹4,500 Cr', contractor: 'Not Assigned' },
          { id: 'NH-05', name: 'Sagar Ring Road', piu: 'PIU-Central', status: 'Ongoing', progress: 48, budget: '₹2,800 Cr', contractor: 'LMN Contractors' },
        ]
      };
    } else if (role === 'PIU') {
      return {
        title: 'PIU Assigned Projects',
        subtitle: 'Projects under your implementation unit',
        canCreate: false,
        projects: [
          { id: 'NH-01', name: 'Indore-Bhopal Corridor', contractor: 'ABC Constructions', status: 'Ongoing', progress: 72, budget: '₹8,500 Cr' },
          { id: 'NH-05', name: 'Sagar Ring Road', contractor: 'Not Assigned', status: 'Ongoing', progress: 48, budget: '₹2,800 Cr' },
        ]
      };
    }
    return { title: 'Projects', subtitle: '', canCreate: false, projects: [] };
  };

  const data = getProjectData();

  const handleCreateProject = () => {
    alert('Project created successfully!');
    setIsCreateProjectOpen(false);
  };

  const handleAssignContractor = () => {
    alert('Contractor assigned successfully!');
    setIsAssignContractorOpen(false);
    setSelectedProject(null);
  };

  return (
    <div>
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '24px',
        marginBottom: '24px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ margin: '0 0 8px 0', color: '#1e293b' }}>{data.title}</h3>
            <p style={{ margin: 0, color: '#64748b' }}>{data.subtitle}</p>
          </div>
          {data.canCreate && (
            <button
              onClick={() => setIsCreateProjectOpen(true)}
              style={{
                padding: '10px 20px',
                background: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              + Create Project
            </button>
          )}
        </div>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e2e8f0', textAlign: 'left' }}>
              <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Project ID</th>
              <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Name</th>
              {role === 'PMU' && <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>PIU</th>}
              <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Contractor</th>
              <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Status</th>
              <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Progress</th>
              <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Budget</th>
              <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.projects.map((project, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '16px', color: '#1e293b', fontSize: '14px', fontWeight: '600' }}>{project.id}</td>
                <td style={{ padding: '16px', color: '#1e293b', fontSize: '14px' }}>{project.name}</td>
                {role === 'PMU' && 'piu' in project && <td style={{ padding: '16px', color: '#64748b', fontSize: '14px' }}>{project.piu}</td>}
                <td style={{ padding: '16px', color: '#64748b', fontSize: '14px' }}>{project.contractor}</td>
                <td style={{ padding: '16px' }}>
                  <span style={{
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '600',
                    background: project.status === 'Completed' ? '#d1fae5' : project.status === 'Ongoing' ? '#dbeafe' : '#fef3c7',
                    color: project.status === 'Completed' ? '#065f46' : project.status === 'Ongoing' ? '#1e40af' : '#92400e'
                  }}>
                    {project.status}
                  </span>
                </td>
                <td style={{ padding: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      flex: 1,
                      height: '8px',
                      background: '#e2e8f0',
                      borderRadius: '4px',
                      overflow: 'hidden',
                      minWidth: '80px'
                    }}>
                      <div style={{
                        width: `${project.progress}%`,
                        height: '100%',
                        background: project.progress === 100 ? '#10b981' : project.progress > 50 ? '#3b82f6' : '#f59e0b',
                        borderRadius: '4px'
                      }} />
                    </div>
                    <span style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', minWidth: '45px' }}>
                      {project.progress}%
                    </span>
                  </div>
                </td>
                <td style={{ padding: '16px', color: '#1e293b', fontSize: '14px', fontWeight: '600' }}>{project.budget}</td>
                <td style={{ padding: '16px' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={() => {
                        setSelectedProject(project);
                        setIsViewDetailsOpen(true);
                      }}
                      style={{
                        padding: '6px 16px',
                        background: '#64748b',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        fontSize: '13px',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}
                    >
                      View
                    </button>
                    {role === 'PIU' && project.contractor === 'Not Assigned' && (
                      <button
                        onClick={() => {
                          setSelectedProject(project);
                          setIsAssignContractorOpen(true);
                        }}
                        style={{
                          padding: '6px 16px',
                          background: '#3b82f6',
                          color: 'white',
                          border: 'none',
                          borderRadius: '6px',
                          fontSize: '13px',
                          fontWeight: '600',
                          cursor: 'pointer'
                        }}
                      >
                        Assign
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Create Project Modal (PMU) */}
      <Modal
        isOpen={isCreateProjectOpen}
        onClose={() => setIsCreateProjectOpen(false)}
        title="Create New Project"
        width="800px"
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div style={{ gridColumn: '1 / -1' }}>
            <FormField label="Project Name" placeholder="e.g., Indore-Bhopal Corridor" required />
          </div>
          <FormField label="Project ID" placeholder="e.g., NH-06" required />
          <FormField label="NH Number" placeholder="e.g., NH-47" required />
          <FormField label="Total Length (km)" type="number" placeholder="e.g., 125" required />
          <FormField label="Sanctioned Cost (₹ Cr)" type="number" placeholder="e.g., 8500" required />
        </div>

        <FormField label="Assign to PIU" type="select" options={['PIU-Central', 'PIU-East', 'PIU-West', 'PIU-North']} required />
        
        <div style={{ marginTop: '20px' }}>
          <h4 style={{ fontSize: '14px', color: '#1e293b', marginBottom: '12px' }}>Project Location</h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <FormField label="Start Chainage" placeholder="e.g., 0+000" required />
            <FormField label="End Chainage" placeholder="e.g., 125+000" required />
            <FormField label="District" placeholder="e.g., Indore" required />
            <FormField label="State" value="Madhya Pradesh" />
          </div>
        </div>

        <div style={{ marginTop: '20px' }}>
          <h4 style={{ fontSize: '14px', color: '#1e293b', marginBottom: '12px' }}>Project Timeline</h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <FormField label="Start Date" type="date" required />
            <FormField label="Completion Date" type="date" required />
          </div>
        </div>

        <FormField label="Project Description" type="textarea" rows={3} />
        <FormField label="Upload Project DPR" type="file" />

        <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
          <button
            onClick={handleCreateProject}
            style={{
              flex: 1,
              padding: '12px',
              background: '#10b981',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Create Project
          </button>
          <button
            onClick={() => setIsCreateProjectOpen(false)}
            style={{
              flex: 1,
              padding: '12px',
              background: '#e2e8f0',
              color: '#64748b',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Cancel
          </button>
        </div>
      </Modal>

      {/* Assign Contractor Modal (PIU) */}
      <Modal
        isOpen={isAssignContractorOpen}
        onClose={() => {
          setIsAssignContractorOpen(false);
          setSelectedProject(null);
        }}
        title="Assign Contractor"
        width="700px"
      >
        {selectedProject && (
          <>
            <div style={{
              background: '#f8fafc',
              padding: '16px',
              borderRadius: '8px',
              marginBottom: '20px'
            }}>
              <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>PROJECT</div>
              <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>
                {selectedProject.id} - {selectedProject.name}
              </div>
            </div>

            <FormField
              label="Select Contractor"
              type="select"
              options={[
                'ABC Constructions Pvt Ltd',
                'XYZ Builders & Developers',
                'PQR Infrastructure Ltd',
                'LMN Contractors',
                'RST Engineering'
              ]}
              required
            />
            <FormField label="Contract Value (₹ Cr)" type="number" placeholder="e.g., 8500" required />
            <FormField label="Contract Start Date" type="date" required />
            <FormField label="Contract End Date" type="date" required />
            <FormField label="Work Order Number" placeholder="e.g., WO-2024-156" required />
            <FormField label="Work Order Date" type="date" required />
            
            <div style={{ marginTop: '20px' }}>
              <h4 style={{ fontSize: '14px', color: '#1e293b', marginBottom: '12px' }}>Assign Engineers</h4>
              <FormField label="Assistant Engineer (AE)" type="select" options={['AE - Rajesh Kumar', 'AE - Priya Sharma', 'AE - Amit Verma']} required />
              <FormField label="Junior Engineer (JE)" type="select" options={['JE - Sunil Patel', 'JE - Anjali Singh', 'JE - Vikram Rao']} required />
              <FormField label="Authority Engineer" type="select" options={['Auth Eng - S.K. Mishra', 'Auth Eng - R.P. Gupta']} required />
            </div>

            <FormField label="Upload Contract Agreement" type="file" required />
            <FormField label="Remarks" type="textarea" rows={2} />

            <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
              <button
                onClick={handleAssignContractor}
                style={{
                  flex: 1,
                  padding: '12px',
                  background: '#10b981',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Assign Contractor
              </button>
              <button
                onClick={() => {
                  setIsAssignContractorOpen(false);
                  setSelectedProject(null);
                }}
                style={{
                  flex: 1,
                  padding: '12px',
                  background: '#e2e8f0',
                  color: '#64748b',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </Modal>

      {/* View Project Details Modal */}
      <Modal
        isOpen={isViewDetailsOpen}
        onClose={() => {
          setIsViewDetailsOpen(false);
          setSelectedProject(null);
        }}
        title="Project Details"
        width="800px"
      >
        {selectedProject && (
          <>
            <div style={{
              background: '#f8fafc',
              padding: '20px',
              borderRadius: '8px',
              marginBottom: '20px'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Project ID</div>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>{selectedProject.id}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Status</div>
                  <span style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '600',
                    background: selectedProject.status === 'Completed' ? '#d1fae5' : selectedProject.status === 'Ongoing' ? '#dbeafe' : '#fef3c7',
                    color: selectedProject.status === 'Completed' ? '#065f46' : selectedProject.status === 'Ongoing' ? '#1e40af' : '#92400e'
                  }}>
                    {selectedProject.status}
                  </span>
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Project Name</div>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>{selectedProject.name}</div>
                </div>
                {role === 'PMU' && 'piu' in selectedProject && (
                  <div>
                    <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Assigned PIU</div>
                    <div style={{ fontSize: '14px', color: '#1e293b' }}>{selectedProject.piu}</div>
                  </div>
                )}
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Contractor</div>
                  <div style={{ fontSize: '14px', color: '#1e293b' }}>{selectedProject.contractor}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Budget</div>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b' }}>{selectedProject.budget}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Progress</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      flex: 1,
                      height: '8px',
                      background: '#e2e8f0',
                      borderRadius: '4px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: `${selectedProject.progress}%`,
                        height: '100%',
                        background: selectedProject.progress === 100 ? '#10b981' : selectedProject.progress > 50 ? '#3b82f6' : '#f59e0b',
                        borderRadius: '4px'
                      }} />
                    </div>
                    <span style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>
                      {selectedProject.progress}%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontSize: '14px', color: '#1e293b', marginBottom: '12px' }}>Project Milestones</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { name: 'Land Acquisition', status: 'Completed', progress: 100 },
                  { name: 'Earthwork', status: 'Ongoing', progress: 75 },
                  { name: 'Subgrade Preparation', status: 'Ongoing', progress: 60 },
                  { name: 'Base Course', status: 'Pending', progress: 0 },
                ].map((milestone, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '12px',
                      border: '1px solid #e2e8f0',
                      borderRadius: '6px'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <span style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b' }}>{milestone.name}</span>
                      <span style={{
                        padding: '2px 8px',
                        borderRadius: '8px',
                        fontSize: '11px',
                        fontWeight: '600',
                        background: milestone.status === 'Completed' ? '#d1fae5' : milestone.status === 'Ongoing' ? '#dbeafe' : '#f1f5f9',
                        color: milestone.status === 'Completed' ? '#065f46' : milestone.status === 'Ongoing' ? '#1e40af' : '#64748b'
                      }}>
                        {milestone.status}
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        flex: 1,
                        height: '6px',
                        background: '#e2e8f0',
                        borderRadius: '3px',
                        overflow: 'hidden'
                      }}>
                        <div style={{
                          width: `${milestone.progress}%`,
                          height: '100%',
                          background: milestone.progress === 100 ? '#10b981' : '#3b82f6',
                          borderRadius: '3px'
                        }} />
                      </div>
                      <span style={{ fontSize: '12px', fontWeight: '600', color: '#64748b', minWidth: '40px' }}>
                        {milestone.progress}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setIsViewDetailsOpen(false);
                setSelectedProject(null);
              }}
              style={{
                width: '100%',
                padding: '12px',
                background: '#e2e8f0',
                color: '#64748b',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Close
            </button>
          </>
        )}
      </Modal>
    </div>
  );
}
