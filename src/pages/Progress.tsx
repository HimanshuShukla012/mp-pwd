import { useState } from 'react';
import type { Role } from '../roles';
import Modal from './components/Modal';
import FormField from './components/FormField';

export default function Progress({ role }: { role: Role }) {
  const [isAddProgressOpen, setIsAddProgressOpen] = useState(false);
  const [isVerifyOpen, setIsVerifyOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const getProgressContent = () => {
    switch (role) {
      case 'PIU':
        return {
          title: 'Physical Progress Updates',
          subtitle: 'Milestone completion and activity tracking',
          canEdit: true
        };
      case 'AE':
        return {
          title: 'Progress Entry & Verification',
          subtitle: 'Daily/weekly progress and measurement book updates',
          canEdit: true
        };
      case 'JE':
        return {
          title: 'On-site Progress Entry',
          subtitle: 'Daily work logs and photo uploads',
          canEdit: true
        };
      case 'CONTRACTOR':
        return {
          title: 'Work Progress Submission',
          subtitle: 'Submit progress updates and photo evidence',
          canEdit: true
        };
      case 'AUTHORITY_ENGINEER':
        return {
          title: 'Progress Verification',
          subtitle: 'Review and verify reported progress',
          canEdit: false
        };
      default:
        return {
          title: 'Progress Tracking',
          subtitle: 'Monitor work progress',
          canEdit: false
        };
    }
  };

  const content = getProgressContent();

  const progressData = [
    { date: '2026-01-31', activity: 'Earthwork - Chainage 12+500 to 13+000', progress: '500 cum', status: role === 'AUTHORITY_ENGINEER' ? 'Pending Verification' : 'Submitted', submittedBy: 'JE - Site A' },
    { date: '2026-01-30', activity: 'Subgrade Compaction - Section A3', progress: '2.5 km', status: 'Verified', submittedBy: 'JE - Site B' },
    { date: '2026-01-29', activity: 'Drainage Culvert Installation', progress: '3 units', status: 'Verified', submittedBy: 'Contractor - ABC' },
  ];

  const handleSubmitProgress = () => {
    alert('Progress entry submitted successfully!');
    setIsAddProgressOpen(false);
  };

  const handleVerify = (action: 'approve' | 'reject') => {
    alert(`Progress ${action === 'approve' ? 'approved' : 'rejected'} successfully!`);
    setIsVerifyOpen(false);
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
          {content.canEdit && (
            <button
              onClick={() => setIsAddProgressOpen(true)}
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
              + Add Progress
            </button>
          )}
        </div>
      </div>

      {/* Recent Progress Entries */}
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <h4 style={{ margin: '0 0 20px 0', color: '#1e293b' }}>Recent Progress Updates</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {progressData.map((item, idx) => (
            <div
              key={idx}
              style={{
                padding: '16px',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '4px' }}>
                  {item.activity}
                </div>
                <div style={{ fontSize: '13px', color: '#64748b' }}>
                  Progress: {item.progress} • {item.date} • By: {item.submittedBy}
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: '600',
                  background: item.status === 'Verified' ? '#d1fae5' : '#fef3c7',
                  color: item.status === 'Verified' ? '#065f46' : '#92400e'
                }}>
                  {item.status}
                </span>
                {(role === 'AUTHORITY_ENGINEER' || role === 'AE') && item.status === 'Pending Verification' && (
                  <button
                    onClick={() => {
                      setSelectedItem(item);
                      setIsVerifyOpen(true);
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
                    Verify
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Progress Modal */}
      <Modal
        isOpen={isAddProgressOpen}
        onClose={() => setIsAddProgressOpen(false)}
        title="Add Progress Entry"
      >
        <FormField
          label="Activity"
          type="select"
          options={[
            'Earthwork',
            'Subgrade Compaction',
            'Base Course',
            'Drainage Work',
            'Culvert Installation',
          ]}
          required
        />
        <FormField label="Chainage From" placeholder="e.g., 12+500" required />
        <FormField label="Chainage To" placeholder="e.g., 13+000" required />
        <FormField label="Quantity Completed" placeholder="e.g., 500 cum" required />
        <FormField label="Date" type="date" required />
        <FormField label="Remarks" type="textarea" rows={3} />
        <FormField label="Upload Photos" type="file" />

        <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
          <button
            onClick={handleSubmitProgress}
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
            Submit Progress
          </button>
          <button
            onClick={() => setIsAddProgressOpen(false)}
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

      {/* Verify Progress Modal */}
      <Modal
        isOpen={isVerifyOpen}
        onClose={() => {
          setIsVerifyOpen(false);
          setSelectedItem(null);
        }}
        title="Verify Progress Entry"
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
                <strong style={{ color: '#64748b', fontSize: '12px' }}>ACTIVITY:</strong>
                <div style={{ color: '#1e293b', fontSize: '14px', fontWeight: '600', marginTop: '4px' }}>
                  {selectedItem.activity}
                </div>
              </div>
              <div style={{ marginBottom: '8px' }}>
                <strong style={{ color: '#64748b', fontSize: '12px' }}>PROGRESS:</strong>
                <div style={{ color: '#1e293b', fontSize: '14px', marginTop: '4px' }}>
                  {selectedItem.progress}
                </div>
              </div>
              <div style={{ marginBottom: '8px' }}>
                <strong style={{ color: '#64748b', fontSize: '12px' }}>DATE:</strong>
                <div style={{ color: '#1e293b', fontSize: '14px', marginTop: '4px' }}>
                  {selectedItem.date}
                </div>
              </div>
              <div>
                <strong style={{ color: '#64748b', fontSize: '12px' }}>SUBMITTED BY:</strong>
                <div style={{ color: '#1e293b', fontSize: '14px', marginTop: '4px' }}>
                  {selectedItem.submittedBy}
                </div>
              </div>
            </div>

            <FormField label="Verification Remarks" type="textarea" rows={4} required />
            <FormField label="Quality Rating" type="select" options={['Excellent', 'Good', 'Average', 'Poor']} />

            <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
              <button
                onClick={() => handleVerify('approve')}
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
                onClick={() => handleVerify('reject')}
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