import { useState } from 'react';
import type { Role } from '../roles';
import Modal, { ModalButton } from './components/Modal';
import FormField from './components/FormField';
import { FileText, Download, Eye, Plus, TrendingUp, Clock, CheckCircle, AlertCircle } from 'lucide-react';

export default function Bills({ role }: { role: Role }) {
  const [isSubmitBillOpen, setIsSubmitBillOpen] = useState(false);
  const [isViewBillOpen, setIsViewBillOpen] = useState(false);
  const [selectedBill, setSelectedBill] = useState<any>(null);

  const billsData = [
    { billNo: 'BILL-2024-156', desc: 'Earthwork - Chainage 12+500 to 15+000', amount: '₹12.5 Cr', date: '2026-01-28', status: 'Approved' },
    { billNo: 'BILL-2024-155', desc: 'Subgrade Preparation Package 3', amount: '₹8.2 Cr', date: '2026-01-25', status: 'Under Review' },
    { billNo: 'BILL-2024-154', desc: 'Base Course Section A', amount: '₹15.8 Cr', date: '2026-01-20', status: 'Paid' },
  ];

  const handleSubmitBill = () => {
    alert('Bill submitted successfully!');
    setIsSubmitBillOpen(false);
  };

  return (
    <div style={{ padding: '32px', background: '#f8fafc', minHeight: '100vh' }}>
      {/* Header Card */}
      <div style={{
        background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
        borderRadius: '20px',
        padding: '32px',
        marginBottom: '32px',
        boxShadow: '0 4px 20px rgba(59, 130, 246, 0.2)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ margin: '0 0 8px 0', color: 'white', fontSize: '28px', fontWeight: '800' }}>
              Bill Management
            </h2>
            <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.9)', fontSize: '15px' }}>
              Submit bills, track approval status, and view payment history
            </p>
          </div>
          <button
            onClick={() => setIsSubmitBillOpen(true)}
            style={{
              padding: '12px 24px',
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              color: 'white',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '12px',
              fontSize: '15px',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
            }}
          >
            <Plus size={18} />
            Submit New Bill
          </button>
        </div>
      </div>

      {/* Bill Stats */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '24px', 
        marginBottom: '32px' 
      }}>
        {[
          { label: 'Pending Approval', value: '2', icon: <Clock size={24} />, color: '#f59e0b', bgGradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' },
          { label: 'Approved', value: '15', icon: <CheckCircle size={24} />, color: '#3b82f6', bgGradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' },
          { label: 'Paid', value: '₹18 Cr', icon: <TrendingUp size={24} />, color: '#10b981', bgGradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' },
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

      {/* Bills Table */}
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '28px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        border: '1px solid #e2e8f0'
      }}>
        <h3 style={{ margin: '0 0 24px 0', color: '#1e293b', fontSize: '20px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FileText size={24} style={{ color: '#3b82f6' }} />
          My Bills
        </h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0' }}>
            <thead>
              <tr>
                {['Bill No.', 'Work Description', 'Amount', 'Submitted On', 'Status', 'Action'].map((header, idx) => (
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
              {billsData.map((bill, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '20px 16px', color: '#3b82f6', fontSize: '14px', fontWeight: '700' }}>{bill.billNo}</td>
                  <td style={{ padding: '20px 16px', color: '#1e293b', fontSize: '14px', fontWeight: '500' }}>{bill.desc}</td>
                  <td style={{ padding: '20px 16px', color: '#1e293b', fontSize: '15px', fontWeight: '700' }}>{bill.amount}</td>
                  <td style={{ padding: '20px 16px', color: '#64748b', fontSize: '14px' }}>{bill.date}</td>
                  <td style={{ padding: '20px 16px' }}>
                    <span style={{
                      padding: '6px 14px',
                      borderRadius: '10px',
                      fontSize: '12px',
                      fontWeight: '700',
                      background: bill.status === 'Paid' ? '#d1fae5' : bill.status === 'Approved' ? '#dbeafe' : '#fef3c7',
                      color: bill.status === 'Paid' ? '#065f46' : bill.status === 'Approved' ? '#1e40af' : '#92400e',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {bill.status}
                    </span>
                  </td>
                  <td style={{ padding: '20px 16px' }}>
                    <button
                      onClick={() => {
                        setSelectedBill(bill);
                        setIsViewBillOpen(true);
                      }}
                      style={{
                        padding: '8px 20px',
                        background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
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
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <Eye size={14} />
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Submit Bill Modal */}
      <Modal
        isOpen={isSubmitBillOpen}
        onClose={() => setIsSubmitBillOpen(false)}
        title="Submit New Bill"
        width="800px"
        footer={
          <>
            <ModalButton variant="secondary" onClick={() => setIsSubmitBillOpen(false)}>
              Cancel
            </ModalButton>
            <ModalButton variant="success" onClick={handleSubmitBill}>
              Submit Bill
            </ModalButton>
          </>
        }
      >
        <FormField
          label="Work Package"
          type="select"
          options={[
            'Package 1 - Earthwork',
            'Package 2 - Subgrade',
            'Package 3 - Base Course',
          ]}
          required
        />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <FormField label="Bill Period From" type="date" required />
          <FormField label="Bill Period To" type="date" required />
        </div>
        <FormField label="Work Description" type="textarea" rows={3} required />
        
        <div style={{ 
          background: '#f0f9ff', 
          padding: '20px', 
          borderRadius: '12px',
          marginBottom: '20px',
          border: '1px solid #bfdbfe'
        }}>
          <h4 style={{ margin: '0 0 16px 0', fontSize: '15px', color: '#1e40af', fontWeight: '700' }}>Bill Amount Breakdown</h4>
          <FormField label="Quantity Executed" placeholder="e.g., 5000 cum" />
          <FormField label="Rate per Unit" placeholder="e.g., ₹250" />
          <FormField label="Total Amount (₹)" placeholder="e.g., 12,50,000" required />
        </div>

        <FormField label="Attach Supporting Documents" type="file" helperText="Upload bills, invoices, and receipts" />
        <FormField label="Attach MB Entries" type="file" helperText="Measurement book entries" />
        <FormField label="Attach Photos" type="file" helperText="Geo-tagged site photos" />
        <FormField label="Remarks" type="textarea" rows={2} />
      </Modal>

      {/* View Bill Modal */}
      <Modal
        isOpen={isViewBillOpen}
        onClose={() => {
          setIsViewBillOpen(false);
          setSelectedBill(null);
        }}
        title="Bill Details"
        width="800px"
      >
        {selectedBill && (
          <>
            <div style={{
              background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
              padding: '24px',
              borderRadius: '16px',
              marginBottom: '24px',
              border: '1px solid #bfdbfe'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Bill Number</div>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b' }}>{selectedBill.billNo}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Amount</div>
                  <div style={{ fontSize: '24px', fontWeight: '800', color: '#10b981' }}>{selectedBill.amount}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Submitted On</div>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>{selectedBill.date}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Status</div>
                  <span style={{
                    display: 'inline-block',
                    padding: '6px 14px',
                    borderRadius: '10px',
                    fontSize: '12px',
                    fontWeight: '700',
                    background: selectedBill.status === 'Paid' ? '#d1fae5' : selectedBill.status === 'Approved' ? '#dbeafe' : '#fef3c7',
                    color: selectedBill.status === 'Paid' ? '#065f46' : selectedBill.status === 'Approved' ? '#1e40af' : '#92400e'
                  }}>
                    {selectedBill.status}
                  </span>
                </div>
              </div>
              <div style={{ marginTop: '20px' }}>
                <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Work Description</div>
                <div style={{ fontSize: '15px', color: '#1e293b', fontWeight: '500' }}>{selectedBill.desc}</div>
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '16px', color: '#1e293b', marginBottom: '16px', fontWeight: '700' }}>Attached Documents</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['MB_Entry_Jan2026.pdf', 'Site_Photos.zip', 'Quality_Certificate.pdf'].map((doc) => (
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
                      e.currentTarget.style.borderColor = '#3b82f6';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#f8fafc';
                      e.currentTarget.style.borderColor = '#e2e8f0';
                    }}
                  >
                    <span style={{ fontSize: '14px', color: '#1e293b', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <FileText size={18} style={{ color: '#3b82f6' }} />
                      {doc}
                    </span>
                    <button
                      style={{
                        padding: '6px 16px',
                        background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '13px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <Download size={14} />
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
}