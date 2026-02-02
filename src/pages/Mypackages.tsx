import { useState } from 'react';
import type { Role } from '../roles';
import Modal, { ModalButton } from './components/Modal';
import FormField from './components/FormField';
import { 
  Package, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  AlertCircle,
  CheckCircle,
  FileText,
  Eye,
  Download,
  Upload,
  MapPin,
  Calendar,
  Award
} from 'lucide-react';

export default function MyPackages({ role }: { role: Role }) {
  const [isViewPackageOpen, setIsViewPackageOpen] = useState(false);
  const [isUploadProgressOpen, setIsUploadProgressOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<any>(null);

  // Contractor's Assigned Packages
  const assignedPackages = [
    { 
      packageNo: 'PKG-001',
      projectName: 'Indore-Bhopal Corridor',
      packageName: 'Package 1: CH 0 to 25 km',
      location: 'Indore District',
      contractValue: '₹2,500 Cr',
      startDate: '2024-01-15',
      endDate: '2026-12-31',
      physicalProgress: 72,
      financialProgress: 68,
      status: 'Active',
      lastPayment: '2026-01-20',
      pendingPayment: '₹180 Cr',
      pendingBills: 2,
      dueDate: '2026-12-31',
      daysRemaining: 332,
      performanceRating: 'Good'
    },
    { 
      packageNo: 'PKG-004',
      projectName: 'Jabalpur-Rewa Highway',
      packageName: 'Package 4: CH 50 to 70 km',
      location: 'Jabalpur District',
      contractValue: '₹1,800 Cr',
      startDate: '2024-03-10',
      endDate: '2027-03-09',
      physicalProgress: 58,
      financialProgress: 55,
      status: 'Active',
      lastPayment: '2026-01-15',
      pendingPayment: '₹95 Cr',
      pendingBills: 1,
      dueDate: '2027-03-09',
      daysRemaining: 400,
      performanceRating: 'Satisfactory'
    },
    { 
      packageNo: 'PKG-007',
      projectName: 'Gwalior Bypass',
      packageName: 'Package 7: Bypass Section A',
      location: 'Gwalior District',
      contractValue: '₹950 Cr',
      startDate: '2023-06-01',
      endDate: '2025-11-30',
      physicalProgress: 98,
      financialProgress: 96,
      status: 'Near Completion',
      lastPayment: '2026-01-25',
      pendingPayment: '₹25 Cr',
      pendingBills: 0,
      dueDate: '2025-11-30',
      daysRemaining: -64,
      performanceRating: 'Excellent'
    },
  ];

  // Recent Activities
  const recentActivities = [
    { date: '2026-01-30', activity: 'Progress report submitted for PKG-001', status: 'Pending Approval', packageNo: 'PKG-001' },
    { date: '2026-01-28', activity: 'Bill submitted for ₹85 Cr (PKG-004)', status: 'Under Review', packageNo: 'PKG-004' },
    { date: '2026-01-25', activity: 'Payment received ₹120 Cr (PKG-001)', status: 'Completed', packageNo: 'PKG-001' },
    { date: '2026-01-22', activity: 'Quality test approved (PKG-007)', status: 'Completed', packageNo: 'PKG-007' },
    { date: '2026-01-20', activity: 'Extension request submitted (PKG-004)', status: 'Pending Approval', packageNo: 'PKG-004' },
  ];

  // Pending Approvals
  const pendingApprovals = [
    { item: 'Physical Progress Report - January 2026', packageNo: 'PKG-001', submittedOn: '2026-01-30', status: 'Pending AE Approval' },
    { item: 'Running Bill No. 18 - ₹85 Cr', packageNo: 'PKG-004', submittedOn: '2026-01-28', status: 'Pending PIU Review' },
    { item: 'Material Approval - Bitumen VG-30', packageNo: 'PKG-001', submittedOn: '2026-01-27', status: 'Pending AE Approval' },
    { item: 'Extension Request - 60 days', packageNo: 'PKG-004', submittedOn: '2026-01-20', status: 'Pending PIU Approval' },
  ];

  // Work Orders by Package
  const workOrders = {
    'PKG-001': [
      { woNo: 'WO-001-A', description: 'Earthwork & Land Development', value: '₹850 Cr', progress: 85, status: 'Active' },
      { woNo: 'WO-001-B', description: 'Pavement & Surfacing', value: '₹950 Cr', progress: 68, status: 'Active' },
      { woNo: 'WO-001-C', description: 'Drainage & Culverts', value: '₹700 Cr', progress: 60, status: 'Active' },
    ],
    'PKG-004': [
      { woNo: 'WO-004-A', description: 'Bridge Construction', value: '₹600 Cr', progress: 55, status: 'Active' },
      { woNo: 'WO-004-B', description: 'Road Formation', value: '₹800 Cr', progress: 62, status: 'Active' },
      { woNo: 'WO-004-C', description: 'Safety Features', value: '₹400 Cr', progress: 50, status: 'Active' },
    ],
  };

  const handleUploadProgress = () => {
    alert('Progress report uploaded successfully!');
    setIsUploadProgressOpen(false);
    setSelectedPackage(null);
  };

  return (
    <div style={{ padding: '32px', background: '#f8fafc', minHeight: '100vh' }}>
      {/* Header Card */}
      <div style={{
        background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)',
        borderRadius: '20px',
        padding: '32px',
        marginBottom: '32px',
        boxShadow: '0 4px 20px rgba(20, 184, 166, 0.2)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ margin: '0 0 8px 0', color: 'white', fontSize: '28px', fontWeight: '800' }}>
              My Packages
            </h2>
            <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.9)', fontSize: '15px' }}>
              Track your assigned packages, progress, and payments
            </p>
          </div>
          <div style={{
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            padding: '16px 24px',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '4px' }}>Total Active Packages</div>
            <div style={{ fontSize: '32px', fontWeight: '800', color: 'white' }}>3</div>
          </div>
        </div>
      </div>

      {/* Package Overview Cards */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '24px', 
        marginBottom: '32px' 
      }}>
        {[
          { label: 'Total Contract Value', value: '₹5,250', unit: 'Cr', icon: <DollarSign size={24} />, color: '#3b82f6', bgGradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' },
          { label: 'Avg. Physical Progress', value: '76%', icon: <TrendingUp size={24} />, color: '#10b981', bgGradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' },
          { label: 'Pending Payments', value: '₹300', unit: 'Cr', icon: <Clock size={24} />, color: '#f59e0b', bgGradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' },
          { label: 'Pending Approvals', value: '4', icon: <AlertCircle size={24} />, color: '#ef4444', bgGradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' },
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
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <div style={{ fontSize: '36px', fontWeight: '800', color: '#1e293b', letterSpacing: '-1px' }}>
                {stat.value}
              </div>
              {stat.unit && (
                <div style={{ fontSize: '18px', color: '#64748b', fontWeight: '600' }}>
                  {stat.unit}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Assigned Packages */}
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '28px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        marginBottom: '32px',
        border: '1px solid #e2e8f0'
      }}>
        <h3 style={{ margin: '0 0 24px 0', color: '#1e293b', fontSize: '20px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Package size={24} style={{ color: '#14b8a6' }} />
          My Assigned Packages
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {assignedPackages.map((pkg, idx) => (
            <div
              key={idx}
              style={{
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '24px',
                background: '#f8fafc',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.borderColor = '#14b8a6';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(20, 184, 166, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#f8fafc';
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Package Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <span style={{
                      padding: '4px 12px',
                      background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)',
                      color: 'white',
                      borderRadius: '8px',
                      fontSize: '13px',
                      fontWeight: '700',
                      letterSpacing: '0.5px'
                    }}>
                      {pkg.packageNo}
                    </span>
                    <span style={{
                      padding: '4px 12px',
                      borderRadius: '8px',
                      fontSize: '12px',
                      fontWeight: '700',
                      background: pkg.status === 'Active' ? '#dbeafe' : pkg.status === 'Near Completion' ? '#d1fae5' : '#fee2e2',
                      color: pkg.status === 'Active' ? '#1e40af' : pkg.status === 'Near Completion' ? '#065f46' : '#991b1b'
                    }}>
                      {pkg.status}
                    </span>
                  </div>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: '700', color: '#1e293b' }}>
                    {pkg.packageName}
                  </h4>
                  <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '12px' }}>{pkg.projectName}</div>
                  <div style={{ display: 'flex', gap: '20px', fontSize: '14px', color: '#64748b' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <MapPin size={16} />
                      {pkg.location}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Calendar size={16} />
                      {pkg.startDate} to {pkg.endDate}
                    </div>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '4px' }}>Contract Value</div>
                  <div style={{ fontSize: '24px', fontWeight: '800', color: '#14b8a6' }}>{pkg.contractValue}</div>
                </div>
              </div>

              {/* Progress Bars */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '13px', color: '#64748b', fontWeight: '600' }}>Physical Progress</span>
                    <span style={{ fontSize: '14px', color: '#1e293b', fontWeight: '700' }}>{pkg.physicalProgress}%</span>
                  </div>
                  <div style={{
                    height: '8px',
                    background: '#e2e8f0',
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: `${pkg.physicalProgress}%`,
                      height: '100%',
                      background: pkg.physicalProgress >= 80 ? '#10b981' : pkg.physicalProgress >= 60 ? '#3b82f6' : '#f59e0b',
                      borderRadius: '4px',
                      transition: 'width 0.5s ease'
                    }} />
                  </div>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '13px', color: '#64748b', fontWeight: '600' }}>Financial Progress</span>
                    <span style={{ fontSize: '14px', color: '#1e293b', fontWeight: '700' }}>{pkg.financialProgress}%</span>
                  </div>
                  <div style={{
                    height: '8px',
                    background: '#e2e8f0',
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: `${pkg.financialProgress}%`,
                      height: '100%',
                      background: pkg.financialProgress >= 80 ? '#10b981' : pkg.financialProgress >= 60 ? '#8b5cf6' : '#f59e0b',
                      borderRadius: '4px',
                      transition: 'width 0.5s ease'
                    }} />
                  </div>
                </div>
              </div>

              {/* Package Stats */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '16px',
                padding: '16px',
                background: 'white',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                marginBottom: '16px'
              }}>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Pending Payment</div>
                  <div style={{ fontSize: '16px', fontWeight: '700', color: '#ef4444' }}>{pkg.pendingPayment}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Pending Bills</div>
                  <div style={{ fontSize: '16px', fontWeight: '700', color: '#f59e0b' }}>{pkg.pendingBills}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Days Remaining</div>
                  <div style={{ fontSize: '16px', fontWeight: '700', color: pkg.daysRemaining > 0 ? '#10b981' : '#ef4444' }}>
                    {pkg.daysRemaining > 0 ? pkg.daysRemaining : 'Overdue'}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Performance</div>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: '700',
                    background: pkg.performanceRating === 'Excellent' ? '#d1fae5' : pkg.performanceRating === 'Good' ? '#dbeafe' : '#fef3c7',
                    color: pkg.performanceRating === 'Excellent' ? '#065f46' : pkg.performanceRating === 'Good' ? '#1e40af' : '#92400e'
                  }}>
                    <Award size={14} />
                    {pkg.performanceRating}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={() => {
                    setSelectedPackage(pkg);
                    setIsViewPackageOpen(true);
                  }}
                  style={{
                    flex: 1,
                    padding: '12px',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
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
                  <Eye size={16} />
                  View Details
                </button>
                <button
                  onClick={() => {
                    setSelectedPackage(pkg);
                    setIsUploadProgressOpen(true);
                  }}
                  style={{
                    flex: 1,
                    padding: '12px',
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
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
                  <Upload size={16} />
                  Update Progress
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activities & Pending Approvals */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
        {/* Recent Activities */}
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '28px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          border: '1px solid #e2e8f0'
        }}>
          <h3 style={{ margin: '0 0 20px 0', color: '#1e293b', fontSize: '18px', fontWeight: '700' }}>
            Recent Activities
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {recentActivities.map((activity, idx) => (
              <div
                key={idx}
                style={{
                  padding: '14px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  background: '#f8fafc',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '14px', color: '#1e293b', fontWeight: '500', marginBottom: '4px' }}>
                    {activity.activity}
                  </div>
                  <div style={{ fontSize: '12px', color: '#64748b' }}>{activity.date}</div>
                </div>
                <span style={{
                  padding: '4px 12px',
                  borderRadius: '8px',
                  fontSize: '11px',
                  fontWeight: '700',
                  background: activity.status === 'Completed' ? '#d1fae5' : activity.status === 'Under Review' ? '#dbeafe' : '#fef3c7',
                  color: activity.status === 'Completed' ? '#065f46' : activity.status === 'Under Review' ? '#1e40af' : '#92400e',
                  whiteSpace: 'nowrap'
                }}>
                  {activity.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Approvals */}
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '28px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          border: '1px solid #e2e8f0'
        }}>
          <h3 style={{ margin: '0 0 20px 0', color: '#1e293b', fontSize: '18px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <AlertCircle size={20} style={{ color: '#f59e0b' }} />
            Pending Approvals
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {pendingApprovals.map((approval, idx) => (
              <div
                key={idx}
                style={{
                  padding: '14px',
                  border: '1px solid #fde68a',
                  borderRadius: '12px',
                  background: '#fffbeb'
                }}
              >
                <div style={{ fontSize: '14px', color: '#1e293b', fontWeight: '600', marginBottom: '6px' }}>
                  {approval.item}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>{approval.packageNo}</div>
                    <div style={{ fontSize: '12px', color: '#92400e', fontWeight: '600' }}>{approval.status}</div>
                  </div>
                  <div style={{ fontSize: '12px', color: '#64748b' }}>
                    {approval.submittedOn}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* View Package Details Modal */}
      <Modal
        isOpen={isViewPackageOpen}
        onClose={() => {
          setIsViewPackageOpen(false);
          setSelectedPackage(null);
        }}
        title="Package Details"
        width="900px"
      >
        {selectedPackage && (
          <>
            <div style={{
              background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
              padding: '24px',
              borderRadius: '16px',
              marginBottom: '24px',
              border: '1px solid #bbf7d0'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Package No.</div>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b' }}>{selectedPackage.packageNo}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Contract Value</div>
                  <div style={{ fontSize: '24px', fontWeight: '800', color: '#10b981' }}>{selectedPackage.contractValue}</div>
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Package Name</div>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>{selectedPackage.packageName}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Start Date</div>
                  <div style={{ fontSize: '14px', color: '#1e293b' }}>{selectedPackage.startDate}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>End Date</div>
                  <div style={{ fontSize: '14px', color: '#1e293b' }}>{selectedPackage.endDate}</div>
                </div>
              </div>
            </div>

            {/* Work Orders */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '16px', color: '#1e293b', marginBottom: '16px', fontWeight: '700' }}>Work Orders</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {workOrders[selectedPackage.packageNo as keyof typeof workOrders]?.map((wo, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '16px',
                      border: '1px solid #e2e8f0',
                      borderRadius: '12px',
                      background: '#f8fafc'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: '700', color: '#14b8a6', marginBottom: '4px' }}>{wo.woNo}</div>
                        <div style={{ fontSize: '14px', color: '#1e293b', fontWeight: '500' }}>{wo.description}</div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '16px', fontWeight: '700', color: '#1e293b' }}>{wo.value}</div>
                        <span style={{
                          fontSize: '12px',
                          fontWeight: '600',
                          color: wo.status === 'Active' ? '#10b981' : '#64748b'
                        }}>
                          {wo.status}
                        </span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        flex: 1,
                        height: '6px',
                        background: '#e2e8f0',
                        borderRadius: '3px',
                        overflow: 'hidden'
                      }}>
                        <div style={{
                          width: `${wo.progress}%`,
                          height: '100%',
                          background: wo.progress >= 80 ? '#10b981' : wo.progress >= 60 ? '#3b82f6' : '#f59e0b',
                          borderRadius: '3px'
                        }} />
                      </div>
                      <span style={{ fontSize: '14px', fontWeight: '700', color: '#1e293b', minWidth: '50px' }}>
                        {wo.progress}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Contract Documents */}
            <div>
              <h4 style={{ fontSize: '16px', color: '#1e293b', marginBottom: '16px', fontWeight: '700' }}>Contract Documents</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'Contract_Agreement.pdf',
                  'Technical_Specifications.pdf',
                  'BOQ_Schedule.xlsx',
                  'Drawings_Package.zip'
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
                      e.currentTarget.style.borderColor = '#14b8a6';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#f8fafc';
                      e.currentTarget.style.borderColor = '#e2e8f0';
                    }}
                  >
                    <span style={{ fontSize: '14px', color: '#1e293b', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <FileText size={18} style={{ color: '#14b8a6' }} />
                      {doc}
                    </span>
                    <button
                      style={{
                        padding: '6px 16px',
                        background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)',
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

      {/* Upload Progress Modal */}
      <Modal
        isOpen={isUploadProgressOpen}
        onClose={() => {
          setIsUploadProgressOpen(false);
          setSelectedPackage(null);
        }}
        title="Update Progress Report"
        width="800px"
        footer={
          <>
            <ModalButton variant="secondary" onClick={() => {
              setIsUploadProgressOpen(false);
              setSelectedPackage(null);
            }}>
              Cancel
            </ModalButton>
            <ModalButton variant="success" onClick={handleUploadProgress}>
              Submit Progress
            </ModalButton>
          </>
        }
      >
        {selectedPackage && (
          <>
            <div style={{
              background: '#f0f9ff',
              padding: '20px',
              borderRadius: '12px',
              marginBottom: '24px',
              border: '1px solid #bfdbfe'
            }}>
              <div style={{ fontSize: '13px', color: '#1e40af', fontWeight: '600', marginBottom: '8px' }}>
                Package: {selectedPackage.packageNo}
              </div>
              <div style={{ fontSize: '15px', color: '#1e293b', fontWeight: '600' }}>
                {selectedPackage.packageName}
              </div>
            </div>

            <FormField label="Reporting Period" type="select" 
              options={['January 2026', 'December 2025', 'November 2025', 'October 2025']} 
              required />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <FormField label="Physical Progress (%)" type="number" placeholder="e.g., 72" required />
              <FormField label="Financial Progress (%)" type="number" placeholder="e.g., 68" required />
            </div>

            <FormField label="Work Completed (Description)" type="textarea" rows={4} required 
              helperText="Describe work completed during this period" />

            <div style={{ marginTop: '20px' }}>
              <h4 style={{ fontSize: '15px', color: '#1e293b', marginBottom: '12px', fontWeight: '700' }}>Supporting Documents</h4>
              <FormField label="Progress Photos (Geo-tagged)" type="file" required 
                helperText="Minimum 5 photos showing current work status" />
              <FormField label="Measurement Book Extracts" type="file" required />
              <FormField label="Quality Test Reports (if any)" type="file" />
            </div>

            <FormField label="Remarks / Challenges Faced" type="textarea" rows={3} 
              helperText="Any issues or delays affecting progress" />
          </>
        )}
      </Modal>
    </div>
  );
}