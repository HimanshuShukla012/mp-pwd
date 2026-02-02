import { useState } from 'react';
import type { Role } from '../roles';
import Modal, { ModalButton } from './components/Modal';
import FormField from './components/FormField';
import { 
  BookOpen, 
  Calculator, 
  Ruler, 
  CheckCircle, 
  Clock,
  Eye,
  Plus,
  Upload,
  Trash2,
  AlertCircle,
  Save,
  Send,
  FileText,
  MapPin
} from 'lucide-react';

export default function MBEntry({ role }: { role: Role }) {
  const [isCreateEntryOpen, setIsCreateEntryOpen] = useState(false);
  const [isViewEntryOpen, setIsViewEntryOpen] = useState(false);
  const [isAddItemOpen, setIsAddItemOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState<any>(null);
  const [measurementItems, setMeasurementItems] = useState<any[]>([]);

  // MB Entries
  const mbEntries = [
    { 
      mbNo: 'MB-2024-158',
      date: '2026-01-30',
      location: 'CH 12+500 to 13+000',
      workType: 'Earthwork - Excavation',
      packageNo: 'PKG-001',
      contractor: 'ABC Constructions',
      itemsCount: 5,
      totalQuantity: '2,450 cum',
      status: 'Draft',
      createdBy: 'JE - Amit Singh',
      lastModified: '2026-01-30 16:45'
    },
    { 
      mbNo: 'MB-2024-157',
      date: '2026-01-28',
      location: 'CH 10+000 to 11+500',
      workType: 'Subgrade Preparation',
      packageNo: 'PKG-001',
      contractor: 'ABC Constructions',
      itemsCount: 8,
      totalQuantity: '3,800 sqm',
      status: 'Submitted for Verification',
      createdBy: 'JE - Amit Singh',
      lastModified: '2026-01-28 17:30',
      submittedOn: '2026-01-28 18:00'
    },
    { 
      mbNo: 'MB-2024-156',
      date: '2026-01-25',
      location: 'CH 8+000 to 9+000',
      workType: 'Base Course Construction',
      packageNo: 'PKG-001',
      contractor: 'ABC Constructions',
      itemsCount: 6,
      totalQuantity: '1,200 cum',
      status: 'Verified by AE',
      createdBy: 'JE - Amit Singh',
      lastModified: '2026-01-25 15:20',
      submittedOn: '2026-01-25 16:00',
      verifiedOn: '2026-01-26 11:30',
      verifiedBy: 'AE - Rajesh Kumar'
    },
    { 
      mbNo: 'MB-2024-155',
      date: '2026-01-22',
      location: 'Culvert C-5',
      workType: 'RCC Work - Culvert',
      packageNo: 'PKG-001',
      contractor: 'ABC Constructions',
      itemsCount: 4,
      totalQuantity: '85 cum',
      status: 'Returned for Correction',
      createdBy: 'JE - Amit Singh',
      lastModified: '2026-01-22 14:00',
      submittedOn: '2026-01-22 15:00',
      returnedOn: '2026-01-23 10:30',
      returnedBy: 'AE - Rajesh Kumar',
      remarks: 'Dimensions mismatch - verify length at CH 8+250'
    },
  ];

  // Sample BOQ Items
  const boqItems = [
    { itemNo: '101.1', description: 'Earthwork Excavation in ordinary soil', unit: 'cum', rate: '₹245' },
    { itemNo: '102.3', description: 'Subgrade Preparation and Compaction', unit: 'sqm', rate: '₹85' },
    { itemNo: '201.5', description: 'Granular Sub-base (GSB) 150mm thick', unit: 'cum', rate: '₹1,850' },
    { itemNo: '202.8', description: 'Wet Mix Macadam (WMM) 250mm thick', unit: 'cum', rate: '₹2,450' },
    { itemNo: '301.2', description: 'Dense Bituminous Macadam (DBM) 75mm', unit: 'sqm', rate: '₹385' },
    { itemNo: '302.4', description: 'Bituminous Concrete (BC) 40mm', unit: 'sqm', rate: '₹295' },
    { itemNo: '401.1', description: 'RCC M-30 for culverts', unit: 'cum', rate: '₹8,500' },
    { itemNo: '402.3', description: 'Steel Reinforcement (HYSD bars)', unit: 'MT', rate: '₹65,000' },
  ];

  const handleCreateEntry = () => {
    alert('MB Entry created successfully!');
    setIsCreateEntryOpen(false);
  };

  const handleSubmitEntry = () => {
    alert('MB Entry submitted for AE verification!');
    setIsViewEntryOpen(false);
    setSelectedEntry(null);
  };

  const handleAddItem = () => {
    const newItem = {
      id: Date.now(),
      itemNo: '101.1',
      description: 'Earthwork Excavation',
      length: '',
      width: '',
      depth: '',
      number: 1,
      quantity: 0,
      unit: 'cum'
    };
    setMeasurementItems([...measurementItems, newItem]);
    setIsAddItemOpen(false);
  };

  const calculateQuantity = (item: any) => {
    const length = parseFloat(item.length) || 0;
    const width = parseFloat(item.width) || 0;
    const depth = parseFloat(item.depth) || 0;
    const number = parseFloat(item.number) || 1;
    return (length * width * depth * number).toFixed(2);
  };

  return (
    <div style={{ padding: '32px', background: '#f8fafc', minHeight: '100vh' }}>
      {/* Header Card */}
      <div style={{
        background: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
        borderRadius: '20px',
        padding: '32px',
        marginBottom: '32px',
        boxShadow: '0 4px 20px rgba(236, 72, 153, 0.2)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ margin: '0 0 8px 0', color: 'white', fontSize: '28px', fontWeight: '800' }}>
              Measurement Book (MB) Entry
            </h2>
            <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.9)', fontSize: '15px' }}>
              Record site measurements and submit for verification
            </p>
          </div>
          <button
            onClick={() => setIsCreateEntryOpen(true)}
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
            New MB Entry
          </button>
        </div>
      </div>

      {/* MB Stats Cards */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '24px', 
        marginBottom: '32px' 
      }}>
        {[
          { label: 'Draft Entries', value: '1', icon: <Save size={24} />, color: '#f59e0b', bgGradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' },
          { label: 'Pending Verification', value: '1', icon: <Clock size={24} />, color: '#3b82f6', bgGradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' },
          { label: 'Verified This Month', value: '24', icon: <CheckCircle size={24} />, color: '#10b981', bgGradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' },
          { label: 'Returned for Correction', value: '1', icon: <AlertCircle size={24} />, color: '#ef4444', bgGradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' },
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

      {/* MB Entries Table */}
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '28px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        border: '1px solid #e2e8f0'
      }}>
        <h3 style={{ margin: '0 0 24px 0', color: '#1e293b', fontSize: '20px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <BookOpen size={24} style={{ color: '#ec4899' }} />
          My MB Entries
        </h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0' }}>
            <thead>
              <tr>
                {['MB No.', 'Date', 'Location', 'Work Type', 'Items', 'Total Qty', 'Status', 'Action'].map((header, idx) => (
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
              {mbEntries.map((entry, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '20px 16px', color: '#ec4899', fontSize: '14px', fontWeight: '700' }}>{entry.mbNo}</td>
                  <td style={{ padding: '20px 16px', color: '#1e293b', fontSize: '14px', fontWeight: '600' }}>{entry.date}</td>
                  <td style={{ padding: '20px 16px', color: '#64748b', fontSize: '14px' }}>{entry.location}</td>
                  <td style={{ padding: '20px 16px', color: '#1e293b', fontSize: '14px' }}>{entry.workType}</td>
                  <td style={{ padding: '20px 16px', color: '#1e293b', fontSize: '15px', fontWeight: '700' }}>{entry.itemsCount}</td>
                  <td style={{ padding: '20px 16px', color: '#10b981', fontSize: '14px', fontWeight: '700' }}>{entry.totalQuantity}</td>
                  <td style={{ padding: '20px 16px' }}>
                    <span style={{
                      padding: '6px 14px',
                      borderRadius: '10px',
                      fontSize: '12px',
                      fontWeight: '700',
                      background: entry.status === 'Verified by AE' ? '#d1fae5' : 
                                 entry.status === 'Submitted for Verification' ? '#dbeafe' : 
                                 entry.status === 'Returned for Correction' ? '#fee2e2' : '#fef3c7',
                      color: entry.status === 'Verified by AE' ? '#065f46' : 
                             entry.status === 'Submitted for Verification' ? '#1e40af' : 
                             entry.status === 'Returned for Correction' ? '#991b1b' : '#92400e',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      fontSize: '11px'
                    }}>
                      {entry.status}
                    </span>
                  </td>
                  <td style={{ padding: '20px 16px' }}>
                    <button
                      onClick={() => {
                        setSelectedEntry(entry);
                        setIsViewEntryOpen(true);
                      }}
                      style={{
                        padding: '8px 20px',
                        background: entry.status === 'Draft' || entry.status === 'Returned for Correction'
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
                      <Eye size={14} />
                      {entry.status === 'Draft' || entry.status === 'Returned for Correction' ? 'Edit' : 'View'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create MB Entry Modal */}
      <Modal
        isOpen={isCreateEntryOpen}
        onClose={() => setIsCreateEntryOpen(false)}
        title="Create New MB Entry"
        width="700px"
        footer={
          <>
            <ModalButton variant="secondary" onClick={() => setIsCreateEntryOpen(false)}>
              Cancel
            </ModalButton>
            <ModalButton variant="primary" onClick={handleCreateEntry}>
              Create Entry
            </ModalButton>
          </>
        }
      >
        <FormField label="MB Date" type="date" required defaultValue={new Date().toISOString().split('T')[0]} />
        
        <FormField
          label="Package"
          type="select"
          options={['PKG-001: Indore-Bhopal Corridor', 'PKG-004: Jabalpur-Rewa Highway']}
          required
        />

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

        <FormField label="Contractor" value="ABC Constructions" disabled />

        <FormField label="Remarks / Notes" type="textarea" rows={2} 
          helperText="Any special observations or conditions at site" />

        <div style={{
          padding: '16px',
          background: '#fef3c7',
          borderRadius: '12px',
          border: '1px solid #fde68a',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '12px'
        }}>
          <AlertCircle size={20} style={{ color: '#92400e', flexShrink: 0, marginTop: '2px' }} />
          <div>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#92400e', marginBottom: '4px' }}>
              Important Guidelines
            </div>
            <ul style={{ fontSize: '13px', color: '#78350f', margin: '8px 0 0 0', paddingLeft: '20px' }}>
              <li>All measurements must be taken in presence of AE or authorized representative</li>
              <li>Record exact dimensions with precision up to 2 decimal places</li>
              <li>Take geo-tagged photos of measurement locations</li>
              <li>Verify BOQ item numbers before entering measurements</li>
            </ul>
          </div>
        </div>
      </Modal>

      {/* View/Edit MB Entry Modal */}
      <Modal
        isOpen={isViewEntryOpen}
        onClose={() => {
          setIsViewEntryOpen(false);
          setSelectedEntry(null);
          setMeasurementItems([]);
        }}
        title={selectedEntry?.status === 'Draft' || selectedEntry?.status === 'Returned for Correction' ? 'Edit MB Entry' : 'View MB Entry'}
        width="1000px"
        footer={
          selectedEntry?.status === 'Draft' || selectedEntry?.status === 'Returned for Correction' ? (
            <>
              <ModalButton variant="secondary" onClick={() => {
                setIsViewEntryOpen(false);
                setSelectedEntry(null);
                setMeasurementItems([]);
              }}>
                Save as Draft
              </ModalButton>
              <ModalButton variant="success" onClick={handleSubmitEntry}>
                <Send size={16} />
                Submit for Verification
              </ModalButton>
            </>
          ) : null
        }
      >
        {selectedEntry && (
          <>
            <div style={{
              background: selectedEntry.status === 'Verified by AE' 
                ? 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)'
                : selectedEntry.status === 'Returned for Correction'
                ? 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)'
                : 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
              padding: '24px',
              borderRadius: '16px',
              marginBottom: '24px',
              border: selectedEntry.status === 'Verified by AE' ? '1px solid #bbf7d0' : 
                      selectedEntry.status === 'Returned for Correction' ? '1px solid #fecaca' : '1px solid #bfdbfe'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>MB Number</div>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b' }}>{selectedEntry.mbNo}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Date</div>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>{selectedEntry.date}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Status</div>
                  <span style={{
                    display: 'inline-block',
                    padding: '6px 14px',
                    borderRadius: '10px',
                    fontSize: '12px',
                    fontWeight: '700',
                    background: selectedEntry.status === 'Verified by AE' ? '#d1fae5' : 
                               selectedEntry.status === 'Submitted for Verification' ? '#dbeafe' : 
                               selectedEntry.status === 'Returned for Correction' ? '#fee2e2' : '#fef3c7',
                    color: selectedEntry.status === 'Verified by AE' ? '#065f46' : 
                           selectedEntry.status === 'Submitted for Verification' ? '#1e40af' : 
                           selectedEntry.status === 'Returned for Correction' ? '#991b1b' : '#92400e'
                  }}>
                    {selectedEntry.status}
                  </span>
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Location</div>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MapPin size={18} style={{ color: '#ec4899' }} />
                    {selectedEntry.location}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Work Type</div>
                  <div style={{ fontSize: '14px', color: '#1e293b' }}>{selectedEntry.workType}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600', textTransform: 'uppercase' }}>Contractor</div>
                  <div style={{ fontSize: '14px', color: '#1e293b' }}>{selectedEntry.contractor}</div>
                </div>
              </div>

              {selectedEntry.status === 'Returned for Correction' && selectedEntry.remarks && (
                <div style={{
                  marginTop: '16px',
                  padding: '12px',
                  background: 'rgba(239, 68, 68, 0.1)',
                  borderRadius: '8px',
                  border: '1px solid #fecaca'
                }}>
                  <div style={{ fontSize: '12px', color: '#991b1b', fontWeight: '700', marginBottom: '4px' }}>
                    AE Remarks:
                  </div>
                  <div style={{ fontSize: '13px', color: '#991b1b' }}>
                    {selectedEntry.remarks}
                  </div>
                </div>
              )}
            </div>

            {/* Measurement Items */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h4 style={{ margin: 0, fontSize: '16px', color: '#1e293b', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Calculator size={20} style={{ color: '#ec4899' }} />
                  Measurement Items
                </h4>
                {(selectedEntry.status === 'Draft' || selectedEntry.status === 'Returned for Correction') && (
                  <button
                    onClick={() => setIsAddItemOpen(true)}
                    style={{
                      padding: '8px 16px',
                      background: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
                      color: 'white',
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
                    <Plus size={16} />
                    Add Item
                  </button>
                )}
              </div>

              {/* Sample Measurement Table */}
              <div style={{ overflowX: 'auto', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: '#f8fafc' }}>
                      {['Item No.', 'Description', 'Length (m)', 'Width (m)', 'Depth (m)', 'No.', 'Quantity', 'Unit', 'Action'].map((header) => (
                        <th key={header} style={{ 
                          padding: '12px', 
                          textAlign: 'left', 
                          fontSize: '12px', 
                          fontWeight: '700', 
                          color: '#64748b',
                          borderBottom: '2px solid #e2e8f0'
                        }}>
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { itemNo: '101.1', desc: 'Earthwork Excavation', length: 500, width: 12, depth: 1.5, no: 1, unit: 'cum' },
                      { itemNo: '101.1', desc: 'Earthwork Excavation', length: 300, width: 10, depth: 1.2, no: 1, unit: 'cum' },
                      { itemNo: '102.3', desc: 'Subgrade Preparation', length: 500, width: 12, depth: 0.3, no: 1, unit: 'sqm' },
                    ].map((item, idx) => {
                      const qty = (item.length * item.width * item.depth * item.no).toFixed(2);
                      return (
                        <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                          <td style={{ padding: '12px', fontSize: '13px', fontWeight: '700', color: '#ec4899' }}>{item.itemNo}</td>
                          <td style={{ padding: '12px', fontSize: '13px', color: '#1e293b' }}>{item.desc}</td>
                          <td style={{ padding: '12px', fontSize: '13px', color: '#1e293b', fontWeight: '600' }}>{item.length}</td>
                          <td style={{ padding: '12px', fontSize: '13px', color: '#1e293b', fontWeight: '600' }}>{item.width}</td>
                          <td style={{ padding: '12px', fontSize: '13px', color: '#1e293b', fontWeight: '600' }}>{item.depth}</td>
                          <td style={{ padding: '12px', fontSize: '13px', color: '#1e293b', fontWeight: '600' }}>{item.no}</td>
                          <td style={{ padding: '12px', fontSize: '14px', color: '#10b981', fontWeight: '700' }}>{qty}</td>
                          <td style={{ padding: '12px', fontSize: '13px', color: '#64748b' }}>{item.unit}</td>
                          <td style={{ padding: '12px' }}>
                            {(selectedEntry.status === 'Draft' || selectedEntry.status === 'Returned for Correction') && (
                              <button
                                style={{
                                  padding: '4px 8px',
                                  background: '#fee2e2',
                                  color: '#991b1b',
                                  border: 'none',
                                  borderRadius: '6px',
                                  fontSize: '12px',
                                  fontWeight: '600',
                                  cursor: 'pointer',
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '4px'
                                }}
                              >
                                <Trash2 size={12} />
                                Delete
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr style={{ background: '#f8fafc', fontWeight: '700' }}>
                      <td colSpan={6} style={{ padding: '12px', fontSize: '14px', color: '#1e293b', textAlign: 'right' }}>
                        Total Quantity:
                      </td>
                      <td style={{ padding: '12px', fontSize: '16px', color: '#10b981', fontWeight: '800' }}>
                        2,450.00
                      </td>
                      <td style={{ padding: '12px', fontSize: '13px', color: '#64748b' }}>cum</td>
                      <td></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            {/* Measurement Photos */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '15px', color: '#1e293b', marginBottom: '12px', fontWeight: '700' }}>
                Measurement Location Photos (Geo-tagged)
              </h4>
              {(selectedEntry.status === 'Draft' || selectedEntry.status === 'Returned for Correction') ? (
                <FormField label="Upload Photos" type="file" required 
                  helperText="Upload minimum 3 geo-tagged photos showing measurement points" />
              ) : (
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
              )}
            </div>

            {/* Verification Details (if verified) */}
            {selectedEntry.status === 'Verified by AE' && (
              <div style={{
                padding: '16px',
                background: '#f0fdf4',
                borderRadius: '12px',
                border: '1px solid #bbf7d0'
              }}>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#065f46', marginBottom: '8px' }}>
                  ✓ Verified by {selectedEntry.verifiedBy}
                </div>
                <div style={{ fontSize: '13px', color: '#065f46' }}>
                  Verified on: {selectedEntry.verifiedOn}
                </div>
              </div>
            )}
          </>
        )}
      </Modal>

      {/* Add Measurement Item Modal */}
      <Modal
        isOpen={isAddItemOpen}
        onClose={() => setIsAddItemOpen(false)}
        title="Add Measurement Item"
        width="700px"
        footer={
          <>
            <ModalButton variant="secondary" onClick={() => setIsAddItemOpen(false)}>
              Cancel
            </ModalButton>
            <ModalButton variant="primary" onClick={handleAddItem}>
              Add Item
            </ModalButton>
          </>
        }
      >
        <FormField
          label="Select BOQ Item"
          type="select"
          options={boqItems.map(item => `${item.itemNo} - ${item.description} (${item.unit})`)}
          required
        />

        <div style={{
          padding: '16px',
          background: '#f0f9ff',
          borderRadius: '12px',
          border: '1px solid #bfdbfe',
          marginBottom: '20px'
        }}>
          <div style={{ fontSize: '13px', color: '#1e40af', fontWeight: '600', marginBottom: '8px' }}>
            Selected Item: 101.1 - Earthwork Excavation
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '13px', color: '#1e3a8a' }}>
            <div>Unit: <strong>cum</strong></div>
            <div>Rate: <strong>₹245 per cum</strong></div>
          </div>
        </div>

        <h4 style={{ fontSize: '15px', color: '#1e293b', marginBottom: '16px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Ruler size={18} style={{ color: '#ec4899' }} />
          Enter Measurements
        </h4>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <FormField label="Length (meters)" type="number" placeholder="e.g., 500" required step="0.01" />
          <FormField label="Width (meters)" type="number" placeholder="e.g., 12" required step="0.01" />
          <FormField label="Depth/Height (meters)" type="number" placeholder="e.g., 1.5" required step="0.01" />
          <FormField label="Number" type="number" placeholder="e.g., 1" required defaultValue="1" />
        </div>

        <div style={{
          padding: '16px',
          background: '#f0fdf4',
          borderRadius: '12px',
          border: '1px solid #bbf7d0',
          marginTop: '20px'
        }}>
          <div style={{ fontSize: '13px', color: '#065f46', fontWeight: '600', marginBottom: '8px' }}>
            Calculated Quantity
          </div>
          <div style={{ fontSize: '24px', fontWeight: '800', color: '#10b981' }}>
            0.00 cum
          </div>
          <div style={{ fontSize: '12px', color: '#065f46', marginTop: '4px' }}>
            Formula: Length × Width × Depth × Number
          </div>
        </div>

        <FormField label="Remarks (if any)" type="textarea" rows={2} 
          helperText="Note any special conditions or deviations" />
      </Modal>
    </div>
  );
}