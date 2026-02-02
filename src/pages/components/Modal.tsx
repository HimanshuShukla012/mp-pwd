import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  width = '600px',
  showCloseButton = true,
  closeOnOverlayClick = true,
  footer,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  width?: string;
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  footer?: React.ReactNode;
}) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      // Small delay to trigger animation
      setTimeout(() => setIsAnimating(true), 10);
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    } else {
      setIsAnimating(false);
      // Wait for animation to complete before unmounting
      setTimeout(() => setShouldRender(false), 300);
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleOverlayClick = () => {
    if (closeOnOverlayClick) {
      onClose();
    }
  };

  if (!shouldRender) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `rgba(0, 0, 0, ${isAnimating ? '0.6' : '0'})`,
        backdropFilter: isAnimating ? 'blur(4px)' : 'blur(0px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '20px',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      onClick={handleOverlayClick}
    >
      <div
        style={{
          background: 'white',
          borderRadius: '20px',
          width: '100%',
          maxWidth: width,
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: isAnimating
            ? '0 25px 80px rgba(0, 0, 0, 0.3)'
            : '0 10px 40px rgba(0, 0, 0, 0.2)',
          transform: isAnimating ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(20px)',
          opacity: isAnimating ? 1 : 0,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: '28px 32px',
            borderBottom: '1px solid #e2e8f0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexShrink: 0,
            background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
            borderRadius: '20px 20px 0 0',
          }}
        >
          <div>
            <h3
              style={{
                margin: 0,
                color: '#1e293b',
                fontSize: '24px',
                fontWeight: '700',
                letterSpacing: '-0.5px',
              }}
            >
              {title}
            </h3>
          </div>
          {showCloseButton && (
            <button
              onClick={onClose}
              style={{
                background: 'transparent',
                border: '1px solid #e2e8f0',
                borderRadius: '10px',
                cursor: 'pointer',
                color: '#64748b',
                padding: '0',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#fee2e2';
                e.currentTarget.style.borderColor = '#fecaca';
                e.currentTarget.style.color = '#dc2626';
                e.currentTarget.style.transform = 'rotate(90deg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.color = '#64748b';
                e.currentTarget.style.transform = 'rotate(0deg)';
              }}
            >
              <X size={20} />
            </button>
          )}
        </div>

        {/* Content */}
        <div
          style={{
            padding: '32px',
            overflowY: 'auto',
            flex: 1,
            scrollbarWidth: 'thin',
            scrollbarColor: '#cbd5e1 #f1f5f9',
          }}
        >
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div
            style={{
              padding: '20px 32px',
              borderTop: '1px solid #e2e8f0',
              background: '#f8fafc',
              borderRadius: '0 0 20px 20px',
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '12px',
              flexShrink: 0,
            }}
          >
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

// Export additional Button component for modal actions
export function ModalButton({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  type = 'button',
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}) {
  const variants = {
    primary: {
      background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
      color: 'white',
      border: 'none',
      hoverBg: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
    },
    secondary: {
      background: 'white',
      color: '#64748b',
      border: '1px solid #e2e8f0',
      hoverBg: '#f8fafc',
    },
    danger: {
      background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
      color: 'white',
      border: 'none',
      hoverBg: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
    },
    success: {
      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      color: 'white',
      border: 'none',
      hoverBg: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
    },
  };

  const style = variants[variant];

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: '12px 24px',
        borderRadius: '10px',
        fontSize: '15px',
        fontWeight: '600',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.2s ease',
        background: disabled ? '#e2e8f0' : style.background,
        color: disabled ? '#94a3b8' : style.color,
        border: style.border || 'none',
        opacity: disabled ? 0.6 : 1,
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
      onMouseEnter={(e) => {
        if (!disabled && variant !== 'secondary') {
          e.currentTarget.style.background = style.hoverBg;
          e.currentTarget.style.transform = 'translateY(-1px)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        } else if (!disabled) {
          e.currentTarget.style.background = style.hoverBg;
          e.currentTarget.style.borderColor = '#cbd5e1';
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.background = style.background;
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
          if (variant === 'secondary') {
            e.currentTarget.style.borderColor = '#e2e8f0';
          }
        }
      }}
    >
      {children}
    </button>
  );
}