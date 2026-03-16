import { useState } from 'react';
import type { Role } from '../roles';
import Modal, { ModalButton } from './components/Modal';
import FormField from './components/FormField';
import { 
  FileText, 
  Clock, 
  AlertTriangle, 
  CheckCircle, 
  TrendingUp,
  Eye,
  Edit,
  Plus,
  Calendar,
  DollarSign,
  Award,
  Shield,
  AlertCircle
} from 'lucide-react';

export default function Contracts({ role }: { role: Role }) {
  const [isCreateAmendmentOpen, setIsCreateAmendmentOpen] = useState(false);
  const [isExtensionRequestOpen, setIsExtensionRequestOpen] = useState(false);
  const [isViewContractOpen, setIsViewContractOpen] = useState(false);
  const [isDisputeOpen, setIsDisputeOpen] = useState(false);
  const [selectedContract, setSelectedContract] = useState<any>(null);

  const getContractsContent = () => {
    switch (role) {
      case 'PMU':
        return {
          title: 'Contract Management System',
          subtitle: 'Program-wide contract oversight, amendments, and dispute resolution',
          canCreateAmendment: true,
          canApproveExtension: true,
          showAllContracts: true
        };
      case 'PIU':
        return {
          title: 'PIU Contract Management',
          subtitle: 'Manage contracts, extensions, and performance tracking',
          canCreateAmendment: true,
          canApproveExtension: false,
          showAllContracts: false
        };
      case 'AUTHORITY_ENGINEER':
        return {
          title: 'Contract Monitoring',
          subtitle: 'Performance evaluation and compliance verification',
          canCreateAmendment: false,
          canApproveExtension: false,
          showAllContracts: false
        };
      default:
        return {
          title: 'Contracts',
          subtitle: 'Contract information',
          canCreateAmendment: false,
          canApproveExtension: false,
          showAllContracts: false
        };
    }
  };

  const content = getContractsContent();

  // Contract Data
  const contractsData = [
    { 
      contractNo: 'CNT-2024-001', 
      project: 'Indore-Bhopal Corridor', 
      contractor: 'ABC Constructions',
      value: '₹8,500 Cr',
      startDate: '2024-01-15',
      endDate: '2026-12-31',
      status: 'Active',
      progress: 72,
      performance: 'Good',
      pendingPayments: '₹850 Cr',
      amendments: 2,
      disputes: 0
    },
    { 
      contractNo: 'CNT-2024-002', 
      project: 'Jabalpur-Rewa Highway', 
      contractor: 'XYZ Builders',
      value: '₹6,200 Cr',
      startDate: '2024-03-10',
      endDate: '2027-03-09',
      status: 'Active',
      progress: 65,
      performance: 'Satisfactory',
      pendingPayments: '₹620 Cr',
      amendments: 1,
      disputes: 1
    },
    { 
      contractNo: 'CNT-2023-045', 
      project: 'Gwalior Bypass', 
      contractor: 'PQR Infrastructure',
      value: '₹3,800 Cr',
      startDate: '2023-06-01',
      endDate: '2025-11-30',
      status: 'Near Completion',
      progress: 98,
      performance: 'Excellent',
      pendingPayments: '₹120 Cr',
      amendments: 3,
      disputes: 0
    },
    { 
      contractNo: 'CNT-2024-003', 
      project: 'Ujjain-Ratlam Section', 
      contractor: 'LMN Contractors',
      value: '₹4,500 Cr',
      startDate: '2024-02-20',
      endDate: '2026-08-19',
      status: 'Active',
      progress: 48,
      performance: 'Below Standard',
      pendingPayments: '₹450 Cr',
      amendments: 0,
      disputes: 2
    },
  ];

  // Performance Bonds Data
  const performanceBonds = [
    { contractor: 'ABC Constructions', contractNo: 'CNT-2024-001', bondAmount: '₹850 Cr', issueDate: '2024-01-15', expiryDate: '2027-01-14', status: 'Valid', bankGuarantee: 'Yes' },
    { contractor: 'XYZ Builders', contractNo: 'CNT-2024-002', bondAmount: '₹620 Cr', issueDate: '2024-03-10', expiryDate: '2027-06-09', status: 'Valid', bankGuarantee: 'Yes' },
    { contractor: 'PQR Infrastructure', contractNo: 'CNT-2023-045', bondAmount: '₹380 Cr', issueDate: '2023-06-01', expiryDate: '2026-02-28', status: 'Expiring Soon', bankGuarantee: 'Yes' },
    { contractor: 'LMN Contractors', contractNo: 'CNT-2024-003', bondAmount: '₹450 Cr', issueDate: '2024-02-20', expiryDate: '2026-11-19', status: 'Valid', bankGuarantee: 'Yes' },
  ];

  // Extension Requests
  const extensionRequests = [
    { requestId: 'EXT-2024-012', contractNo: 'CNT-2024-001', contractor: 'ABC Constructions', requestedDays: 90, reason: 'Monsoon delays', submittedOn: '2026-01-28', status: 'Pending Approval' },
    { requestId: 'EXT-2024-011', contractNo: 'CNT-2024-002', contractor: 'XYZ Builders', requestedDays: 60, reason: 'Land acquisition delay', submittedOn: '2026-01-20', status: 'Approved' },
    { requestId: 'EXT-2024-010', contractNo: 'CNT-2023-045', contractor: 'PQR Infrastructure', requestedDays: 30, reason: 'Additional quality tests', submittedOn: '2025-12-15', status: 'Rejected' },
  ];

  // Active Disputes
  const activeDisputes = [
    { disputeId: 'DSP-2024-008', contractNo: 'CNT-2024-002', contractor: 'XYZ Builders', subject: 'Payment delay dispute', raisedOn: '2026-01-25', status: 'Under Arbitration', severity: 'Medium' },
    { disputeId: 'DSP-2024-009', contractNo: 'CNT-2024-003', contractor: 'LMN Contractors', subject: 'Scope change disagreement', raisedOn: '2026-01-28', status: 'Under Review', severity: 'High' },
    { disputeId: 'DSP-2024-007', contractNo: 'CNT-2024-003', contractor: 'LMN Contractors', subject: 'Quality rejection claim', raisedOn: '2026-01-15', status: 'Pending Resolution', severity: 'Medium' },
  ];

  const handleCreateAmendment = () => {
    alert('Contract amendment created successfully!');
    setIsCreateAmendmentOpen(false);
    setSelectedContract(null);
  };

  const handleExtensionRequest = () => {
    alert('Extension request submitted successfully!');
    setIsExtensionRequestOpen(false);
    setSelectedContract(null);
  };

  const handleDisputeAction = (action: 'resolve' | 'escalate') => {
    alert(`Dispute ${action === 'resolve' ? 'resolved' : 'escalated'} successfully!`);
    setIsDisputeOpen(false);
    setSelectedContract(null);
  };

  return (
    <div style={{ padding: '32px', background: '#f8fafc', minHeight: '100vh' }}>
      {/* Header Card */}
      <div style={{
        background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
        borderRadius: '20px',
        padding: '32px',
        marginBottom: '32px',
        boxShadow: '0 4px 20px rgba(139, 92, 246, 0.2)'
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
        </div>
      </div>

      {/* Contract Summary Cards */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '24px', 
        marginBottom: '32px' 
      }}>
        {[
          { label: 'Active Contracts', value: '24', icon: <FileText size={24} />, color: '#3b82f6', bgGradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' },
          { label: 'Pending Extensions', value: '5', icon: <Clock size={24} />, color: '#f59e0b', bgGradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' },
          { label: 'Active Disputes', value: '3', icon: <AlertTriangle size={24} />, color: '#ef4444', bgGradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' },
          { label: 'Near Completion', value: '8', icon: <CheckCircle size={24} />, color: '#10b981', bgGradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' },
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

      {/* Contracts Table */}
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '28px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        marginBottom: '32px',
        border: '1px solid #e2e8f0'
      }}>
        <h3 style={{ margin: '0 0 24px 0', color: '#1e293b', fontSize: '20px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FileText size={24} style={{ color: '#8b5cf6' }} />
          Active Contracts
        </h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0' }}>
            <thead>
              <tr>
                {['Contract No.', 'Project', 'Contractor', 'Value', 'End Date', 'Progress', 'Performance', 'Status', 'Action'].map((header, idx) => (
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
              {contractsData.map((contract, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '20px 16px', color: '#8b5cf6', fontSize: '14px', fontWeight: '700' }}>{contract.contractNo}</td>
                  <td style={{ padding: '20px 16px', color: '#1e293b', fontSize: '14px', fontWeight: '500' }}>{contract.project}</td>
                  <td style={{ padding: '20px 16px', color: '#64748b', fontSize: '14px' }}>{contract.contractor}</td>
                  <td style={{ padding: '20px 16px', color: '#1e293b', fontSize: '15px', fontWeight: '700' }}>{contract.value}</td>
                  <td style={{ padding: '20px 16px', color: '#64748b', fontSize: '14px' }}>{contract.endDate}</td>
                  <td style={{ padding: '20px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        flex: 1,
                        height: '8px',
                        background: '#f1f5f9',
                        borderRadius: '4px',
                        overflow: 'hidden',
                        minWidth: '80px'
                      }}>
                        <div style={{
                          width: `${contract.progress}%`,
                          height: '100%',
                          background: contract.progress >= 80 ? '#10b981' : contract.progress >= 60 ? '#3b82f6' : contract.progress >= 40 ? '#f59e0b' : '#ef4444',
                          borderRadius: '4px'
                        }} />
                      </div>
                      <span style={{ fontSize: '14px', fontWeight: '700', color: '#1e293b', minWidth: '45px' }}>
                        {contract.progress}%
                      </span>
                    </div>
                  </td>
                  <td style={{ padding: '20px 16px' }}>
                    <span style={{
                      padding: '6px 14px',
                      borderRadius: '10px',
                      fontSize: '12px',
                      fontWeight: '700',
                      background: contract.performance === 'Excellent' ? '#d1fae5' : contract.performance === 'Good' ? '#dbeafe' : contract.performance === 'Satisfactory' ? '#fef3c7' : '#fee2e2',
                      color: contract.performance === 'Excellent' ? '#065f46' : contract.performance === 'Good' ? '#1e40af' : contract.performance === 'Satisfactory' ? '#92400e' : '#991b1b',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {contract.performance}
                    </span>
                  </td>
                  <td style={{ padding: '20px 16px' }}>
                    <span style={{
                      padding: '6px 14px',
                      borderRadius: '10px',
                      fontSize: '12px',
                      fontWeight: '700',
                      background: contract.status === 'Active' ? '#dbeafe' : '#d1fae5',
                      color: contract.status === 'Active' ? '#1e40af' : '#065f46',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {contract.status}
                    </span>
                  </td>
                  <td style={{ padding: '20px 16px' }}>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button
                        onClick={() => {
                          setSelectedContract(contract);
                          setIsViewContractOpen(true);
                        }}
                        style={{
                          padding: '8px 16px',
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
                      {content.canCreateAmendment && (
                        <button
                          onClick={() => {
                            setSelectedContract(contract);
                            setIsCreateAmendmentOpen(true);
                          }}
                          style={{
                            padding: '8px 16px',
                            background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
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
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(139, 92, 246, 0.4)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        >
                          <Edit size={14} />
                          Amend
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Performance Bonds */}
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '28px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        marginBottom: '32px',
        border: '1px solid #e2e8f0'
      }}>
        <h3 style={{ margin: '0 0 24px 0', color: '#1e293b', fontSize: '20px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Shield size={24} style={{ color: '#10b981' }} />
          Performance Bonds & Bank Guarantees
        </h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0' }}>
            <thead>
              <tr>
                {['Contractor', 'Contract No.', 'Bond Amount', 'Issue Date', 'Expiry Date', 'BG Status', 'Status'].map((header, idx) => (
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
              {performanceBonds.map((bond, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '20px 16px', color: '#1e293b', fontSize: '14px', fontWeight: '600' }}>{bond.contractor}</td>
                  <td style={{ padding: '20px 16px', color: '#8b5cf6', fontSize: '14px', fontWeight: '700' }}>{bond.contractNo}</td>
                  <td style={{ padding: '20px 16px', color: '#1e293b', fontSize: '15px', fontWeight: '700' }}>{bond.bondAmount}</td>
                  <td style={{ padding: '20px 16px', color: '#64748b', fontSize: '14px' }}>{bond.issueDate}</td>
                  <td style={{ padding: '20px 16px', color: '#64748b', fontSize: '14px' }}>{bond.expiryDate}</td>
                  <td style={{ padding: '20px 16px' }}>
                    <span style={{
                      padding: '6px 14px',
                      borderRadius: '10px',
                      fontSize: '12px',
                      fontWeight: '700',
                      background: bond.bankGuarantee === 'Yes' ? '#d1fae5' : '#fee2e2',
                      color: bond.bankGuarantee === 'Yes' ? '#065f46' : '#991b1b',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {bond.bankGuarantee === 'Yes' ? 'Valid BG' : 'No BG'}
                    </span>
                  </td>
                  <td style={{ padding: '20px 16px' }}>
                    <span style={{
                      padding: '6px 14px',
                      borderRadius: '10px',
                      fontSize: '12px',
                      fontWeight: '700',
                      background: bond.status === 'Valid' ? '#d1fae5' : '#fef3c7',
                      color: bond.status === 'Valid' ? '#065f46' : '#92400e',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {bond.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Extension Requests */}
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '28px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        marginBottom: '32px',
        border: '1px solid #e2e8f0'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h3 style={{ margin: 0, color: '#1e293b', fontSize: '20px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Calendar size={24} style={{ color: '#f59e0b' }} />
            Extension Requests
          </h3>
          {(role === 'PIU' || role === 'CONTRACTOR') && (
            <button
              onClick={() => setIsExtensionRequestOpen(true)}
              style={{
                padding: '10px 20px',
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(245, 158, 11, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Plus size={18} />
              Request Extension
            </button>
          )}
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0' }}>
            <thead>
              <tr>
                {['Request ID', 'Contract No.', 'Contractor', 'Days Requested', 'Reason', 'Submitted', 'Status'].map((header, idx) => (
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
              {extensionRequests.map((request, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '20px 16px', color: '#f59e0b', fontSize: '14px', fontWeight: '700' }}>{request.requestId}</td>
                  <td style={{ padding: '20px 16px', color: '#8b5cf6', fontSize: '14px', fontWeight: '700' }}>{request.contractNo}</td>
                  <td style={{ padding: '20px 16px', color: '#1e293b', fontSize: '14px', fontWeight: '500' }}>{request.contractor}</td>
                  <td style={{ padding: '20px 16px', color: '#1e293b', fontSize: '15px', fontWeight: '700' }}>{request.requestedDays} days</td>
                  <td style={{ padding: '20px 16px', color: '#64748b', fontSize: '14px' }}>{request.reason}</td>
                  <td style={{ padding: '20px 16px', color: '#64748b', fontSize: '14px' }}>{request.submittedOn}</td>
                  <td style={{ padding: '20px 16px' }}>
                    <span style={{
                      padding: '6px 14px',
                      borderRadius: '10px',
                      fontSize: '12px',
                      fontWeight: '700',
                      background: request.status === 'Approved' ? '#d1fae5' : request.status === 'Rejected' ? '#fee2e2' : '#fef3c7',
                      color: request.status === 'Approved' ? '#065f46' : request.status === 'Rejected' ? '#991b1b' : '#92400e',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {request.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Active Disputes */}
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '28px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        border: '1px solid #e2e8f0'
      }}>
        <h3 style={{ margin: '0 0 24px 0', color: '#1e293b', fontSize: '20px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <AlertTriangle size={24} style={{ color: '#ef4444' }} />
          Active Disputes
        </h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0' }}>
            <thead>
              <tr>
                {['Dispute ID', 'Contract No.', 'Contractor', 'Subject', 'Raised On', 'Severity', 'Status', 'Action'].map((header, idx) => (
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
              {activeDisputes.map((dispute, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '20px 16px', color: '#ef4444', fontSize: '14px', fontWeight: '700' }}>{dispute.disputeId}</td>
                  <td style={{ padding: '20px 16px', color: '#8b5cf6', fontSize: '14px', fontWeight: '700' }}>{dispute.contractNo}</td>
                  <td style={{ padding: '20px 16px', color: '#1e293b', fontSize: '14px', fontWeight: '500' }}>{dispute.contractor}</td>
                  <td style={{ padding: '20px 16px', color: '#1e293b', fontSize: '14px' }}>{dispute.subject}</td>
                  <td style={{ padding: '20px 16px', color: '#64748b', fontSize: '14px' }}>{dispute.raisedOn}</td>
                  <td style={{ padding: '20px 16px' }}>
                    <span style={{
                      padding: '6px 14px',
                      borderRadius: '10px',
                      fontSize: '12px',
                      fontWeight: '700',
                      background: dispute.severity === 'High' ? '#fee2e2' : dispute.severity === 'Medium' ? '#fef3c7' : '#dbeafe',
                      color: dispute.severity === 'High' ? '#991b1b' : dispute.severity === 'Medium' ? '#92400e' : '#1e40af',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {dispute.severity}
                    </span>
                  </td>
                  <td style={{ padding: '20px 16px' }}>
                    <span style={{
                      padding: '6px 14px',
                      borderRadius: '10px',
                      fontSize: '12px',
                      fontWeight: '700',
                      background: dispute.status === 'Under Arbitration' ? '#fee2e2' : dispute.status === 'Under Review' ? '#fef3c7' : '#dbeafe',
                      color: dispute.status === 'Under Arbitration' ? '#991b1b' : dispute.status === 'Under Review' ? '#92400e' : '#1e40af',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {dispute.status}
                    </span>
                  </td>
                  <td style={{ padding: '20px 16px' }}>
                    <button
                      onClick={() => {
                        setSelectedContract(dispute);
                        setIsDisputeOpen(true);
                      }}
                      style={{
                        padding: '8px 20px',
                        background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
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
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(239, 68, 68, 0.4)';
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

      {/* Create Amendment Modal */}
      <Modal
        isOpen={isCreateAmendmentOpen}
        onClose={() => {
          setIsCreateAmendmentOpen(false);
          setSelectedContract(null);
        }}
        title="Create Contract Amendment"
        width="800px"
        footer={
          <>
            <ModalButton variant="secondary" onClick={() => {
              setIsCreateAmendmentOpen(false);
              setSelectedContract(null);
            }}>
              Cancel
            </ModalButton>
            <ModalButton variant="primary" onClick={handleCreateAmendment}>
              Submit Amendment
            </ModalButton>
          </>
        }
      >
        {selectedContract && (
          <>
            <div style={{
              background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
              padding: '20px',
              borderRadius: '12px',
              marginBottom: '24px',
              border: '1px solid #bfdbfe'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px', fontWeight: '600', textTransform: 'uppercase' }}>Contract No.</div>
                  <div style={{ fontSize: '16px', fontWeight: '700', color: '#1e293b' }}>{selectedContract.contractNo}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px', fontWeight: '600', textTransform: 'uppercase' }}>Contractor</div>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>{selectedContract.contractor}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px', fontWeight: '600', textTransform: 'uppercase' }}>Project</div>
                  <div style={{ fontSize: '14px', color: '#1e293b' }}>{selectedContract.project}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px', fontWeight: '600', textTransform: 'uppercase' }}>Current Value</div>
                  <div style={{ fontSize: '16px', fontWeight: '700', color: '#10b981' }}>{selectedContract.value}</div>
                </div>
              </div>
            </div>

            <FormField
              label="Amendment Type"
              type="select"
              options={[
                'Scope Change',
                'Value Revision',
                'Time Extension',
                'Technical Specification Change',
                'Payment Terms Modification',
                'Other'
              ]}
              required
            />

            <FormField label="Amendment Number" placeholder="e.g., AMD-001" required />
            <FormField label="Amendment Date" type="date" required />

            <div style={{ marginTop: '20px' }}>
              <h4 style={{ fontSize: '15px', color: '#1e293b', marginBottom: '12px', fontWeight: '700' }}>Amendment Details</h4>
              <FormField label="Revised Contract Value (if applicable)" type="number" placeholder="₹ in Crores" />
              <FormField label="Additional Time (days)" type="number" placeholder="e.g., 90" />
              <FormField label="Scope Changes Description" type="textarea" rows={4} required 
                helperText="Describe all changes in scope, specifications, or deliverables" />
            </div>

            <div style={{ marginTop: '20px' }}>
              <h4 style={{ fontSize: '15px', color: '#1e293b', marginBottom: '12px', fontWeight: '700' }}>Justification & Approvals</h4>
              <FormField label="Reason for Amendment" type="textarea" rows={3} required />
              <FormField label="Financial Impact Analysis" type="file" required 
                helperText="Upload detailed cost-benefit analysis" />
              <FormField label="PIU Recommendation Letter" type="file" required />
              <FormField label="Technical Committee Approval" type="file" />
            </div>

            <div style={{
              padding: '16px',
              background: '#fef3c7',
              borderRadius: '12px',
              border: '1px solid #fde68a',
              marginTop: '20px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px'
            }}>
              <AlertCircle size={20} style={{ color: '#92400e', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div style={{ fontSize: '13px', fontWeight: '700', color: '#92400e', marginBottom: '4px' }}>
                  Amendment Guidelines
                </div>
                <ul style={{ fontSize: '13px', color: '#78350f', margin: '8px 0 0 0', paddingLeft: '20px' }}>
                  <li>Value changes exceeding 10% require lender approval</li>
                  <li>Time extensions beyond 90 days need detailed justification</li>
                  <li>All amendments must be documented and signed by both parties</li>
                </ul>
              </div>
            </div>
          </>
        )}
      </Modal>

      {/* Extension Request Modal */}
      <Modal
        isOpen={isExtensionRequestOpen}
        onClose={() => {
          setIsExtensionRequestOpen(false);
          setSelectedContract(null);
        }}
        title="Request Contract Extension"
        width="800px"
        footer={
          <>
            <ModalButton variant="secondary" onClick={() => {
              setIsExtensionRequestOpen(false);
              setSelectedContract(null);
            }}>
              Cancel
            </ModalButton>
            <ModalButton variant="primary" onClick={handleExtensionRequest}>
              Submit Request
            </ModalButton>
          </>
        }
      >
        <FormField
          label="Select Contract"
          type="select"
          options={contractsData.map(c => `${c.contractNo} - ${c.project}`)}
          required
        />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <FormField label="Current End Date" value="2026-12-31" disabled />
          <FormField label="Requested Extension (days)" type="number" placeholder="e.g., 90" required />
        </div>

        <FormField
          label="Reason for Extension"
          type="select"
          options={[
            'Monsoon / Weather Delays',
            'Land Acquisition Delays',
            'Force Majeure Events',
            'Design Changes',
            'Material Shortage',
            'Additional Work Order',
            'COVID-19 Impact',
            'Other'
          ]}
          required
        />

        <FormField label="Detailed Justification" type="textarea" rows={4} required 
          helperText="Provide comprehensive reasons with timeline impact analysis" />

        <div style={{ marginTop: '20px' }}>
          <h4 style={{ fontSize: '15px', color: '#1e293b', marginBottom: '12px', fontWeight: '700' }}>Supporting Evidence</h4>
          <FormField label="Revised Work Schedule" type="file" required 
            helperText="Upload updated Gantt chart or work plan" />
          <FormField label="Weather Report / Official Documents" type="file" />
          <FormField label="Progress Photos & Evidence" type="file" />
          <FormField label="Resource Deployment Plan" type="file" />
        </div>

        <FormField label="Financial Impact (if any)" type="textarea" rows={2} 
          helperText="Explain any cost implications" />

        <div style={{
          padding: '16px',
          background: '#dbeafe',
          borderRadius: '12px',
          border: '1px solid #bfdbfe',
          marginTop: '20px'
        }}>
          <div style={{ fontSize: '13px', fontWeight: '600', color: '#1e40af', marginBottom: '8px' }}>
            ℹ️ Extension Request Process
          </div>
          <div style={{ fontSize: '13px', color: '#1e3a8a' }}>
            PIU will review and forward to PMU. Extensions beyond 60 days require lender concurrence. Decision typically within 15 working days.
          </div>
        </div>
      </Modal>

      {/* View Contract Details Modal */}
      <Modal
        isOpen={isViewContractOpen}
        onClose={() => {
          setIsViewContractOpen(false);
          setSelectedContract(null);
        }}
        title="Contract Details"
        width="900px"
      >
        {selectedContract && (
          <>
            <div style={{
              background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
              padding: '24px',
              borderRadius: '16px',
              marginBottom: '24px',
              border: '1px solid #bfdbfe'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Contract No.</div>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b' }}>{selectedContract.contractNo}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Contract Value</div>
                  <div style={{ fontSize: '24px', fontWeight: '800', color: '#10b981' }}>{selectedContract.value}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Status</div>
                  <span style={{
                    display: 'inline-block',
                    padding: '6px 14px',
                    borderRadius: '10px',
                    fontSize: '12px',
                    fontWeight: '700',
                    background: selectedContract.status === 'Active' ? '#dbeafe' : '#d1fae5',
                    color: selectedContract.status === 'Active' ? '#1e40af' : '#065f46'
                  }}>
                    {selectedContract.status}
                  </span>
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Project</div>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>{selectedContract.project}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Contractor</div>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b' }}>{selectedContract.contractor}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Start Date</div>
                  <div style={{ fontSize: '14px', color: '#1e293b' }}>{selectedContract.startDate}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>End Date</div>
                  <div style={{ fontSize: '14px', color: '#1e293b' }}>{selectedContract.endDate}</div>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '16px', color: '#1e293b', marginBottom: '16px', fontWeight: '700' }}>Performance Metrics</h4>
              <div style={{
                padding: '20px',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                background: '#f8fafc'
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
                  <div>
                    <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px', fontWeight: '600' }}>Physical Progress</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        flex: 1,
                        height: '8px',
                        background: '#e2e8f0',
                        borderRadius: '4px',
                        overflow: 'hidden'
                      }}>
                        <div style={{
                          width: `${selectedContract.progress}%`,
                          height: '100%',
                          background: selectedContract.progress >= 80 ? '#10b981' : selectedContract.progress >= 60 ? '#3b82f6' : '#f59e0b',
                          borderRadius: '4px'
                        }} />
                      </div>
                      <span style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b' }}>
                        {selectedContract.progress}%
                      </span>
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px', fontWeight: '600' }}>Performance Rating</div>
                    <span style={{
                      display: 'inline-block',
                      padding: '6px 14px',
                      borderRadius: '10px',
                      fontSize: '13px',
                      fontWeight: '700',
                      background: selectedContract.performance === 'Excellent' ? '#d1fae5' : selectedContract.performance === 'Good' ? '#dbeafe' : selectedContract.performance === 'Satisfactory' ? '#fef3c7' : '#fee2e2',
                      color: selectedContract.performance === 'Excellent' ? '#065f46' : selectedContract.performance === 'Good' ? '#1e40af' : selectedContract.performance === 'Satisfactory' ? '#92400e' : '#991b1b'
                    }}>
                      {selectedContract.performance}
                    </span>
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px', fontWeight: '600' }}>Pending Payments</div>
                    <div style={{ fontSize: '18px', fontWeight: '700', color: '#ef4444' }}>{selectedContract.pendingPayments}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contract History */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '16px', color: '#1e293b', marginBottom: '16px', fontWeight: '700' }}>Contract History</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{
                  padding: '16px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  background: 'white'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b' }}>Amendments: {selectedContract.amendments}</span>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>Last: 2025-10-15</span>
                  </div>
                  <div style={{ fontSize: '13px', color: '#64748b' }}>Value revision & scope change approved</div>
                </div>
                <div style={{
                  padding: '16px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  background: 'white'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b' }}>Active Disputes: {selectedContract.disputes}</span>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>{selectedContract.disputes > 0 ? 'Under Review' : 'None'}</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Modal>

      {/* Dispute Review Modal */}
      <Modal
        isOpen={isDisputeOpen}
        onClose={() => {
          setIsDisputeOpen(false);
          setSelectedContract(null);
        }}
        title="Dispute Resolution"
        width="800px"
        footer={
          role === 'PMU' || role === 'PIU' ? (
            <>
              <ModalButton variant="danger" onClick={() => handleDisputeAction('escalate')}>
                Escalate to Arbitration
              </ModalButton>
              <ModalButton variant="success" onClick={() => handleDisputeAction('resolve')}>
                Mark as Resolved
              </ModalButton>
            </>
          ) : null
        }
      >
        {selectedContract && (
          <>
            <div style={{
              background: 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)',
              padding: '20px',
              borderRadius: '12px',
              marginBottom: '24px',
              border: '1px solid #fecaca'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px', fontWeight: '600', textTransform: 'uppercase' }}>Dispute ID</div>
                  <div style={{ fontSize: '16px', fontWeight: '700', color: '#1e293b' }}>{selectedContract.disputeId}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px', fontWeight: '600', textTransform: 'uppercase' }}>Severity</div>
                  <span style={{
                    display: 'inline-block',
                    padding: '6px 14px',
                    borderRadius: '10px',
                    fontSize: '12px',
                    fontWeight: '700',
                    background: selectedContract.severity === 'High' ? '#fee2e2' : '#fef3c7',
                    color: selectedContract.severity === 'High' ? '#991b1b' : '#92400e'
                  }}>
                    {selectedContract.severity}
                  </span>
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px', fontWeight: '600', textTransform: 'uppercase' }}>Subject</div>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>{selectedContract.subject}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px', fontWeight: '600', textTransform: 'uppercase' }}>Contractor</div>
                  <div style={{ fontSize: '14px', color: '#1e293b' }}>{selectedContract.contractor}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px', fontWeight: '600', textTransform: 'uppercase' }}>Raised On</div>
                  <div style={{ fontSize: '14px', color: '#1e293b' }}>{selectedContract.raisedOn}</div>
                </div>
              </div>
            </div>

            <FormField label="Dispute Details" type="textarea" rows={4} 
              value="Contractor claims payment delay for completed milestone. Claims ₹250 Cr pending for 45 days beyond agreed payment terms." 
              disabled />

            <div style={{ marginTop: '20px' }}>
              <h4 style={{ fontSize: '14px', color: '#1e293b', marginBottom: '12px', fontWeight: '700' }}>Supporting Documents</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {['Dispute_Claim_Letter.pdf', 'Payment_Records.xlsx', 'Milestone_Certificate.pdf'].map((doc) => (
                  <div
                    key={doc}
                    style={{
                      padding: '12px',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
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
                        borderRadius: '6px',
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

            {(role === 'PMU' || role === 'PIU') && (
              <div style={{ marginTop: '24px' }}>
                <FormField label="Resolution Comments" type="textarea" rows={4} required />
                <FormField label="Action Taken" type="select" 
                  options={['Payment Released', 'Partial Payment', 'Claim Rejected', 'Under Arbitration', 'Negotiation Ongoing']} 
                  required />
              </div>
            )}
          </>
        )}
      </Modal>
    </div>
  );
}