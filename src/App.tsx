import { useState } from 'react';
import Login from './Login';
import Layout from './Layout';
import { ROLES, hasAccessToPage, getDefaultPage } from './roles';
import type { Role } from './roles';

import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Progress from './pages/Progress';
import Compliance from './pages/Compliance';
import RoadSafety from './pages/RoadSafety';
import DLI from './pages/DLI';
import Reports from './pages/Reports';
import Bills from './pages/Bills';
import Payments from './pages/Payments';
import Certification from './pages/Certification';
import Finance from './pages/Finance';
import Contracts from './pages/Contracts';
import Quality from './pages/Quality';
import Inspections from './pages/Inspections';
import MyPackages from './pages/Mypackages';
import MBEntry from './pages/Mbentry';
import DailyLogs from './pages/Dailylogs';
import Admin from './pages/Admin';

export default function App() {
  const [role, setRole] = useState<Role | null>(null);
  const [page, setPage] = useState('Dashboard');

  const handleLogin = (userRole: Role) => {
    setRole(userRole);
    setPage(getDefaultPage(userRole));
  };

  const handleLogout = () => {
    setRole(null);
    setPage('Dashboard');
  };

  const handlePageChange = (newPage: string) => {
    if (role && hasAccessToPage(role, newPage)) {
      setPage(newPage);
    } else {
      alert('Access Denied: You do not have permission to view this page.');
    }
  };

  if (!role) return <Login onLogin={handleLogin} />;

  const renderPage = () => {
    // Access control check
    if (!hasAccessToPage(role, page)) {
      return (
        <div style={{
          padding: '40px',
          textAlign: 'center',
          background: '#fee',
          borderRadius: '8px',
          border: '1px solid #fcc'
        }}>
          <h2 style={{ color: '#c33' }}>Access Denied</h2>
          <p>You do not have permission to view this page.</p>
        </div>
      );
    }

    switch (page) {
      case 'Projects': return <Projects role={role} />;
      case 'Progress': return <Progress role={role} />;
      case 'Bills': return <Bills role={role} />;
      case 'Payments': return <Payments role={role} />;
      case 'Compliance': return <Compliance role={role} />;
      case 'Road Safety': return <RoadSafety role={role} />;
      case 'DLI': return <DLI role={role} />;
      case 'Reports': return <Reports role={role} />;
      case 'Certification': return <Certification role={role} />;
      case 'Finance': return <Finance role={role} />;
      case 'Contracts': return <Contracts role={role} />;
      case 'Quality': return <Quality role={role} />;
      case 'Inspections': return <Inspections role={role} />;
      case 'Packages': return <MyPackages role={role} />;
      case 'Material Bill (MB)': return <MBEntry role={role} />;
      case 'Daily Log Book': return <DailyLogs role={role} />;
      case 'Admin Panel': return <Admin role={role} />;
      default: return <Dashboard role={role} />;
    }
  };

  return (
    <Layout 
      role={role} 
      setPage={handlePageChange}
      currentPage={page}
      onLogout={handleLogout}
    >
      {renderPage()}
    </Layout>
  );
}