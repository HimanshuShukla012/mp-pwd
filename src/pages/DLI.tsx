import { useState } from 'react';
import type { Role } from '../roles';
import Modal from './components/Modal';
import FormField from './components/FormField';

export default function DLI({ role }: { role: Role }) {
  const [isUploadEvidenceOpen, setIsUploadEvidenceOpen] = useState(false);
  const [isVerifyOpen, setIsVerifyOpen] = useState(false);
  const [isViewDetailsOpen, setIsViewDetailsOpen] = useState(false);
  const [selectedDLI, setSelectedDLI] = useState<any>(null);

  const getDLIContent = () => {
    switch (role) {
      case 'PMU':
        return {
          title: 'DLI Achievement Status',
          subtitle: 'Disbursement Linked Indicators tracking and verification',
          canUpload: true
        };
      case 'IVA':
        return {
          title: 'DLI Verification Dashboard',
          subtitle: 'Independent verification of DLI achievements',
          canUpload: false
        };
      case 'LENDER':
        return {
          title: 'DLI Compliance & Disbursement',
          subtitle: 'DLI verification status and fund release linkage',
          canUpload: false
        };
      default:
        return {
          title: 'DLI Tracking',
          subtitle: 'Disbursement Linked Indicators',
          canUpload: false
        };
    }
  };

  const content = getDLIContent();

  const dliData = [
    { dli: 'DLI-1', desc: 'Road Length Improved', target: '200 km', achieved: '205 km', status: 'Achieved', amount: '₹400 Cr', evidence: 3 },
    { dli: 'DLI-2', desc: 'Quality Standards Met', target: '95%', achieved: '97%', status: 'Achieved', amount: '₹350 Cr', evidence: 5 },
    { dli: 'DLI-3', desc: 'Safety Audits Completed', target: '25', achieved: '24', status: 'Under Verification', amount: '₹200 Cr', evidence: 4 },
    { dli: 'DLI-4', desc: 'Environmental Compliance', target: '100%', achieved: '98%', status: 'Under Verification', amount: '₹150 Cr', evidence: 6 },
    { dli: 'DLI-5', desc: 'Project Completion Rate', target: '80%', achieved: '68%', status: 'Pending', amount: '₹500 Cr', evidence: 0 },
  ];

  const handleUploadEvidence = () => {
    alert('Evidence uploaded successfully!');
    setIsUploadEvidenceOpen(false);
  };

  const handleVerification = (action: 'approve' | 'reject') => {
    alert(`DLI ${action === 'approve' ? 'verified and approved' : 'rejected'}!`);
    setIsVerifyOpen(false);
    setSelectedDLI(null);
  };

  const handleFundRelease = () => {
    alert('Fund release initiated successfully!');
    setIsViewDetailsOpen(false);
    setSelectedDLI(null);
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
          {content.canUpload && (
            <button
              onClick={() => setIsUploadEvidenceOpen(true)}
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
              + Upload Evidence
            </button>
          )}
        </div>
      </div>

      {/* DLI Overview */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '24px' }}>
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          borderLeft: '4px solid #10b981'
        }}>
          <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>Achieved</div>
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#1e293b' }}>6</div>
        </div>

        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          borderLeft: '4px solid #f59e0b'
        }}>
          <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>Under Verification</div>
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#1e293b' }}>2</div>
        </div>

        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          borderLeft: '4px solid #3b82f6'
        }}>
          <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>Pending</div>
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#1e293b' }}>1</div>
        </div>

        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          borderLeft: '4px solid #8b5cf6'
        }}>
          <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>Total DLIs</div>
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#1e293b' }}>9</div>
        </div>
      </div>

      {/* DLI Details Table */}
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <h4 style={{ margin: '0 0 20px 0', color: '#1e293b' }}>DLI Status Details</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e2e8f0', textAlign: 'left' }}>
              <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>DLI No.</th>
              <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Description</th>
              <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Target</th>
              <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Achieved</th>
              <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Status</th>
              <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Amount</th>
              <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {dliData.map((item, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '16px', color: '#1e293b', fontSize: '14px', fontWeight: '600' }}>{item.dli}</td>
                <td style={{ padding: '16px', color: '#1e293b', fontSize: '14px' }}>{item.desc}</td>
                <td style={{ padding: '16px', color: '#64748b', fontSize: '14px' }}>{item.target}</td>
                <td style={{ padding: '16px', color: '#1e293b', fontSize: '14px', fontWeight: '600' }}>{item.achieved}</td>
                <td style={{ padding: '16px' }}>
                  <span style={{
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '600',
                    background: item.status === 'Achieved' ? '#d1fae5' : item.status === 'Under Verification' ? '#fef3c7' : '#dbeafe',
                    color: item.status === 'Achieved' ? '#065f46' : item.status === 'Under Verification' ? '#92400e' : '#1e40af'
                  }}>
                    {item.status}
                  </span>
                </td>
                <td style={{ padding: '16px', color: '#1e293b', fontSize: '14px', fontWeight: '600' }}>{item.amount}</td>
                <td style={{ padding: '16px' }}>
                  {role === 'IVA' && item.status === 'Under Verification' && (
                    <button
                      onClick={() => {
                        setSelectedDLI(item);
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
                  {role === 'PMU' && (
                    <button
                      onClick={() => {
                        setSelectedDLI(item);
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
                  )}
                  {role === 'LENDER' && item.status === 'Achieved' && (
                    <button
                      onClick={() => {
                        setSelectedDLI(item);
                        setIsViewDetailsOpen(true);
                      }}
                      style={{
                        padding: '6px 16px',
                        background: '#10b981',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        fontSize: '13px',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}
                    >
                      Release Funds
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Upload Evidence Modal */}
      <Modal
        isOpen={isUploadEvidenceOpen}
        onClose={() => setIsUploadEvidenceOpen(false)}
        title="Upload DLI Evidence"
        width="700px"
      >
        <FormField
          label="Select DLI"
          type="select"
          options={dliData.map(d => `${d.dli} - ${d.desc}`)}
          required
        />
        <FormField label="Achievement Value" placeholder="e.g., 205 km or 97%" required />
        <FormField label="Achievement Date" type="date" required />
        
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ fontSize: '14px', color: '#1e293b', marginBottom: '12px' }}>Evidence Documents</h4>
          <FormField label="Progress Report" type="file" required />
          <FormField label="Quality Test Reports" type="file" />
          <FormField label="Site Photos (Geo-tagged)" type="file" />
          <FormField label="Third-party Certification" type="file" />
          <FormField label="Other Supporting Documents" type="file" />
        </div>

        <FormField label="Remarks / Description" type="textarea" rows={4} />

        <div style={{
          padding: '16px',
          background: '#dbeafe',
          borderRadius: '8px',
          marginBottom: '20px',
          border: '1px solid #bfdbfe'
        }}>
          <div style={{ fontSize: '13px', fontWeight: '600', color: '#1e40af', marginBottom: '8px' }}>
            ℹ️ Evidence Requirements
          </div>
          <ul style={{ fontSize: '13px', color: '#1e3a8a', margin: '8px 0', paddingLeft: '20px' }}>
            <li>All documents must be certified by Authority Engineer</li>
            <li>Photos must have geo-tags and timestamps</li>
            <li>Quality test reports from NABL accredited labs</li>
            <li>Complete measurement records</li>
          </ul>
        </div>

        <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
          <button
            onClick={handleUploadEvidence}
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
            Submit Evidence
          </button>
          <button
            onClick={() => setIsUploadEvidenceOpen(false)}
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

      {/* Verify DLI Modal (IVA) */}
      <Modal
        isOpen={isVerifyOpen}
        onClose={() => {
          setIsVerifyOpen(false);
          setSelectedDLI(null);
        }}
        title="DLI Verification"
        width="900px"
      >
        {selectedDLI && (
          <>
            <div style={{
              background: '#f8fafc',
              padding: '20px',
              borderRadius: '8px',
              marginBottom: '20px'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>DLI Number</div>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>{selectedDLI.dli}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Linked Amount</div>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>{selectedDLI.amount}</div>
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Description</div>
                  <div style={{ fontSize: '14px', color: '#1e293b' }}>{selectedDLI.desc}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Target</div>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>{selectedDLI.target}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Claimed Achievement</div>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#10b981' }}>{selectedDLI.achieved}</div>
                </div>
              </div>
            </div>

            {/* Evidence Documents */}
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontSize: '14px', color: '#1e293b', marginBottom: '12px' }}>
                Submitted Evidence ({selectedDLI.evidence} documents)
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  'Progress_Report_DLI3_Jan2026.pdf',
                  'Quality_Test_Results_NABL.pdf',
                  'Site_Photos_GeoTagged.zip',
                  'Authority_Engineer_Certificate.pdf'
                ].map((doc) => (
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
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Verification Checklist */}
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontSize: '14px', color: '#1e293b', marginBottom: '12px' }}>Verification Checklist</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'Documentary evidence is complete and authentic',
                  'Achievement meets or exceeds target value',
                  'Quality certificates from accredited labs',
                  'Site verification conducted',
                  'Measurements verified independently',
                  'No discrepancies found in records'
                ].map((item) => (
                  <label
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '10px',
                      border: '1px solid #e2e8f0',
                      borderRadius: '6px',
                      cursor: 'pointer'
                    }}
                  >
                    <input type="checkbox" style={{ width: '18px', height: '18px' }} />
                    <span style={{ fontSize: '14px', color: '#1e293b' }}>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <FormField label="Field Verification Date" type="date" required />
            <FormField label="Verification Report Number" placeholder="e.g., IVA-VR-2024-156" required />
            <FormField label="Verified Achievement Value" placeholder={selectedDLI.achieved} required />
            <FormField label="Verification Remarks" type="textarea" rows={4} required />
            <FormField label="Recommendation" type="select" options={['Approve - Full Achievement', 'Approve - Partial Achievement', 'Reject - Insufficient Evidence', 'Return for Clarification']} required />

            <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
              <button
                onClick={() => handleVerification('approve')}
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
                ✓ Verify & Approve
              </button>
              <button
                onClick={() => handleVerification('reject')}
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

      {/* View Details / Fund Release Modal (PMU / Lender) */}
      <Modal
        isOpen={isViewDetailsOpen}
        onClose={() => {
          setIsViewDetailsOpen(false);
          setSelectedDLI(null);
        }}
        title={role === 'LENDER' ? 'DLI Fund Release' : 'DLI Details'}
        width="800px"
      >
        {selectedDLI && (
          <>
            <div style={{
              background: '#f8fafc',
              padding: '20px',
              borderRadius: '8px',
              marginBottom: '20px'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>DLI Number</div>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>{selectedDLI.dli}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Status</div>
                  <span style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '600',
                    background: selectedDLI.status === 'Achieved' ? '#d1fae5' : '#fef3c7',
                    color: selectedDLI.status === 'Achieved' ? '#065f46' : '#92400e'
                  }}>
                    {selectedDLI.status}
                  </span>
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Description</div>
                  <div style={{ fontSize: '14px', color: '#1e293b' }}>{selectedDLI.desc}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Target</div>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>{selectedDLI.target}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Achieved</div>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#10b981' }}>{selectedDLI.achieved}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Linked Amount</div>
                  <div style={{ fontSize: '20px', fontWeight: '700', color: '#1e293b' }}>{selectedDLI.amount}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>IVA Verification</div>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#10b981' }}>
                    {selectedDLI.status === 'Achieved' ? '✓ Verified' : 'Pending'}
                  </div>
                </div>
              </div>
            </div>

            {selectedDLI.status === 'Achieved' && role === 'LENDER' && (
              <>
                <div style={{
                  padding: '16px',
                  background: '#d1fae5',
                  borderRadius: '8px',
                  marginBottom: '20px',
                  border: '1px solid #86efac'
                }}>
                  <div style={{ fontSize: '13px', fontWeight: '600', color: '#065f46', marginBottom: '8px' }}>
                    ✓ DLI Verified & Approved by IVA
                  </div>
                  <div style={{ fontSize: '13px', color: '#047857' }}>
                    This DLI has been independently verified and approved. Funds can be released.
                  </div>
                </div>

                <FormField label="Disbursement Tranche" type="select" options={['Tranche 1', 'Tranche 2', 'Tranche 3', 'Tranche 4']} required />
                <FormField label="Disbursement Date" type="date" required />
                <FormField label="Amount to Disburse" placeholder={selectedDLI.amount} required />
                <FormField label="Disbursement Reference" placeholder="e.g., DISB-2024-156" required />
                <FormField label="Disbursement Remarks" type="textarea" rows={3} />

                <button
                  onClick={handleFundRelease}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: '#10b981',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    marginTop: '24px'
                  }}
                >
                  💰 Release Funds
                </button>
              </>
            )}

            {role === 'PMU' && (
              <div style={{ marginTop: '20px' }}>
                <h4 style={{ fontSize: '14px', color: '#1e293b', marginBottom: '12px' }}>Evidence Summary</h4>
                <div style={{ fontSize: '14px', color: '#64748b' }}>
                  {selectedDLI.evidence} documents uploaded • IVA verification {selectedDLI.status === 'Achieved' ? 'completed' : 'in progress'}
                </div>
              </div>
            )}
          </>
        )}
      </Modal>
    </div>
  );
}