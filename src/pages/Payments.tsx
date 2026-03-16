import { useState } from 'react';
import type { Role } from '../roles';
import Modal from './components/Modal';
import FormField from './components/FormField';

export default function Payments({ role }: { role: Role }) {
  const [isProcessPaymentOpen, setIsProcessPaymentOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<any>(null);

  const paymentsData = [
    { billNo: 'BILL-2024-156', contractor: 'ABC Constructions', amount: '₹12.5 Cr', status: 'Approved', date: '2026-01-28' },
    { billNo: 'BILL-2024-155', contractor: 'XYZ Builders', amount: '₹8.2 Cr', status: 'Pending', date: '2026-01-27' },
    { billNo: 'BILL-2024-154', contractor: 'PQR Infrastructure', amount: '₹15.8 Cr', status: 'Approved', date: '2026-01-26' },
    { billNo: 'BILL-2024-153', contractor: 'LMN Contractors', amount: '₹6.5 Cr', status: 'Disbursed', date: '2026-01-25' },
  ];

  const handlePaymentAction = (action: 'approve' | 'reject' | 'disburse') => {
    const actionText = action === 'approve' ? 'approved' : action === 'reject' ? 'rejected' : 'disbursed';
    alert(`Payment ${actionText} successfully!`);
    setIsProcessPaymentOpen(false);
    setSelectedPayment(null);
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
        <h3 style={{ margin: '0 0 16px 0', color: '#1e293b' }}>Payment Management</h3>
        <p style={{ color: '#64748b', margin: 0 }}>
          Manage bill processing, payment approvals, and fund disbursement tracking
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '24px' }}>
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          borderLeft: '4px solid #10b981'
        }}>
          <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>Bills Pending Approval</div>
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#1e293b' }}>24</div>
        </div>

        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          borderLeft: '4px solid #3b82f6'
        }}>
          <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>Bills Approved</div>
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#1e293b' }}>156</div>
        </div>

        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          borderLeft: '4px solid #f59e0b'
        }}>
          <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>Total Disbursed</div>
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#1e293b' }}>₹245 Cr</div>
        </div>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <h4 style={{ margin: '0 0 20px 0', color: '#1e293b' }}>Recent Payment Transactions</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e2e8f0', textAlign: 'left' }}>
              <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Bill No.</th>
              <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Contractor</th>
              <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Amount</th>
              <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Status</th>
              <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Date</th>
              <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {paymentsData.map((item, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '16px', color: '#1e293b', fontSize: '14px' }}>{item.billNo}</td>
                <td style={{ padding: '16px', color: '#1e293b', fontSize: '14px' }}>{item.contractor}</td>
                <td style={{ padding: '16px', color: '#1e293b', fontSize: '14px', fontWeight: '600' }}>{item.amount}</td>
                <td style={{ padding: '16px' }}>
                  <span style={{
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '600',
                    background: item.status === 'Disbursed' ? '#d1fae5' : item.status === 'Approved' ? '#dbeafe' : '#fef3c7',
                    color: item.status === 'Disbursed' ? '#065f46' : item.status === 'Approved' ? '#1e40af' : '#92400e'
                  }}>
                    {item.status}
                  </span>
                </td>
                <td style={{ padding: '16px', color: '#64748b', fontSize: '14px' }}>{item.date}</td>
                <td style={{ padding: '16px' }}>
                  {item.status !== 'Disbursed' && (
                    <button
                      onClick={() => {
                        setSelectedPayment(item);
                        setIsProcessPaymentOpen(true);
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
                      Process
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Process Payment Modal */}
      <Modal
        isOpen={isProcessPaymentOpen}
        onClose={() => {
          setIsProcessPaymentOpen(false);
          setSelectedPayment(null);
        }}
        title="Process Payment"
        width="700px"
      >
        {selectedPayment && (
          <>
            <div style={{
              background: '#f8fafc',
              padding: '20px',
              borderRadius: '8px',
              marginBottom: '20px'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Bill Number</div>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>{selectedPayment.billNo}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Contractor</div>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>{selectedPayment.contractor}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Bill Amount</div>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>{selectedPayment.amount}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Current Status</div>
                  <span style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '600',
                    background: selectedPayment.status === 'Approved' ? '#dbeafe' : '#fef3c7',
                    color: selectedPayment.status === 'Approved' ? '#1e40af' : '#92400e'
                  }}>
                    {selectedPayment.status}
                  </span>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontSize: '14px', color: '#1e293b', marginBottom: '12px' }}>Bill Documents</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {['Work_Certificate.pdf', 'MB_Entries.pdf', 'Quality_Approval.pdf'].map((doc) => (
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

            {selectedPayment.status === 'Pending' && (
              <>
                <FormField label="Verification Remarks" type="textarea" rows={3} />
                <FormField label="Budget Head" type="select" options={['Civil Works', 'Road Construction', 'Bridge Works']} />
                <FormField label="Fund Allocation Reference" placeholder="e.g., FA-2024-156" />

                <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                  <button
                    onClick={() => handlePaymentAction('approve')}
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
                    ✓ Approve Bill
                  </button>
                  <button
                    onClick={() => handlePaymentAction('reject')}
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
                    ✗ Reject Bill
                  </button>
                </div>
              </>
            )}

            {selectedPayment.status === 'Approved' && (
              <>
                <FormField label="Payment Reference Number" placeholder="e.g., PAY-2024-156" required />
                <FormField label="Payment Date" type="date" required />
                <FormField label="Payment Mode" type="select" options={['RTGS', 'NEFT', 'Cheque']} required />
                <FormField label="Bank Details Verified" type="select" options={['Yes', 'No']} required />
                <FormField label="Disbursement Remarks" type="textarea" rows={2} />

                <button
                  onClick={() => handlePaymentAction('disburse')}
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
                  💰 Disburse Payment
                </button>
              </>
            )}
          </>
        )}
      </Modal>
    </div>
  );
}