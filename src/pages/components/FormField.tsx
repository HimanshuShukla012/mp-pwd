import { useState } from 'react';
import { AlertCircle, Upload, Calendar, ChevronDown } from 'lucide-react';

export default function FormField({
  label,
  type = 'text',
  value,
  defaultValue,
  step,
  onChange,
  placeholder,
  required = false,
  options,
  rows,
  error,
  helperText,
  disabled = false,
}: {

  label: string;
  type?: React.HTMLInputTypeAttribute | "select" | "textarea";
  value?: string | number;
  defaultValue?: string | number;
  step?: string | number;
  onChange?: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  options?: string[];
  rows?: number;
  error?: string;
  helperText?: string;
  disabled?: boolean;
}) {

  const [isFocused, setIsFocused] = useState(false);
  const [fileName, setFileName] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      onChange?.(file.name);
    }
  };

  const baseInputStyle = {
    width: '100%',
    padding: '12px 16px',
    border: `2px solid ${
      error 
        ? '#ef4444' 
        : isFocused 
          ? '#3b82f6' 
          : '#e2e8f0'
    }`,
    borderRadius: '12px',
    fontSize: '15px',
    outline: 'none',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxSizing: 'border-box' as const,
    background: disabled ? '#f8fafc' : 'white',
    color: disabled ? '#94a3b8' : '#1e293b',
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    boxShadow: isFocused ? '0 0 0 4px rgba(59, 130, 246, 0.1)' : 'none',
  };

  const labelStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    marginBottom: '10px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#1e293b',
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  };

  return (
    <div style={{ marginBottom: '24px', position: 'relative' }}>
      <label style={labelStyle}>
        <span>{label}</span>
        {required && (
          <span 
            style={{ 
              color: '#ef4444', 
              fontSize: '16px',
              lineHeight: '1'
            }}
          >
            *
          </span>
        )}
      </label>

      {type === 'select' ? (
        <div style={{ position: 'relative' }}>
          <select
  value={value}
  defaultValue={defaultValue}
  onChange={(e) => onChange?.(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            disabled={disabled}
            style={{
              ...baseInputStyle,
              paddingRight: '40px',
              appearance: 'none',
              cursor: disabled ? 'not-allowed' : 'pointer',
            }}
            required={required}
          >
            <option value="" disabled>
              {placeholder || `Select ${label}`}
            </option>
            {options?.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <ChevronDown
            size={20}
            style={{
              position: 'absolute',
              right: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#64748b',
              pointerEvents: 'none',
            }}
          />
        </div>
      ) : type === 'textarea' ? (
        <textarea
  value={value}
  defaultValue={defaultValue}
  onChange={(e) => onChange?.(e.target.value)}
  onFocus={() => setIsFocused(true)}
  onBlur={() => setIsFocused(false)}
  placeholder={placeholder}
  rows={rows || 4}
  disabled={disabled}
  style={{
    ...baseInputStyle,
    resize: 'vertical',
    minHeight: '100px',
  }}
  required={required}
/>

      ) : type === 'file' ? (
        <div>
          <input
            type="file"
            onChange={handleFileChange}
            disabled={disabled}
            style={{ display: 'none' }}
            id={`file-${label}`}
            required={required}
          />
          <label
            htmlFor={`file-${label}`}
            style={{
              ...baseInputStyle,
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              cursor: disabled ? 'not-allowed' : 'pointer',
              background: disabled ? '#f8fafc' : isFocused ? '#f0f9ff' : 'white',
            }}
            onMouseEnter={() => !disabled && setIsFocused(true)}
            onMouseLeave={() => setIsFocused(false)}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Upload size={20} style={{ color: 'white' }} />
            </div>
            <div style={{ flex: 1, textAlign: 'left' }}>
              {fileName ? (
                <div>
                  <div style={{ fontWeight: '600', color: '#1e293b', marginBottom: '2px' }}>
                    {fileName}
                  </div>
                  <div style={{ fontSize: '12px', color: '#64748b' }}>
                    Click to change file
                  </div>
                </div>
              ) : (
                <div>
                  <div style={{ fontWeight: '600', color: '#3b82f6', marginBottom: '2px' }}>
                    Choose file
                  </div>
                  <div style={{ fontSize: '12px', color: '#64748b' }}>
                    {placeholder || 'Click to upload'}
                  </div>
                </div>
              )}
            </div>
          </label>
        </div>
      ) : type === 'date' ? (
        <div style={{ position: 'relative' }}>
          <input
            type="date"
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            disabled={disabled}
            style={{
              ...baseInputStyle,
              paddingRight: '40px',
            }}
            required={required}
          />
          <Calendar
            size={18}
            style={{
              position: 'absolute',
              right: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#64748b',
              pointerEvents: 'none',
            }}
          />
        </div>
      ) : (
        <input
  type={type}
  value={value}
  defaultValue={defaultValue}
  step={step}
  onChange={(e) => onChange?.(e.target.value)}
  onFocus={() => setIsFocused(true)}
  onBlur={() => setIsFocused(false)}
  placeholder={placeholder}
  disabled={disabled}
  style={baseInputStyle}
  required={required}
/>

      )}

      {/* Error Message */}
      {error && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginTop: '8px',
            color: '#ef4444',
            fontSize: '13px',
            fontWeight: '500',
          }}
        >
          <AlertCircle size={14} />
          {error}
        </div>
      )}

      {/* Helper Text */}
      {helperText && !error && (
        <div
          style={{
            marginTop: '8px',
            color: '#64748b',
            fontSize: '13px',
            fontWeight: '500',
          }}
        >
          {helperText}
        </div>
      )}
    </div>
  );
}