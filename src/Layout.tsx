import { useEffect, useRef } from 'react';
import { ROLE_NAMES, ROLE_NAVIGATION } from './roles';
import type { Role } from './roles';
import {
  LayoutDashboard,
  FolderKanban,
  Shield,
  AlertTriangle,
  Target,
  FileText,
  Settings,
  LogOut,
  ChevronRight,
  Menu,
  Bell,
  Search,
  User,
} from 'lucide-react';

const getIconForPage = (page: string) => {
  const iconMap: Record<string, any> = {
    Dashboard: LayoutDashboard,
    Projects: FolderKanban,
    Compliance: Shield,
    'Road Safety': AlertTriangle,
    DLI: Target,
    Reports: FileText,
    Settings: Settings,
  };
  return iconMap[page] || FolderKanban;
};

export default function Layout({
  role,
  setPage,
  currentPage,
  onLogout,
  children,
}: {
  role: Role;
  setPage: (page: string) => void;
  currentPage: string;
  onLogout: () => void;
  children: React.ReactNode;
}) {
  const menuItems = ROLE_NAVIGATION[role];
  const sidebarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // GSAP-like stagger animation for menu items
    const menuButtons = sidebarRef.current?.querySelectorAll('.menu-item');
    menuButtons?.forEach((button, index) => {
      (button as HTMLElement).style.opacity = '0';
      (button as HTMLElement).style.transform = 'translateX(-20px)';
      
      setTimeout(() => {
        (button as HTMLElement).style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        (button as HTMLElement).style.opacity = '1';
        (button as HTMLElement).style.transform = 'translateX(0)';
      }, index * 50);
    });
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        background: '#f8fafc',
      }}
    >
      {/* Modern Sidebar */}
      <aside
        ref={sidebarRef}
        style={{
          width: '280px',
          background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '4px 0 24px rgba(0, 0, 0, 0.12)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative gradient overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '300px',
            background: 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.15), transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Logo & Header */}
        <div
          style={{
            padding: '28px 24px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '20px',
            }}
          >
            <img
              src="/logo.jpg"
              alt="MP PWD Logo"
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                objectFit: 'cover',
                boxShadow: '0 8px 16px rgba(59, 130, 246, 0.3)',
              }}
            />
            <div>
              <div
                style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#f1f5f9',
                  lineHeight: '1.2',
                  marginBottom: '2px',
                }}
              >
                Project Monitoring System
              </div>
              <div
                style={{
                  fontSize: '11px',
                  color: '#94a3b8',
                  fontWeight: '500',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                Madhya Pradesh PWD
              </div>
            </div>
          </div>

          {/* User Role Badge */}
          <div
            style={{
              background: 'rgba(59, 130, 246, 0.15)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '10px',
              padding: '12px 16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            <div
              style={{
                fontSize: '13px',
                color: '#cbd5e1',
                fontWeight: '500',
              }}
            >
              {ROLE_NAMES[role]}
            </div>
            <div
              style={{
                fontSize: '11px',
                color: '#60a5fa',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              {role}
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav
          style={{
            flex: 1,
            padding: '20px 16px',
            overflowY: 'auto',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: '11px',
              color: '#64748b',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '12px',
              paddingLeft: '12px',
            }}
          >
            Navigation
          </div>

          {menuItems.map((item) => {
            const Icon = getIconForPage(item);
            const isActive = currentPage === item;

            return (
              <button
                key={item}
                onClick={() => setPage(item)}
                className="menu-item"
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '14px 16px',
                  marginBottom: '6px',
                  border: 'none',
                  borderRadius: '12px',
                  background: isActive
                    ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))'
                    : 'transparent',
                  color: isActive ? '#60a5fa' : '#cbd5e1',
                  cursor: 'pointer',
                  fontSize: '15px',
                  fontWeight: isActive ? '600' : '500',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }
                }}
              >
                {/* Active indicator */}
                {isActive && (
                  <div
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '4px',
                      height: '60%',
                      background: 'linear-gradient(180deg, #60a5fa, #a78bfa)',
                      borderRadius: '0 4px 4px 0',
                    }}
                  />
                )}

                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: isActive
                      ? 'rgba(59, 130, 246, 0.2)'
                      : 'rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Icon size={18} strokeWidth={2} />
                </div>

                <span style={{ flex: 1 }}>{item}</span>

                <ChevronRight
                  size={16}
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'translateX(0)' : 'translateX(-8px)',
                    transition: 'all 0.3s ease',
                  }}
                />
              </button>
            );
          })}
        </nav>

        {/* Quick Actions */}
        <div
          style={{
            padding: '16px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div
            style={{
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '12px',
            }}
          >
            <div
              style={{
                fontSize: '13px',
                color: '#94a3b8',
                marginBottom: '8px',
                fontWeight: '500',
              }}
            >
              Need Help?
            </div>
            <button
              style={{
                width: '100%',
                padding: '10px',
                background: 'rgba(59, 130, 246, 0.2)',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                borderRadius: '8px',
                color: '#60a5fa',
                fontSize: '13px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(59, 130, 246, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(59, 130, 246, 0.2)';
              }}
            >
              View Documentation
            </button>
          </div>

          {/* Logout Button */}
          <button
            onClick={onLogout}
            style={{
              width: '100%',
              padding: '14px 16px',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              borderRadius: '12px',
              background: 'rgba(239, 68, 68, 0.1)',
              color: '#fca5a5',
              cursor: 'pointer',
              fontSize: '15px',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)';
              e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.5)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          background: '#f8fafc',
          overflow: 'hidden',
        }}
      >
        {/* Top Navigation Bar */}
        <header
          style={{
            background: 'white',
            borderBottom: '1px solid #e2e8f0',
            padding: '16px 32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
            position: 'sticky',
            top: 0,
            zIndex: 10,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <h1
              style={{
                margin: 0,
                fontSize: '26px',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #1e293b 0%, #3b82f6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {currentPage}
            </h1>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Search Bar */}
            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Search
                size={18}
                style={{
                  position: 'absolute',
                  left: '14px',
                  color: '#94a3b8',
                }}
              />
              <input
                type="text"
                placeholder="Search..."
                style={{
                  padding: '10px 16px 10px 44px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  fontSize: '14px',
                  width: '280px',
                  outline: 'none',
                  transition: 'all 0.2s ease',
                  background: '#f8fafc',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#3b82f6';
                  e.currentTarget.style.background = 'white';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.background = '#f8fafc';
                }}
              />
            </div>

            {/* Notifications */}
            <button
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                background: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                position: 'relative',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#3b82f6';
                e.currentTarget.style.background = '#f0f9ff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.background = 'white';
              }}
            >
              <Bell size={20} style={{ color: '#64748b' }} />
              <div
                style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  width: '8px',
                  height: '8px',
                  background: '#ef4444',
                  borderRadius: '50%',
                  border: '2px solid white',
                }}
              />
            </button>

            {/* User Profile */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '8px 16px 8px 8px',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                background: 'white',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#3b82f6';
                e.currentTarget.style.background = '#f0f9ff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.background = 'white';
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '14px',
                }}
              >
                <User size={18} />
              </div>
              <div>
                <div
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#1e293b',
                  }}
                >
                  {ROLE_NAMES[role]}
                </div>
                <div
                  style={{
                    fontSize: '12px',
                    color: '#64748b',
                  }}
                >
                  {role}
                </div>
              </div>
            </div>

            {/* Date */}
            <div
              style={{
                padding: '10px 16px',
                background: '#f0f9ff',
                borderRadius: '10px',
                fontSize: '13px',
                color: '#3b82f6',
                fontWeight: '600',
                border: '1px solid #dbeafe',
              }}
            >
              {new Date().toLocaleDateString('en-IN', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            background: '#f8fafc',
          }}
        >
          {children}
        </div>
      </main>
    </div>
  );
}