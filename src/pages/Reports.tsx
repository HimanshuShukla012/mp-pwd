import type { Role } from '../roles';

export default function Reports({ role }: { role: Role }) {
  const getReportTypes = () => {
    switch (role) {
      case 'PMU':
        return ['MIS Reports', 'Financial Reports', 'Progress Reports', 'Compliance Reports', 'DLI Reports'];
      case 'PIU':
        return ['PIU Progress Reports', 'Financial Reports', 'Utilization Reports'];
      case 'LENDER':
        return ['Financial Audit Reports', 'DLI Achievement Reports', 'Progress & Utilization Statements'];
      default:
        return ['Reports'];
    }
  };

  const reportTypes = getReportTypes();

  return (
    <div>
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '24px',
        marginBottom: '24px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ margin: '0 0 8px 0', color: '#1e293b' }}>Reports & Analytics</h3>
        <p style={{ margin: 0, color: '#64748b' }}>
          Generate and download reports in PDF or Excel format
        </p>
      </div>

      {/* Report Categories */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {reportTypes.map((reportType, idx) => (
          <div
            key={idx}
            style={{
              background: 'white',
              borderRadius: '12px',
              padding: '24px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              borderTop: '4px solid #3b82f6'
            }}
          >
            <h4 style={{ margin: '0 0 16px 0', color: '#1e293b' }}>{reportType}</h4>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button style={{
                flex: 1,
                padding: '10px',
                background: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
                📄 PDF
              </button>
              <button style={{
                flex: 1,
                padding: '10px',
                background: '#10b981',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
                📊 Excel
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Reports */}
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '24px',
        marginTop: '24px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <h4 style={{ margin: '0 0 20px 0', color: '#1e293b' }}>Recently Generated Reports</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e2e8f0', textAlign: 'left' }}>
              <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Report Name</th>
              <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Type</th>
              <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Generated On</th>
              <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'Monthly Progress Report - January 2026', type: 'Progress', date: '2026-01-31' },
              { name: 'Financial Utilization Q4 2025', type: 'Financial', date: '2026-01-28' },
              { name: 'DLI Achievement Status', type: 'DLI', date: '2026-01-25' },
              { name: 'Compliance Summary December 2025', type: 'Compliance', date: '2026-01-15' },
            ].map((report, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '16px', color: '#1e293b', fontSize: '14px' }}>{report.name}</td>
                <td style={{ padding: '16px' }}>
                  <span style={{
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '600',
                    background: '#dbeafe',
                    color: '#1e40af'
                  }}>
                    {report.type}
                  </span>
                </td>
                <td style={{ padding: '16px', color: '#64748b', fontSize: '14px' }}>{report.date}</td>
                <td style={{ padding: '16px' }}>
                  <button style={{
                    padding: '6px 16px',
                    background: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '13px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}>
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}