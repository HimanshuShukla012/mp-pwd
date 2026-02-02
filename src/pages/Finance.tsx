import { useState } from 'react';
import type { Role } from '../roles';
import Modal, { ModalButton } from './components/Modal';
import FormField from './components/FormField';
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  PieChart as PieChartIcon, 
  FileText, 
  Download,
  Upload,
  AlertCircle,
  CheckCircle,
  Clock,
  Eye,
  Plus
} from 'lucide-react';

export default function Finance({ role }: { role: Role }) {
  const [isUploadUCOpen, setIsUploadUCOpen] = useState(false);
  const [isBudgetReallocateOpen, setIsBudgetReallocateOpen] = useState(false);
  const [isViewDetailsOpen, setIsViewDetailsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const getFinanceContent = () => {
    switch (role) {
      case 'PMU':
        return {
          title: 'Program Finance Dashboard',
          subtitle: 'Overall budget allocation, utilization, and fund management',
          canReallocate: true,
          canApproveUC: true,
          showAllPIUs: true
        };
      case 'PIU':
        return {
          title: 'PIU Financial Management',
          subtitle: 'Package-wise budget tracking and utilization certificates',
          canReallocate: false,
          canApproveUC: false,
          showAllPIUs: false
        };
      default:
        return {
          title: 'Financial Overview',
          subtitle: 'Budget and expenditure tracking',
          canReallocate: false,
          canApproveUC: false,
          showAllPIUs: false
        };
    }
  };

  const content = getFinanceContent();

  // Financial Summary Data
  const financialSummary = {
    totalBudget: '₹32,000',
    totalReleased: '₹24,500',
    totalUtilized: '₹18,750',
    pendingBills: '₹2,150',
    utilizationRate: 76.5,
    releaseRate: 76.6
  };

  // Budget Allocation by Category
  const budgetCategories = [
    { category: 'Civil Works', allocated: '₹22,000 Cr', utilized: '₹16,500 Cr', utilization: 75, variance: -5 },
    { category: 'Road Safety', allocated: '₹3,500 Cr', utilized: '₹2,800 Cr', utilization: 80, variance: +5 },
    { category: 'Environmental & Social', allocated: '₹2,000 Cr', utilized: '₹1,450 Cr', utilization: 72.5, variance: -2.5 },
    { category: 'Consultancy', allocated: '₹1,800 Cr', utilized: '₹1,350 Cr', utilization: 75, variance: 0 },
    { category: 'Contingency', allocated: '₹2,700 Cr', utilized: '₹650 Cr', utilization: 24, variance: -1 },
  ];

  // Fund Release by DLI
  const dliReleases = [
    { dli: 'DLI-1', description: 'Road Length Improved', amount: '₹400 Cr', released: '₹400 Cr', status: 'Released', date: '2025-12-15' },
    { dli: 'DLI-2', description: 'Quality Standards Met', amount: '₹350 Cr', released: '₹350 Cr', status: 'Released', date: '2025-11-20' },
    { dli: 'DLI-3', description: 'Safety Audits', amount: '₹200 Cr', released: '₹0', status: 'Pending Verification', date: '-' },
    { dli: 'DLI-4', description: 'Environmental Compliance', amount: '₹150 Cr', released: '₹0', status: 'Under Review', date: '-' },
  ];

  // Utilization Certificates
  const utilizationCertificates = [
    { ucNo: 'UC-2024-156', period: 'Q3 FY 2024-25', amount: '₹2,450 Cr', submittedBy: 'PIU-Central', submittedOn: '2026-01-28', status: 'Pending Approval' },
    { ucNo: 'UC-2024-155', period: 'Q2 FY 2024-25', amount: '₹2,280 Cr', submittedBy: 'PIU-East', submittedOn: '2026-01-25', status: 'Approved' },
    { ucNo: 'UC-2024-154', period: 'Q2 FY 2024-25', amount: '₹1,950 Cr', submittedBy: 'PIU-North', submittedOn: '2026-01-20', status: 'Approved' },
    { ucNo: 'UC-2024-153', period: 'Q1 FY 2024-25', amount: '₹2,120 Cr', submittedBy: 'PIU-Central', submittedOn: '2025-12-15', status: 'Approved' },
  ];

  const handleUploadUC = () => {
    alert('Utilization Certificate uploaded successfully!');
    setIsUploadUCOpen(false);
  };

  const handleBudgetReallocation = () => {
    alert('Budget reallocation request submitted for approval!');
    setIsBudgetReallocateOpen(false);
  };

  const handleApproveUC = (action: 'approve' | 'reject') => {
    alert(`UC ${action === 'approve' ? 'approved' : 'rejected'} successfully!`);
    setIsViewDetailsOpen(false);
    setSelectedItem(null);
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
              {content.title}
            </h2>
            <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.9)', fontSize: '15px' }}>
              {content.subtitle}
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            {role === 'PIU' && (
              <button
                onClick={() => setIsUploadUCOpen(true)}
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
                <Upload size={18} />
                Upload UC
              </button>
            )}
            {content.canReallocate && (
              <button
                onClick={() => setIsBudgetReallocateOpen(true)}
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
                Budget Reallocation
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Financial Summary Cards */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '24px', 
        marginBottom: '32px' 
      }}>
        {[
          { 
            label: 'Total Sanctioned Budget', 
            value: financialSummary.totalBudget, 
            unit: 'Cr', 
            icon: <DollarSign size={24} />, 
            color: '#3b82f6', 
            bgGradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' 
          },
          { 
            label: 'Funds Released', 
            value: financialSummary.totalReleased, 
            unit: 'Cr', 
            subtitle: `${financialSummary.releaseRate}% of budget`,
            icon: <TrendingUp size={24} />, 
            color: '#10b981', 
            bgGradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' 
          },
          { 
            label: 'Funds Utilized', 
            value: financialSummary.totalUtilized, 
            unit: 'Cr', 
            subtitle: `${financialSummary.utilizationRate}% utilization`,
            icon: <PieChartIcon size={24} />, 
            color: '#8b5cf6', 
            bgGradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)' 
          },
          { 
            label: 'Pending Bills', 
            value: financialSummary.pendingBills, 
            unit: 'Cr', 
            icon: <Clock size={24} />, 
            color: '#f59e0b', 
            bgGradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' 
          },
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
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: stat.subtitle ? '8px' : '0' }}>
              <div style={{ fontSize: '36px', fontWeight: '800', color: '#1e293b', letterSpacing: '-1px' }}>
                {stat.value}
              </div>
              {stat.unit && (
                <div style={{ fontSize: '18px', color: '#64748b', fontWeight: '600' }}>
                  {stat.unit}
                </div>
              )}
            </div>
            {stat.subtitle && (
              <div style={{ fontSize: '13px', color: '#64748b', fontWeight: '500' }}>
                {stat.subtitle}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Budget Allocation by Category */}
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '28px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        marginBottom: '32px',
        border: '1px solid #e2e8f0'
      }}>
        <h3 style={{ margin: '0 0 24px 0', color: '#1e293b', fontSize: '20px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <PieChartIcon size={24} style={{ color: '#8b5cf6' }} />
          Budget Allocation by Category
        </h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0' }}>
            <thead>
              <tr>
                {['Category', 'Allocated', 'Utilized', 'Utilization %', 'Variance', 'Status'].map((header, idx) => (
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
              {budgetCategories.map((item, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '20px 16px', color: '#1e293b', fontSize: '14px', fontWeight: '600' }}>{item.category}</td>
                  <td style={{ padding: '20px 16px', color: '#1e293b', fontSize: '15px', fontWeight: '700' }}>{item.allocated}</td>
                  <td style={{ padding: '20px 16px', color: '#10b981', fontSize: '15px', fontWeight: '700' }}>{item.utilized}</td>
                  <td style={{ padding: '20px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        flex: 1,
                        height: '8px',
                        background: '#f1f5f9',
                        borderRadius: '4px',
                        overflow: 'hidden',
                        minWidth: '100px'
                      }}>
                        <div style={{
                          width: `${item.utilization}%`,
                          height: '100%',
                          background: item.utilization >= 80 ? '#10b981' : item.utilization >= 60 ? '#3b82f6' : item.utilization >= 40 ? '#f59e0b' : '#ef4444',
                          borderRadius: '4px',
                          transition: 'width 0.5s ease'
                        }} />
                      </div>
                      <span style={{ fontSize: '14px', fontWeight: '700', color: '#1e293b', minWidth: '50px' }}>
                        {item.utilization}%
                      </span>
                    </div>
                  </td>
                  <td style={{ padding: '20px 16px' }}>
                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '14px',
                      fontWeight: '700',
                      color: item.variance >= 0 ? '#10b981' : '#ef4444'
                    }}>
                      {item.variance >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                      {item.variance >= 0 ? '+' : ''}{item.variance}%
                    </span>
                  </td>
                  <td style={{ padding: '20px 16px' }}>
                    <span style={{
                      padding: '6px 14px',
                      borderRadius: '10px',
                      fontSize: '12px',
                      fontWeight: '700',
                      background: item.utilization >= 70 ? '#d1fae5' : item.utilization >= 50 ? '#dbeafe' : '#fef3c7',
                      color: item.utilization >= 70 ? '#065f46' : item.utilization >= 50 ? '#1e40af' : '#92400e',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {item.utilization >= 70 ? 'On Track' : item.utilization >= 50 ? 'Moderate' : 'Low'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* DLI-wise Fund Release */}
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '28px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        marginBottom: '32px',
        border: '1px solid #e2e8f0'
      }}>
        <h3 style={{ margin: '0 0 24px 0', color: '#1e293b', fontSize: '20px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <TrendingUp size={24} style={{ color: '#10b981' }} />
          DLI-wise Fund Release
        </h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0' }}>
            <thead>
              <tr>
                {['DLI', 'Description', 'Linked Amount', 'Released', 'Status', 'Release Date'].map((header, idx) => (
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
              {dliReleases.map((item, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '20px 16px', color: '#3b82f6', fontSize: '14px', fontWeight: '700' }}>{item.dli}</td>
                  <td style={{ padding: '20px 16px', color: '#1e293b', fontSize: '14px', fontWeight: '500' }}>{item.description}</td>
                  <td style={{ padding: '20px 16px', color: '#1e293b', fontSize: '15px', fontWeight: '700' }}>{item.amount}</td>
                  <td style={{ padding: '20px 16px', color: item.status === 'Released' ? '#10b981' : '#64748b', fontSize: '15px', fontWeight: '700' }}>
                    {item.released}
                  </td>
                  <td style={{ padding: '20px 16px' }}>
                    <span style={{
                      padding: '6px 14px',
                      borderRadius: '10px',
                      fontSize: '12px',
                      fontWeight: '700',
                      background: item.status === 'Released' ? '#d1fae5' : item.status === 'Under Review' ? '#dbeafe' : '#fef3c7',
                      color: item.status === 'Released' ? '#065f46' : item.status === 'Under Review' ? '#1e40af' : '#92400e',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {item.status}
                    </span>
                  </td>
                  <td style={{ padding: '20px 16px', color: '#64748b', fontSize: '14px' }}>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Utilization Certificates */}
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '28px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        border: '1px solid #e2e8f0'
      }}>
        <h3 style={{ margin: '0 0 24px 0', color: '#1e293b', fontSize: '20px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FileText size={24} style={{ color: '#3b82f6' }} />
          Utilization Certificates
        </h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0' }}>
            <thead>
              <tr>
                {['UC No.', 'Period', 'Amount', content.showAllPIUs ? 'Submitted By' : null, 'Submitted On', 'Status', 'Action'].filter(Boolean).map((header, idx) => (
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
              {utilizationCertificates.map((item, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '20px 16px', color: '#3b82f6', fontSize: '14px', fontWeight: '700' }}>{item.ucNo}</td>
                  <td style={{ padding: '20px 16px', color: '#1e293b', fontSize: '14px', fontWeight: '600' }}>{item.period}</td>
                  <td style={{ padding: '20px 16px', color: '#1e293b', fontSize: '15px', fontWeight: '700' }}>{item.amount}</td>
                  {content.showAllPIUs && (
                    <td style={{ padding: '20px 16px', color: '#64748b', fontSize: '14px' }}>{item.submittedBy}</td>
                  )}
                  <td style={{ padding: '20px 16px', color: '#64748b', fontSize: '14px' }}>{item.submittedOn}</td>
                  <td style={{ padding: '20px 16px' }}>
                    <span style={{
                      padding: '6px 14px',
                      borderRadius: '10px',
                      fontSize: '12px',
                      fontWeight: '700',
                      background: item.status === 'Approved' ? '#d1fae5' : '#fef3c7',
                      color: item.status === 'Approved' ? '#065f46' : '#92400e',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {item.status}
                    </span>
                  </td>
                  <td style={{ padding: '20px 16px' }}>
                    <button
                      onClick={() => {
                        setSelectedItem(item);
                        setIsViewDetailsOpen(true);
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
                      {content.canApproveUC && item.status === 'Pending Approval' ? 'Review' : 'View'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Upload UC Modal (PIU) */}
      <Modal
        isOpen={isUploadUCOpen}
        onClose={() => setIsUploadUCOpen(false)}
        title="Upload Utilization Certificate"
        width="800px"
        footer={
          <>
            <ModalButton variant="secondary" onClick={() => setIsUploadUCOpen(false)}>
              Cancel
            </ModalButton>
            <ModalButton variant="success" onClick={handleUploadUC}>
              Submit UC
            </ModalButton>
          </>
        }
      >
        <FormField
          label="Reporting Period"
          type="select"
          options={[
            'Q4 FY 2024-25',
            'Q3 FY 2024-25',
            'Q2 FY 2024-25',
            'Q1 FY 2024-25',
          ]}
          required
        />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <FormField label="Period From" type="date" required />
          <FormField label="Period To" type="date" required />
        </div>
        
        <div style={{ 
          background: '#f0f9ff', 
          padding: '20px', 
          borderRadius: '12px',
          marginBottom: '20px',
          border: '1px solid #bfdbfe'
        }}>
          <h4 style={{ margin: '0 0 16px 0', fontSize: '15px', color: '#1e40af', fontWeight: '700' }}>Fund Utilization Details</h4>
          <FormField label="Opening Balance (₹ Cr)" type="number" placeholder="e.g., 1500" required />
          <FormField label="Funds Received During Period (₹ Cr)" type="number" placeholder="e.g., 2500" required />
          <FormField label="Total Expenditure (₹ Cr)" type="number" placeholder="e.g., 2450" required />
          <FormField label="Closing Balance (₹ Cr)" type="number" placeholder="e.g., 1550" required />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ fontSize: '15px', color: '#1e293b', marginBottom: '12px', fontWeight: '700' }}>Supporting Documents</h4>
          <FormField label="Audited Statement of Expenditure" type="file" required helperText="PDF format, certified by CA" />
          <FormField label="Bank Reconciliation Statement" type="file" required />
          <FormField label="Asset Register (if applicable)" type="file" />
          <FormField label="Physical Progress Report" type="file" required />
        </div>

        <FormField label="Remarks / Notes" type="textarea" rows={3} />

        <div style={{
          padding: '16px',
          background: '#fef3c7',
          borderRadius: '12px',
          border: '1px solid #fde68a',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '12px'
        }}>
          <AlertCircle size={20} style={{ color: '#92400e', flexShrink: 0, marginTop: '2px' }} />
          <div>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#92400e', marginBottom: '4px' }}>
              Important Guidelines
            </div>
            <ul style={{ fontSize: '13px', color: '#78350f', margin: '8px 0 0 0', paddingLeft: '20px' }}>
              <li>All statements must be audited by a Chartered Accountant</li>
              <li>Ensure all amounts are in ₹ Crores</li>
              <li>Opening Balance must match previous period's Closing Balance</li>
              <li>All supporting documents must be attested</li>
            </ul>
          </div>
        </div>
      </Modal>

      {/* Budget Reallocation Modal (PMU) */}
      <Modal
        isOpen={isBudgetReallocateOpen}
        onClose={() => setIsBudgetReallocateOpen(false)}
        title="Budget Reallocation Request"
        width="800px"
        footer={
          <>
            <ModalButton variant="secondary" onClick={() => setIsBudgetReallocateOpen(false)}>
              Cancel
            </ModalButton>
            <ModalButton variant="primary" onClick={handleBudgetReallocation}>
              Submit Request
            </ModalButton>
          </>
        }
      >
        <div style={{
          padding: '16px',
          background: '#dbeafe',
          borderRadius: '12px',
          marginBottom: '24px',
          border: '1px solid #bfdbfe'
        }}>
          <div style={{ fontSize: '13px', fontWeight: '600', color: '#1e40af', marginBottom: '8px' }}>
            ℹ️ Budget Reallocation Guidelines
          </div>
          <div style={{ fontSize: '13px', color: '#1e3a8a' }}>
            Reallocation between budget heads requires approval from lender and must not exceed 10% of category allocation without prior consent.
          </div>
        </div>

        <h4 style={{ fontSize: '15px', color: '#1e293b', marginBottom: '16px', fontWeight: '700' }}>Transfer From</h4>
        <FormField
          label="Source Category"
          type="select"
          options={budgetCategories.map(c => c.category)}
          required
        />
        <FormField label="Amount to Transfer (₹ Cr)" type="number" placeholder="e.g., 500" required />
        <FormField label="Available Balance in Source (₹ Cr)" value="5,000" disabled />

        <hr style={{ margin: '24px 0', border: 'none', borderTop: '2px solid #e2e8f0' }} />

        <h4 style={{ fontSize: '15px', color: '#1e293b', marginBottom: '16px', fontWeight: '700' }}>Transfer To</h4>
        <FormField
          label="Destination Category"
          type="select"
          options={budgetCategories.map(c => c.category)}
          required
        />

        <FormField label="Justification for Reallocation" type="textarea" rows={4} required 
          helperText="Provide detailed reasons for budget reallocation" />

        <div style={{ marginTop: '20px' }}>
          <h4 style={{ fontSize: '14px', color: '#1e293b', marginBottom: '12px', fontWeight: '700' }}>Supporting Documents</h4>
          <FormField label="Revised Budget Proposal" type="file" required />
          <FormField label="Expenditure Analysis Report" type="file" required />
          <FormField label="PIU Recommendations (if applicable)" type="file" />
        </div>

        <FormField label="Expected Impact on Program Timeline" type="textarea" rows={2} />
      </Modal>

      {/* View UC Details Modal */}
      <Modal
        isOpen={isViewDetailsOpen}
        onClose={() => {
          setIsViewDetailsOpen(false);
          setSelectedItem(null);
        }}
        title="Utilization Certificate Details"
        width="900px"
        footer={
          content.canApproveUC && selectedItem?.status === 'Pending Approval' ? (
            <>
              <ModalButton variant="danger" onClick={() => handleApproveUC('reject')}>
                ✗ Reject UC
              </ModalButton>
              <ModalButton variant="success" onClick={() => handleApproveUC('approve')}>
                ✓ Approve UC
              </ModalButton>
            </>
          ) : null
        }
      >
        {selectedItem && (
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
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>UC Number</div>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b' }}>{selectedItem.ucNo}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Amount</div>
                  <div style={{ fontSize: '24px', fontWeight: '800', color: '#10b981' }}>{selectedItem.amount}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Period</div>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>{selectedItem.period}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Status</div>
                  <span style={{
                    display: 'inline-block',
                    padding: '6px 14px',
                    borderRadius: '10px',
                    fontSize: '12px',
                    fontWeight: '700',
                    background: selectedItem.status === 'Approved' ? '#d1fae5' : '#fef3c7',
                    color: selectedItem.status === 'Approved' ? '#065f46' : '#92400e'
                  }}>
                    {selectedItem.status}
                  </span>
                </div>
                {content.showAllPIUs && (
                  <div>
                    <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Submitted By</div>
                    <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>{selectedItem.submittedBy}</div>
                  </div>
                )}
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Submitted On</div>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>{selectedItem.submittedOn}</div>
                </div>
              </div>
            </div>

            {/* Fund Utilization Summary */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '16px', color: '#1e293b', marginBottom: '16px', fontWeight: '700' }}>Fund Utilization Summary</h4>
              <div style={{
                padding: '20px',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                background: '#f8fafc'
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px', fontWeight: '600' }}>Opening Balance</div>
                    <div style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b' }}>₹1,500 Cr</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px', fontWeight: '600' }}>Funds Received</div>
                    <div style={{ fontSize: '18px', fontWeight: '700', color: '#10b981' }}>₹2,500 Cr</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px', fontWeight: '600' }}>Total Expenditure</div>
                    <div style={{ fontSize: '18px', fontWeight: '700', color: '#ef4444' }}>₹2,450 Cr</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px', fontWeight: '600' }}>Closing Balance</div>
                    <div style={{ fontSize: '18px', fontWeight: '700', color: '#3b82f6' }}>₹1,550 Cr</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Supporting Documents */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '16px', color: '#1e293b', marginBottom: '16px', fontWeight: '700' }}>Supporting Documents</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'Audited_Statement_of_Expenditure_Q3_FY2024-25.pdf',
                  'Bank_Reconciliation_Statement.pdf',
                  'Physical_Progress_Report_Q3.pdf',
                  'Asset_Register_Updated.xlsx'
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

            {content.canApproveUC && selectedItem.status === 'Pending Approval' && (
              <>
                <FormField label="Review Comments" type="textarea" rows={4} required 
                  helperText="Provide detailed comments on the UC submission" />
                <FormField label="Verification Status" type="select" 
                  options={['All Documents Verified', 'Documents Incomplete', 'Amounts Mismatch', 'Requires Clarification']} 
                  required />
              </>
            )}
          </>
        )}
      </Modal>
    </div>
  );
}