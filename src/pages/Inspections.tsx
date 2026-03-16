import { useState } from 'react';
import type { Role } from '../roles';
import Modal, { ModalButton } from './components/Modal';
import FormField from './components/FormField';
import { 
  Clipboard, 
  Camera, 
  MapPin, 
  Calendar, 
  CheckSquare, 
  XSquare,
  AlertTriangle,
  Clock,
  Eye,
  Plus,
  Download,
  Upload,
  FileText,
  User,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

export default function Inspections({ role }: { role: Role }) {
  const [isScheduleInspectionOpen, setIsScheduleInspectionOpen] = useState(false);
  const [isViewInspectionOpen, setIsViewInspectionOpen] = useState(false);
  const [isDefectOpen, setIsDefectOpen] = useState(false);
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const getInspectionContent = () => {
    switch (role) {
      case 'PMU':
        return {
          title: 'Program Inspection Overview',
          subtitle: 'Monitor field inspections and compliance across all PIUs',
          canSchedule: false,
          canConduct: false,
          viewAll: true
        };
      case 'PIU':
        return {
          title: 'PIU Inspection Management',
          subtitle: 'Schedule and monitor field inspections',
          canSchedule: true,
          canConduct: false,
          viewAll: false
        };
      case 'AE':
        return {
          title: 'Field Inspections',
          subtitle: 'Conduct inspections and record findings',
          canSchedule: false,
          canConduct: true,
          viewAll: false
        };
      case 'AUTHORITY_ENGINEER':
        return {
          title: 'Independent Field Verification',
          subtitle: 'Conduct surprise inspections and audits',
          canSchedule: false,
          canConduct: true,
          viewAll: false
        };
      default:
        return {
          title: 'Inspections',
          subtitle: 'Field inspection records',
          canSchedule: false,
          canConduct: false,
          viewAll: false
        };
    }
  };

  const content = getInspectionContent();

  // Scheduled Inspections
  const scheduledInspections = [
    { 
      inspectionId: 'INS-2024-245', 
      type: 'Routine Quality Check',
      location: 'CH 12+000 to 15+000',
      scheduledDate: '2026-02-03',
      scheduledTime: '10:00 AM',
      inspector: 'AE - Site A (Rajesh Kumar)',
      contractor: 'ABC Constructions',
      workType: 'Subgrade Preparation',
      status: 'Scheduled',
      priority: 'Medium'
    },
    { 
      inspectionId: 'INS-2024-246', 
      type: 'Safety Audit',
      location: 'Bridge B-2',
      scheduledDate: '2026-02-04',
      scheduledTime: '09:00 AM',
      inspector: 'Authority Engineer (Dr. Sharma)',
      contractor: 'XYZ Builders',
      workType: 'Bridge Construction',
      status: 'Scheduled',
      priority: 'High'
    },
    { 
      inspectionId: 'INS-2024-247', 
      type: 'Surprise Inspection',
      location: 'CH 18+500',
      scheduledDate: '2026-02-02',
      scheduledTime: '02:00 PM',
      inspector: 'Authority Engineer (Dr. Sharma)',
      contractor: 'PQR Infrastructure',
      workType: 'Pavement Layer',
      status: 'In Progress',
      priority: 'High'
    },
  ];

  // Completed Inspections
  const completedInspections = [
    { 
      inspectionId: 'INS-2024-242', 
      type: 'Routine Quality Check',
      location: 'CH 8+000 to 10+000',
      inspectionDate: '2026-01-30',
      inspector: 'AE - Site B (Priya Patel)',
      contractor: 'ABC Constructions',
      workType: 'Earthwork',
      result: 'Approved',
      defectsFound: 0,
      photosUploaded: 15,
      reportStatus: 'Submitted'
    },
    { 
      inspectionId: 'INS-2024-243', 
      type: 'Safety Audit',
      location: 'Culvert C-3',
      inspectionDate: '2026-01-29',
      inspector: 'Authority Engineer (Dr. Sharma)',
      contractor: 'XYZ Builders',
      workType: 'Culvert Construction',
      result: 'Approved with Observations',
      defectsFound: 2,
      photosUploaded: 22,
      reportStatus: 'Submitted'
    },
    { 
      inspectionId: 'INS-2024-244', 
      type: 'Surprise Inspection',
      location: 'CH 20+000',
      inspectionDate: '2026-01-28',
      inspector: 'Authority Engineer (Dr. Sharma)',
      contractor: 'LMN Contractors',
      workType: 'Base Course',
      result: 'Rejected',
      defectsFound: 5,
      photosUploaded: 18,
      reportStatus: 'Submitted'
    },
  ];

  // Defect Tracker
  const defectsData = [
    { 
      defectId: 'DEF-2024-089', 
      inspectionId: 'INS-2024-243',
      location: 'Culvert C-3',
      defect: 'Inadequate concrete cover',
      severity: 'Medium',
      identifiedBy: 'Authority Engineer',
      identifiedOn: '2026-01-29',
      contractor: 'XYZ Builders',
      rectificationStatus: 'In Progress',
      dueDate: '2026-02-05'
    },
    { 
      defectId: 'DEF-2024-090', 
      inspectionId: 'INS-2024-243',
      location: 'Culvert C-3',
      defect: 'Poor joint finishing',
      severity: 'Low',
      identifiedBy: 'Authority Engineer',
      identifiedOn: '2026-01-29',
      contractor: 'XYZ Builders',
      rectificationStatus: 'Pending',
      dueDate: '2026-02-08'
    },
    { 
      defectId: 'DEF-2024-091', 
      inspectionId: 'INS-2024-244',
      location: 'CH 20+000',
      defect: 'Compaction below specification',
      severity: 'High',
      identifiedBy: 'Authority Engineer',
      identifiedOn: '2026-01-28',
      contractor: 'LMN Contractors',
      rectificationStatus: 'Rectified - Pending Verification',
      dueDate: '2026-02-04'
    },
  ];

  const handleScheduleInspection = () => {
    alert('Inspection scheduled successfully!');
    setIsScheduleInspectionOpen(false);
  };

  const handleSubmitInspection = () => {
    alert('Inspection report submitted successfully!');
    setIsChecklistOpen(false);
    setSelectedItem(null);
  };

  const handleDefectAction = (action: 'verify' | 'escalate') => {
    alert(`Defect ${action === 'verify' ? 'verified' : 'escalated'} successfully!`);
    setIsDefectOpen(false);
    setSelectedItem(null);
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
              {content.title}
            </h2>
            <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.9)', fontSize: '15px' }}>
              {content.subtitle}
            </p>
          </div>
          {content.canSchedule && (
            <button
              onClick={() => setIsScheduleInspectionOpen(true)}
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
              Schedule Inspection
            </button>
          )}
        </div>
      </div>

      {/* Inspection Stats Cards */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '24px', 
        marginBottom: '32px' 
      }}>
        {[
          { label: 'Scheduled Inspections', value: '12', icon: <Calendar size={24} />, color: '#3b82f6', bgGradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' },
          { label: 'Completed This Week', value: '28', icon: <CheckCircle size={24} />, color: '#10b981', bgGradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' },
          { label: 'Pending Defects', value: '8', icon: <AlertTriangle size={24} />, color: '#f59e0b', bgGradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' },
          { label: 'Approval Rate', value: '92%', icon: <TrendingUp size={24} />, color: '#8b5cf6', bgGradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)' },
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

      {/* Scheduled Inspections */}
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '28px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        marginBottom: '32px',
        border: '1px solid #e2e8f0'
      }}>
        <h3 style={{ margin: '0 0 24px 0', color: '#1e293b', fontSize: '20px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Calendar size={24} style={{ color: '#3b82f6' }} />
          Scheduled Inspections
        </h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0' }}>
            <thead>
              <tr>
                {['Inspection ID', 'Type', 'Location', 'Date & Time', 'Inspector', 'Work Type', 'Priority', 'Status', 'Action'].map((header, idx) => (
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
              {scheduledInspections.map((inspection, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '20px 16px', color: '#3b82f6', fontSize: '14px', fontWeight: '700' }}>{inspection.inspectionId}</td>
                  <td style={{ padding: '20px 16px', color: '#1e293b', fontSize: '14px', fontWeight: '600' }}>{inspection.type}</td>
                  <td style={{ padding: '20px 16px', color: '#64748b', fontSize: '14px' }}>{inspection.location}</td>
                  <td style={{ padding: '20px 16px', color: '#1e293b', fontSize: '14px' }}>
                    <div style={{ fontWeight: '600' }}>{inspection.scheduledDate}</div>
                    <div style={{ fontSize: '13px', color: '#64748b' }}>{inspection.scheduledTime}</div>
                  </td>
                  <td style={{ padding: '20px 16px', color: '#64748b', fontSize: '13px' }}>{inspection.inspector}</td>
                  <td style={{ padding: '20px 16px', color: '#64748b', fontSize: '14px' }}>{inspection.workType}</td>
                  <td style={{ padding: '20px 16px' }}>
                    <span style={{
                      padding: '6px 14px',
                      borderRadius: '10px',
                      fontSize: '12px',
                      fontWeight: '700',
                      background: inspection.priority === 'High' ? '#fee2e2' : inspection.priority === 'Medium' ? '#fef3c7' : '#dbeafe',
                      color: inspection.priority === 'High' ? '#991b1b' : inspection.priority === 'Medium' ? '#92400e' : '#1e40af',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {inspection.priority}
                    </span>
                  </td>
                  <td style={{ padding: '20px 16px' }}>
                    <span style={{
                      padding: '6px 14px',
                      borderRadius: '10px',
                      fontSize: '12px',
                      fontWeight: '700',
                      background: inspection.status === 'In Progress' ? '#fef3c7' : '#dbeafe',
                      color: inspection.status === 'In Progress' ? '#92400e' : '#1e40af',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {inspection.status}
                    </span>
                  </td>
                  <td style={{ padding: '20px 16px' }}>
                    {content.canConduct && inspection.status === 'Scheduled' && (
                      <button
                        onClick={() => {
                          setSelectedItem(inspection);
                          setIsChecklistOpen(true);
                        }}
                        style={{
                          padding: '8px 20px',
                          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
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
                          e.currentTarget.style.boxShadow = '0 4px 12px rgba(16, 185, 129, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        <Clipboard size={14} />
                        Conduct
                      </button>
                    )}
                    {inspection.status === 'In Progress' && (
                      <button
                        onClick={() => {
                          setSelectedItem(inspection);
                          setIsChecklistOpen(true);
                        }}
                        style={{
                          padding: '8px 20px',
                          background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
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
                          e.currentTarget.style.boxShadow = '0 4px 12px rgba(245, 158, 11, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        <Clock size={14} />
                        Continue
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Completed Inspections */}
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '28px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        marginBottom: '32px',
        border: '1px solid #e2e8f0'
      }}>
        <h3 style={{ margin: '0 0 24px 0', color: '#1e293b', fontSize: '20px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <CheckSquare size={24} style={{ color: '#10b981' }} />
          Completed Inspections
        </h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0' }}>
            <thead>
              <tr>
                {['Inspection ID', 'Type', 'Location', 'Date', 'Inspector', 'Result', 'Defects', 'Photos', 'Action'].map((header, idx) => (
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
              {completedInspections.map((inspection, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '20px 16px', color: '#10b981', fontSize: '14px', fontWeight: '700' }}>{inspection.inspectionId}</td>
                  <td style={{ padding: '20px 16px', color: '#1e293b', fontSize: '14px', fontWeight: '600' }}>{inspection.type}</td>
                  <td style={{ padding: '20px 16px', color: '#64748b', fontSize: '14px' }}>{inspection.location}</td>
                  <td style={{ padding: '20px 16px', color: '#1e293b', fontSize: '14px' }}>{inspection.inspectionDate}</td>
                  <td style={{ padding: '20px 16px', color: '#64748b', fontSize: '13px' }}>{inspection.inspector}</td>
                  <td style={{ padding: '20px 16px' }}>
                    <span style={{
                      padding: '6px 14px',
                      borderRadius: '10px',
                      fontSize: '12px',
                      fontWeight: '700',
                      background: inspection.result === 'Approved' ? '#d1fae5' : inspection.result === 'Rejected' ? '#fee2e2' : '#fef3c7',
                      color: inspection.result === 'Approved' ? '#065f46' : inspection.result === 'Rejected' ? '#991b1b' : '#92400e',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {inspection.result}
                    </span>
                  </td>
                  <td style={{ padding: '20px 16px' }}>
                    <span style={{
                      fontSize: '16px',
                      fontWeight: '700',
                      color: inspection.defectsFound > 0 ? '#ef4444' : '#10b981'
                    }}>
                      {inspection.defectsFound}
                    </span>
                  </td>
                  <td style={{ padding: '20px 16px' }}>
                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: '#64748b',
                      fontSize: '14px',
                      fontWeight: '600'
                    }}>
                      <Camera size={16} />
                      {inspection.photosUploaded}
                    </span>
                  </td>
                  <td style={{ padding: '20px 16px' }}>
                    <button
                      onClick={() => {
                        setSelectedItem(inspection);
                        setIsViewInspectionOpen(true);
                      }}
                      style={{
                        padding: '8px 20px',
                        background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
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
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <Eye size={14} />
                      View Report
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Defect Tracker */}
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '28px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        border: '1px solid #e2e8f0'
      }}>
        <h3 style={{ margin: '0 0 24px 0', color: '#1e293b', fontSize: '20px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <AlertTriangle size={24} style={{ color: '#ef4444' }} />
          Defect Tracking
        </h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0' }}>
            <thead>
              <tr>
                {['Defect ID', 'Location', 'Defect', 'Severity', 'Identified By', 'Contractor', 'Due Date', 'Status', 'Action'].map((header, idx) => (
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
              {defectsData.map((defect, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '20px 16px', color: '#ef4444', fontSize: '14px', fontWeight: '700' }}>{defect.defectId}</td>
                  <td style={{ padding: '20px 16px', color: '#1e293b', fontSize: '14px', fontWeight: '600' }}>{defect.location}</td>
                  <td style={{ padding: '20px 16px', color: '#64748b', fontSize: '14px' }}>{defect.defect}</td>
                  <td style={{ padding: '20px 16px' }}>
                    <span style={{
                      padding: '6px 14px',
                      borderRadius: '10px',
                      fontSize: '12px',
                      fontWeight: '700',
                      background: defect.severity === 'High' ? '#fee2e2' : defect.severity === 'Medium' ? '#fef3c7' : '#dbeafe',
                      color: defect.severity === 'High' ? '#991b1b' : defect.severity === 'Medium' ? '#92400e' : '#1e40af',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {defect.severity}
                    </span>
                  </td>
                  <td style={{ padding: '20px 16px', color: '#64748b', fontSize: '14px' }}>{defect.identifiedBy}</td>
                  <td style={{ padding: '20px 16px', color: '#1e293b', fontSize: '14px' }}>{defect.contractor}</td>
                  <td style={{ padding: '20px 16px', color: '#64748b', fontSize: '14px' }}>{defect.dueDate}</td>
                  <td style={{ padding: '20px 16px' }}>
                    <span style={{
                      padding: '6px 14px',
                      borderRadius: '10px',
                      fontSize: '12px',
                      fontWeight: '700',
                      background: defect.rectificationStatus.includes('Rectified') ? '#d1fae5' : defect.rectificationStatus === 'In Progress' ? '#fef3c7' : '#fee2e2',
                      color: defect.rectificationStatus.includes('Rectified') ? '#065f46' : defect.rectificationStatus === 'In Progress' ? '#92400e' : '#991b1b',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      fontSize: '11px'
                    }}>
                      {defect.rectificationStatus}
                    </span>
                  </td>
                  <td style={{ padding: '20px 16px' }}>
                    <button
                      onClick={() => {
                        setSelectedItem(defect);
                        setIsDefectOpen(true);
                      }}
                      style={{
                        padding: '8px 20px',
                        background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
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
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(239, 68, 68, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <Eye size={14} />
                      Review
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Schedule Inspection Modal */}
      <Modal
        isOpen={isScheduleInspectionOpen}
        onClose={() => setIsScheduleInspectionOpen(false)}
        title="Schedule Field Inspection"
        width="800px"
        footer={
          <>
            <ModalButton variant="secondary" onClick={() => setIsScheduleInspectionOpen(false)}>
              Cancel
            </ModalButton>
            <ModalButton variant="primary" onClick={handleScheduleInspection}>
              Schedule Inspection
            </ModalButton>
          </>
        }
      >
        <FormField
          label="Inspection Type"
          type="select"
          options={[
            'Routine Quality Check',
            'Safety Audit',
            'Surprise Inspection',
            'Progress Verification',
            'Completion Inspection',
            'Pre-Payment Inspection',
            'Environmental Compliance Check'
          ]}
          required
        />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <FormField label="Inspection Date" type="date" required />
          <FormField label="Inspection Time" type="time" required />
        </div>

        <FormField label="Location / Chainage" placeholder="e.g., CH 12+000 to 15+000" required />
        <FormField label="Work Type to Inspect" placeholder="e.g., Subgrade Preparation" required />

        <FormField
          label="Assign Inspector"
          type="select"
          options={[
            'AE - Site A (Rajesh Kumar)',
            'AE - Site B (Priya Patel)',
            'Authority Engineer (Dr. Sharma)',
            'JE - Team 1 (Amit Singh)',
            'JE - Team 2 (Neha Gupta)'
          ]}
          required
        />

        <FormField
          label="Contractor"
          type="select"
          options={['ABC Constructions', 'XYZ Builders', 'PQR Infrastructure', 'LMN Contractors']}
          required
        />

        <FormField
          label="Priority Level"
          type="select"
          options={['High', 'Medium', 'Low']}
          required
        />

        <FormField label="Special Instructions / Focus Areas" type="textarea" rows={3} 
          helperText="Specify any particular aspects to focus on during inspection" />

        <FormField label="Attach Inspection Checklist Template (if any)" type="file" />
      </Modal>

      {/* Conduct Inspection (Checklist) Modal */}
      <Modal
        isOpen={isChecklistOpen}
        onClose={() => {
          setIsChecklistOpen(false);
          setSelectedItem(null);
        }}
        title="Conduct Field Inspection"
        width="900px"
        footer={
          <>
            <ModalButton variant="secondary" onClick={() => {
              setIsChecklistOpen(false);
              setSelectedItem(null);
            }}>
              Save as Draft
            </ModalButton>
            <ModalButton variant="success" onClick={handleSubmitInspection}>
              Submit Inspection Report
            </ModalButton>
          </>
        }
      >
        {selectedItem && (
          <>
            <div style={{
              background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
              padding: '24px',
              borderRadius: '16px',
              marginBottom: '24px',
              border: '1px solid #bfdbfe'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Inspection ID</div>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b' }}>{selectedItem.inspectionId}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Type</div>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>{selectedItem.type}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Location</div>
                  <div style={{ fontSize: '14px', color: '#1e293b' }}>{selectedItem.location}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Work Type</div>
                  <div style={{ fontSize: '14px', color: '#1e293b' }}>{selectedItem.workType}</div>
                </div>
              </div>
            </div>

            {/* Inspection Checklist */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '16px', color: '#1e293b', marginBottom: '16px', fontWeight: '700' }}>Quality Checklist</h4>
              {[
                'Workmanship quality meets specifications',
                'Dimensions and alignment as per drawing',
                'Material quality approved and certified',
                'Compaction achieved as per specification',
                'Surface finish acceptable',
                'Safety measures in place',
                'Environmental safeguards followed'
              ].map((item, idx) => (
                <div key={idx} style={{
                  padding: '16px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  marginBottom: '12px',
                  background: '#f8fafc'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '14px', color: '#1e293b', fontWeight: '500' }}>{item}</span>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                        <input type="radio" name={`check-${idx}`} />
                        <span style={{ fontSize: '14px', color: '#10b981', fontWeight: '600' }}>Pass</span>
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                        <input type="radio" name={`check-${idx}`} />
                        <span style={{ fontSize: '14px', color: '#ef4444', fontWeight: '600' }}>Fail</span>
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                        <input type="radio" name={`check-${idx}`} />
                        <span style={{ fontSize: '14px', color: '#64748b', fontWeight: '600' }}>N/A</span>
                      </label>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Photo Evidence */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '16px', color: '#1e293b', marginBottom: '16px', fontWeight: '700' }}>
                Photo Evidence (Geo-tagged)
              </h4>
              <FormField label="Upload Inspection Photos" type="file" required 
                helperText="Minimum 5 photos required. Ensure GPS tagging is enabled." />
            </div>

            {/* Defects Found */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '16px', color: '#1e293b', marginBottom: '16px', fontWeight: '700' }}>
                Defects / Observations
              </h4>
              <FormField label="Any defects found?" type="select" options={['Yes', 'No']} required />
              <FormField label="Describe defects (if any)" type="textarea" rows={3} />
              <FormField label="Upload defect photos" type="file" />
            </div>

            {/* Inspection Outcome */}
            <div style={{
              background: '#f0fdf4',
              padding: '20px',
              borderRadius: '12px',
              border: '1px solid #bbf7d0'
            }}>
              <h4 style={{ fontSize: '15px', color: '#065f46', marginBottom: '16px', fontWeight: '700' }}>Inspection Outcome</h4>
              <FormField
                label="Inspection Result"
                type="select"
                options={[
                  'Approved - Work Compliant',
                  'Approved with Minor Observations',
                  'Rejected - Rectification Required',
                  'On Hold - Pending Tests'
                ]}
                required
              />
              <FormField label="Inspector Remarks" type="textarea" rows={3} required />
            </div>
          </>
        )}
      </Modal>

      {/* View Inspection Report Modal */}
      <Modal
        isOpen={isViewInspectionOpen}
        onClose={() => {
          setIsViewInspectionOpen(false);
          setSelectedItem(null);
        }}
        title="Inspection Report"
        width="900px"
      >
        {selectedItem && (
          <>
            <div style={{
              background: selectedItem.result === 'Approved' 
                ? 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)'
                : selectedItem.result === 'Rejected'
                ? 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)'
                : 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
              padding: '24px',
              borderRadius: '16px',
              marginBottom: '24px',
              border: selectedItem.result === 'Approved' ? '1px solid #bbf7d0' : selectedItem.result === 'Rejected' ? '1px solid #fecaca' : '1px solid #fde68a'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Inspection ID</div>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b' }}>{selectedItem.inspectionId}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Result</div>
                  <span style={{
                    display: 'inline-block',
                    padding: '6px 14px',
                    borderRadius: '10px',
                    fontSize: '14px',
                    fontWeight: '700',
                    background: selectedItem.result === 'Approved' ? '#d1fae5' : selectedItem.result === 'Rejected' ? '#fee2e2' : '#fef3c7',
                    color: selectedItem.result === 'Approved' ? '#065f46' : selectedItem.result === 'Rejected' ? '#991b1b' : '#92400e'
                  }}>
                    {selectedItem.result}
                  </span>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Inspector</div>
                  <div style={{ fontSize: '14px', color: '#1e293b' }}>{selectedItem.inspector}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Inspection Date</div>
                  <div style={{ fontSize: '14px', color: '#1e293b' }}>{selectedItem.inspectionDate}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Defects Found</div>
                  <div style={{ fontSize: '20px', fontWeight: '700', color: selectedItem.defectsFound > 0 ? '#ef4444' : '#10b981' }}>
                    {selectedItem.defectsFound}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Photos Uploaded</div>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Camera size={18} style={{ color: '#3b82f6' }} />
                    {selectedItem.photosUploaded}
                  </div>
                </div>
              </div>
            </div>

            {/* Inspection Photos */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '16px', color: '#1e293b', marginBottom: '16px', fontWeight: '700' }}>Inspection Photos</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div
                    key={num}
                    style={{
                      aspectRatio: '4/3',
                      background: '#f1f5f9',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid #e2e8f0',
                      cursor: 'pointer'
                    }}
                  >
                    <Camera size={32} style={{ color: '#94a3b8' }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Inspector Remarks */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '16px', color: '#1e293b', marginBottom: '12px', fontWeight: '700' }}>Inspector Remarks</h4>
              <div style={{
                padding: '16px',
                background: '#f8fafc',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                fontSize: '14px',
                color: '#1e293b',
                lineHeight: '1.6'
              }}>
                Overall workmanship is of good quality. Minor observations noted regarding joint finishing which should be addressed. All safety protocols are being followed at site.
              </div>
            </div>

            {/* Download Report */}
            <button
              style={{
                width: '100%',
                padding: '14px',
                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
              }}
            >
              <Download size={18} />
              Download Full Inspection Report (PDF)
            </button>
          </>
        )}
      </Modal>

      {/* Defect Review Modal */}
      <Modal
        isOpen={isDefectOpen}
        onClose={() => {
          setIsDefectOpen(false);
          setSelectedItem(null);
        }}
        title="Defect Details & Rectification"
        width="800px"
        footer={
          selectedItem?.rectificationStatus === 'Rectified - Pending Verification' ? (
            <>
              <ModalButton variant="danger" onClick={() => handleDefectAction('escalate')}>
                Return for Re-work
              </ModalButton>
              <ModalButton variant="success" onClick={() => handleDefectAction('verify')}>
                ✓ Verify & Close
              </ModalButton>
            </>
          ) : null
        }
      >
        {selectedItem && (
          <>
            <div style={{
              background: 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)',
              padding: '24px',
              borderRadius: '16px',
              marginBottom: '24px',
              border: '1px solid #fecaca'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Defect ID</div>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b' }}>{selectedItem.defectId}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Severity</div>
                  <span style={{
                    display: 'inline-block',
                    padding: '6px 14px',
                    borderRadius: '10px',
                    fontSize: '12px',
                    fontWeight: '700',
                    background: selectedItem.severity === 'High' ? '#fee2e2' : selectedItem.severity === 'Medium' ? '#fef3c7' : '#dbeafe',
                    color: selectedItem.severity === 'High' ? '#991b1b' : selectedItem.severity === 'Medium' ? '#92400e' : '#1e40af'
                  }}>
                    {selectedItem.severity}
                  </span>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Location</div>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>{selectedItem.location}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Due Date</div>
                  <div style={{ fontSize: '14px', color: '#ef4444', fontWeight: '700' }}>{selectedItem.dueDate}</div>
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Defect Description</div>
                  <div style={{ fontSize: '15px', color: '#1e293b', fontWeight: '500' }}>{selectedItem.defect}</div>
                </div>
              </div>
            </div>

            {selectedItem.rectificationStatus === 'Rectified - Pending Verification' && (
              <>
                <div style={{ marginBottom: '24px' }}>
                  <h4 style={{ fontSize: '16px', color: '#1e293b', marginBottom: '16px', fontWeight: '700' }}>Rectification Evidence</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    {['Before_Rectification.jpg', 'After_Rectification.jpg'].map((photo) => (
                      <div
                        key={photo}
                        style={{
                          aspectRatio: '4/3',
                          background: '#f1f5f9',
                          borderRadius: '12px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '1px solid #e2e8f0',
                          cursor: 'pointer',
                          padding: '12px'
                        }}
                      >
                        <Camera size={32} style={{ color: '#94a3b8', marginBottom: '8px' }} />
                        <span style={{ fontSize: '12px', color: '#64748b', textAlign: 'center' }}>{photo}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <FormField label="Verification Comments" type="textarea" rows={4} required 
                  helperText="Confirm whether rectification is satisfactory" />
              </>
            )}
          </>
        )}
      </Modal>
    </div>
  );
}