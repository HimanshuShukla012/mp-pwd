import { useState } from 'react';
import type { Role } from '../roles';
import Modal from './components/Modal';
import FormField from './components/FormField';

export default function Compliance({ role }: { role: Role }) {
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const getComplianceContent = () => {
    switch (role) {
      case 'PMU':
        return {
          title: 'Overall Compliance Status',
          subtitle: 'Statutory, environmental, and social compliance monitoring',
          showAll: true
        };
      case 'AE':
        return {
          title: 'Quality & Safety Compliance',
          subtitle: 'Compliance checks and rectification tracking',
          showAll: false
        };
      case 'CONTRACTOR':
        return {
          title: 'Compliance Submissions',
          subtitle: 'Safety and environmental compliance uploads',
          showAll: false
        };
      case 'AUTHORITY_ENGINEER':
        return {
          title: 'Compliance Review',
          subtitle: 'Review contractor compliance submissions',
          showAll: false
        };
      default:
        return {
          title: 'Compliance',
          subtitle: 'Compliance monitoring',
          showAll: false
        };
    }
  };

  const content = getComplianceContent();

  const complianceData = [
    { category: 'Environmental', item: 'Air Quality Monitoring Report', status: 'Compliant', dueDate: '2026-01-25', submittedBy: 'ABC Constructions' },
    { category: 'Safety', item: 'Safety Training Records', status: 'Pending', dueDate: '2026-02-01', submittedBy: 'XYZ Builders' },
    { category: 'Statutory', item: 'Labor Law Compliance', status: 'Compliant', dueDate: '2026-01-20', submittedBy: 'PQR Infrastructure' },
    { category: 'Social', item: 'Community Grievance Report', status: 'Non-Compliant', dueDate: '2026-01-28', submittedBy: 'LMN Contractors' },
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
      </div>

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
    </div>
  );
}