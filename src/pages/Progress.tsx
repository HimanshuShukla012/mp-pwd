import { useState } from 'react';
import type { Role } from '../roles';
import Modal from './components/Modal';
import FormField from './components/FormField';

export default function Progress({ role }: { role: Role }) {
  const [activeTab, setActiveTab] = useState<'physical' | 'financial'>('physical');
  const [isAddProgressOpen, setIsAddProgressOpen] = useState(false);
  const [isAddFinancialOpen, setIsAddFinancialOpen] = useState(false);
  const [isVerifyOpen, setIsVerifyOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const getProgressContent = () => {
    switch (role) {
      case 'PIU':
        return {
          title: 'Progress Monitoring & Financial Tracking',
          subtitle: 'Physical and financial progress overview',
          canEdit: true,
          canViewFinancial: true
        };
      case 'AE':
        return {
          title: 'Progress Entry & Verification',
          subtitle: 'Daily/weekly progress and measurement book updates',
          canEdit: true,
          canViewFinancial: true
        };
      case 'JE':
        return {
          title: 'On-site Progress Entry',
          subtitle: 'Daily work logs and photo uploads',
          canEdit: true,
          canViewFinancial: false
        };
      case 'CONTRACTOR':
        return {
          title: 'Work Progress Submission',
          subtitle: 'Submit progress updates and financial claims',
          canEdit: true,
          canViewFinancial: true
        };
      case 'AUTHORITY_ENGINEER':
        return {
          title: 'Progress Verification',
          subtitle: 'Review and verify reported progress',
          canEdit: false,
          canViewFinancial: true
        };
      case 'PMU':
        return {
          title: 'Program Progress Dashboard',
          subtitle: 'Overall physical and financial progress monitoring',
          canEdit: false,
          canViewFinancial: true
        };
      default:
        return {
          title: 'Progress Tracking',
          subtitle: 'Monitor work progress',
          canEdit: false,
          canViewFinancial: false
        };
    }
  };

  const content = getProgressContent();

  // Physical Progress Data
  const physicalProgressData = [
    { date: '2026-01-31', activity: 'Earthwork - Chainage 12+500 to 13+000', progress: '500 cum', status: role === 'AUTHORITY_ENGINEER' ? 'Pending Verification' : 'Submitted', submittedBy: 'JE - Site A' },
    { date: '2026-01-30', activity: 'Subgrade Compaction - Section A3', progress: '2.5 km', status: 'Verified', submittedBy: 'JE - Site B' },
    { date: '2026-01-29', activity: 'Drainage Culvert Installation', progress: '3 units', status: 'Verified', submittedBy: 'Contractor - ABC' },
  ];

  // Financial Progress Data
  const financialProgressData = [
    {
      billNo: 'RAB-2026-001',
      billDate: '2026-01-28',
      billAmount: '₹2,45,00,000',
      workValue: '₹2,50,00,000',
      deductions: '₹5,00,000',
      status: 'Approved',
      approvedAmount: '₹2,45,00,000',
      paidAmount: '₹2,45,00,000',
      contractor: 'ABC Constructions'
    },
    {
      billNo: 'RAB-2026-002',
      billDate: '2026-01-30',
      billAmount: '₹1,85,00,000',
      workValue: '₹1,90,00,000',
      deductions: '₹5,00,000',
      status: 'Pending Approval',
      approvedAmount: '₹0',
      paidAmount: '₹0',
      contractor: 'XYZ Builders'
    },
    {
      billNo: 'RAB-2026-003',
      billDate: '2026-02-01',
      billAmount: '₹3,20,00,000',
      workValue: '₹3,30,00,000',
      deductions: '₹10,00,000',
      status: 'Under Review',
      approvedAmount: '₹0',
      paidAmount: '₹0',
      contractor: 'PQR Infrastructure'
    },
  ];

  const handleSubmitProgress = () => {
    alert('Physical progress entry submitted successfully!');
    setIsAddProgressOpen(false);
  };

  const handleSubmitFinancial = () => {
    alert('Financial progress/bill submitted successfully!');
    setIsAddFinancialOpen(false);
  };

  const handleVerify = (action: 'approve' | 'reject') => {
    alert(`Progress ${action === 'approve' ? 'approved' : 'rejected'} successfully!`);
    setIsVerifyOpen(false);
    setSelectedItem(null);
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
          {content.canEdit && (
            <button
              onClick={() => activeTab === 'physical' ? setIsAddProgressOpen(true) : setIsAddFinancialOpen(true)}
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
              + {activeTab === 'physical' ? 'Add Progress' : 'Submit Bill'}
            </button>
          )}
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', gap: '12px', borderBottom: '2px solid #e2e8f0' }}>
          <button
            onClick={() => setActiveTab('physical')}
            style={{
              padding: '12px 24px',
              background: 'none',
              border: 'none',
              borderBottom: activeTab === 'physical' ? '3px solid #3b82f6' : '3px solid transparent',
              color: activeTab === 'physical' ? '#3b82f6' : '#64748b',
              fontSize: '15px',
              fontWeight: '600',
              cursor: 'pointer',
              marginBottom: '-2px',
              transition: 'all 0.2s ease'
            }}
          >
            📊 Physical Progress
          </button>
          {content.canViewFinancial && (
            <button
              onClick={() => setActiveTab('financial')}
              style={{
                padding: '12px 24px',
                background: 'none',
                border: 'none',
                borderBottom: activeTab === 'financial' ? '3px solid #3b82f6' : '3px solid transparent',
                color: activeTab === 'financial' ? '#3b82f6' : '#64748b',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                marginBottom: '-2px',
                transition: 'all 0.2s ease'
              }}
            >
              💰 Financial Progress
            </button>
          )}
        </div>
      </div>

      {/* Physical Progress Tab Content */}
      {activeTab === 'physical' && (
        <>
          {/* Physical Progress Summary Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '24px' }}>
            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #3b82f6'
            }}>
              <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>Total Length (km)</div>
              <div style={{ fontSize: '32px', fontWeight: '700', color: '#1e293b' }}>125.5</div>
              <div style={{ fontSize: '12px', color: '#10b981', marginTop: '4px' }}>↑ 2.5 km this week</div>
            </div>

            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #10b981'
            }}>
              <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>Completed (km)</div>
              <div style={{ fontSize: '32px', fontWeight: '700', color: '#1e293b' }}>90.2</div>
              <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>71.9% complete</div>
            </div>

            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #f59e0b'
            }}>
              <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>In Progress (km)</div>
              <div style={{ fontSize: '32px', fontWeight: '700', color: '#1e293b' }}>28.8</div>
              <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>23.0% ongoing</div>
            </div>

            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #ef4444'
            }}>
              <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>Delayed Items</div>
              <div style={{ fontSize: '32px', fontWeight: '700', color: '#1e293b' }}>3</div>
              <div style={{ fontSize: '12px', color: '#ef4444', marginTop: '4px' }}>Requires attention</div>
            </div>
          </div>

          {/* Recent Physical Progress Entries */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <h4 style={{ margin: '0 0 20px 0', color: '#1e293b' }}>Recent Progress Updates</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {physicalProgressData.map((item, idx) => (
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
        </>
      )}

      {/* Financial Progress Tab Content */}
      {activeTab === 'financial' && content.canViewFinancial && (
        <>
          {/* Financial Summary Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '24px' }}>
            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #3b82f6'
            }}>
              <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>Total Allocation</div>
              <div style={{ fontSize: '28px', fontWeight: '700', color: '#1e293b' }}>₹8,500 Cr</div>
              <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>Sanctioned budget</div>
            </div>

            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #10b981'
            }}>
              <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>Total Expenditure</div>
              <div style={{ fontSize: '28px', fontWeight: '700', color: '#1e293b' }}>₹6,115 Cr</div>
              <div style={{ fontSize: '12px', color: '#10b981', marginTop: '4px' }}>71.9% utilized</div>
            </div>

            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #f59e0b'
            }}>
              <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>Bills Pending Approval</div>
              <div style={{ fontSize: '28px', fontWeight: '700', color: '#1e293b' }}>₹185 Cr</div>
              <div style={{ fontSize: '12px', color: '#f59e0b', marginTop: '4px' }}>2 bills pending</div>
            </div>

            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #8b5cf6'
            }}>
              <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>Payment Released</div>
              <div style={{ fontSize: '28px', fontWeight: '700', color: '#1e293b' }}>₹5,930 Cr</div>
              <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>97.0% of approved</div>
            </div>
          </div>

          {/* Financial vs Physical Progress Chart */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            marginBottom: '24px'
          }}>
            <h4 style={{ margin: '0 0 20px 0', color: '#1e293b' }}>Financial vs Physical Progress</h4>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: '40px',
              padding: '20px'
            }}>
              {/* Physical Progress Bar */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '14px', color: '#64748b', fontWeight: '600' }}>Physical Progress</span>
                  <span style={{ fontSize: '14px', color: '#1e293b', fontWeight: '700' }}>71.9%</span>
                </div>
                <div style={{
                  height: '24px',
                  background: '#e2e8f0',
                  borderRadius: '12px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: '71.9%',
                    height: '100%',
                    background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    paddingRight: '12px',
                    color: 'white',
                    fontSize: '12px',
                    fontWeight: '600'
                  }}>
                    90.2 km / 125.5 km
                  </div>
                </div>
              </div>

              {/* Financial Progress Bar */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '14px', color: '#64748b', fontWeight: '600' }}>Financial Progress</span>
                  <span style={{ fontSize: '14px', color: '#1e293b', fontWeight: '700' }}>71.9%</span>
                </div>
                <div style={{
                  height: '24px',
                  background: '#e2e8f0',
                  borderRadius: '12px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: '71.9%',
                    height: '100%',
                    background: 'linear-gradient(90deg, #10b981, #059669)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    paddingRight: '12px',
                    color: 'white',
                    fontSize: '12px',
                    fontWeight: '600'
                  }}>
                    ₹6,115 Cr / ₹8,500 Cr
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Alignment Indicator */}
            <div style={{
              marginTop: '20px',
              padding: '16px',
              background: '#f0fdf4',
              border: '1px solid #86efac',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '20px',
                fontWeight: '700'
              }}>
                ✓
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#065f46' }}>
                  Progress Aligned
                </div>
                <div style={{ fontSize: '12px', color: '#047857' }}>
                  Financial and physical progress are matching. No significant deviation detected.
                </div>
              </div>
            </div>
          </div>

          {/* Running Account Bills (RAB) Table */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <h4 style={{ margin: '0 0 20px 0', color: '#1e293b' }}>Running Account Bills (RAB)</h4>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #e2e8f0', textAlign: 'left' }}>
                    <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Bill No.</th>
                    <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Date</th>
                    {role !== 'CONTRACTOR' && (
                      <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Contractor</th>
                    )}
                    <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Work Value</th>
                    <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Deductions</th>
                    <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Bill Amount</th>
                    <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Approved</th>
                    <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Paid</th>
                    <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Status</th>
                    <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {financialProgressData.map((bill, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '16px', color: '#1e293b', fontSize: '14px', fontWeight: '600' }}>{bill.billNo}</td>
                      <td style={{ padding: '16px', color: '#64748b', fontSize: '14px' }}>{bill.billDate}</td>
                      {role !== 'CONTRACTOR' && (
                        <td style={{ padding: '16px', color: '#64748b', fontSize: '14px' }}>{bill.contractor}</td>
                      )}
                      <td style={{ padding: '16px', color: '#1e293b', fontSize: '14px', fontWeight: '600' }}>{bill.workValue}</td>
                      <td style={{ padding: '16px', color: '#ef4444', fontSize: '14px' }}>{bill.deductions}</td>
                      <td style={{ padding: '16px', color: '#1e293b', fontSize: '14px', fontWeight: '600' }}>{bill.billAmount}</td>
                      <td style={{ padding: '16px', color: '#10b981', fontSize: '14px', fontWeight: '600' }}>{bill.approvedAmount}</td>
                      <td style={{ padding: '16px', color: '#8b5cf6', fontSize: '14px', fontWeight: '600' }}>{bill.paidAmount}</td>
                      <td style={{ padding: '16px' }}>
                        <span style={{
                          padding: '4px 12px',
                          borderRadius: '12px',
                          fontSize: '12px',
                          fontWeight: '600',
                          background: bill.status === 'Approved' ? '#d1fae5' : bill.status === 'Pending Approval' ? '#fef3c7' : '#dbeafe',
                          color: bill.status === 'Approved' ? '#065f46' : bill.status === 'Pending Approval' ? '#92400e' : '#1e40af'
                        }}>
                          {bill.status}
                        </span>
                      </td>
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

      {/* Add Physical Progress Modal */}
      <Modal
        isOpen={isAddProgressOpen}
        onClose={() => setIsAddProgressOpen(false)}
        title="Add Physical Progress Entry"
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

      {/* Add Financial Progress / Submit Bill Modal */}
      <Modal
        isOpen={isAddFinancialOpen}
        onClose={() => setIsAddFinancialOpen(false)}
        title="Submit Running Account Bill (RAB)"
        width="800px"
      >
        <div style={{
          background: '#f8fafc',
          padding: '16px',
          borderRadius: '8px',
          marginBottom: '20px'
        }}>
          <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>BILL TYPE</div>
          <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>
            Running Account Bill (RAB)
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <FormField label="Bill Number" placeholder="e.g., RAB-2026-004" required />
          <FormField label="Bill Date" type="date" required />
          <FormField label="Billing Period From" type="date" required />
          <FormField label="Billing Period To" type="date" required />
        </div>

        <div style={{ marginTop: '20px' }}>
          <h4 style={{ fontSize: '14px', color: '#1e293b', marginBottom: '12px' }}>Work Measurement Details</h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <FormField label="Total Work Value (₹)" type="number" placeholder="e.g., 35000000" required />
            <FormField label="Previous Bill Amount (₹)" type="number" placeholder="e.g., 5000000" />
            <FormField label="Current Bill Amount (₹)" type="number" placeholder="e.g., 30000000" required />
            <FormField label="Cumulative Amount (₹)" type="number" placeholder="Auto-calculated" />
          </div>
        </div>

        <div style={{ marginTop: '20px' }}>
          <h4 style={{ fontSize: '14px', color: '#1e293b', marginBottom: '12px' }}>Deductions</h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <FormField label="Security Deposit (₹)" type="number" placeholder="e.g., 300000" />
            <FormField label="Labour Cess (₹)" type="number" placeholder="e.g., 100000" />
            <FormField label="Income Tax (TDS) (₹)" type="number" placeholder="e.g., 200000" />
            <FormField label="Other Deductions (₹)" type="number" placeholder="e.g., 50000" />
          </div>
        </div>

        <div style={{ marginTop: '20px' }}>
          <h4 style={{ fontSize: '14px', color: '#1e293b', marginBottom: '12px' }}>Net Payable Calculation</h4>
          <div style={{
            padding: '16px',
            background: '#f0f9ff',
            border: '1px solid #bae6fd',
            borderRadius: '8px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ color: '#64748b', fontSize: '14px' }}>Gross Amount:</span>
              <span style={{ color: '#1e293b', fontSize: '14px', fontWeight: '600' }}>₹3,00,00,000</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ color: '#64748b', fontSize: '14px' }}>Total Deductions:</span>
              <span style={{ color: '#ef4444', fontSize: '14px', fontWeight: '600' }}>- ₹6,50,000</span>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingTop: '8px',
              borderTop: '2px solid #3b82f6'
            }}>
              <span style={{ color: '#1e293b', fontSize: '16px', fontWeight: '700' }}>Net Payable:</span>
              <span style={{ color: '#10b981', fontSize: '18px', fontWeight: '700' }}>₹2,93,50,000</span>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '20px' }}>
          <h4 style={{ fontSize: '14px', color: '#1e293b', marginBottom: '12px' }}>Supporting Documents</h4>
          <FormField label="Measurement Book (MB) Reference" placeholder="e.g., MB-2026-045" required />
          <FormField label="Upload Bill Copy" type="file" required />
          <FormField label="Upload MB Abstract" type="file" required />
          <FormField label="Upload Supporting Documents" type="file" />
        </div>

        <FormField label="Remarks / Notes" type="textarea" rows={3} />

        <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
          <button
            onClick={handleSubmitFinancial}
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
            Submit Bill
          </button>
          <button
            onClick={() => setIsAddFinancialOpen(false)}
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