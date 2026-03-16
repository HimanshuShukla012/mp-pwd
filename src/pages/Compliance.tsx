import { useState } from 'react';
import type { Role } from '../roles';
import Modal from './components/Modal';
import FormField from './components/FormField';

export default function Compliance({ role }: { role: Role }) {
  const [activeTab, setActiveTab] = useState<'general' | 'environmental' | 'social' | 'safety'>('general');
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [isGenderReportOpen, setIsGenderReportOpen] = useState(false);
  const [isEMPActionOpen, setIsEMPActionOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const getComplianceContent = () => {
    switch (role) {
      case 'PMU':
        return {
          title: 'Overall Compliance & Safeguards Status',
          subtitle: 'Statutory, environmental, social, and gender compliance monitoring',
          showAll: true,
          canViewGender: true,
          canViewEMP: true
        };
      case 'AE':
        return {
          title: 'Quality & Safety Compliance',
          subtitle: 'Compliance checks and rectification tracking',
          showAll: false,
          canViewGender: true,
          canViewEMP: true
        };
      case 'CONTRACTOR':
        return {
          title: 'Compliance Submissions',
          subtitle: 'Safety, environmental, and social compliance uploads',
          showAll: false,
          canViewGender: true,
          canViewEMP: false
        };
      case 'AUTHORITY_ENGINEER':
        return {
          title: 'Compliance Review',
          subtitle: 'Review contractor compliance submissions',
          showAll: false,
          canViewGender: true,
          canViewEMP: true
        };
      default:
        return {
          title: 'Compliance',
          subtitle: 'Compliance monitoring',
          showAll: false,
          canViewGender: false,
          canViewEMP: false
        };
    }
  };

  const content = getComplianceContent();

  // General Compliance Data
  const complianceData = [
    { category: 'Environmental', item: 'Air Quality Monitoring Report', status: 'Compliant', dueDate: '2026-01-25', submittedBy: 'ABC Constructions' },
    { category: 'Safety', item: 'Safety Training Records', status: 'Pending', dueDate: '2026-02-01', submittedBy: 'XYZ Builders' },
    { category: 'Statutory', item: 'Labor Law Compliance', status: 'Compliant', dueDate: '2026-01-20', submittedBy: 'PQR Infrastructure' },
    { category: 'Social', item: 'Community Grievance Report', status: 'Non-Compliant', dueDate: '2026-01-28', submittedBy: 'LMN Contractors' },
  ];

  // Environmental Management Plan (EMP) Actions
  const empActions = [
    {
      actionId: 'EMP-001',
      action: 'Tree Cutting Permission',
      location: 'Chainage 12+500 to 15+000',
      status: 'Approved',
      treesToBeCut: 45,
      compensatoryPlantation: 225,
      contractor: 'ABC Constructions',
      dueDate: '2026-02-15'
    },
    {
      actionId: 'EMP-002',
      action: 'Dust Suppression Measures',
      location: 'Construction Camp - Site A',
      status: 'In Progress',
      treesToBeCut: 0,
      compensatoryPlantation: 0,
      contractor: 'XYZ Builders',
      dueDate: '2026-02-10'
    },
    {
      actionId: 'EMP-003',
      action: 'Water Body Protection',
      location: 'Chainage 45+200 (River Crossing)',
      status: 'Pending',
      treesToBeCut: 0,
      compensatoryPlantation: 0,
      contractor: 'PQR Infrastructure',
      dueDate: '2026-02-20'
    },
  ];

  // Gender & Social Safeguards Data
  const genderData = {
    totalLabor: 2450,
    womenLabor: 612,
    womenPercentage: 25,
    targetPercentage: 20,
    skillTrainingProvided: 145,
    grievancesReceived: 8,
    grievancesResolved: 6,
    laborCamps: [
      {
        campName: 'Camp A - Indore',
        totalWorkers: 850,
        womenWorkers: 210,
        facilities: {
          separateToilets: 'Yes',
          crecheAvailable: 'Yes',
          healthFacility: 'Yes',
          safetyEquipment: 'Yes'
        },
        lastInspection: '2026-01-28',
        status: 'Compliant'
      },
      {
        campName: 'Camp B - Dewas',
        totalWorkers: 720,
        womenWorkers: 180,
        facilities: {
          separateToilets: 'Yes',
          crecheAvailable: 'No',
          healthFacility: 'Yes',
          safetyEquipment: 'Yes'
        },
        lastInspection: '2026-01-25',
        status: 'Partially Compliant'
      },
      {
        campName: 'Camp C - Bhopal',
        totalWorkers: 880,
        womenWorkers: 222,
        facilities: {
          separateToilets: 'Yes',
          crecheAvailable: 'Yes',
          healthFacility: 'Yes',
          safetyEquipment: 'Yes'
        },
        lastInspection: '2026-01-30',
        status: 'Compliant'
      },
    ]
  };

  // Community Grievances
  const grievances = [
    { id: 'GRV-001', date: '2026-01-28', complainant: 'Village Panchayat - Deoria', issue: 'Road blockage due to construction', status: 'Resolved', resolutionDate: '2026-01-30' },
    { id: 'GRV-002', date: '2026-01-25', complainant: 'Local Farmer - Ram Singh', issue: 'Crop damage compensation pending', status: 'In Progress', resolutionDate: '-' },
    { id: 'GRV-003', date: '2026-01-22', complainant: 'Resident - Sita Devi', issue: 'Noise pollution during night hours', status: 'Resolved', resolutionDate: '2026-01-24' },
  ];

  const handleUpload = () => {
    alert('Compliance document uploaded successfully!');
    setIsUploadOpen(false);
  };

  const handleReview = (action: 'approve' | 'reject') => {
    alert(`Compliance ${action === 'approve' ? 'approved' : 'rejected'}!`);
    setIsReviewOpen(false);
    setSelectedItem(null);
  };

  const handleGenderReport = () => {
    alert('Gender report submitted successfully!');
    setIsGenderReportOpen(false);
  };

  const handleEMPAction = () => {
    alert('EMP action recorded successfully!');
    setIsEMPActionOpen(false);
  };

  return (
    <div>
      {/* Header with Tabs */}
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '24px',
        marginBottom: '24px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <h3 style={{ margin: '0 0 8px 0', color: '#1e293b' }}>{content.title}</h3>
            <p style={{ margin: 0, color: '#64748b' }}>{content.subtitle}</p>
          </div>
          {role === 'CONTRACTOR' && (
            <button
              onClick={() => setIsUploadOpen(true)}
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
              + Upload Compliance
            </button>
          )}
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', gap: '8px', borderBottom: '2px solid #e2e8f0', flexWrap: 'wrap' }}>
          <button
            onClick={() => setActiveTab('general')}
            style={{
              padding: '10px 20px',
              background: 'none',
              border: 'none',
              borderBottom: activeTab === 'general' ? '3px solid #3b82f6' : '3px solid transparent',
              color: activeTab === 'general' ? '#3b82f6' : '#64748b',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              marginBottom: '-2px',
              transition: 'all 0.2s ease'
            }}
          >
            📋 General
          </button>
          {content.canViewEMP && (
            <button
              onClick={() => setActiveTab('environmental')}
              style={{
                padding: '10px 20px',
                background: 'none',
                border: 'none',
                borderBottom: activeTab === 'environmental' ? '3px solid #10b981' : '3px solid transparent',
                color: activeTab === 'environmental' ? '#10b981' : '#64748b',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                marginBottom: '-2px',
                transition: 'all 0.2s ease'
              }}
            >
              🌿 EMP Actions
            </button>
          )}
          {content.canViewGender && (
            <button
              onClick={() => setActiveTab('social')}
              style={{
                padding: '10px 20px',
                background: 'none',
                border: 'none',
                borderBottom: activeTab === 'social' ? '3px solid #8b5cf6' : '3px solid transparent',
                color: activeTab === 'social' ? '#8b5cf6' : '#64748b',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                marginBottom: '-2px',
                transition: 'all 0.2s ease'
              }}
            >
              👥 Gender & Social
            </button>
          )}
          <button
            onClick={() => setActiveTab('safety')}
            style={{
              padding: '10px 20px',
              background: 'none',
              border: 'none',
              borderBottom: activeTab === 'safety' ? '3px solid #f59e0b' : '3px solid transparent',
              color: activeTab === 'safety' ? '#f59e0b' : '#64748b',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              marginBottom: '-2px',
              transition: 'all 0.2s ease'
            }}
          >
            ⚠️ Road Safety
          </button>
        </div>
      </div>

      {/* General Compliance Tab */}
      {activeTab === 'general' && (
        <>
          {/* Compliance Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '24px' }}>
            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #10b981'
            }}>
              <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>Compliant</div>
              <div style={{ fontSize: '32px', fontWeight: '700', color: '#1e293b' }}>42</div>
            </div>

            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #f59e0b'
            }}>
              <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>Pending Action</div>
              <div style={{ fontSize: '32px', fontWeight: '700', color: '#1e293b' }}>8</div>
            </div>

            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #ef4444'
            }}>
              <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>Non-Compliant</div>
              <div style={{ fontSize: '32px', fontWeight: '700', color: '#1e293b' }}>3</div>
            </div>
          </div>

          {/* Compliance Items */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <h4 style={{ margin: '0 0 20px 0', color: '#1e293b' }}>Compliance Items</h4>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #e2e8f0', textAlign: 'left' }}>
                  <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Category</th>
                  <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Item</th>
                  <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Status</th>
                  <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Due Date</th>
                  {role !== 'CONTRACTOR' && (
                    <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Submitted By</th>
                  )}
                  <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {complianceData.map((item, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '16px', color: '#64748b', fontSize: '14px' }}>{item.category}</td>
                    <td style={{ padding: '16px', color: '#1e293b', fontSize: '14px' }}>{item.item}</td>
                    <td style={{ padding: '16px' }}>
                      <span style={{
                        padding: '4px 12px',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: '600',
                        background: item.status === 'Compliant' ? '#d1fae5' : item.status === 'Pending' ? '#fef3c7' : '#fee',
                        color: item.status === 'Compliant' ? '#065f46' : item.status === 'Pending' ? '#92400e' : '#c33'
                      }}>
                        {item.status}
                      </span>
                    </td>
                    <td style={{ padding: '16px', color: '#64748b', fontSize: '14px' }}>{item.dueDate}</td>
                    {role !== 'CONTRACTOR' && (
                      <td style={{ padding: '16px', color: '#64748b', fontSize: '14px' }}>{item.submittedBy}</td>
                    )}
                    <td style={{ padding: '16px' }}>
                      {role === 'CONTRACTOR' && item.status !== 'Compliant' && (
                        <button
                          onClick={() => setIsUploadOpen(true)}
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
                          Upload
                        </button>
                      )}
                      {(role === 'AUTHORITY_ENGINEER' || role === 'AE') && item.status === 'Pending' && (
                        <button
                          onClick={() => {
                            setSelectedItem(item);
                            setIsReviewOpen(true);
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
                          Review
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* Environmental Management Plan (EMP) Tab */}
      {activeTab === 'environmental' && content.canViewEMP && (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '24px' }}>
            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #10b981'
            }}>
              <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>Total EMP Actions</div>
              <div style={{ fontSize: '32px', fontWeight: '700', color: '#1e293b' }}>28</div>
            </div>

            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #3b82f6'
            }}>
              <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>Trees to be Cut</div>
              <div style={{ fontSize: '32px', fontWeight: '700', color: '#1e293b' }}>45</div>
              <div style={{ fontSize: '12px', color: '#10b981', marginTop: '4px' }}>225 compensatory plantation</div>
            </div>

            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #f59e0b'
            }}>
              <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>Pending Actions</div>
              <div style={{ fontSize: '32px', fontWeight: '700', color: '#1e293b' }}>5</div>
            </div>
          </div>

          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            marginBottom: '24px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h4 style={{ margin: 0, color: '#1e293b' }}>Environmental Management Actions</h4>
              {(role === 'PMU' || role === 'AUTHORITY_ENGINEER') && (
                <button
                  onClick={() => setIsEMPActionOpen(true)}
                  style={{
                    padding: '8px 16px',
                    background: '#10b981',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  + Add EMP Action
                </button>
              )}
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #e2e8f0', textAlign: 'left' }}>
                    <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Action ID</th>
                    <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Action Description</th>
                    <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Location</th>
                    <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Trees</th>
                    <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Status</th>
                    <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Due Date</th>
                    <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {empActions.map((action, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '16px', color: '#1e293b', fontSize: '14px', fontWeight: '600' }}>{action.actionId}</td>
                      <td style={{ padding: '16px', color: '#1e293b', fontSize: '14px' }}>{action.action}</td>
                      <td style={{ padding: '16px', color: '#64748b', fontSize: '14px' }}>{action.location}</td>
                      <td style={{ padding: '16px', color: '#1e293b', fontSize: '14px' }}>
                        {action.treesToBeCut > 0 ? (
                          <div>
                            <div style={{ color: '#ef4444', fontWeight: '600' }}>Cut: {action.treesToBeCut}</div>
                            <div style={{ color: '#10b981', fontSize: '12px' }}>Plant: {action.compensatoryPlantation}</div>
                          </div>
                        ) : (
                          '-'
                        )}
                      </td>
                      <td style={{ padding: '16px' }}>
                        <span style={{
                          padding: '4px 12px',
                          borderRadius: '12px',
                          fontSize: '12px',
                          fontWeight: '600',
                          background: action.status === 'Approved' ? '#d1fae5' : action.status === 'In Progress' ? '#dbeafe' : '#fef3c7',
                          color: action.status === 'Approved' ? '#065f46' : action.status === 'In Progress' ? '#1e40af' : '#92400e'
                        }}>
                          {action.status}
                        </span>
                      </td>
                      <td style={{ padding: '16px', color: '#64748b', fontSize: '14px' }}>{action.dueDate}</td>
                      <td style={{ padding: '16px' }}>
                        <button
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
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {/* Gender & Social Safeguards Tab */}
      {activeTab === 'social' && content.canViewGender && (
        <>
          {/* Gender Statistics */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '24px' }}>
            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #8b5cf6'
            }}>
              <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>Total Labor Force</div>
              <div style={{ fontSize: '32px', fontWeight: '700', color: '#1e293b' }}>{genderData.totalLabor}</div>
            </div>

            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #ec4899'
            }}>
              <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>Women Workers</div>
              <div style={{ fontSize: '32px', fontWeight: '700', color: '#1e293b' }}>{genderData.womenLabor}</div>
              <div style={{ fontSize: '12px', color: '#10b981', marginTop: '4px' }}>
                {genderData.womenPercentage}% (Target: {genderData.targetPercentage}%)
              </div>
            </div>

            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #3b82f6'
            }}>
              <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>Skill Training Provided</div>
              <div style={{ fontSize: '32px', fontWeight: '700', color: '#1e293b' }}>{genderData.skillTrainingProvided}</div>
              <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>Women workers trained</div>
            </div>

            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #f59e0b'
            }}>
              <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>Grievances</div>
              <div style={{ fontSize: '32px', fontWeight: '700', color: '#1e293b' }}>{genderData.grievancesReceived}</div>
              <div style={{ fontSize: '12px', color: '#10b981', marginTop: '4px' }}>
                {genderData.grievancesResolved} resolved
              </div>
            </div>
          </div>

          {/* Labor Camps Compliance */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            marginBottom: '24px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h4 style={{ margin: 0, color: '#1e293b' }}>Labor Camp Compliance</h4>
              {role === 'CONTRACTOR' && (
                <button
                  onClick={() => setIsGenderReportOpen(true)}
                  style={{
                    padding: '8px 16px',
                    background: '#8b5cf6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Submit Monthly Report
                </button>
              )}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {genderData.laborCamps.map((camp, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '20px',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
                    <div>
                      <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '4px' }}>
                        {camp.campName}
                      </div>
                      <div style={{ fontSize: '14px', color: '#64748b' }}>
                        Total: {camp.totalWorkers} workers • Women: {camp.womenWorkers} ({Math.round((camp.womenWorkers / camp.totalWorkers) * 100)}%)
                      </div>
                    </div>
                    <span style={{
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '12px',
                      fontWeight: '600',
                      background: camp.status === 'Compliant' ? '#d1fae5' : '#fef3c7',
                      color: camp.status === 'Compliant' ? '#065f46' : '#92400e'
                    }}>
                      {camp.status}
                    </span>
                  </div>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '12px',
                    padding: '12px',
                    background: '#f8fafc',
                    borderRadius: '6px'
                  }}>
                    <div>
                      <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Separate Toilets</div>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: camp.facilities.separateToilets === 'Yes' ? '#10b981' : '#ef4444' }}>
                        {camp.facilities.separateToilets === 'Yes' ? '✓ Available' : '✗ Not Available'}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Crèche Facility</div>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: camp.facilities.crecheAvailable === 'Yes' ? '#10b981' : '#ef4444' }}>
                        {camp.facilities.crecheAvailable === 'Yes' ? '✓ Available' : '✗ Not Available'}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Health Facility</div>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: camp.facilities.healthFacility === 'Yes' ? '#10b981' : '#ef4444' }}>
                        {camp.facilities.healthFacility === 'Yes' ? '✓ Available' : '✗ Not Available'}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Safety Equipment</div>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: camp.facilities.safetyEquipment === 'Yes' ? '#10b981' : '#ef4444' }}>
                        {camp.facilities.safetyEquipment === 'Yes' ? '✓ Provided' : '✗ Not Provided'}
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: '12px', fontSize: '13px', color: '#64748b' }}>
                    Last Inspection: {camp.lastInspection}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Community Grievances */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <h4 style={{ margin: '0 0 20px 0', color: '#1e293b' }}>Community Grievances</h4>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #e2e8f0', textAlign: 'left' }}>
                  <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Grievance ID</th>
                  <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Date</th>
                  <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Complainant</th>
                  <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Issue</th>
                  <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Status</th>
                  <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Resolution Date</th>
                </tr>
              </thead>
              <tbody>
                {grievances.map((grv, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '16px', color: '#1e293b', fontSize: '14px', fontWeight: '600' }}>{grv.id}</td>
                    <td style={{ padding: '16px', color: '#64748b', fontSize: '14px' }}>{grv.date}</td>
                    <td style={{ padding: '16px', color: '#64748b', fontSize: '14px' }}>{grv.complainant}</td>
                    <td style={{ padding: '16px', color: '#1e293b', fontSize: '14px' }}>{grv.issue}</td>
                    <td style={{ padding: '16px' }}>
                      <span style={{
                        padding: '4px 12px',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: '600',
                        background: grv.status === 'Resolved' ? '#d1fae5' : '#dbeafe',
                        color: grv.status === 'Resolved' ? '#065f46' : '#1e40af'
                      }}>
                        {grv.status}
                      </span>
                    </td>
                    <td style={{ padding: '16px', color: '#64748b', fontSize: '14px' }}>{grv.resolutionDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* Road Safety Tab */}
{activeTab === 'safety' && (
  <>
    {/* Road Safety Compliance Stats */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '24px' }}>
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        borderLeft: '4px solid #10b981'
      }}>
        <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>Safety Inspections</div>
        <div style={{ fontSize: '32px', fontWeight: '700', color: '#1e293b' }}>18</div>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        borderLeft: '4px solid #3b82f6'
      }}>
        <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>Signage Installed</div>
        <div style={{ fontSize: '32px', fontWeight: '700', color: '#1e293b' }}>245</div>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        borderLeft: '4px solid #f59e0b'
      }}>
        <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>Pending Compliance</div>
        <div style={{ fontSize: '32px', fontWeight: '700', color: '#1e293b' }}>5</div>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        borderLeft: '4px solid #8b5cf6'
      }}>
        <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>Compliance Rate</div>
        <div style={{ fontSize: '32px', fontWeight: '700', color: '#1e293b' }}>94%</div>
      </div>
    </div>

    {/* Road Safety Compliance Items */}
    <div style={{
      background: 'white',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <h4 style={{ margin: '0 0 20px 0', color: '#1e293b' }}>Road Safety Compliance Items</h4>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #e2e8f0', textAlign: 'left' }}>
            <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Requirement</th>
            <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Location</th>
            <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Contractor</th>
            <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Due Date</th>
            <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {[
            { requirement: 'Warning Signage Installation', location: 'CH 12+500', contractor: 'ABC Constructions', dueDate: '2026-02-10', status: 'Compliant' },
            { requirement: 'Road Marking (Thermoplastic)', location: 'CH 0 to 25 km', contractor: 'XYZ Builders', dueDate: '2026-02-15', status: 'Pending' },
            { requirement: 'Crash Barriers Installation', location: 'Bridge B-2', contractor: 'PQR Infrastructure', dueDate: '2026-02-08', status: 'Compliant' },
            { requirement: 'Reflective Delineators', location: 'Full Corridor', contractor: 'LMN Contractors', dueDate: '2026-02-20', status: 'In Progress' },
          ].map((item, idx) => (
            <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
              <td style={{ padding: '16px', color: '#1e293b', fontSize: '14px', fontWeight: '600' }}>{item.requirement}</td>
              <td style={{ padding: '16px', color: '#64748b', fontSize: '14px' }}>{item.location}</td>
              <td style={{ padding: '16px', color: '#64748b', fontSize: '14px' }}>{item.contractor}</td>
              <td style={{ padding: '16px', color: '#64748b', fontSize: '14px' }}>{item.dueDate}</td>
              <td style={{ padding: '16px' }}>
                <span style={{
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: '600',
                  background: item.status === 'Compliant' ? '#d1fae5' : item.status === 'Pending' ? '#fef3c7' : '#dbeafe',
                  color: item.status === 'Compliant' ? '#065f46' : item.status === 'Pending' ? '#92400e' : '#1e40af'
                }}>
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
)}

      {/* Upload Compliance Modal */}
      <Modal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        title="Upload Compliance Document"
      >
        <FormField
          label="Compliance Category"
          type="select"
          options={['Environmental', 'Safety', 'Statutory', 'Social', 'Quality']}
          required
        />
        <FormField label="Document Type" type="select" options={[
          'Air Quality Report',
          'Safety Training Records',
          'Labor Law Compliance',
          'Community Grievance Report',
          'Quality Test Report'
        ]} required />
        <FormField label="Reporting Period" type="date" required />
        <FormField label="Upload Document" type="file" required />
        <FormField label="Additional Documents" type="file" />
        <FormField label="Remarks" type="textarea" rows={3} />

        <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
          <button
            onClick={handleUpload}
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
            Upload Document
          </button>
          <button
            onClick={() => setIsUploadOpen(false)}
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

      {/* Review Compliance Modal */}
      <Modal
        isOpen={isReviewOpen}
        onClose={() => {
          setIsReviewOpen(false);
          setSelectedItem(null);
        }}
        title="Review Compliance Submission"
        width="700px"
      >
        {selectedItem && (
          <>
            <div style={{
              background: '#f8fafc',
              padding: '16px',
              borderRadius: '8px',
              marginBottom: '20px'
            }}>
              <div style={{ marginBottom: '8px' }}>
                <strong style={{ color: '#64748b', fontSize: '12px' }}>CATEGORY:</strong>
                <div style={{ color: '#1e293b', fontSize: '14px', fontWeight: '600', marginTop: '4px' }}>
                  {selectedItem.category}
                </div>
              </div>
              <div style={{ marginBottom: '8px' }}>
                <strong style={{ color: '#64748b', fontSize: '12px' }}>ITEM:</strong>
                <div style={{ color: '#1e293b', fontSize: '14px', marginTop: '4px' }}>
                  {selectedItem.item}
                </div>
              </div>
              <div style={{ marginBottom: '8px' }}>
                <strong style={{ color: '#64748b', fontSize: '12px' }}>SUBMITTED BY:</strong>
                <div style={{ color: '#1e293b', fontSize: '14px', marginTop: '4px' }}>
                  {selectedItem.submittedBy}
                </div>
              </div>
              <div>
                <strong style={{ color: '#64748b', fontSize: '12px' }}>DUE DATE:</strong>
                <div style={{ color: '#1e293b', fontSize: '14px', marginTop: '4px' }}>
                  {selectedItem.dueDate}
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontSize: '14px', color: '#1e293b', marginBottom: '12px' }}>Submitted Documents</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {['Safety_Training_Records_Jan2026.pdf', 'Attendance_Sheets.xlsx', 'Training_Photos.zip'].map((doc) => (
                  <div
                    key={doc}
                    style={{
                      padding: '12px',
                      border: '1px solid #e2e8f0',
                      borderRadius: '6px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <span style={{ fontSize: '14px', color: '#1e293b' }}>📄 {doc}</span>
                    <button
                      style={{
                        padding: '4px 12px',
                        background: '#3b82f6',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        fontSize: '12px',
                        cursor: 'pointer'
                      }}
                    >
                      View
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <FormField label="Review Comments" type="textarea" rows={4} required />
            <FormField label="Compliance Status" type="select" options={['Compliant', 'Partially Compliant', 'Non-Compliant']} required />
            <FormField label="Rectification Required?" type="select" options={['Yes', 'No']} />
            <FormField label="Next Review Date" type="date" />

            <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
              <button
                onClick={() => handleReview('approve')}
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
                ✓ Approve
              </button>
              <button
                onClick={() => handleReview('reject')}
                style={{
                  flex: 1,
                  padding: '12px',
                  background: '#ef4444',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                ✗ Reject
              </button>
            </div>
          </>
        )}
      </Modal>

      {/* Submit Gender/Social Report Modal */}
      <Modal
        isOpen={isGenderReportOpen}
        onClose={() => setIsGenderReportOpen(false)}
        title="Submit Monthly Gender & Social Report"
        width="700px"
      >
        <div style={{
          background: '#f8fafc',
          padding: '16px',
          borderRadius: '8px',
          marginBottom: '20px'
        }}>
          <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>REPORTING PERIOD</div>
          <FormField label="" type="month" required />
        </div>

        <h4 style={{ fontSize: '14px', color: '#1e293b', marginBottom: '12px' }}>Labor Statistics</h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
          <FormField label="Total Workers" type="number" placeholder="e.g., 850" required />
          <FormField label="Women Workers" type="number" placeholder="e.g., 210" required />
          <FormField label="Skilled Workers" type="number" placeholder="e.g., 340" />
          <FormField label="Unskilled Workers" type="number" placeholder="e.g., 510" />
        </div>

        <h4 style={{ fontSize: '14px', color: '#1e293b', marginBottom: '12px' }}>Training & Skill Development</h4>
        <FormField label="Training Sessions Conducted" type="number" placeholder="e.g., 5" />
        <FormField label="Women Trained" type="number" placeholder="e.g., 45" />

        <h4 style={{ fontSize: '14px', color: '#1e293b', marginBottom: '12px', marginTop: '20px' }}>Labor Camp Facilities</h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <FormField label="Separate Toilets for Women" type="select" options={['Yes', 'No']} required />
          <FormField label="Crèche Facility Available" type="select" options={['Yes', 'No']} required />
          <FormField label="Health Facility Available" type="select" options={['Yes', 'No']} required />
          <FormField label="Safety Equipment Provided" type="select" options={['Yes', 'No']} required />
        </div>

        <h4 style={{ fontSize: '14px', color: '#1e293b', marginBottom: '12px', marginTop: '20px' }}>Grievances</h4>
        <FormField label="New Grievances Received" type="number" placeholder="e.g., 2" />
        <FormField label="Grievances Resolved" type="number" placeholder="e.g., 1" />

        <FormField label="Upload Supporting Documents" type="file" />
        <FormField label="Remarks" type="textarea" rows={3} />

        <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
          <button
            onClick={handleGenderReport}
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
            Submit Report
          </button>
          <button
            onClick={() => setIsGenderReportOpen(false)}
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

      {/* Add EMP Action Modal */}
      <Modal
        isOpen={isEMPActionOpen}
        onClose={() => setIsEMPActionOpen(false)}
        title="Add Environmental Management Action"
        width="700px"
      >
        <FormField label="Action Type" type="select" options={[
          'Tree Cutting Permission',
          'Dust Suppression Measures',
          'Water Body Protection',
          'Noise Control Measures',
          'Waste Management',
          'Soil Erosion Control',
          'Air Quality Monitoring'
        ]} required />

        <FormField label="Action Description" type="textarea" rows={3} required />
        <FormField label="Location / Chainage" placeholder="e.g., Chainage 12+500 to 15+000" required />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <FormField label="Trees to be Cut" type="number" placeholder="e.g., 45" />
          <FormField label="Compensatory Plantation" type="number" placeholder="e.g., 225 (5:1 ratio)" />
        </div>

        <FormField label="Responsible Contractor" type="select" options={[
          'ABC Constructions',
          'XYZ Builders',
          'PQR Infrastructure',
          'LMN Contractors'
        ]} required />

        <FormField label="Due Date" type="date" required />
        <FormField label="Upload Permission/Documents" type="file" />
        <FormField label="Remarks" type="textarea" rows={2} />

        <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
          <button
            onClick={handleEMPAction}
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
            Add Action
          </button>
          <button
            onClick={() => setIsEMPActionOpen(false)}
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
    </div>
  );
}