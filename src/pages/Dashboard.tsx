import { useState } from "react";
import type { Role } from "../roles";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Clock,
  Filter,
  Download,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

export default function Dashboard({ role, onNavigate }: { role: Role; onNavigate?: (page: string) => void }) {
  const [selectedFY, setSelectedFY] = useState("2024-25");
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [viewMode, setViewMode] = useState<"overview" | "detailed">("overview");

  const fiscalYears = ["2023-24", "2024-25", "2025-26"];
  const months = [
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
    "January",
    "February",
    "March",
  ];

  const getDashboardContent = () => {
    switch (role) {
      case "PMU":
        return {
          title: "Program Management Unit",
          subtitle: "Strategic oversight and program-level monitoring",
          kpiCards: [
            {
              label: "Total Sanctioned Length",
              value: "1,240",
              unit: "km",
              trend: "+5.2%",
              isPositive: true,
              color: "#3b82f6",
              bgGradient: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
              icon: "🛣️",
            },
            {
              label: "Program Budget",
              value: "₹32,000",
              unit: "Cr",
              trend: "+2.1%",
              isPositive: true,
              color: "#10b981",
              bgGradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
              icon: "💰",
            },
            {
              label: "DLI Achievement Rate",
              value: "67",
              unit: "%",
              trend: "+8.3%",
              isPositive: true,
              color: "#f59e0b",
              bgGradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
              icon: "🎯",
            },
            {
              label: "Active Tenders",
              value: "24",
              unit: "nos",
              trend: "+3",
              isPositive: true,
              color: "#8b5cf6",
              bgGradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
              icon: "📦",
            },
          ],
          progressData: [
            { month: "Apr", physical: 45, financial: 42, target: 50 },
            { month: "May", physical: 52, financial: 48, target: 55 },
            { month: "Jun", physical: 58, financial: 55, target: 60 },
            { month: "Jul", physical: 63, financial: 60, target: 65 },
            { month: "Aug", physical: 68, financial: 65, target: 70 },
            { month: "Sep", physical: 72, financial: 69, target: 73 },
            { month: "Oct", physical: 76, financial: 73, target: 77 },
            { month: "Nov", physical: 81, financial: 77, target: 82 },
            { month: "Dec", physical: 85, financial: 82, target: 86 },
            { month: "Jan", physical: 89, financial: 86, target: 90 },
          ],
          pieData: [
            { name: "Completed", value: 35, color: "#10b981" },
            { name: "In Progress", value: 45, color: "#3b82f6" },
            { name: "Delayed", value: 15, color: "#f59e0b" },
            { name: "Not Started", value: 5, color: "#94a3b8" },
          ],
          corridorData: [
            { corridor: "NH-44", physical: 78, financial: 75, compliance: 82 },
            { corridor: "NH-47", physical: 85, financial: 82, compliance: 88 },
            { corridor: "NH-52", physical: 65, financial: 62, compliance: 70 },
            { corridor: "NH-69", physical: 72, financial: 68, compliance: 75 },
          ],
          alerts: [
            {
              type: "critical",
              message: "Environmental NOC pending for Package NH-44-PKG3",
              priority: "High",
            },
            {
              type: "warning",
              message: "DLI-7 verification scheduled for Feb 5, 2026",
              priority: "Medium",
            },
            {
              type: "info",
              message: "Quarterly review meeting on Feb 15, 2026",
              priority: "Low",
            },
          ],
        };

      case "PIU":
        return {
          title: "Project Implementation Unit",
          subtitle: "Package execution and coordination management",
          kpiCards: [
            {
              label: "Assigned Packages",
              value: "12",
              unit: "nos",
              trend: "+2",
              isPositive: true,
              color: "#3b82f6",
              bgGradient: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
              icon: "📋",
            },
            {
              label: "Physical Progress",
              value: "72",
              unit: "%",
              trend: "+4.5%",
              isPositive: true,
              color: "#10b981",
              bgGradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
              icon: "⚡",
            },
            {
              label: "Fund Utilization",
              value: "₹245",
              unit: "Cr",
              trend: "+12%",
              isPositive: true,
              color: "#f59e0b",
              bgGradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
              icon: "💳",
            },
            {
              label: "Active Contractors",
              value: "8",
              unit: "nos",
              trend: "0",
              isPositive: true,
              color: "#8b5cf6",
              bgGradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
              icon: "🏗️",
            },
          ],
          progressData: [
            { month: "Apr", kmCompleted: 12, expenditure: 18, target: 15 },
            { month: "May", kmCompleted: 25, expenditure: 35, target: 28 },
            { month: "Jun", kmCompleted: 38, expenditure: 52, target: 42 },
            { month: "Jul", kmCompleted: 51, expenditure: 68, target: 55 },
            { month: "Aug", kmCompleted: 64, expenditure: 82, target: 68 },
            { month: "Sep", kmCompleted: 76, expenditure: 95, target: 80 },
            { month: "Oct", kmCompleted: 88, expenditure: 108, target: 92 },
            { month: "Nov", kmCompleted: 99, expenditure: 120, target: 103 },
            { month: "Dec", kmCompleted: 110, expenditure: 132, target: 115 },
            { month: "Jan", kmCompleted: 121, expenditure: 145, target: 126 },
          ],
          pieData: [
            { name: "Bills Approved", value: 42, color: "#10b981" },
            { name: "Under Review", value: 28, color: "#3b82f6" },
            { name: "Pending", value: 18, color: "#f59e0b" },
            { name: "Rejected", value: 12, color: "#ef4444" },
          ],
          corridorData: [
            {
              contractor: "ABC Infra",
              progress: 78,
              payment: 85,
              compliance: 92,
            },
            {
              contractor: "XYZ Builders",
              progress: 82,
              payment: 79,
              compliance: 88,
            },
            {
              contractor: "PQR Constructions",
              progress: 65,
              payment: 68,
              compliance: 75,
            },
            {
              contractor: "LMN Engineers",
              progress: 71,
              payment: 73,
              compliance: 82,
            },
          ],
          alerts: [
            {
              type: "warning",
              message: "Bill approval pending for ABC Infra - PKG-4",
              priority: "High",
            },
            {
              type: "warning",
              message: "Progress below target in 2 packages",
              priority: "Medium",
            },
            {
              type: "info",
              message: "Monthly review meeting tomorrow at 3 PM",
              priority: "Low",
            },
          ],
        };

      case "AE":
        return {
          title: "Assistant Engineer",
          subtitle: "Site supervision and quality assurance",
          kpiCards: [
            {
              label: "Assigned Sections",
              value: "18",
              unit: "nos",
              trend: "+1",
              isPositive: true,
              color: "#3b82f6",
              bgGradient: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
              icon: "📍",
            },
            {
              label: "Pending Inspections",
              value: "7",
              unit: "nos",
              trend: "-2",
              isPositive: true,
              color: "#ef4444",
              bgGradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
              icon: "🔍",
            },
            {
              label: "Quality Checks",
              value: "24",
              unit: "nos",
              trend: "+5",
              isPositive: true,
              color: "#10b981",
              bgGradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
              icon: "✓",
            },
            {
              label: "MB Updates Due",
              value: "15",
              unit: "nos",
              trend: "+3",
              isPositive: false,
              color: "#f59e0b",
              bgGradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
              icon: "📝",
            },
          ],
          progressData: [
            { week: "W1", inspections: 8, approvals: 6, issues: 2 },
            { week: "W2", inspections: 12, approvals: 10, issues: 2 },
            { week: "W3", inspections: 10, approvals: 9, issues: 1 },
            { week: "W4", inspections: 15, approvals: 12, issues: 3 },
          ],
          pieData: [
            { name: "Approved", value: 65, color: "#10b981" },
            { name: "Pending Review", value: 20, color: "#3b82f6" },
            { name: "Corrections Needed", value: 12, color: "#f59e0b" },
            { name: "Rejected", value: 3, color: "#ef4444" },
          ],
          corridorData: [
            { section: "CH 0-5", quality: 92, progress: 88, safety: 95 },
            { section: "CH 5-10", quality: 88, progress: 85, safety: 90 },
            { section: "CH 10-15", quality: 85, progress: 82, safety: 88 },
            { section: "CH 15-20", quality: 78, progress: 75, safety: 82 },
          ],
          alerts: [
            {
              type: "critical",
              message:
                "Quality test failed at CH 12+500 - immediate action required",
              priority: "High",
            },
            {
              type: "warning",
              message: "Safety audit scheduled for Site A-3 tomorrow",
              priority: "Medium",
            },
            {
              type: "info",
              message: "5 MB entries awaiting your approval",
              priority: "Low",
            },
          ],
        };
      
      case 'JE':
  return {
    title: 'Site Engineer Dashboard',
    subtitle: 'Daily site operations, measurements, and work logs',
    kpiCards: [
      {
        label: 'Daily Logs This Month',
        value: '30',
        unit: 'nos',
        trend: '+30',
        isPositive: true,
        color: '#a855f7',
        bgGradient: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)',
        icon: '📋',
      },
      {
        label: 'MB Entries Pending',
        value: '1',
        unit: 'draft',
        trend: 'Needs submission',
        isPositive: false,
        color: '#ec4899',
        bgGradient: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
        icon: '📐',
      },
      {
        label: 'MB Entries Verified',
        value: '24',
        unit: 'this month',
        trend: '+24',
        isPositive: true,
        color: '#10b981',
        bgGradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        icon: '✓',
      },
      {
        label: 'Site Inspections',
        value: '18',
        unit: 'this month',
        trend: '+18',
        isPositive: true,
        color: '#3b82f6',
        bgGradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
        icon: '🔍',
      },
    ],
    progressData: [
      { week: 'W1', dailyLogs: 6, mbEntries: 4, inspections: 3 },
      { week: 'W2', dailyLogs: 7, mbEntries: 5, inspections: 4 },
      { week: 'W3', dailyLogs: 6, mbEntries: 6, inspections: 5 },
      { week: 'W4', dailyLogs: 7, mbEntries: 5, inspections: 4 },
      { week: 'W5', dailyLogs: 4, mbEntries: 4, inspections: 2 },
    ],
    pieData: [
      { name: 'Daily Logs Submitted', value: 30, color: '#a855f7' },
      { name: 'MB Entries Verified', value: 24, color: '#10b981' },
      { name: 'MB Entries Pending', value: 1, color: '#f59e0b' },
    ],
    corridorData: [
      { section: 'CH 0-5 km', dailyLogs: 22, mbEntries: 18, quality: 95 },
      { section: 'CH 5-10 km', dailyLogs: 20, mbEntries: 16, quality: 92 },
      { section: 'CH 10-15 km', dailyLogs: 18, mbEntries: 14, quality: 88 },
    ],
    alerts: [
      {
        type: 'critical',
        message: 'Daily log for 2nd Feb not submitted yet',
        priority: 'High',
      },
      {
        type: 'warning',
        message: 'MB Entry MB-2024-158 in draft - submit for verification',
        priority: 'High',
      },
      {
        type: 'info',
        message: 'Site inspection scheduled for tomorrow at 10 AM',
        priority: 'Medium',
      },
      {
        type: 'info',
        message: 'Quality test results pending for material approval',
        priority: 'Low',
      },
    ],
  };
      // Add this case in your getDashboardContent() switch statement, BEFORE the default case:

case 'CONTRACTOR':
  return {
    title: 'My Work Dashboard',
    subtitle: 'Track your tenders, submissions, and pending actions',
    kpiCards: [
      {
        label: 'My Active Tenders',
        value: '3',
        unit: 'nos',
        trend: '+0',
        isPositive: true,
        color: '#14b8a6',
        bgGradient: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)',
        icon: '📋',
      },
      {
        label: 'Pending Bills',
        value: '2',
        unit: 'nos',
        trend: '₹185 Cr',
        isPositive: false,
        color: '#f59e0b',
        bgGradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
        icon: '💰',
      },
      {
        label: 'Daily Logs This Month',
        value: '30',
        unit: 'nos',
        trend: '+30',
        isPositive: true,
        color: '#8b5cf6',
        bgGradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
        icon: '📝',
      },
      {
        label: 'Pending Approvals',
        value: '4',
        unit: 'items',
        trend: 'Action needed',
        isPositive: false,
        color: '#ef4444',
        bgGradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
        icon: '⏳',
      },
    ],
    progressData: [
      { month: 'Apr', submitted: 28, approved: 26, pending: 2 },
      { month: 'May', submitted: 30, approved: 28, pending: 2 },
      { month: 'Jun', submitted: 29, approved: 27, pending: 2 },
      { month: 'Jul', submitted: 31, approved: 29, pending: 2 },
      { month: 'Aug', submitted: 30, approved: 28, pending: 2 },
      { month: 'Sep', submitted: 31, approved: 30, pending: 1 },
      { month: 'Oct', submitted: 30, approved: 29, pending: 1 },
      { month: 'Nov', submitted: 31, approved: 30, pending: 1 },
      { month: 'Dec', submitted: 30, approved: 29, pending: 1 },
      { month: 'Jan', submitted: 30, approved: 28, pending: 2 },
    ],
    pieData: [
      { name: 'Bills Submitted', value: 15, color: '#3b82f6' },
      { name: 'Bills Approved', value: 13, color: '#10b981' },
      { name: 'Bills Pending', value: 2, color: '#f59e0b' },
    ],
    corridorData: [
      { tender: 'PKG-001: Indore-Bhopal', progress: 72, payment: 68, compliance: 92 },
      { tender: 'PKG-004: Jabalpur-Rewa', progress: 58, payment: 55, compliance: 88 },
      { tender: 'PKG-007: Gwalior Bypass', progress: 98, payment: 96, compliance: 95 },
    ],
    alerts: [
      {
        type: 'critical',
        message: 'Daily log for 2nd Feb not submitted yet',
        priority: 'High',
      },
      {
        type: 'warning',
        message: 'Bill PKG-004-RAB-002 under review - action may be needed',
        priority: 'Medium',
      },
      {
        type: 'warning',
        message: 'Quality test result approval pending for Bitumen VG-30',
        priority: 'Medium',
      },
      {
        type: 'info',
        message: 'Monthly progress report for PKG-001 due on 5th Feb',
        priority: 'Medium',
      },
      {
        type: 'info',
        message: 'Safety compliance report due on 7th Feb',
        priority: 'Low',
      },
    ],
  };
        // Add other roles here with similar bright color schemes...
      default:
        return {
          title: "Dashboard",
          subtitle: "MP PWD National Highway Program",
          kpiCards: [],
          progressData: [],
          pieData: [],
          corridorData: [],
          alerts: [],
        };
    }
  };

  const content = getDashboardContent();

  return (
    <div
      style={{
        minHeight: "100%",
        background: "#f8fafc",
        padding: "0",
        fontFamily:
          '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      {/* Header Section */}
      <div
        style={{
          background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
          padding: "32px",
          marginBottom: "32px",
          boxShadow: "0 4px 20px rgba(59, 130, 246, 0.2)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "24px",
          }}
        >
          <div>
            <h1
              style={{
                margin: "0 0 8px 0",
                fontSize: "32px",
                fontWeight: "800",
                color: "white",
                letterSpacing: "-0.5px",
              }}
            >
              {content.title}
            </h1>
            <p
              style={{
                margin: 0,
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              {content.subtitle}
            </p>
          </div>
          <button
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              color: "white",
              padding: "12px 24px",
              borderRadius: "12px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
            }}
          >
            <Download size={16} />
            Export Report
          </button>
        </div>

        {/* Filters */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "white",
            }}
          >
            <Filter size={18} />
            <span style={{ fontSize: "14px", fontWeight: "600" }}>
              Filters:
            </span>
          </div>

          <select
            value={selectedFY}
            onChange={(e) => setSelectedFY(e.target.value)}
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              color: "white",
              padding: "10px 16px",
              borderRadius: "10px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              outline: "none",
            }}
          >
            {fiscalYears.map((fy) => (
              <option
                key={fy}
                value={fy}
                style={{ background: "#3b82f6", color: "white" }}
              >
                FY {fy}
              </option>
            ))}
          </select>

          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              color: "white",
              padding: "10px 16px",
              borderRadius: "10px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              outline: "none",
            }}
          >
            {months.map((month) => (
              <option
                key={month}
                value={month}
                style={{ background: "#3b82f6", color: "white" }}
              >
                {month}
              </option>
            ))}
          </select>

          <div style={{ display: "flex", gap: "8px", marginLeft: "auto" }}>
            <button
              onClick={() => setViewMode("overview")}
              style={{
                background:
                  viewMode === "overview"
                    ? "rgba(255, 255, 255, 0.3)"
                    : "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                color: "white",
                padding: "10px 20px",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "600",
                transition: "all 0.3s ease",
              }}
            >
              Overview
            </button>
            <button
              onClick={() => setViewMode("detailed")}
              style={{
                background:
                  viewMode === "detailed"
                    ? "rgba(255, 255, 255, 0.3)"
                    : "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                color: "white",
                padding: "10px 20px",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "600",
                transition: "all 0.3s ease",
              }}
            >
              Detailed
            </button>
          </div>
        </div>
      </div>

      <div style={{ padding: "0 32px 32px" }}>
        {/* KPI Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginBottom: "32px",
          }}
        >
          {content.kpiCards.map((kpi, idx) => (
            <div
              key={idx}
              style={{
                background: "white",
                borderRadius: "20px",
                padding: "28px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s ease",
                cursor: "pointer",
                border: "1px solid #e2e8f0",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 40px rgba(0, 0, 0, 0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(0, 0, 0, 0.08)";
              }}
            >
              {/* Decorative gradient bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: kpi.bgGradient,
                }}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    fontSize: "13px",
                    color: "#64748b",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  {kpi.label}
                </div>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: `${kpi.color}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                  }}
                >
                  {kpi.icon}
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "8px",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    fontSize: "42px",
                    fontWeight: "800",
                    color: "#1e293b",
                    lineHeight: "1",
                    letterSpacing: "-1px",
                  }}
                >
                  {kpi.value}
                </div>
                <div
                  style={{
                    fontSize: "18px",
                    color: "#64748b",
                    fontWeight: "600",
                  }}
                >
                  {kpi.unit}
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "14px",
                  fontWeight: "700",
                  color: kpi.isPositive ? "#10b981" : "#ef4444",
                }}
              >
                {kpi.isPositive ? (
                  <ArrowUpRight size={16} />
                ) : (
                  <ArrowDownRight size={16} />
                )}
                {kpi.trend}
                <span
                  style={{
                    color: "#94a3b8",
                    fontWeight: "500",
                    marginLeft: "4px",
                  }}
                >
                  vs last month
                </span>
              </div>
            </div>
          ))}
        </div>
{/* Quick Actions Section - For CONTRACTOR and JE */}
{(role === 'CONTRACTOR' || role === 'JE') && (
  <div style={{
    background: 'white',
    borderRadius: '20px',
    padding: '28px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    border: '1px solid #e2e8f0',
    marginBottom: '32px'
  }}>
    <h3 style={{
      margin: '0 0 24px 0',
      color: '#1e293b',
      fontSize: '20px',
      fontWeight: '700',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }}>
      <div style={{
        width: '4px',
        height: '24px',
        background: role === 'JE' 
          ? 'linear-gradient(180deg, #a855f7, #9333ea)' 
          : 'linear-gradient(180deg, #14b8a6, #0d9488)',
        borderRadius: '4px'
      }} />
      Quick Actions
    </h3>

    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '20px'
    }}>
      {role === 'JE' ? (
        <>
          {/* JE Quick Actions */}
          <button
            onClick={() => onNavigate?.('Daily Logs')}
            style={{
              padding: '24px',
              background: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)',
              border: 'none',
              borderRadius: '16px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'left',
              color: 'white',
              boxShadow: '0 4px 12px rgba(168, 85, 247, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(168, 85, 247, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(168, 85, 247, 0.2)';
            }}
          >
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>📝</div>
            <div style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>
              Submit Daily Log
            </div>
            <div style={{ fontSize: '14px', opacity: 0.9 }}>
              Record today's site work, manpower, and equipment
            </div>
          </button>

          <button
            onClick={() => onNavigate?.('MB Entry')}
            style={{
              padding: '24px',
              background: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
              border: 'none',
              borderRadius: '16px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'left',
              color: 'white',
              boxShadow: '0 4px 12px rgba(236, 72, 153, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(236, 72, 153, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(236, 72, 153, 0.2)';
            }}
          >
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>📐</div>
            <div style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>
              Create MB Entry
            </div>
            <div style={{ fontSize: '14px', opacity: 0.9 }}>
              Record site measurements and quantities
            </div>
          </button>

          <button
            onClick={() => onNavigate?.('Progress')}
            style={{
              padding: '24px',
              background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
              border: 'none',
              borderRadius: '16px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'left',
              color: 'white',
              boxShadow: '0 4px 12px rgba(59, 130, 246, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.2)';
            }}
          >
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>📊</div>
            <div style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>
              View Progress
            </div>
            <div style={{ fontSize: '14px', opacity: 0.9 }}>
              Check work progress and submissions
            </div>
          </button>
        </>
      ) : (
        // Contractor Quick Actions (keep existing code)
        <>
          {/* Your existing contractor quick actions */}
        </>
      )}
    </div>
  </div>
)}
        {/* Quick Actions Section - Only for CONTRACTOR */}
        {role === 'CONTRACTOR' && (
          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '28px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            border: '1px solid #e2e8f0',
            marginBottom: '32px'
          }}>
            <h3 style={{
              margin: '0 0 24px 0',
              color: '#1e293b',
              fontSize: '20px',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <div style={{
                width: '4px',
                height: '24px',
                background: 'linear-gradient(180deg, #14b8a6, #0d9488)',
                borderRadius: '4px'
              }} />
              Quick Actions
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px'
            }}>
              {/* Submit Daily Log */}
              <button
                onClick={() => onNavigate?.('Daily Logs')}
                style={{
                  padding: '24px',
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                  border: 'none',
                  borderRadius: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textAlign: 'left',
                  color: 'white',
                  boxShadow: '0 4px 12px rgba(139, 92, 246, 0.2)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(139, 92, 246, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(139, 92, 246, 0.2)';
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>📝</div>
                <div style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>
                  Submit Daily Log
                </div>
                <div style={{ fontSize: '14px', opacity: 0.9 }}>
                  Record today's work progress, manpower, and equipment
                </div>
              </button>

              {/* Submit Progress/Bill */}
              <button
                onClick={() => onNavigate?.('Progress')}
                style={{
                  padding: '24px',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                  border: 'none',
                  borderRadius: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textAlign: 'left',
                  color: 'white',
                  boxShadow: '0 4px 12px rgba(59, 130, 246, 0.2)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.2)';
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>📊</div>
                <div style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>
                  Update Progress & Submit Bill
                </div>
                <div style={{ fontSize: '14px', opacity: 0.9 }}>
                  Report work progress and submit running account bills
                </div>
              </button>

              {/* Upload Quality Test */}
              <button
                onClick={() => onNavigate?.('Quality')}
                style={{
                  padding: '24px',
                  background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                  border: 'none',
                  borderRadius: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textAlign: 'left',
                  color: 'white',
                  boxShadow: '0 4px 12px rgba(245, 158, 11, 0.2)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(245, 158, 11, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(245, 158, 11, 0.2)';
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>🧪</div>
                <div style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>
                  Upload Quality Test Result
                </div>
                <div style={{ fontSize: '14px', opacity: 0.9 }}>
                  Submit material and quality test certificates
                </div>
              </button>

              {/* Submit Compliance */}
              <button
                onClick={() => onNavigate?.('Compliance')}
                style={{
                  padding: '24px',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  border: 'none',
                  borderRadius: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textAlign: 'left',
                  color: 'white',
                  boxShadow: '0 4px 12px rgba(16, 185, 129, 0.2)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(16, 185, 129, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(16, 185, 129, 0.2)';
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>✅</div>
                <div style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>
                  Submit Compliance Report
                </div>
                <div style={{ fontSize: '14px', opacity: 0.9 }}>
                  Upload safety, environmental, and social compliance
                </div>
              </button>
            </div>
          </div>
        )}

        {/* Charts Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              viewMode === "detailed"
                ? "1fr"
                : "repeat(auto-fit, minmax(500px, 1fr))",
            gap: "24px",
            marginBottom: "32px",
          }}
        >
          {/* Progress Trend Chart */}
          {content.progressData.length > 0 && (
            <div
              style={{
                background: "white",
                borderRadius: "20px",
                padding: "28px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                border: "1px solid #e2e8f0",
              }}
            >
              <h3
                style={{
                  margin: "0 0 24px 0",
                  color: "#1e293b",
                  fontSize: "20px",
                  fontWeight: "700",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    width: "4px",
                    height: "24px",
                    background: "linear-gradient(180deg, #3b82f6, #8b5cf6)",
                    borderRadius: "4px",
                  }}
                />
                Progress Trend Analysis
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={content.progressData}>
                  <defs>
                    <linearGradient
                      id="colorPhysical"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient
                      id="colorFinancial"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis
                    dataKey={Object.keys(content.progressData[0])[0]}
                    stroke="#64748b"
                    style={{ fontSize: "12px", fontWeight: "600" }}
                  />
                  <YAxis
                    stroke="#64748b"
                    style={{ fontSize: "12px", fontWeight: "600" }}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "white",
                      border: "1px solid #e2e8f0",
                      borderRadius: "12px",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                      color: "#1e293b",
                      fontWeight: "600",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey={Object.keys(content.progressData[0])[1]}
                    stroke="#3b82f6"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorPhysical)"
                  />
                  <Area
                    type="monotone"
                    dataKey={Object.keys(content.progressData[0])[2]}
                    stroke="#10b981"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorFinancial)"
                  />
                  {"target" in content.progressData[0] && (
                    <Line
                      type="monotone"
                      dataKey="target"
                      stroke="#f59e0b"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      dot={false}
                    />
                  )}
                </AreaChart>
              </ResponsiveContainer>
            </div>
          )}

          {/* Distribution Pie Chart */}
          {content.pieData.length > 0 && (
            <div
              style={{
                background: "white",
                borderRadius: "20px",
                padding: "28px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                border: "1px solid #e2e8f0",
              }}
            >
              <h3
                style={{
                  margin: "0 0 24px 0",
                  color: "#1e293b",
                  fontSize: "20px",
                  fontWeight: "700",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    width: "4px",
                    height: "24px",
                    background: "linear-gradient(180deg, #10b981, #3b82f6)",
                    borderRadius: "4px",
                  }}
                />
                Status Distribution
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={content.pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) =>
                      `${name}: ${((percent ?? 0) * 100).toFixed(0)}%`
                    }
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {content.pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: "white",
                      border: "1px solid #e2e8f0",
                      borderRadius: "12px",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                      color: "#1e293b",
                      fontWeight: "600",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>

        {/* Performance Comparison */}
        {content.corridorData.length > 0 && (
          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "28px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
              marginBottom: "32px",
              border: "1px solid #e2e8f0",
            }}
          >
            <h3
              style={{
                margin: "0 0 24px 0",
                color: "#1e293b",
                fontSize: "20px",
                fontWeight: "700",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  width: "4px",
                  height: "24px",
                  background: "linear-gradient(180deg, #f59e0b, #ef4444)",
                  borderRadius: "4px",
                }}
              />
              Performance Comparison
            </h3>

            {viewMode === "overview" ? (
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={content.corridorData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis
                    dataKey={Object.keys(content.corridorData[0])[0]}
                    stroke="#64748b"
                    style={{ fontSize: "12px", fontWeight: "600" }}
                  />
                  <YAxis
                    stroke="#64748b"
                    style={{ fontSize: "12px", fontWeight: "600" }}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "white",
                      border: "1px solid #e2e8f0",
                      borderRadius: "12px",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                      color: "#1e293b",
                      fontWeight: "600",
                    }}
                  />
                  <Legend
                    wrapperStyle={{ color: "#64748b", fontWeight: "600" }}
                  />
                  <Bar
                    dataKey={Object.keys(content.corridorData[0])[1]}
                    fill="#3b82f6"
                    radius={[8, 8, 0, 0]}
                  />
                  <Bar
                    dataKey={Object.keys(content.corridorData[0])[2]}
                    fill="#10b981"
                    radius={[8, 8, 0, 0]}
                  />
                  {(content.corridorData[0] as any)[
                    Object.keys(content.corridorData[0])[3]
                  ] !== undefined && (
                    <Bar
                      dataKey={Object.keys(content.corridorData[0])[3]}
                      fill="#f59e0b"
                      radius={[8, 8, 0, 0]}
                    />
                  )}
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div style={{ overflowX: "auto" }}>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "separate",
                    borderSpacing: "0 8px",
                  }}
                >
                  <thead>
                    <tr>
                      {Object.keys(content.corridorData[0]).map((key, idx) => (
                        <th
                          key={idx}
                          style={{
                            padding: "16px",
                            textAlign: "left",
                            color: "#64748b",
                            fontSize: "13px",
                            fontWeight: "700",
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                            borderBottom: "2px solid #e2e8f0",
                          }}
                        >
                          {key}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {content.corridorData.map((row, idx) => (
                      <tr
                        key={idx}
                        style={{
                          transition: "all 0.2s ease",
                        }}
                      >
                        {Object.values(row).map((value, colIdx) => (
                          <td
                            key={colIdx}
                            style={{
                              padding: "16px",
                              color: "#1e293b",
                              fontSize: "14px",
                              fontWeight: "600",
                              borderBottom: "1px solid #f1f5f9",
                            }}
                          >
                            {typeof value === "number" && value > 20 ? (
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "12px",
                                }}
                              >
                                <div
                                  style={{
                                    flex: 1,
                                    height: "8px",
                                    background: "#f1f5f9",
                                    borderRadius: "4px",
                                    overflow: "hidden",
                                    position: "relative",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      left: 0,
                                      top: 0,
                                      height: "100%",
                                      width: `${Math.min(value, 100)}%`,
                                      background:
                                        value >= 80
                                          ? "#10b981"
                                          : value >= 60
                                            ? "#3b82f6"
                                            : value >= 40
                                              ? "#f59e0b"
                                              : "#ef4444",
                                      borderRadius: "4px",
                                      transition: "width 0.5s ease",
                                    }}
                                  />
                                </div>
                                <span
                                  style={{
                                    minWidth: "50px",
                                    textAlign: "right",
                                  }}
                                >
                                  {value}%
                                </span>
                              </div>
                            ) : (
                              value
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Alerts & Notifications */}
        {content.alerts && content.alerts.length > 0 && (
          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "28px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
              border: "1px solid #e2e8f0",
            }}
          >
            <h3
              style={{
                margin: "0 0 24px 0",
                color: "#1e293b",
                fontSize: "20px",
                fontWeight: "700",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  width: "4px",
                  height: "24px",
                  background: "linear-gradient(180deg, #ef4444, #f59e0b)",
                  borderRadius: "4px",
                }}
              />
              Alerts & Notifications
            </h3>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {content.alerts.map((alert, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "18px 20px",
                    borderRadius: "14px",
                    background:
                      alert.type === "critical"
                        ? "#fef2f2"
                        : alert.type === "warning"
                          ? "#fffbeb"
                          : "#eff6ff",
                    border: `1px solid ${
                      alert.type === "critical"
                        ? "#fecaca"
                        : alert.type === "warning"
                          ? "#fde68a"
                          : "#bfdbfe"
                    }`,
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(4px)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 12px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background:
                        alert.type === "critical"
                          ? "#fee2e2"
                          : alert.type === "warning"
                            ? "#fef3c7"
                            : "#dbeafe",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {alert.type === "critical" ? (
                      <AlertTriangle size={20} style={{ color: "#dc2626" }} />
                    ) : alert.type === "warning" ? (
                      <Clock size={20} style={{ color: "#d97706" }} />
                    ) : (
                      <CheckCircle size={20} style={{ color: "#2563eb" }} />
                    )}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        color: "#1e293b",
                        fontSize: "14px",
                        fontWeight: "600",
                        lineHeight: "1.6",
                      }}
                    >
                      {alert.message}
                    </div>
                  </div>

                  <div
                    style={{
                      padding: "6px 14px",
                      borderRadius: "8px",
                      background:
                        alert.priority === "High"
                          ? "#fee2e2"
                          : alert.priority === "Medium"
                            ? "#fef3c7"
                            : "#dbeafe",
                      color:
                        alert.priority === "High"
                          ? "#dc2626"
                          : alert.priority === "Medium"
                            ? "#d97706"
                            : "#2563eb",
                      fontSize: "12px",
                      fontWeight: "700",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {alert.priority}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
