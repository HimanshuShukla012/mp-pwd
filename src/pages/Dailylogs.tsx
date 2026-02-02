import { useState } from 'react';
import type { Role } from '../roles';
import Modal, { ModalButton } from './components/Modal';
import FormField from './components/FormField';
import { 
  Calendar, 
  Users, 
  Truck, 
  Cloud, 
  FileText, 
  CheckCircle,
  Clock,
  Eye,
  Plus,
  Edit,
  CloudRain,
  Sun,
  CloudSnow,
  AlertTriangle,
  TrendingUp,
  Camera
} from 'lucide-react';

export default function DailyLogs({ role }: { role: Role }) {
  const [isCreateLogOpen, setIsCreateLogOpen] = useState(false);
  const [isViewLogOpen, setIsViewLogOpen] = useState(false);
  const [selectedLog, setSelectedLog] = useState<any>(null);

  // Daily Logs
  const dailyLogs = [
    { 
      logNo: 'DL-2024-030',
      date: '2026-01-30',
      location: 'CH 12+500 to 13+000',
      workType: 'Earthwork - Excavation',
      packageNo: 'PKG-001',
      contractor: 'ABC Constructions',
      weather: 'Clear',
      temperature: '28°C',
      manpowerDeployed: 45,
      equipmentDeployed: 8,
      workProgress: 'Good',
      status: 'Draft',
      createdBy: 'JE - Amit Singh',
      lastModified: '2026-01-30 18:30'
    },
    { 
      logNo: 'DL-2024-029',
      date: '2026-01-29',
      location: 'CH 10+000 to 12+500',
      workType: 'Subgrade Preparation',
      packageNo: 'PKG-001',
      contractor: 'ABC Constructions',
      weather: 'Partly Cloudy',
      temperature: '26°C',
      manpowerDeployed: 52,
      equipmentDeployed: 10,
      workProgress: 'Excellent',
      status: 'Submitted',
      createdBy: 'JE - Amit Singh',
      submittedOn: '2026-01-29 19:00',
      lastModified: '2026-01-29 18:45'
    },
    { 
      logNo: 'DL-2024-028',
      date: '2026-01-28',
      location: 'CH 8+000 to 10+000',
      workType: 'Base Course Construction',
      packageNo: 'PKG-001',
      contractor: 'ABC Constructions',
      weather: 'Light Rain',
      temperature: '24°C',
      manpowerDeployed: 30,
      equipmentDeployed: 6,
      workProgress: 'Delayed',
      status: 'Submitted',
      createdBy: 'JE - Amit Singh',
      submittedOn: '2026-01-28 19:15',
      lastModified: '2026-01-28 18:20',
      remarks: 'Work slowed due to rain - equipment movement restricted'
    },
  ];

  // Equipment Types
  const equipmentTypes = [
    'Excavator (20T)',
    'Excavator (30T)',
    'Bulldozer (D8)',
    'Motor Grader',
    'Vibratory Roller (8T)',
    'Vibratory Roller (12T)',
    'Smooth Wheel Roller',
    'Water Tanker (10000L)',
    'Tipper Truck (10T)',
    'Tipper Truck (20T)',
    'Concrete Mixer',
    'Paver',
    'Compactor (Hand-held)',
  ];

  // Manpower Categories
  const manpowerCategories = [
    'Skilled Workers',
    'Semi-skilled Workers',
    'Unskilled Workers',
    'Equipment Operators',
    'Site Supervisors',
    'Quality Inspectors',
    'Safety Personnel',
  ];

  const handleCreateLog = () => {
    alert('Daily log created successfully!');
    setIsCreateLogOpen(false);
  };

  const handleSubmitLog = () => {
    alert('Daily log submitted successfully!');
    setIsViewLogOpen(false);
    setSelectedLog(null);
  };

  const getWeatherIcon = (weather: string) => {
    switch (weather) {
      case 'Clear':
      case 'Sunny':
        return <Sun size={20} style={{ color: '#f59e0b' }} />;
      case 'Partly Cloudy':
        return <Cloud size={20} style={{ color: '#64748b' }} />;
      case 'Light Rain':
      case 'Heavy Rain':
        return <CloudRain size={20} style={{ color: '#3b82f6' }} />;
      default:
        return <Cloud size={20} style={{ color: '#64748b' }} />;
    }
  };

  return (
    <div style={{ padding: '32px', background: '#f8fafc', minHeight: '100vh' }}>
      {/* Header Card */}
      <div style={{
        background: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)',
        borderRadius: '20px',
        padding: '32px',
        marginBottom: '32px',
        boxShadow: '0 4px 20px rgba(168, 85, 247, 0.2)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ margin: '0 0 8px 0', color: 'white', fontSize: '28px', fontWeight: '800' }}>
              Daily Work Logs
            </h2>
            <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.9)', fontSize: '15px' }}>
              Record daily site activities, manpower, and equipment deployment
            </p>
          </div>
          <button
            onClick={() => setIsCreateLogOpen(true)}
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
            <Plus size={18} />
            New Daily Log
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '24px', 
        marginBottom: '32px' 
      }}>
        {[
          { label: 'Logs This Month', value: '30', icon: <Calendar size={24} />, color: '#a855f7', bgGradient: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)' },
          { label: 'Avg. Manpower/Day', value: '42', icon: <Users size={24} />, color: '#3b82f6', bgGradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' },
          { label: 'Equipment Deployed', value: '8', icon: <Truck size={24} />, color: '#f59e0b', bgGradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' },
          { label: 'Weather Delays', value: '3', icon: <CloudRain size={24} />, color: '#ef4444', bgGradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' },
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

      {/* Daily Logs Table */}
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '28px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        border: '1px solid #e2e8f0'
      }}>
        <h3 style={{ margin: '0 0 24px 0', color: '#1e293b', fontSize: '20px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FileText size={24} style={{ color: '#a855f7' }} />
          Recent Daily Logs
        </h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0' }}>
            <thead>
              <tr>
                {['Log No.', 'Date', 'Location', 'Work Type', 'Weather', 'Manpower', 'Equipment', 'Progress', 'Status', 'Action'].map((header, idx) => (
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
              {dailyLogs.map((log, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '20px 16px', color: '#a855f7', fontSize: '14px', fontWeight: '700' }}>{log.logNo}</td>
                  <td style={{ padding: '20px 16px', color: '#1e293b', fontSize: '14px', fontWeight: '600' }}>{log.date}</td>
                  <td style={{ padding: '20px 16px', color: '#64748b', fontSize: '14px' }}>{log.location}</td>
                  <td style={{ padding: '20px 16px', color: '#1e293b', fontSize: '14px' }}>{log.workType}</td>
                  <td style={{ padding: '20px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {getWeatherIcon(log.weather)}
                      <div>
                        <div style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b' }}>{log.weather}</div>
                        <div style={{ fontSize: '12px', color: '#64748b' }}>{log.temperature}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '20px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#3b82f6', fontSize: '15px', fontWeight: '700' }}>
                      <Users size={16} />
                      {log.manpowerDeployed}
                    </div>
                  </td>
                  <td style={{ padding: '20px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#f59e0b', fontSize: '15px', fontWeight: '700' }}>
                      <Truck size={16} />
                      {log.equipmentDeployed}
                    </div>
                  </td>
                  <td style={{ padding: '20px 16px' }}>
                    <span style={{
                      padding: '6px 14px',
                      borderRadius: '10px',
                      fontSize: '12px',
                      fontWeight: '700',
                      background: log.workProgress === 'Excellent' ? '#d1fae5' : 
                                 log.workProgress === 'Good' ? '#dbeafe' : 
                                 log.workProgress === 'Delayed' ? '#fee2e2' : '#fef3c7',
                      color: log.workProgress === 'Excellent' ? '#065f46' : 
                             log.workProgress === 'Good' ? '#1e40af' : 
                             log.workProgress === 'Delayed' ? '#991b1b' : '#92400e',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {log.workProgress}
                    </span>
                  </td>
                  <td style={{ padding: '20px 16px' }}>
                    <span style={{
                      padding: '6px 14px',
                      borderRadius: '10px',
                      fontSize: '12px',
                      fontWeight: '700',
                      background: log.status === 'Submitted' ? '#dbeafe' : '#fef3c7',
                      color: log.status === 'Submitted' ? '#1e40af' : '#92400e',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {log.status}
                    </span>
                  </td>
                  <td style={{ padding: '20px 16px' }}>
                    <button
                      onClick={() => {
                        setSelectedLog(log);
                        setIsViewLogOpen(true);
                      }}
                      style={{
                        padding: '8px 20px',
                        background: log.status === 'Draft'
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
                      {log.status === 'Draft' ? <Edit size={14} /> : <Eye size={14} />}
                      {log.status === 'Draft' ? 'Edit' : 'View'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create Daily Log Modal */}
      <Modal
        isOpen={isCreateLogOpen}
        onClose={() => setIsCreateLogOpen(false)}
        title="Create Daily Work Log"
        width="900px"
        footer={
          <>
            <ModalButton variant="secondary" onClick={() => setIsCreateLogOpen(false)}>
              Cancel
            </ModalButton>
            <ModalButton variant="primary" onClick={handleCreateLog}>
              Create Log
            </ModalButton>
          </>
        }
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <FormField label="Date" type="date" required defaultValue={new Date().toISOString().split('T')[0]} />
          <FormField
            label="Package"
            type="select"
            options={['PKG-001: Indore-Bhopal Corridor', 'PKG-004: Jabalpur-Rewa Highway']}
            required
          />
        </div>

        <FormField label="Location / Chainage" placeholder="e.g., CH 12+500 to 13+000" required />

        <FormField
          label="Work Type"
          type="select"
          options={[
            'Earthwork - Excavation',
            'Earthwork - Filling',
            'Subgrade Preparation',
            'Base Course Construction',
            'Pavement Layer',
            'RCC Work - Culvert',
            'RCC Work - Bridge',
            'Drainage Work'
          ]}
          required
        />

        {/* Weather Conditions */}
        <div style={{
          padding: '20px',
          background: '#f0f9ff',
          borderRadius: '12px',
          border: '1px solid #bfdbfe',
          marginBottom: '20px'
        }}>
          <h4 style={{ margin: '0 0 16px 0', fontSize: '15px', color: '#1e40af', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Cloud size={18} />
            Weather Conditions
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <FormField
              label="Weather"
              type="select"
              options={['Clear', 'Partly Cloudy', 'Cloudy', 'Light Rain', 'Heavy Rain', 'Foggy']}
              required
            />
            <FormField label="Temperature (°C)" type="number" placeholder="e.g., 28" required />
          </div>
        </div>

        {/* Manpower Deployment */}
        <div style={{
          padding: '20px',
          background: '#f0fdf4',
          borderRadius: '12px',
          border: '1px solid #bbf7d0',
          marginBottom: '20px'
        }}>
          <h4 style={{ margin: '0 0 16px 0', fontSize: '15px', color: '#065f46', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Users size={18} />
            Manpower Deployment
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {manpowerCategories.map((category) => (
              <FormField
                key={category}
                label={category}
                type="number"
                placeholder="0"
                defaultValue="0"
              />
            ))}
          </div>
          <div style={{
            marginTop: '16px',
            padding: '12px',
            background: 'white',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span style={{ fontSize: '14px', fontWeight: '600', color: '#065f46' }}>Total Manpower:</span>
            <span style={{ fontSize: '20px', fontWeight: '800', color: '#10b981' }}>45</span>
          </div>
        </div>

        {/* Equipment Deployment */}
        <div style={{
          padding: '20px',
          background: '#fffbeb',
          borderRadius: '12px',
          border: '1px solid #fde68a',
          marginBottom: '20px'
        }}>
          <h4 style={{ margin: '0 0 16px 0', fontSize: '15px', color: '#92400e', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Truck size={18} />
            Equipment Deployment
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
            {equipmentTypes.slice(0, 9).map((equipment) => (
              <FormField
                key={equipment}
                label={equipment}
                type="number"
                placeholder="0"
                defaultValue="0"
              />
            ))}
          </div>
          <div style={{
            marginTop: '16px',
            padding: '12px',
            background: 'white',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span style={{ fontSize: '14px', fontWeight: '600', color: '#92400e' }}>Total Equipment:</span>
            <span style={{ fontSize: '20px', fontWeight: '800', color: '#f59e0b' }}>8</span>
          </div>
        </div>

        {/* Work Progress */}
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ fontSize: '15px', color: '#1e293b', marginBottom: '12px', fontWeight: '700' }}>Work Progress & Activities</h4>
          <FormField label="Work Completed Today" type="textarea" rows={4} required 
            helperText="Describe activities completed during the day" />
          <FormField
            label="Overall Progress Status"
            type="select"
            options={['Excellent', 'Good', 'Satisfactory', 'Delayed', 'On Hold']}
            required
          />
        </div>

        {/* Site Photos */}
        <FormField label="Site Photos" type="file" required 
          helperText="Upload minimum 3 photos showing daily work progress" />

        {/* Issues & Delays */}
        <FormField label="Any Issues / Delays / Safety Incidents" type="textarea" rows={3} 
          helperText="Report any problems, delays, or safety concerns" />
      </Modal>

      {/* View/Edit Daily Log Modal */}
      <Modal
        isOpen={isViewLogOpen}
        onClose={() => {
          setIsViewLogOpen(false);
          setSelectedLog(null);
        }}
        title={selectedLog?.status === 'Draft' ? 'Edit Daily Log' : 'View Daily Log'}
        width="900px"
        footer={
          selectedLog?.status === 'Draft' ? (
            <>
              <ModalButton variant="secondary" onClick={() => {
                setIsViewLogOpen(false);
                setSelectedLog(null);
              }}>
                Save as Draft
              </ModalButton>
              <ModalButton variant="success" onClick={handleSubmitLog}>
                Submit Log
              </ModalButton>
            </>
          ) : null
        }
      >
        {selectedLog && (
          <>
            <div style={{
              background: selectedLog.status === 'Submitted' 
                ? 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)'
                : 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
              padding: '24px',
              borderRadius: '16px',
              marginBottom: '24px',
              border: selectedLog.status === 'Submitted' ? '1px solid #bfdbfe' : '1px solid #fde68a'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Log Number</div>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b' }}>{selectedLog.logNo}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Date</div>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>{selectedLog.date}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Status</div>
                  <span style={{
                    display: 'inline-block',
                    padding: '6px 14px',
                    borderRadius: '10px',
                    fontSize: '12px',
                    fontWeight: '700',
                    background: selectedLog.status === 'Submitted' ? '#dbeafe' : '#fef3c7',
                    color: selectedLog.status === 'Submitted' ? '#1e40af' : '#92400e'
                  }}>
                    {selectedLog.status}
                  </span>
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Location</div>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>{selectedLog.location}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Work Type</div>
                  <div style={{ fontSize: '14px', color: '#1e293b' }}>{selectedLog.workType}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Weather</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#1e293b' }}>
                    {getWeatherIcon(selectedLog.weather)}
                    {selectedLog.weather} ({selectedLog.temperature})
                  </div>
                </div>
              </div>
            </div>

            {/* Manpower Summary */}
            <div style={{
              padding: '20px',
              background: '#f8fafc',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              marginBottom: '24px'
            }}>
              <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', color: '#1e293b', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Users size={20} style={{ color: '#3b82f6' }} />
                Manpower Deployment
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Skilled Workers</div>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b' }}>12</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Semi-skilled Workers</div>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b' }}>18</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Unskilled Workers</div>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b' }}>15</div>
                </div>
              </div>
              <div style={{
                marginTop: '16px',
                padding: '12px',
                background: 'white',
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                border: '1px solid #e2e8f0'
              }}>
                <span style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b' }}>Total Manpower Deployed:</span>
                <span style={{ fontSize: '24px', fontWeight: '800', color: '#3b82f6' }}>{selectedLog.manpowerDeployed}</span>
              </div>
            </div>

            {/* Equipment Summary */}
            <div style={{
              padding: '20px',
              background: '#f8fafc',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              marginBottom: '24px'
            }}>
              <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', color: '#1e293b', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Truck size={20} style={{ color: '#f59e0b' }} />
                Equipment Deployed
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                {[
                  { name: 'Excavator (20T)', count: 2 },
                  { name: 'Bulldozer', count: 1 },
                  { name: 'Vibratory Roller', count: 2 },
                  { name: 'Water Tanker', count: 1 },
                  { name: 'Tipper Truck', count: 2 },
                ].map((equipment, idx) => (
                  <div key={idx} style={{
                    padding: '12px',
                    background: 'white',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0'
                  }}>
                    <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>{equipment.name}</div>
                    <div style={{ fontSize: '16px', fontWeight: '700', color: '#1e293b' }}>{equipment.count}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Work Progress */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '16px', color: '#1e293b', marginBottom: '12px', fontWeight: '700' }}>Work Completed</h4>
              <div style={{
                padding: '16px',
                background: '#f8fafc',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                fontSize: '14px',
                color: '#1e293b',
                lineHeight: '1.6'
              }}>
                Excavation work completed for 250 meters stretch. Total 2,450 cum earthwork excavated and transported to designated dumping yard. Subgrade prepared and compacted for 180 meters. All work executed as per specifications.
              </div>
              <div style={{ marginTop: '12px' }}>
                <span style={{ fontSize: '13px', color: '#64748b', fontWeight: '600' }}>Overall Progress: </span>
                <span style={{
                  padding: '6px 14px',
                  borderRadius: '10px',
                  fontSize: '12px',
                  fontWeight: '700',
                  background: selectedLog.workProgress === 'Excellent' ? '#d1fae5' : 
                             selectedLog.workProgress === 'Good' ? '#dbeafe' : '#fee2e2',
                  color: selectedLog.workProgress === 'Excellent' ? '#065f46' : 
                         selectedLog.workProgress === 'Good' ? '#1e40af' : '#991b1b'
                }}>
                  {selectedLog.workProgress}
                </span>
              </div>
            </div>

            {/* Site Photos */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '16px', color: '#1e293b', marginBottom: '16px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Camera size={20} style={{ color: '#a855f7' }} />
                Site Photos
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                {[1, 2, 3].map((num) => (
                  <div
                    key={num}
                    style={{
                      aspectRatio: '4/3',
                      background: '#f1f5f9',
                      borderRadius: '12px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid #e2e8f0',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ fontSize: '32px', marginBottom: '8px' }}>📷</div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>Photo {num}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Issues/Remarks */}
            {selectedLog.remarks && (
              <div style={{
                padding: '16px',
                background: selectedLog.workProgress === 'Delayed' ? '#fef2f2' : '#f0f9ff',
                borderRadius: '12px',
                border: selectedLog.workProgress === 'Delayed' ? '1px solid #fecaca' : '1px solid #bfdbfe'
              }}>
                <div style={{ fontSize: '14px', fontWeight: '700', color: selectedLog.workProgress === 'Delayed' ? '#991b1b' : '#1e40af', marginBottom: '8px' }}>
                  {selectedLog.workProgress === 'Delayed' ? '⚠️ Issues / Delays Reported' : 'ℹ️ Remarks'}
                </div>
                <div style={{ fontSize: '13px', color: selectedLog.workProgress === 'Delayed' ? '#991b1b' : '#1e3a8a' }}>
                  {selectedLog.remarks}
                </div>
              </div>
            )}
          </>
        )}
      </Modal>
    </div>
  );
}