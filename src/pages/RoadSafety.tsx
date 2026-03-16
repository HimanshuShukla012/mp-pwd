import type { Role } from '../roles';

export default function RoadSafety({ role }: { role: Role }) {
  return (
    <div>
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '24px',
        marginBottom: '24px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ margin: '0 0 8px 0', color: '#1e293b' }}>Road Safety Management</h3>
        <p style={{ margin: 0, color: '#64748b' }}>
          Safety interventions, audit reports, and accident-prone stretch analysis
        </p>
      </div>

      {/* Safety Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '24px' }}>
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          borderLeft: '4px solid #10b981'
        }}>
          <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>Safety Audits Completed</div>
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#1e293b' }}>24</div>
        </div>

        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          borderLeft: '4px solid #f59e0b'
        }}>
          <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>Black Spots Identified</div>
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#1e293b' }}>12</div>
        </div>

        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          borderLeft: '4px solid #3b82f6'
        }}>
          <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>Safety Interventions</div>
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#1e293b' }}>38</div>
        </div>

        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          borderLeft: '4px solid #8b5cf6'
        }}>
          <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>Compliance Rate</div>
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#1e293b' }}>92%</div>
        </div>
      </div>

      {/* Accident-Prone Stretches */}
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <h4 style={{ margin: '0 0 20px 0', color: '#1e293b' }}>Accident-Prone Stretches</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e2e8f0', textAlign: 'left' }}>
              <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Location</th>
              <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Chainage</th>
              <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Severity</th>
              <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Intervention</th>
              <th style={{ padding: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              { location: 'Indore-Bhopal NH', chainage: '25+450', severity: 'High', intervention: 'Rumble Strips, Signage', status: 'Completed' },
              { location: 'Jabalpur Bypass', chainage: '12+200', severity: 'Medium', intervention: 'Speed Breakers', status: 'In Progress' },
              { location: 'Gwalior Ring Road', chainage: '8+750', severity: 'High', intervention: 'Lighting, Guardrails', status: 'Planned' },
            ].map((item, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '16px', color: '#1e293b', fontSize: '14px' }}>{item.location}</td>
                <td style={{ padding: '16px', color: '#64748b', fontSize: '14px' }}>{item.chainage}</td>
                <td style={{ padding: '16px' }}>
                  <span style={{
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '600',
                    background: item.severity === 'High' ? '#fee' : '#fef3c7',
                    color: item.severity === 'High' ? '#c33' : '#92400e'
                  }}>
                    {item.severity}
                  </span>
                </td>
                <td style={{ padding: '16px', color: '#1e293b', fontSize: '14px' }}>{item.intervention}</td>
                <td style={{ padding: '16px' }}>
                  <span style={{
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '600',
                    background: item.status === 'Completed' ? '#d1fae5' : item.status === 'In Progress' ? '#dbeafe' : '#fef3c7',
                    color: item.status === 'Completed' ? '#065f46' : item.status === 'In Progress' ? '#1e40af' : '#92400e'
                  }}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}