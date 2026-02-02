import { useState } from 'react';
import type { Role } from '../roles';
import Modal, { ModalButton } from './components/Modal';
import FormField from './components/FormField';
import { Award, Clock, CheckCircle, TrendingUp, Eye, FileText, AlertCircle } from 'lucide-react';

export default function Certification({ role }: { role: Role }) {
  const [isCertifyOpen, setIsCertifyOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState<any>(null);

  const worksData = [
    { id: 'WRK-245', desc: 'Earthwork - Chainage 12+500 to 15+000', contractor: 'ABC Constructions', type: 'Milestone', date: '2026-01-28' },
    { id: 'WRK-246', desc: 'Subgrade Preparation - Package 3', contractor: 'XYZ Builders', type: 'Quality', date: '2026-01-27' },
    { id: 'WRK-247', desc: 'Base Course - Section A', contractor: 'PQR Infrastructure', type: 'Completion', date: '2026-01-26' },
    { id: 'WRK-248', desc: 'Drainage Works - Culvert 4-8', contractor: 'LMN Contractors', type: 'Milestone', date: '2026-01-25' },
  ];

  const handleCertification = (action: 'approve' | 'reject') => {
    alert(`Work ${action === 'approve' ? 'certified' : 'rejected'} successfully!`);
    setIsCertifyOpen(false);
    setSelectedWork(null);
  };

  return (
    <div style={{ padding: '32px', background: '#f8fafc', minHeight: '100vh' }}>
      {/* Header Card */}
      <div style={{
        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        borderRadius: '20px',
        padding: '32px',
        marginBottom: '32px',
        boxShadow: '0 4px 20px rgba(16, 185, 129, 0.2)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ margin: '0 0 8px 0', color: 'white', fontSize: '28px', fontWeight: '800' }}>
              Work Certification
            </h2>
            <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.9)', fontSize: '15px' }}>
              Certify work completion, milestones, and quality approvals
            </p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '24px', 
        marginBottom: '32px' 
      }}>
        {[
          { label: 'Pending Certification', value: '18', icon: <Clock size={24} />, color: '#ef4444', bgGradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' },
          { label: 'Certified This Month', value: '42', icon: <CheckCircle size={24} />, color: '#10b981', bgGradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' },
          { label: 'Quality Approvals', value: '38', icon: <TrendingUp size={24} />, color: '#3b82f6', bgGradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' },
        ].map((stat, idx) => (
          <div
            key={idx}
            style={{
              background: 'white',
              borderRadius: '20px',
              padding: '28px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              border: '1px solid #e2e8f0'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
            }}
          >
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: stat.bgGradient,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px',
              color: 'white'
            }}>
              {stat.icon}
            </div>
            <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '8px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              {stat.label}
            </div>
            <div style={{ fontSize: '36px', fontWeight: '800', color: '#1e293b', letterSpacing: '-1px' }}>
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      {/* Works Table */}
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '28px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        border: '1px solid #e2e8f0'
      }}>
        <h3 style={{ margin: '0 0 24px 0', color: '#1e293b', fontSize: '20px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Award size={24} style={{ color: '#10b981' }} />
          Works Pending Certification
        </h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0' }}>
            <thead>
              <tr>
                {['Work ID', 'Description', 'Contractor', 'Type', 'Submitted', 'Action'].map((header, idx) => (
                  <th key={idx} style={{ 
                    padding: '16px', 
                    color: '#64748b', 
                    fontWeight: '700', 
                    fontSize: '13px',
                    textAlign: 'left',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    borderBottom: '2px solid #e2e8f0'
                  }}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {worksData.map((item, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '20px 16px', color: '#10b981', fontSize: '14px', fontWeight: '700' }}>{item.id}</td>
                  <td style={{ padding: '20px 16px', color: '#1e293b', fontSize: '14px', fontWeight: '500' }}>{item.desc}</td>
                  <td style={{ padding: '20px 16px', color: '#64748b', fontSize: '14px' }}>{item.contractor}</td>
                  <td style={{ padding: '20px 16px' }}>
                    <span style={{
                      padding: '6px 14px',
                      borderRadius: '10px',
                      fontSize: '12px',
                      fontWeight: '700',
                      background: item.type === 'Milestone' ? '#dbeafe' : item.type === 'Quality' ? '#fef3c7' : '#d1fae5',
                      color: item.type === 'Milestone' ? '#1e40af' : item.type === 'Quality' ? '#92400e' : '#065f46',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {item.type}
                    </span>
                  </td>
                  <td style={{ padding: '20px 16px', color: '#64748b', fontSize: '14px' }}>{item.date}</td>
                  <td style={{ padding: '20px 16px' }}>
                    <button
                      onClick={() => {
                        setSelectedWork(item);
                        setIsCertifyOpen(true);
                      }}
                      style={{
                        padding: '8px 20px',
                        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '10px',
                        fontSize: '13px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(16, 185, 129, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <Eye size={14} />
                      Review
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Certification Modal */}
      <Modal
        isOpen={isCertifyOpen}
        onClose={() => {
          setIsCertifyOpen(false);
          setSelectedWork(null);
        }}
        title="Work Certification Review"
        width="800px"
        footer={
          <>
            <ModalButton variant="danger" onClick={() => handleCertification('reject')}>
              ✗ Reject & Return
            </ModalButton>
            <ModalButton variant="success" onClick={() => handleCertification('approve')}>
              ✓ Issue Certificate
            </ModalButton>
          </>
        }
      >
        {selectedWork && (
          <>
            {/* Work Info Card */}
            <div style={{
              background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
              padding: '24px',
              borderRadius: '16px',
              marginBottom: '24px',
              border: '1px solid #bbf7d0'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Work ID</div>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b' }}>{selectedWork.id}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Certification Type</div>
                  <span style={{
                    display: 'inline-block',
                    padding: '6px 14px',
                    borderRadius: '10px',
                    fontSize: '12px',
                    fontWeight: '700',
                    background: selectedWork.type === 'Milestone' ? '#dbeafe' : selectedWork.type === 'Quality' ? '#fef3c7' : '#d1fae5',
                    color: selectedWork.type === 'Milestone' ? '#1e40af' : selectedWork.type === 'Quality' ? '#92400e' : '#065f46'
                  }}>
                    {selectedWork.type}
                  </span>
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Work Description</div>
                  <div style={{ fontSize: '15px', color: '#1e293b', fontWeight: '500' }}>{selectedWork.desc}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Contractor</div>
                  <div style={{ fontSize: '15px', color: '#1e293b', fontWeight: '600' }}>{selectedWork.contractor}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Submitted On</div>
                  <div style={{ fontSize: '15px', color: '#1e293b', fontWeight: '600' }}>{selectedWork.date}</div>
                </div>
              </div>
            </div>

            {/* Work Execution Details */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '16px', color: '#1e293b', marginBottom: '16px', fontWeight: '700' }}>Work Execution Details</h4>
              <div style={{
                padding: '20px',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                background: '#f8fafc'
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
                  <div>
                    <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px', fontWeight: '600' }}>Quantity Executed</div>
                    <div style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b' }}>2,500 cum</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px', fontWeight: '600' }}>Completion</div>
                    <div style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b' }}>100%</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px', fontWeight: '600' }}>AE Verification</div>
                    <span style={{
                      display: 'inline-block',
                      padding: '4px 10px',
                      borderRadius: '8px',
                      fontSize: '12px',
                      fontWeight: '700',
                      background: '#d1fae5',
                      color: '#065f46'
                    }}>
                      ✓ Verified
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Field Inspection Alert */}
            <div style={{
              padding: '16px 20px',
              background: '#fef3c7',
              borderRadius: '12px',
              marginBottom: '24px',
              border: '1px solid #fde68a',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <AlertCircle size={20} style={{ color: '#92400e', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '13px', fontWeight: '700', color: '#92400e', marginBottom: '4px' }}>
                  Field Inspection Required
                </div>
                <div style={{ fontSize: '13px', color: '#78350f' }}>
                  Please conduct a field inspection before certification. Use the checklist below.
                </div>
              </div>
            </div>

            {/* Inspection Checklist */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '16px', color: '#1e293b', marginBottom: '16px', fontWeight: '700' }}>Inspection Checklist</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'Quality as per specifications',
                  'Quantity verification completed',
                  'Safety standards maintained',
                  'Environmental compliance met',
                  'All test reports available'
                ].map((item) => (
                  <label
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '14px',
                      border: '1px solid #e2e8f0',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      background: '#f8fafc',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'white';
                      e.currentTarget.style.borderColor = '#10b981';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#f8fafc';
                      e.currentTarget.style.borderColor = '#e2e8f0';
                    }}
                  >
                    <input type="checkbox" style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
                    <span style={{ fontSize: '14px', color: '#1e293b', fontWeight: '500' }}>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Supporting Documents */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '16px', color: '#1e293b', marginBottom: '16px', fontWeight: '700' }}>Supporting Documents</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'MB_Entry_Verified.pdf',
                  'Quality_Test_Reports.pdf',
                  'Site_Photos_GeoTagged.zip',
                  'AE_Inspection_Report.pdf'
                ].map((doc) => (
                  <div
                    key={doc}
                    style={{
                      padding: '16px',
                      border: '1px solid #e2e8f0',
                      borderRadius: '12px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: '#f8fafc',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'white';
                      e.currentTarget.style.borderColor = '#10b981';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#f8fafc';
                      e.currentTarget.style.borderColor = '#e2e8f0';
                    }}
                  >
                    <span style={{ fontSize: '14px', color: '#1e293b', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <FileText size={18} style={{ color: '#10b981' }} />
                      {doc}
                    </span>
                    <button
                      style={{
                        padding: '6px 16px',
                        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '13px',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}
                    >
                      View
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Certification Form */}
            <FormField label="Certification Remarks" type="textarea" rows={4} required />
            <FormField label="Quality Rating" type="select" options={['Excellent', 'Good', 'Satisfactory', 'Below Standard']} required />
            <FormField label="Certificate Valid Till" type="date" />
          </>
        )}
      </Modal>
    </div>
  );
}