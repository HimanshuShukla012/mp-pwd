import { useState } from "react";
import type { Role } from "./roles";
import { loginUser } from "./auth";
import { Shield, Lock, User, AlertCircle } from "lucide-react";

export default function Login({ onLogin }: { onLogin: (role: Role) => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      setError("Please enter both username and password");
      return;
    }

    setIsLoading(true);
    setError("");

    // Simulate brief loading for better UX
    setTimeout(() => {
      const role = loginUser(username, password);
      setIsLoading(false);

      if (role) {
        onLogin(role);
      } else {
        setError("Invalid credentials. Please try again.");
        setPassword("");
      }
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: '#0f172a',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Image with Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
          zIndex: 0,
        }}
      />
      
      {/* Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
          zIndex: 1,
        }}
      />

      {/* Decorative Elements */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15), transparent 70%)',
          borderRadius: '50%',
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15), transparent 70%)',
          borderRadius: '50%',
          zIndex: 1,
        }}
      />

      {/* Login Card */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.98)",
          backdropFilter: 'blur(20px)',
          borderRadius: "24px",
          boxShadow: "0 25px 80px rgba(0, 0, 0, 0.4)",
          padding: "0",
          width: "100%",
          maxWidth: "1000px",
          display: 'flex',
          overflow: 'hidden',
          position: 'relative',
          zIndex: 2,
          border: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        {/* Left Panel - Branding */}
        <div
          style={{
            flex: 1,
            background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
            padding: '60px 48px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            color: 'white',
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
              height: '400px',
              background: 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.2), transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          {/* Logo */}
          <div
            style={{
              marginBottom: '32px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <img
              src="/logo.jpg"
              alt="MP PWD Logo"
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '24px',
                objectFit: 'cover',
                boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)',
                border: '3px solid rgba(255, 255, 255, 0.1)',
              }}
            />
          </div>

          {/* Title */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h1
              style={{
                margin: '0 0 12px 0',
                fontSize: '32px',
                fontWeight: '800',
                color: '#f1f5f9',
                lineHeight: '1.2',
                letterSpacing: '-0.5px',
              }}
            >
              Project Monitoring System
            </h1>
            <p
              style={{
                margin: '0 0 24px 0',
                fontSize: '16px',
                color: '#94a3b8',
                fontWeight: '500',
              }}
            >
              Madhya Pradesh Public Works Department
            </p>

            {/* Divider */}
            <div
              style={{
                width: '80px',
                height: '4px',
                background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                margin: '32px auto',
                borderRadius: '2px',
              }}
            />

            {/* Features */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                alignItems: 'center',
                marginTop: '40px',
              }}
            >
              
            </div>
          </div>

          {/* Bottom Info */}
          <div
            style={{
              position: 'absolute',
              bottom: '32px',
              left: '48px',
              right: '48px',
              padding: '20px',
              background: 'rgba(59, 130, 246, 0.1)',
              borderRadius: '12px',
              border: '1px solid rgba(59, 130, 246, 0.2)',
            }}
          >
            <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '4px' }}>
              Powered by
            </div>
            <div style={{ fontSize: '16px', color: '#60a5fa', fontWeight: '700' }}>
              MP PWD Digital Infrastructure
            </div>
          </div>
        </div>

        {/* Right Panel - Login Form */}
        <div
          style={{
            flex: 1,
            padding: '60px 48px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            background: 'white',
          }}
        >
          {/* Header */}
          <div style={{ marginBottom: '40px' }}>
            <h2
              style={{
                margin: '0 0 8px 0',
                fontSize: '32px',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #1e293b 0%, #3b82f6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Welcome Back
            </h2>
            <p
              style={{
                margin: 0,
                fontSize: '15px',
                color: '#64748b',
                fontWeight: '500',
              }}
            >
              Enter your credentials to access your dashboard
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div
              style={{
                background: 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)',
                border: '1px solid #fecaca',
                borderRadius: '12px',
                padding: '16px',
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <AlertCircle size={20} style={{ color: '#dc2626', flexShrink: 0 }} />
              <span style={{ color: '#dc2626', fontSize: '14px', fontWeight: '500' }}>
                {error}
              </span>
            </div>
          )}

          {/* Form */}
          <div>
            {/* Username Field */}
            <div style={{ marginBottom: '24px' }}>
              <label
                style={{
                  display: 'block',
                  marginBottom: '10px',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#1e293b',
                }}
              >
                Username
              </label>
              <div style={{ position: 'relative' }}>
                <div
                  style={{
                    position: 'absolute',
                    left: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#94a3b8',
                  }}
                >
                  <User size={20} />
                </div>
                <input
                  type="text"
                  value={username}
                  placeholder="Enter your username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setError("");
                  }}
                  onKeyPress={handleKeyPress}
                  disabled={isLoading}
                  style={{
                    width: '100%',
                    padding: '14px 16px 14px 48px',
                    fontSize: '15px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    outline: 'none',
                    transition: 'all 0.2s ease',
                    boxSizing: 'border-box',
                    background: '#f8fafc',
                    fontWeight: '500',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#3b82f6';
                    e.target.style.background = 'white';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e2e8f0';
                    e.target.style.background = '#f8fafc';
                  }}
                />
              </div>
            </div>

            {/* Password Field */}
            <div style={{ marginBottom: '32px' }}>
              <label
                style={{
                  display: 'block',
                  marginBottom: '10px',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#1e293b',
                }}
              >
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <div
                  style={{
                    position: 'absolute',
                    left: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#94a3b8',
                  }}
                >
                  <Lock size={20} />
                </div>
                <input
                  type="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  onKeyPress={handleKeyPress}
                  disabled={isLoading}
                  style={{
                    width: '100%',
                    padding: '14px 16px 14px 48px',
                    fontSize: '15px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    outline: 'none',
                    transition: 'all 0.2s ease',
                    boxSizing: 'border-box',
                    background: '#f8fafc',
                    fontWeight: '500',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#3b82f6';
                    e.target.style.background = 'white';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e2e8f0';
                    e.target.style.background = '#f8fafc';
                  }}
                />
              </div>
            </div>

            {/* Login Button */}
            <button
              onClick={handleLogin}
              disabled={isLoading}
              style={{
                width: '100%',
                padding: '16px',
                fontSize: '16px',
                fontWeight: '700',
                color: 'white',
                background: isLoading
                  ? '#94a3b8'
                  : 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                border: 'none',
                borderRadius: '12px',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: isLoading
                  ? 'none'
                  : '0 8px 24px rgba(59, 130, 246, 0.4)',
              }}
              onMouseEnter={(e) => {
                if (!isLoading) {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(59, 130, 246, 0.5)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isLoading) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.4)';
                }
              }}
            >
              {isLoading ? 'Logging in...' : 'Login to Dashboard'}
            </button>
          </div>

          {/* Demo Credentials */}
          <div
            style={{
              marginTop: '32px',
              padding: '20px',
              background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
              borderRadius: '12px',
              border: '1px solid #bfdbfe',
            }}
          >
            <div style={{ 
              fontWeight: '700', 
              marginBottom: '12px',
              color: '#1e40af',
              fontSize: '14px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}>
              Demo Credentials
            </div>
            <div style={{ 
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}>
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                color: '#334155',
              }}>
                <span style={{ color: '#64748b', fontWeight: '500', minWidth: '80px' }}>Username:</span>
                <code style={{ 
                  padding: '4px 12px',
                  background: 'rgba(59, 130, 246, 0.1)',
                  borderRadius: '6px',
                  fontWeight: '700',
                  color: '#1e40af',
                  fontSize: '13px',
                }}>
                  pmu, piu, ae, je, contractor, authority, lender, iva
                </code>
              </div>
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                color: '#334155',
              }}>
                <span style={{ color: '#64748b', fontWeight: '500', minWidth: '80px' }}>Password:</span>
                <code style={{ 
                  padding: '4px 12px',
                  background: 'rgba(59, 130, 246, 0.1)',
                  borderRadius: '6px',
                  fontWeight: '700',
                  color: '#1e40af',
                  fontSize: '13px',
                }}>
                  1234
                </code>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              marginTop: '32px',
              paddingTop: '24px',
              borderTop: '1px solid #e2e8f0',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: '13px',
                color: '#64748b',
                fontWeight: '500',
              }}
            >
              © 2026 Madhya Pradesh PWD. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}