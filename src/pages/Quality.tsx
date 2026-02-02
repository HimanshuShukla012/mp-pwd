import { useState } from 'react';
import type { Role } from '../roles';
import Modal, { ModalButton } from './components/Modal';
import FormField from './components/FormField';
import { 
  Award, 
  FileText, 
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  Clock,
  Eye,
  Upload,
  Download,
  Plus,
  TrendingUp,
  AlertCircle,
  Beaker
} from 'lucide-react';

export default function Quality({ role }: { role: Role }) {
  const [isUploadTestOpen, setIsUploadTestOpen] = useState(false);
  const [isApprovalOpen, setIsApprovalOpen] = useState(false);
  const [isNCROpen, setIsNCROpen] = useState(false);
  const [isViewTestOpen, setIsViewTestOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const getQualityContent = () => {
    switch (role) {
      case 'PMU':
        return {
          title: 'Program Quality Oversight',
          subtitle: 'Quality standards, test results, and compliance monitoring',
          canApprove: true,
          canViewAll: true
        };
      case 'PIU':
        return {
          title: 'PIU Quality Management',
          subtitle: 'Quality control, material approvals, and test coordination',
          canApprove: true,
          canViewAll: false
        };
      case 'AE':
        return {
          title: 'Quality Assurance & Testing',
          subtitle: 'Field quality checks and test result verification',
          canApprove: true,
          canViewAll: false
        };
      case 'AUTHORITY_ENGINEER':
        return {
          title: 'Independent Quality Verification',
          subtitle: 'Quality audit and compliance certification',
          canApprove: true,
          canViewAll: false
        };
      case 'CONTRACTOR':
        return {
          title: 'Quality Submissions',
          subtitle: 'Submit test results and quality certificates',
          canApprove: false,
          canViewAll: false
        };
      default:
        return {
          title: 'Quality Control',
          subtitle: 'Quality monitoring',
          canApprove: false,
          canViewAll: false
        };
    }
  };

  const content = getQualityContent();

  // Quality Test Results
  const testResults = [
    { 
      testId: 'QT-2024-456', 
      material: 'Bitumen (VG-30)', 
      testType: 'Penetration Test', 
      location: 'CH 12+500 to 13+000',
      contractor: 'ABC Constructions',
      sampleDate: '2026-01-28',
      testDate: '2026-01-29',
      lab: 'NABL Accredited Lab - Indore',
      result: 'Pass',
      status: 'Approved',
      submittedBy: 'Contractor'
    },
    { 
      testId: 'QT-2024-457', 
      material: 'Concrete (M-30)', 
      testType: '28-day Compressive Strength', 
      location: 'Culvert C-4',
      contractor: 'XYZ Builders',
      sampleDate: '2026-01-02',
      testDate: '2026-01-30',
      lab: 'NABL Accredited Lab - Bhopal',
      result: 'Fail',
      status: 'Rejected',
      submittedBy: 'Contractor'
    },
    { 
      testId: 'QT-2024-458', 
      material: 'Aggregate (20mm)', 
      testType: 'Los Angeles Abrasion', 
      location: 'CH 15+000 to 16+500',
      contractor: 'ABC Constructions',
      sampleDate: '2026-01-27',
      testDate: '2026-01-28',
      lab: 'NABL Accredited Lab - Indore',
      result: 'Pass',
      status: 'Pending Approval',
      submittedBy: 'Contractor'
    },
    { 
      testId: 'QT-2024-459', 
      material: 'Soil (Subgrade)', 
      testType: 'CBR Test', 
      location: 'CH 18+000 to 19+000',
      contractor: 'PQR Infrastructure',
      sampleDate: '2026-01-25',
      testDate: '2026-01-27',
      lab: 'Govt. Lab - Jabalpur',
      result: 'Pass',
      status: 'Pending Approval',
      submittedBy: 'AE'
    },
  ];

  // Material Approvals
  const materialApprovals = [
    { approvalId: 'MA-2024-089', material: 'Bitumen VG-30', supplier: 'Reliance Industries', quantity: '500 MT', requestedOn: '2026-01-28', status: 'Approved', approvedBy: 'PIU' },
    { approvalId: 'MA-2024-090', material: 'Portland Cement', supplier: 'UltraTech Cement', quantity: '1000 MT', requestedOn: '2026-01-27', status: 'Pending', approvedBy: '-' },
    { approvalId: 'MA-2024-091', material: 'Steel Reinforcement', supplier: 'TATA Steel', quantity: '200 MT', requestedOn: '2026-01-26', status: 'Approved', approvedBy: 'AE' },
    { approvalId: 'MA-2024-092', material: 'Aggregate 40mm', supplier: 'Local Quarry - Indore', quantity: '5000 cum', requestedOn: '2026-01-25', status: 'Rejected', approvedBy: 'AE' },
  ];

  // Non-Conformance Reports (NCR)
  const ncrData = [
    { 
      ncrNo: 'NCR-2024-045', 
      location: 'CH 12+800', 
      issue: 'Subgrade compaction below specification',
      severity: 'High',
      raisedBy: 'AE - Site A',
      raisedOn: '2026-01-28',
      contractor: 'ABC Constructions',
      status: 'Rectification Pending',
      dueDate: '2026-02-05'
    },
    { 
      ncrNo: 'NCR-2024-046', 
      location: 'Culvert C-4', 
      issue: 'Concrete cover inadequate',
      severity: 'Medium',
      raisedBy: 'Authority Engineer',
      raisedOn: '2026-01-27',
      contractor: 'XYZ Builders',
      status: 'Under Review',
      dueDate: '2026-02-03'
    },
    { 
      ncrNo: 'NCR-2024-047', 
      location: 'CH 15+200', 
      issue: 'Joint sealant application improper',
      severity: 'Low',
      raisedBy: 'AE - Site B',
      raisedOn: '2026-01-26',
      contractor: 'ABC Constructions',
      status: 'Rectified - Pending Verification',
      dueDate: '2026-02-02'
    },
  ];

  // Quality Certifications
  const qualityCertificates = [
    { certNo: 'QC-2024-128', workType: 'Earthwork - Package 1', chainage: 'CH 0 to 5 km', certifiedBy: 'Authority Engineer', date: '2026-01-25', status: 'Issued' },
    { certNo: 'QC-2024-129', workType: 'Subgrade Preparation', chainage: 'CH 5 to 8 km', certifiedBy: 'AE - Site A', date: '2026-01-28', status: 'Issued' },
    { certNo: 'QC-2024-130', workType: 'Base Course Construction', chainage: 'CH 2 to 3 km', certifiedBy: 'Authority Engineer', date: '2026-01-27', status: 'Issued' },
  ];

  const handleUploadTest = () => {
    alert('Test result uploaded successfully!');
    setIsUploadTestOpen(false);
  };

  const handleApproval = (action: 'approve' | 'reject') => {
    alert(`${selectedItem?.material || 'Item'} ${action === 'approve' ? 'approved' : 'rejected'} successfully!`);
    setIsApprovalOpen(false);
    setSelectedItem(null);
  };

  const handleNCR = (action: 'verify' | 'close') => {
    alert(`NCR ${action === 'verify' ? 'verified' : 'closed'} successfully!`);
    setIsNCROpen(false);
    setSelectedItem(null);
  };

  return (
    <div style={{ padding: '32px', background: '#f8fafc', minHeight: '100vh' }}>
      {/* Header Card */}
      <div style={{
        background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
        borderRadius: '20px',
        padding: '32px',
        marginBottom: '32px',
        boxShadow: '0 4px 20px rgba(245, 158, 11, 0.2)'
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
          {(role === 'CONTRACTOR' || role === 'AE') && (
            <button
              onClick={() => setIsUploadTestOpen(true)}
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
              Upload Test Result
            </button>
          )}
        </div>
      </div>

      {/* Quality Stats Cards */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '24px', 
        marginBottom: '32px' 
      }}>
        {[
          { label: 'Tests Conducted', value: '856', icon: <Beaker size={24} />, color: '#3b82f6', bgGradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' },
          { label: 'Tests Passed', value: '782', subtitle: '91.4% pass rate', icon: <CheckCircle size={24} />, color: '#10b981', bgGradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' },
          { label: 'Pending Approvals', value: '24', icon: <Clock size={24} />, color: '#f59e0b', bgGradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' },
          { label: 'Active NCRs', value: '8', icon: <AlertTriangle size={24} />, color: '#ef4444', bgGradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' },
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
            </div>
            {stat.subtitle && (
              <div style={{ fontSize: '13px', color: '#64748b', fontWeight: '500' }}>
                {stat.subtitle}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Test Results Table */}
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '28px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        marginBottom: '32px',
        border: '1px solid #e2e8f0'
      }}>
        <h3 style={{ margin: '0 0 24px 0', color: '#1e293b', fontSize: '20px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Beaker size={24} style={{ color: '#f59e0b' }} />
          Recent Test Results
        </h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0' }}>
            <thead>
              <tr>
                {['Test ID', 'Material', 'Test Type', 'Location', 'Test Date', 'Lab', 'Result', 'Status', 'Action'].map((header, idx) => (
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
              {testResults.map((test, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '20px 16px', color: '#f59e0b', fontSize: '14px', fontWeight: '700' }}>{test.testId}</td>
                  <td style={{ padding: '20px 16px', color: '#1e293b', fontSize: '14px', fontWeight: '600' }}>{test.material}</td>
                  <td style={{ padding: '20px 16px', color: '#64748b', fontSize: '14px' }}>{test.testType}</td>
                  <td style={{ padding: '20px 16px', color: '#64748b', fontSize: '14px' }}>{test.location}</td>
                  <td style={{ padding: '20px 16px', color: '#64748b', fontSize: '14px' }}>{test.testDate}</td>
                  <td style={{ padding: '20px 16px', color: '#64748b', fontSize: '13px' }}>{test.lab}</td>
                  <td style={{ padding: '20px 16px' }}>
                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '14px',
                      fontWeight: '700',
                      color: test.result === 'Pass' ? '#10b981' : '#ef4444'
                    }}>
                      {test.result === 'Pass' ? <CheckCircle size={16} /> : <XCircle size={16} />}
                      {test.result}
                    </span>
                  </td>
                  <td style={{ padding: '20px 16px' }}>
                    <span style={{
                      padding: '6px 14px',
                      borderRadius: '10px',
                      fontSize: '12px',
                      fontWeight: '700',
                      background: test.status === 'Approved' ? '#d1fae5' : test.status === 'Rejected' ? '#fee2e2' : '#fef3c7',
                      color: test.status === 'Approved' ? '#065f46' : test.status === 'Rejected' ? '#991b1b' : '#92400e',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {test.status}
                    </span>
                  </td>
                  <td style={{ padding: '20px 16px' }}>
                    <button
                      onClick={() => {
                        setSelectedItem(test);
                        if (test.status === 'Pending Approval' && content.canApprove) {
                          setIsApprovalOpen(true);
                        } else {
                          setIsViewTestOpen(true);
                        }
                      }}
                      style={{
                        padding: '8px 20px',
                        background: test.status === 'Pending Approval' && content.canApprove
                          ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
                          : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
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
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <Eye size={14} />
                      {test.status === 'Pending Approval' && content.canApprove ? 'Review' : 'View'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Material Approvals */}
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '28px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        marginBottom: '32px',
        border: '1px solid #e2e8f0'
      }}>
        <h3 style={{ margin: '0 0 24px 0', color: '#1e293b', fontSize: '20px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Award size={24} style={{ color: '#10b981' }} />
          Material Approvals
        </h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0' }}>
            <thead>
              <tr>
                {['Approval ID', 'Material', 'Supplier', 'Quantity', 'Requested On', 'Status', 'Approved By'].map((header, idx) => (
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
              {materialApprovals.map((approval, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '20px 16px', color: '#10b981', fontSize: '14px', fontWeight: '700' }}>{approval.approvalId}</td>
                  <td style={{ padding: '20px 16px', color: '#1e293b', fontSize: '14px', fontWeight: '600' }}>{approval.material}</td>
                  <td style={{ padding: '20px 16px', color: '#64748b', fontSize: '14px' }}>{approval.supplier}</td>
                  <td style={{ padding: '20px 16px', color: '#1e293b', fontSize: '15px', fontWeight: '700' }}>{approval.quantity}</td>
                  <td style={{ padding: '20px 16px', color: '#64748b', fontSize: '14px' }}>{approval.requestedOn}</td>
                  <td style={{ padding: '20px 16px' }}>
                    <span style={{
                      padding: '6px 14px',
                      borderRadius: '10px',
                      fontSize: '12px',
                      fontWeight: '700',
                      background: approval.status === 'Approved' ? '#d1fae5' : approval.status === 'Rejected' ? '#fee2e2' : '#fef3c7',
                      color: approval.status === 'Approved' ? '#065f46' : approval.status === 'Rejected' ? '#991b1b' : '#92400e',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {approval.status}
                    </span>
                  </td>
                  <td style={{ padding: '20px 16px', color: '#64748b', fontSize: '14px' }}>{approval.approvedBy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Non-Conformance Reports */}
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
            <AlertTriangle size={24} style={{ color: '#ef4444' }} />
            Non-Conformance Reports (NCR)
          </h3>
          {content.canApprove && (
            <button
              onClick={() => setIsNCROpen(true)}
              style={{
                padding: '10px 20px',
                background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
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
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(239, 68, 68, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Plus size={18} />
              Raise NCR
            </button>
          )}
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0' }}>
            <thead>
              <tr>
                {['NCR No.', 'Location', 'Issue', 'Severity', 'Raised By', 'Contractor', 'Due Date', 'Status', 'Action'].map((header, idx) => (
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
              {ncrData.map((ncr, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '20px 16px', color: '#ef4444', fontSize: '14px', fontWeight: '700' }}>{ncr.ncrNo}</td>
                  <td style={{ padding: '20px 16px', color: '#1e293b', fontSize: '14px', fontWeight: '600' }}>{ncr.location}</td>
                  <td style={{ padding: '20px 16px', color: '#64748b', fontSize: '14px' }}>{ncr.issue}</td>
                  <td style={{ padding: '20px 16px' }}>
                    <span style={{
                      padding: '6px 14px',
                      borderRadius: '10px',
                      fontSize: '12px',
                      fontWeight: '700',
                      background: ncr.severity === 'High' ? '#fee2e2' : ncr.severity === 'Medium' ? '#fef3c7' : '#dbeafe',
                      color: ncr.severity === 'High' ? '#991b1b' : ncr.severity === 'Medium' ? '#92400e' : '#1e40af',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {ncr.severity}
                    </span>
                  </td>
                  <td style={{ padding: '20px 16px', color: '#64748b', fontSize: '14px' }}>{ncr.raisedBy}</td>
                  <td style={{ padding: '20px 16px', color: '#1e293b', fontSize: '14px' }}>{ncr.contractor}</td>
                  <td style={{ padding: '20px 16px', color: '#64748b', fontSize: '14px' }}>{ncr.dueDate}</td>
                  <td style={{ padding: '20px 16px' }}>
                    <span style={{
                      padding: '6px 14px',
                      borderRadius: '10px',
                      fontSize: '12px',
                      fontWeight: '700',
                      background: ncr.status.includes('Rectified') ? '#d1fae5' : ncr.status.includes('Pending') ? '#fee2e2' : '#fef3c7',
                      color: ncr.status.includes('Rectified') ? '#065f46' : ncr.status.includes('Pending') ? '#991b1b' : '#92400e',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      fontSize: '11px'
                    }}>
                      {ncr.status}
                    </span>
                  </td>
                  <td style={{ padding: '20px 16px' }}>
                    <button
                      onClick={() => {
                        setSelectedItem(ncr);
                        setIsNCROpen(true);
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

      {/* Quality Certificates */}
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '28px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        border: '1px solid #e2e8f0'
      }}>
        <h3 style={{ margin: '0 0 24px 0', color: '#1e293b', fontSize: '20px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FileText size={24} style={{ color: '#3b82f6' }} />
          Quality Certificates Issued
        </h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0' }}>
            <thead>
              <tr>
                {['Certificate No.', 'Work Type', 'Chainage', 'Certified By', 'Issue Date', 'Status'].map((header, idx) => (
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
              {qualityCertificates.map((cert, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '20px 16px', color: '#3b82f6', fontSize: '14px', fontWeight: '700' }}>{cert.certNo}</td>
                  <td style={{ padding: '20px 16px', color: '#1e293b', fontSize: '14px', fontWeight: '600' }}>{cert.workType}</td>
                  <td style={{ padding: '20px 16px', color: '#64748b', fontSize: '14px' }}>{cert.chainage}</td>
                  <td style={{ padding: '20px 16px', color: '#64748b', fontSize: '14px' }}>{cert.certifiedBy}</td>
                  <td style={{ padding: '20px 16px', color: '#64748b', fontSize: '14px' }}>{cert.date}</td>
                  <td style={{ padding: '20px 16px' }}>
                    <span style={{
                      padding: '6px 14px',
                      borderRadius: '10px',
                      fontSize: '12px',
                      fontWeight: '700',
                      background: '#d1fae5',
                      color: '#065f46',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {cert.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Upload Test Result Modal */}
      <Modal
        isOpen={isUploadTestOpen}
        onClose={() => setIsUploadTestOpen(false)}
        title="Upload Test Result"
        width="800px"
        footer={
          <>
            <ModalButton variant="secondary" onClick={() => setIsUploadTestOpen(false)}>
              Cancel
            </ModalButton>
            <ModalButton variant="success" onClick={handleUploadTest}>
              Submit Test Result
            </ModalButton>
          </>
        }
      >
        <FormField
          label="Test Category"
          type="select"
          options={[
            'Material Testing',
            'Soil Testing',
            'Concrete Testing',
            'Bitumen Testing',
            'Aggregate Testing',
            'Pavement Testing',
            'Other'
          ]}
          required
        />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <FormField label="Material Type" placeholder="e.g., Bitumen VG-30" required />
          <FormField
            label="Test Type"
            type="select"
            options={[
              'Penetration Test',
              'Compressive Strength',
              'CBR Test',
              'Los Angeles Abrasion',
              'Proctor Density Test',
              'Aggregate Impact Value',
              'Water Absorption',
              'Other'
            ]}
            required
          />
        </div>

        <FormField label="Test Location / Chainage" placeholder="e.g., CH 12+500 to 13+000" required />
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <FormField label="Sample Collection Date" type="date" required />
          <FormField label="Test Conducted Date" type="date" required />
        </div>

        <FormField label="Testing Laboratory" placeholder="e.g., NABL Accredited Lab - Indore" required 
          helperText="Must be NABL/GOVT accredited lab" />

        <div style={{
          background: '#f0f9ff',
          padding: '20px',
          borderRadius: '12px',
          marginBottom: '20px',
          border: '1px solid #bfdbfe'
        }}>
          <h4 style={{ margin: '0 0 16px 0', fontSize: '15px', color: '#1e40af', fontWeight: '700' }}>Test Results</h4>
          <FormField label="Test Result Value" placeholder="e.g., 35 N/mm² (for compressive strength)" required />
          <FormField label="Specified Value / Range" placeholder="e.g., Min 30 N/mm²" required />
          <FormField
            label="Test Outcome"
            type="select"
            options={['Pass', 'Fail', 'Marginal']}
            required
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ fontSize: '15px', color: '#1e293b', marginBottom: '12px', fontWeight: '700' }}>Supporting Documents</h4>
          <FormField label="Lab Test Certificate" type="file" required 
            helperText="PDF from accredited lab with seal & signature" />
          <FormField label="Sample Photos (Geo-tagged)" type="file" />
          <FormField label="Test Procedure Documentation" type="file" />
        </div>

        <FormField label="Remarks / Observations" type="textarea" rows={3} />

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
              <li>Only reports from NABL/GOVT accredited labs will be accepted</li>
              <li>Test certificates must include lab seal and authorized signature</li>
              <li>Failed tests require immediate NCR and retesting</li>
              <li>Ensure all sample collection is witnessed by AE/Engineer</li>
            </ul>
          </div>
        </div>
      </Modal>

      {/* Test Approval Modal */}
      <Modal
        isOpen={isApprovalOpen}
        onClose={() => {
          setIsApprovalOpen(false);
          setSelectedItem(null);
        }}
        title="Review Test Result"
        width="800px"
        footer={
          <>
            <ModalButton variant="danger" onClick={() => handleApproval('reject')}>
              ✗ Reject
            </ModalButton>
            <ModalButton variant="success" onClick={() => handleApproval('approve')}>
              ✓ Approve
            </ModalButton>
          </>
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
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Test ID</div>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b' }}>{selectedItem.testId}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Result</div>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '18px',
                    fontWeight: '700',
                    color: selectedItem.result === 'Pass' ? '#10b981' : '#ef4444'
                  }}>
                    {selectedItem.result === 'Pass' ? <CheckCircle size={20} /> : <XCircle size={20} />}
                    {selectedItem.result}
                  </span>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Material</div>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>{selectedItem.material}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Test Type</div>
                  <div style={{ fontSize: '14px', color: '#1e293b' }}>{selectedItem.testType}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Location</div>
                  <div style={{ fontSize: '14px', color: '#1e293b' }}>{selectedItem.location}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Test Date</div>
                  <div style={{ fontSize: '14px', color: '#1e293b' }}>{selectedItem.testDate}</div>
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Testing Lab</div>
                  <div style={{ fontSize: '14px', color: '#1e293b' }}>{selectedItem.lab}</div>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '16px', color: '#1e293b', marginBottom: '16px', fontWeight: '700' }}>Test Documents</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'Lab_Test_Certificate_QT-2024-458.pdf',
                  'Sample_Collection_Photos.zip',
                  'Test_Procedure_Report.pdf'
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

            <FormField label="Verification Comments" type="textarea" rows={4} required 
              helperText="Provide detailed comments on test result verification" />
            <FormField
              label="Approval Decision"
              type="select"
              options={[
                'Approve - Test Compliant',
                'Approve with Conditions',
                'Reject - Retest Required',
                'Reject - Non-Compliant Lab',
                'Return for Clarification'
              ]}
              required
            />
          </>
        )}
      </Modal>

      {/* NCR Modal */}
      <Modal
        isOpen={isNCROpen}
        onClose={() => {
          setIsNCROpen(false);
          setSelectedItem(null);
        }}
        title={selectedItem?.ncrNo ? 'NCR Details' : 'Raise Non-Conformance Report'}
        width="800px"
        footer={
          selectedItem?.ncrNo ? (
            selectedItem.status === 'Rectified - Pending Verification' ? (
              <>
                <ModalButton variant="danger" onClick={() => handleNCR('verify')}>
                  Return for Re-work
                </ModalButton>
                <ModalButton variant="success" onClick={() => handleNCR('close')}>
                  ✓ Verify & Close NCR
                </ModalButton>
              </>
            ) : null
          ) : (
            <>
              <ModalButton variant="secondary" onClick={() => setIsNCROpen(false)}>
                Cancel
              </ModalButton>
              <ModalButton variant="danger" onClick={() => handleNCR('close')}>
                Raise NCR
              </ModalButton>
            </>
          )
        }
      >
        {selectedItem?.ncrNo ? (
          <>
            <div style={{
              background: 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)',
              padding: '24px',
              borderRadius: '16px',
              marginBottom: '24px',
              border: '1px solid #fecaca'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>NCR Number</div>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b' }}>{selectedItem.ncrNo}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Severity</div>
                  <span style={{
                    display: 'inline-block',
                    padding: '6px 14px',
                    borderRadius: '10px',
                    fontSize: '12px',
                    fontWeight: '700',
                    background: selectedItem.severity === 'High' ? '#fee2e2' : selectedItem.severity === 'Medium' ? '#fef3c7' : '#dbeafe',
                    color: selectedItem.severity === 'High' ? '#991b1b' : selectedItem.severity === 'Medium' ? '#92400e' : '#1e40af'
                  }}>
                    {selectedItem.severity}
                  </span>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Location</div>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>{selectedItem.location}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Due Date</div>
                  <div style={{ fontSize: '14px', color: '#ef4444', fontWeight: '700' }}>{selectedItem.dueDate}</div>
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Issue Description</div>
                  <div style={{ fontSize: '15px', color: '#1e293b', fontWeight: '500' }}>{selectedItem.issue}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Contractor</div>
                  <div style={{ fontSize: '14px', color: '#1e293b' }}>{selectedItem.contractor}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Raised By</div>
                  <div style={{ fontSize: '14px', color: '#1e293b' }}>{selectedItem.raisedBy}</div>
                </div>
              </div>
            </div>

            {selectedItem.status === 'Rectified - Pending Verification' && (
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: '16px', color: '#1e293b', marginBottom: '16px', fontWeight: '700' }}>Rectification Evidence</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {['Rectification_Photos_Before.jpg', 'Rectification_Photos_After.jpg', 'Quality_Test_Post_Rectification.pdf'].map((doc) => (
                    <div
                      key={doc}
                      style={{
                        padding: '16px',
                        border: '1px solid #e2e8f0',
                        borderRadius: '12px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        background: '#f8fafc'
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
                <FormField label="Verification Comments" type="textarea" rows={4} required 
                  helperText="Confirm rectification is satisfactory" />
              </div>
            )}
          </>
        ) : (
          <>
            <FormField label="NCR Location / Chainage" placeholder="e.g., CH 12+800" required />
            <FormField
              label="Severity Level"
              type="select"
              options={['High', 'Medium', 'Low']}
              required
            />
            <FormField label="Issue Description" type="textarea" rows={4} required 
              helperText="Describe the non-conformance in detail" />
            <FormField label="Specification Reference" placeholder="e.g., IRC:37-2018, Clause 5.3.2" required />
            <FormField label="Contractor Responsible" type="select" 
              options={['ABC Constructions', 'XYZ Builders', 'PQR Infrastructure', 'LMN Contractors']} 
              required />
            <FormField label="Rectification Due Date" type="date" required />
            <FormField label="Recommended Corrective Action" type="textarea" rows={3} required />
            <FormField label="Upload Evidence Photos" type="file" required 
              helperText="Geo-tagged photos showing the issue" />
            <FormField label="Upload Related Test Reports (if any)" type="file" />
          </>
        )}
      </Modal>

      {/* View Test Details Modal */}
      <Modal
        isOpen={isViewTestOpen}
        onClose={() => {
          setIsViewTestOpen(false);
          setSelectedItem(null);
        }}
        title="Test Result Details"
        width="800px"
      >
        {selectedItem && (
          <>
            <div style={{
              background: selectedItem.result === 'Pass' 
                ? 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)'
                : 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)',
              padding: '24px',
              borderRadius: '16px',
              marginBottom: '24px',
              border: selectedItem.result === 'Pass' ? '1px solid #bbf7d0' : '1px solid #fecaca'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Test ID</div>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b' }}>{selectedItem.testId}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Result</div>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '20px',
                    fontWeight: '800',
                    color: selectedItem.result === 'Pass' ? '#10b981' : '#ef4444'
                  }}>
                    {selectedItem.result === 'Pass' ? <CheckCircle size={24} /> : <XCircle size={24} />}
                    {selectedItem.result}
                  </span>
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Material Tested</div>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b' }}>{selectedItem.material}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Test Type</div>
                  <div style={{ fontSize: '14px', color: '#1e293b' }}>{selectedItem.testType}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Location</div>
                  <div style={{ fontSize: '14px', color: '#1e293b' }}>{selectedItem.location}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Sample Date</div>
                  <div style={{ fontSize: '14px', color: '#1e293b' }}>{selectedItem.sampleDate}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Test Date</div>
                  <div style={{ fontSize: '14px', color: '#1e293b' }}>{selectedItem.testDate}</div>
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Testing Laboratory</div>
                  <div style={{ fontSize: '14px', color: '#1e293b' }}>{selectedItem.lab}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Status</div>
                  <span style={{
                    display: 'inline-block',
                    padding: '6px 14px',
                    borderRadius: '10px',
                    fontSize: '12px',
                    fontWeight: '700',
                    background: selectedItem.status === 'Approved' ? '#d1fae5' : selectedItem.status === 'Rejected' ? '#fee2e2' : '#fef3c7',
                    color: selectedItem.status === 'Approved' ? '#065f46' : selectedItem.status === 'Rejected' ? '#991b1b' : '#92400e'
                  }}>
                    {selectedItem.status}
                  </span>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '16px', color: '#1e293b', marginBottom: '16px', fontWeight: '700' }}>Test Documentation</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['Lab_Certificate.pdf', 'Sample_Photos.zip', 'Test_Report.pdf'].map((doc) => (
                  <div
                    key={doc}
                    style={{
                      padding: '16px',
                      border: '1px solid #e2e8f0',
                      borderRadius: '12px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: '#f8fafc'
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