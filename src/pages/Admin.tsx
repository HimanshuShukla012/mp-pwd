import { useState } from 'react';
import type { Role } from '../roles';
import Modal, { ModalButton } from './components/Modal';
import FormField from './components/FormField';
import { 
  Settings, 
  Users, 
  Building, 
  Shield, 
  Bell,
  Eye,
  Plus,
  Edit,
  Trash2,
  UserPlus,
  CheckCircle,
  XCircle,
  Key,
  FileText,
  Search,
  AlertCircle,
  Lock,
  Unlock
} from 'lucide-react';

export default function Admin({ role }: { role: Role }) {
  const [isCreateUserOpen, setIsCreateUserOpen] = useState(false);
  const [isCreatePIUOpen, setIsCreatePIUOpen] = useState(false);
  const [isEditUserOpen, setIsEditUserOpen] = useState(false);
  const [isViewAuditOpen, setIsViewAuditOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  // System Users
  const systemUsers = [
    { 
      userId: 'USR-001',
      name: 'Dr. Sharma',
      email: 'sharma@mpwd.gov.in',
      mobile: '+91 98765 43210',
      role: 'AUTHORITY_ENGINEER',
      piu: 'All PIUs',
      status: 'Active',
      lastLogin: '2026-01-30 14:30',
      createdOn: '2024-01-15'
    },
    { 
      userId: 'USR-002',
      name: 'Rajesh Kumar',
      email: 'rajesh.ae@mpwd.gov.in',
      mobile: '+91 98765 43211',
      role: 'AE',
      piu: 'PIU-Central',
      status: 'Active',
      lastLogin: '2026-01-30 16:45',
      createdOn: '2024-01-20'
    },
    { 
      userId: 'USR-003',
      name: 'Amit Singh',
      email: 'amit.je@mpwd.gov.in',
      mobile: '+91 98765 43212',
      role: 'JE',
      piu: 'PIU-Central',
      status: 'Active',
      lastLogin: '2026-01-30 18:15',
      createdOn: '2024-02-01'
    },
    { 
      userId: 'USR-004',
      name: 'ABC Constructions (User)',
      email: 'admin@abcconstructions.com',
      mobile: '+91 98765 43213',
      role: 'CONTRACTOR',
      piu: 'PIU-Central',
      status: 'Active',
      lastLogin: '2026-01-30 17:00',
      createdOn: '2024-01-25'
    },
    { 
      userId: 'USR-005',
      name: 'Neha Gupta',
      email: 'neha.je@mpwd.gov.in',
      mobile: '+91 98765 43214',
      role: 'JE',
      piu: 'PIU-East',
      status: 'Inactive',
      lastLogin: '2026-01-15 10:20',
      createdOn: '2024-02-15'
    },
  ];

  // PIUs
  const pius = [
    { 
      piuCode: 'PIU-CENTRAL',
      name: 'PIU - Central Region',
      location: 'Indore',
      head: 'Eng. Suresh Patel',
      packages: 8,
      staff: 25,
      status: 'Active',
      createdOn: '2024-01-10'
    },
    { 
      piuCode: 'PIU-EAST',
      name: 'PIU - Eastern Region',
      location: 'Jabalpur',
      head: 'Eng. Priya Sharma',
      packages: 6,
      staff: 18,
      status: 'Active',
      createdOn: '2024-01-10'
    },
    { 
      piuCode: 'PIU-NORTH',
      name: 'PIU - Northern Region',
      location: 'Gwalior',
      head: 'Eng. Vikram Singh',
      packages: 5,
      staff: 15,
      status: 'Active',
      createdOn: '2024-01-15'
    },
  ];

  // Audit Logs
  const auditLogs = [
    { timestamp: '2026-01-30 18:20', user: 'Amit Singh (JE)', action: 'Created MB Entry', details: 'MB-2024-158', ipAddress: '10.20.30.40' },
    { timestamp: '2026-01-30 17:30', user: 'Rajesh Kumar (AE)', action: 'Approved Progress Report', details: 'PKG-001 Jan 2026', ipAddress: '10.20.30.35' },
    { timestamp: '2026-01-30 16:45', user: 'ABC Constructions', action: 'Submitted Bill', details: 'Bill No. 18 - ₹85 Cr', ipAddress: '203.45.67.89' },
    { timestamp: '2026-01-30 15:20', user: 'Admin User', action: 'Created New User', details: 'USR-006 - New JE', ipAddress: '10.20.30.10' },
    { timestamp: '2026-01-30 14:30', user: 'Dr. Sharma (Auth Eng)', action: 'Conducted Inspection', details: 'INS-2024-247', ipAddress: '10.20.30.25' },
  ];

  // System Settings
  const [settings, setSettings] = useState({
    autoApproval: false,
    emailNotifications: true,
    smsNotifications: true,
    sessionTimeout: 30,
    maxLoginAttempts: 3,
    passwordExpiry: 90
  });

  const handleCreateUser = () => {
    alert('User created successfully!');
    setIsCreateUserOpen(false);
  };

  const handleCreatePIU = () => {
    alert('PIU created successfully!');
    setIsCreatePIUOpen(false);
  };

  const handleEditUser = () => {
    alert('User updated successfully!');
    setIsEditUserOpen(false);
    setSelectedUser(null);
  };

  const handleToggleUserStatus = (user: any) => {
    const action = user.status === 'Active' ? 'deactivated' : 'activated';
    alert(`User ${action} successfully!`);
  };

  const handleResetPassword = (user: any) => {
    alert(`Password reset link sent to ${user.email}`);
  };

  return (
    <div style={{ padding: '32px', background: '#f8fafc', minHeight: '100vh' }}>
      {/* Header Card */}
      <div style={{
        background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
        borderRadius: '20px',
        padding: '32px',
        marginBottom: '32px',
        boxShadow: '0 4px 20px rgba(99, 102, 241, 0.2)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ margin: '0 0 8px 0', color: 'white', fontSize: '28px', fontWeight: '800' }}>
              System Administration
            </h2>
            <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.9)', fontSize: '15px' }}>
              Manage users, PIUs, roles, and system configuration
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
            <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '4px' }}>Total Users</div>
            <div style={{ fontSize: '32px', fontWeight: '800', color: 'white' }}>{systemUsers.length}</div>
          </div>
        </div>
      </div>

      {/* Admin Stats Cards */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '24px', 
        marginBottom: '32px' 
      }}>
        {[
          { label: 'Active Users', value: '4', icon: <Users size={24} />, color: '#10b981', bgGradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' },
          { label: 'Active PIUs', value: '3', icon: <Building size={24} />, color: '#3b82f6', bgGradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' },
          { label: 'Roles Configured', value: '8', icon: <Shield size={24} />, color: '#f59e0b', bgGradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' },
          { label: 'Login Sessions Today', value: '42', icon: <Key size={24} />, color: '#8b5cf6', bgGradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)' },
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

      {/* Tabs */}
      <div style={{
        display: 'flex',
        gap: '12px',
        marginBottom: '24px',
        borderBottom: '2px solid #e2e8f0'
      }}>
        {['User Management', 'PIU Management', 'System Settings', 'Audit Logs'].map((tab, idx) => (
          <button
            key={tab}
            style={{
              padding: '12px 24px',
              background: idx === 0 ? 'white' : 'transparent',
              color: idx === 0 ? '#6366f1' : '#64748b',
              border: 'none',
              borderBottom: idx === 0 ? '3px solid #6366f1' : '3px solid transparent',
              fontSize: '14px',
              fontWeight: idx === 0 ? '700' : '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* User Management Section */}
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
            <Users size={24} style={{ color: '#6366f1' }} />
            System Users
          </h3>
          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                placeholder="Search users..."
                style={{
                  padding: '10px 40px 10px 16px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  fontSize: '14px',
                  width: '250px'
                }}
              />
              <Search size={18} style={{ position: 'absolute', right: '12px', top: '12px', color: '#64748b' }} />
            </div>
            <button
              onClick={() => setIsCreateUserOpen(true)}
              style={{
                padding: '10px 20px',
                background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
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
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(99, 102, 241, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <UserPlus size={18} />
              Add User
            </button>
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0' }}>
            <thead>
              <tr>
                {['User ID', 'Name', 'Email', 'Role', 'PIU', 'Status', 'Last Login', 'Actions'].map((header, idx) => (
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
              {systemUsers.map((user, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '20px 16px', color: '#6366f1', fontSize: '14px', fontWeight: '700' }}>{user.userId}</td>
                  <td style={{ padding: '20px 16px', color: '#1e293b', fontSize: '14px', fontWeight: '600' }}>{user.name}</td>
                  <td style={{ padding: '20px 16px', color: '#64748b', fontSize: '13px' }}>{user.email}</td>
                  <td style={{ padding: '20px 16px' }}>
                    <span style={{
                      padding: '4px 12px',
                      borderRadius: '8px',
                      fontSize: '12px',
                      fontWeight: '700',
                      background: user.role === 'AUTHORITY_ENGINEER' ? '#dbeafe' : 
                                 user.role === 'AE' ? '#d1fae5' : 
                                 user.role === 'JE' ? '#fef3c7' : '#fce7f3',
                      color: user.role === 'AUTHORITY_ENGINEER' ? '#1e40af' : 
                             user.role === 'AE' ? '#065f46' : 
                             user.role === 'JE' ? '#92400e' : '#9f1239'
                    }}>
                      {user.role}
                    </span>
                  </td>
                  <td style={{ padding: '20px 16px', color: '#64748b', fontSize: '13px' }}>{user.piu}</td>
                  <td style={{ padding: '20px 16px' }}>
                    <span style={{
                      padding: '6px 14px',
                      borderRadius: '10px',
                      fontSize: '12px',
                      fontWeight: '700',
                      background: user.status === 'Active' ? '#d1fae5' : '#fee2e2',
                      color: user.status === 'Active' ? '#065f46' : '#991b1b',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      {user.status === 'Active' ? <CheckCircle size={14} /> : <XCircle size={14} />}
                      {user.status}
                    </span>
                  </td>
                  <td style={{ padding: '20px 16px', color: '#64748b', fontSize: '13px' }}>{user.lastLogin}</td>
                  <td style={{ padding: '20px 16px' }}>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button
                        onClick={() => {
                          setSelectedUser(user);
                          setIsEditUserOpen(true);
                        }}
                        style={{
                          padding: '6px 12px',
                          background: '#dbeafe',
                          color: '#1e40af',
                          border: 'none',
                          borderRadius: '8px',
                          fontSize: '12px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        <Edit size={14} />
                        Edit
                      </button>
                      <button
                        onClick={() => handleToggleUserStatus(user)}
                        style={{
                          padding: '6px 12px',
                          background: user.status === 'Active' ? '#fee2e2' : '#d1fae5',
                          color: user.status === 'Active' ? '#991b1b' : '#065f46',
                          border: 'none',
                          borderRadius: '8px',
                          fontSize: '12px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        {user.status === 'Active' ? <Lock size={14} /> : <Unlock size={14} />}
                        {user.status === 'Active' ? 'Disable' : 'Enable'}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* PIU Management Section */}
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
            <Building size={24} style={{ color: '#3b82f6' }} />
            Project Implementation Units (PIUs)
          </h3>
          <button
            onClick={() => setIsCreatePIUOpen(true)}
            style={{
              padding: '10px 20px',
              background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
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
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <Plus size={18} />
            Add PIU
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {pius.map((piu, idx) => (
            <div
              key={idx}
              style={{
                padding: '24px',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                background: '#f8fafc',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.borderColor = '#3b82f6';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(59, 130, 246, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#f8fafc';
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div>
                  <div style={{ fontSize: '13px', color: '#3b82f6', fontWeight: '700', marginBottom: '4px' }}>{piu.piuCode}</div>
                  <h4 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: '700', color: '#1e293b' }}>{piu.name}</h4>
                  <div style={{ fontSize: '13px', color: '#64748b' }}>{piu.location}</div>
                </div>
                <span style={{
                  padding: '4px 12px',
                  borderRadius: '8px',
                  fontSize: '11px',
                  fontWeight: '700',
                  background: '#d1fae5',
                  color: '#065f46'
                }}>
                  {piu.status}
                </span>
              </div>
              <div style={{
                padding: '16px',
                background: 'white',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                marginBottom: '16px'
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
                  <div>
                    <div style={{ fontSize: '11px', color: '#64748b', marginBottom: '4px' }}>Head</div>
                    <div style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b' }}>{piu.head}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: '#64748b', marginBottom: '4px' }}>Packages</div>
                    <div style={{ fontSize: '16px', fontWeight: '700', color: '#3b82f6' }}>{piu.packages}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: '#64748b', marginBottom: '4px' }}>Staff</div>
                    <div style={{ fontSize: '16px', fontWeight: '700', color: '#10b981' }}>{piu.staff}</div>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  style={{
                    flex: 1,
                    padding: '8px',
                    background: '#dbeafe',
                    color: '#1e40af',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '12px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px'
                  }}
                >
                  <Eye size={14} />
                  View Details
                </button>
                <button
                  style={{
                    flex: 1,
                    padding: '8px',
                    background: '#f1f5f9',
                    color: '#64748b',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '12px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px'
                  }}
                >
                  <Edit size={14} />
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Audit Logs */}
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '28px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        border: '1px solid #e2e8f0'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h3 style={{ margin: 0, color: '#1e293b', fontSize: '20px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FileText size={24} style={{ color: '#8b5cf6' }} />
            Recent Audit Logs
          </h3>
          <button
            onClick={() => setIsViewAuditOpen(true)}
            style={{
              padding: '8px 16px',
              background: '#f1f5f9',
              color: '#64748b',
              border: 'none',
              borderRadius: '10px',
              fontSize: '13px',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            View All Logs
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {auditLogs.map((log, idx) => (
            <div
              key={idx}
              style={{
                padding: '16px',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                background: '#f8fafc',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
                  <span style={{ fontSize: '13px', color: '#64748b', fontWeight: '600' }}>{log.timestamp}</span>
                  <span style={{
                    padding: '2px 8px',
                    borderRadius: '6px',
                    fontSize: '11px',
                    fontWeight: '700',
                    background: '#dbeafe',
                    color: '#1e40af'
                  }}>
                    {log.user}
                  </span>
                </div>
                <div style={{ fontSize: '14px', color: '#1e293b', fontWeight: '600', marginBottom: '4px' }}>
                  {log.action}
                </div>
                <div style={{ fontSize: '13px', color: '#64748b' }}>
                  {log.details} • IP: {log.ipAddress}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Create User Modal */}
      <Modal
        isOpen={isCreateUserOpen}
        onClose={() => setIsCreateUserOpen(false)}
        title="Create New User"
        width="700px"
        footer={
          <>
            <ModalButton variant="secondary" onClick={() => setIsCreateUserOpen(false)}>
              Cancel
            </ModalButton>
            <ModalButton variant="primary" onClick={handleCreateUser}>
              Create User
            </ModalButton>
          </>
        }
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <FormField label="Full Name" placeholder="e.g., John Doe" required />
          <FormField label="Email Address" type="email" placeholder="user@mpwd.gov.in" required />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <FormField label="Mobile Number" type="tel" placeholder="+91 98765 43210" required />
          <FormField
            label="Role"
            type="select"
            options={['PMU', 'PIU', 'AUTHORITY_ENGINEER', 'AE', 'JE', 'CONTRACTOR', 'IVA', 'LENDER']}
            required
          />
        </div>

        <FormField
          label="Assign to PIU"
          type="select"
          options={['All PIUs', 'PIU-Central', 'PIU-East', 'PIU-North']}
          required
        />

        <FormField label="Employee ID / Contractor License No." placeholder="e.g., EMP-2024-001" />

        <div style={{
          padding: '16px',
          background: '#f0f9ff',
          borderRadius: '12px',
          border: '1px solid #bfdbfe',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '12px'
        }}>
          <AlertCircle size={20} style={{ color: '#1e40af', flexShrink: 0, marginTop: '2px' }} />
          <div>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#1e40af', marginBottom: '4px' }}>
              User Credentials
            </div>
            <div style={{ fontSize: '13px', color: '#1e3a8a' }}>
              A temporary password will be sent to the user's email. User must change password on first login.
            </div>
          </div>
        </div>
      </Modal>

      {/* Create PIU Modal */}
      <Modal
        isOpen={isCreatePIUOpen}
        onClose={() => setIsCreatePIUOpen(false)}
        title="Create New PIU"
        width="700px"
        footer={
          <>
            <ModalButton variant="secondary" onClick={() => setIsCreatePIUOpen(false)}>
              Cancel
            </ModalButton>
            <ModalButton variant="primary" onClick={handleCreatePIU}>
              Create PIU
            </ModalButton>
          </>
        }
      >
        <FormField label="PIU Code" placeholder="e.g., PIU-WEST" required />
        <FormField label="PIU Name" placeholder="e.g., PIU - Western Region" required />
        <FormField label="Location / Headquarters" placeholder="e.g., Indore" required />
        <FormField label="PIU Head / Executive Engineer" placeholder="Full Name" required />
        <FormField label="Contact Email" type="email" placeholder="piu.west@mpwd.gov.in" required />
        <FormField label="Contact Phone" type="tel" placeholder="+91 98765 43210" required />
        <FormField label="Office Address" type="textarea" rows={3} required />
      </Modal>

      {/* Edit User Modal */}
      <Modal
        isOpen={isEditUserOpen}
        onClose={() => {
          setIsEditUserOpen(false);
          setSelectedUser(null);
        }}
        title="Edit User"
        width="700px"
        footer={
          <>
            <ModalButton variant="danger" onClick={() => handleResetPassword(selectedUser)}>
              Reset Password
            </ModalButton>
            <ModalButton variant="secondary" onClick={() => {
              setIsEditUserOpen(false);
              setSelectedUser(null);
            }}>
              Cancel
            </ModalButton>
            <ModalButton variant="primary" onClick={handleEditUser}>
              Update User
            </ModalButton>
          </>
        }
      >
        {selectedUser && (
          <>
            <div style={{
              padding: '16px',
              background: '#f0f9ff',
              borderRadius: '12px',
              marginBottom: '20px',
              border: '1px solid #bfdbfe'
            }}>
              <div style={{ fontSize: '13px', color: '#1e40af', fontWeight: '600', marginBottom: '4px' }}>
                User ID: {selectedUser.userId}
              </div>
              <div style={{ fontSize: '11px', color: '#1e3a8a' }}>
                Created on: {selectedUser.createdOn}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <FormField label="Full Name" defaultValue={selectedUser.name} required />
              <FormField label="Email Address" type="email" defaultValue={selectedUser.email} required />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <FormField label="Mobile Number" type="tel" defaultValue={selectedUser.mobile} required />
              <FormField
                label="Role"
                type="select"
                defaultValue={selectedUser.role}
                options={['PMU', 'PIU', 'AUTHORITY_ENGINEER', 'AE', 'JE', 'CONTRACTOR', 'IVA', 'LENDER']}
                required
              />
            </div>

            <FormField
              label="Assign to PIU"
              type="select"
              defaultValue={selectedUser.piu}
              options={['All PIUs', 'PIU-Central', 'PIU-East', 'PIU-North']}
              required
            />
          </>
        )}
      </Modal>
    </div>
  );
}