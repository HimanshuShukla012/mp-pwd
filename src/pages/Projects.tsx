import { useState } from "react";
import type { Role } from "../roles";
import Modal from "./components/Modal";
import FormField from "./components/FormField";

export default function Projects({ role }: { role: Role }) {
  const [activeView, setActiveView] = useState<"projects" | "Tenders">(
    "projects",
  );
  const [isCreateProjectOpen, setIsCreateProjectOpen] = useState(false);
  const [isCreateTenderOpen, setIsCreateTenderOpen] = useState(false);
  const [isAssignContractorOpen, setIsAssignContractorOpen] = useState(false);
  const [isViewDetailsOpen, setIsViewDetailsOpen] = useState(false);
  const [isViewTenderDetailsOpen, setIsViewTenderDetailsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [selectedTender, setSelectedTender] = useState<any>(null);
  
  const getProjectData = () => {
    if (role === "PMU") {
      return {
        title: "All Projects Overview",
        subtitle: "Complete list of projects across all PIUs",
        canCreate: true,
        canManageTenders: true,
        projects: [
          {
            id: "NH-01",
            name: "Indore-Bhopal Corridor",
            piu: "PIU-Central",
            status: "Ongoing",
            progress: 72,
            budget: "₹8,500 Cr",
            Tenders: 5,
            contractor: "Multiple",
          },
          {
            id: "NH-02",
            name: "Jabalpur-Rewa Highway",
            piu: "PIU-East",
            status: "Ongoing",
            progress: 65,
            budget: "₹6,200 Cr",
            Tenders: 4,
            contractor: "Multiple",
          },
          {
            id: "NH-03",
            name: "Gwalior Bypass",
            piu: "PIU-North",
            status: "Completed",
            progress: 100,
            budget: "₹3,800 Cr",
            Tenders: 3,
            contractor: "Multiple",
          },
          {
            id: "NH-04",
            name: "Ujjain-Ratlam Section",
            piu: "PIU-West",
            status: "Planning",
            progress: 15,
            budget: "₹4,500 Cr",
            Tenders: 0,
            contractor: "Not Assigned",
          },
          {
            id: "NH-05",
            name: "Sagar Ring Road",
            piu: "PIU-Central",
            status: "Ongoing",
            progress: 48,
            budget: "₹2,800 Cr",
            Tenders: 2,
            contractor: "Multiple",
          },
        ],
      };
    } else if (role === "PIU") {
      return {
        title: "PIU Assigned Projects",
        subtitle: "Projects under your implementation unit",
        canCreate: false,
        canManageTenders: true,
        projects: [
          {
            id: "NH-01",
            name: "Indore-Bhopal Corridor",
            status: "Ongoing",
            progress: 72,
            budget: "₹8,500 Cr",
            Tenders: 5,
            contractor: "Multiple",
          },
          {
            id: "NH-05",
            name: "Sagar Ring Road",
            status: "Ongoing",
            progress: 48,
            budget: "₹2,800 Cr",
            Tenders: 2,
            contractor: "Multiple",
          },
        ],
      };
    }
    return {
      title: "Projects",
      subtitle: "",
      canCreate: false,
      canManageTenders: false,
      projects: [],
    };
  };

  const data = getProjectData();

  // Tender data for selected project
  const TendersData = [
    {
      TenderId: "PKG-01-A",
      TenderName: "Indore-Dewas Section (0-35 km)",
      projectId: "NH-01",
      length: "35 km",
      budget: "₹1,750 Cr",
      contractor: "ABC Constructions",
      status: "Ongoing",
      progress: 82,
      startChainage: "0+000",
      endChainage: "35+000",
      workOrderNo: "WO-2024-156",
      workOrderDate: "2024-03-15",
      completionDate: "2026-09-15",
    },
    {
      TenderId: "PKG-01-B",
      TenderName: "Dewas-Bhopal Section (35-85 km)",
      projectId: "NH-01",
      length: "50 km",
      budget: "₹2,500 Cr",
      contractor: "XYZ Builders",
      status: "Ongoing",
      progress: 68,
      startChainage: "35+000",
      endChainage: "85+000",
      workOrderNo: "WO-2024-157",
      workOrderDate: "2024-03-20",
      completionDate: "2026-10-20",
    },
    {
      TenderId: "PKG-01-C",
      TenderName: "Bhopal Bypass (85-125.5 km)",
      projectId: "NH-01",
      length: "40.5 km",
      budget: "₹2,025 Cr",
      contractor: "PQR Infrastructure",
      status: "Ongoing",
      progress: 75,
      startChainage: "85+000",
      endChainage: "125+500",
      workOrderNo: "WO-2024-158",
      workOrderDate: "2024-04-01",
      completionDate: "2026-11-01",
    },
    {
      TenderId: "PKG-01-D",
      TenderName: "Service Roads & Interchanges",
      projectId: "NH-01",
      length: "15 km",
      budget: "₹1,125 Cr",
      contractor: "LMN Contractors",
      status: "Ongoing",
      progress: 55,
      startChainage: "Various",
      endChainage: "Various",
      workOrderNo: "WO-2024-159",
      workOrderDate: "2024-04-15",
      completionDate: "2026-12-15",
    },
    {
      TenderId: "PKG-01-E",
      TenderName: "Safety & Road Furniture",
      projectId: "NH-01",
      length: "Full Corridor",
      budget: "₹1,100 Cr",
      contractor: "Not Assigned",
      status: "Tendering",
      progress: 0,
      startChainage: "0+000",
      endChainage: "125+500",
      workOrderNo: "-",
      workOrderDate: "-",
      completionDate: "2027-03-31",
    },
  ];

  const handleCreateProject = () => {
    alert("Project created successfully!");
    setIsCreateProjectOpen(false);
  };

  const handleCreateTender = () => {
    alert("Tender created successfully!");
    setIsCreateTenderOpen(false);
  };

  const handleAssignContractor = () => {
    alert("Contractor assigned to Tender successfully!");
    setIsAssignContractorOpen(false);
    setSelectedTender(null);
  };

  return (
    <div>
      {/* Header */}
      <div
        style={{
          background: "white",
          borderRadius: "12px",
          padding: "24px",
          marginBottom: "24px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <div>
            <h3 style={{ margin: "0 0 8px 0", color: "#1e293b" }}>
              {data.title}
            </h3>
            <p style={{ margin: 0, color: "#64748b" }}>{data.subtitle}</p>
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            {data.canCreate && (
              <button
                onClick={() => setIsCreateProjectOpen(true)}
                style={{
                  padding: "10px 20px",
                  background: "#3b82f6",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                + Create Project
              </button>
            )}
            {data.canManageTenders && (
              <button
                onClick={() => setIsCreateTenderOpen(true)}
                style={{
                  padding: "10px 20px",
                  background: "#10b981",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                + Create Tender
              </button>
            )}
          </div>
        </div>

        {/* View Toggle */}
        {data.canManageTenders && (
          <div
            style={{
              display: "flex",
              gap: "12px",
              borderBottom: "2px solid #e2e8f0",
            }}
          >
            <button
              onClick={() => setActiveView("projects")}
              style={{
                padding: "12px 24px",
                background: "none",
                border: "none",
                borderBottom:
                  activeView === "projects"
                    ? "3px solid #3b82f6"
                    : "3px solid transparent",
                color: activeView === "projects" ? "#3b82f6" : "#64748b",
                fontSize: "15px",
                fontWeight: "600",
                cursor: "pointer",
                marginBottom: "-2px",
                transition: "all 0.2s ease",
              }}
            >
              🏗️ Projects
            </button>
            <button
              onClick={() => setActiveView("Tenders")}
              style={{
                padding: "12px 24px",
                background: "none",
                border: "none",
                borderBottom:
                  activeView === "Tenders"
                    ? "3px solid #3b82f6"
                    : "3px solid transparent",
                color: activeView === "Tenders" ? "#3b82f6" : "#64748b",
                fontSize: "15px",
                fontWeight: "600",
                cursor: "pointer",
                marginBottom: "-2px",
                transition: "all 0.2s ease",
              }}
            >
              📦 Tenders
            </button>
          </div>
        )}
      </div>

      {/* Projects View */}
      {activeView === "projects" && (
        <div
          style={{
            background: "white",
            borderRadius: "12px",
            padding: "24px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr
                style={{ borderBottom: "2px solid #e2e8f0", textAlign: "left" }}
              >
                <th
                  style={{
                    padding: "12px",
                    color: "#64748b",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  Project ID
                </th>
                <th
                  style={{
                    padding: "12px",
                    color: "#64748b",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  Name
                </th>
                {role === "PMU" && (
                  <th
                    style={{
                      padding: "12px",
                      color: "#64748b",
                      fontWeight: "600",
                      fontSize: "14px",
                    }}
                  >
                    PIU
                  </th>
                )}
                <th
                  style={{
                    padding: "12px",
                    color: "#64748b",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  Tenders
                </th>
                <th
                  style={{
                    padding: "12px",
                    color: "#64748b",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  Status
                </th>
                <th
                  style={{
                    padding: "12px",
                    color: "#64748b",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  Progress
                </th>
                <th
                  style={{
                    padding: "12px",
                    color: "#64748b",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  Budget
                </th>
                <th
                  style={{
                    padding: "12px",
                    color: "#64748b",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.projects.map((project, idx) => (
                <tr key={idx} style={{ borderBottom: "1px solid #f1f5f9" }}>
                  <td
                    style={{
                      padding: "16px",
                      color: "#1e293b",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    {project.id}
                  </td>
                  <td
                    style={{
                      padding: "16px",
                      color: "#1e293b",
                      fontSize: "14px",
                    }}
                  >
                    {project.name}
                  </td>
                  {role === "PMU" && "piu" in project && (
                    <td
                      style={{
                        padding: "16px",
                        color: "#64748b",
                        fontSize: "14px",
                      }}
                    >
                      {project.piu}
                    </td>
                  )}
                  <td style={{ padding: "16px" }}>
                    <span
                      style={{
                        padding: "4px 12px",
                        borderRadius: "12px",
                        fontSize: "12px",
                        fontWeight: "600",
                        background: "#dbeafe",
                        color: "#1e40af",
                      }}
                    >
                      {project.Tenders} Tenders
                    </span>
                  </td>
                  <td style={{ padding: "16px" }}>
                    <span
                      style={{
                        padding: "4px 12px",
                        borderRadius: "12px",
                        fontSize: "12px",
                        fontWeight: "600",
                        background:
                          project.status === "Completed"
                            ? "#d1fae5"
                            : project.status === "Ongoing"
                              ? "#dbeafe"
                              : "#fef3c7",
                        color:
                          project.status === "Completed"
                            ? "#065f46"
                            : project.status === "Ongoing"
                              ? "#1e40af"
                              : "#92400e",
                      }}
                    >
                      {project.status}
                    </span>
                  </td>
                  <td style={{ padding: "16px" }}>
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
                          background: "#e2e8f0",
                          borderRadius: "4px",
                          overflow: "hidden",
                          minWidth: "80px",
                        }}
                      >
                        <div
                          style={{
                            width: `${project.progress}%`,
                            height: "100%",
                            background:
                              project.progress === 100
                                ? "#10b981"
                                : project.progress > 50
                                  ? "#3b82f6"
                                  : "#f59e0b",
                            borderRadius: "4px",
                          }}
                        />
                      </div>
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#1e293b",
                          minWidth: "45px",
                        }}
                      >
                        {project.progress}%
                      </span>
                    </div>
                  </td>
                  <td
                    style={{
                      padding: "16px",
                      color: "#1e293b",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    {project.budget}
                  </td>
                  <td style={{ padding: "16px" }}>
                    <button
                      onClick={() => {
                        setSelectedProject(project);
                        setIsViewDetailsOpen(true);
                      }}
                      style={{
                        padding: "6px 16px",
                        background: "#64748b",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        fontSize: "13px",
                        fontWeight: "600",
                        cursor: "pointer",
                      }}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Tenders View */}
      {activeView === "Tenders" && data.canManageTenders && (
        <div
          style={{
            background: "white",
            borderRadius: "12px",
            padding: "24px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          <h4 style={{ margin: "0 0 20px 0", color: "#1e293b" }}>
            All Tenders
          </h4>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr
                  style={{
                    borderBottom: "2px solid #e2e8f0",
                    textAlign: "left",
                  }}
                >
                  <th
                    style={{
                      padding: "12px",
                      color: "#64748b",
                      fontWeight: "600",
                      fontSize: "14px",
                    }}
                  >
                    Tender ID
                  </th>
                  <th
                    style={{
                      padding: "12px",
                      color: "#64748b",
                      fontWeight: "600",
                      fontSize: "14px",
                    }}
                  >
                    Tender Name
                  </th>
                  <th
                    style={{
                      padding: "12px",
                      color: "#64748b",
                      fontWeight: "600",
                      fontSize: "14px",
                    }}
                  >
                    Project
                  </th>
                  <th
                    style={{
                      padding: "12px",
                      color: "#64748b",
                      fontWeight: "600",
                      fontSize: "14px",
                    }}
                  >
                    Length
                  </th>
                  <th
                    style={{
                      padding: "12px",
                      color: "#64748b",
                      fontWeight: "600",
                      fontSize: "14px",
                    }}
                  >
                    Budget
                  </th>
                  <th
                    style={{
                      padding: "12px",
                      color: "#64748b",
                      fontWeight: "600",
                      fontSize: "14px",
                    }}
                  >
                    Contractor
                  </th>
                  <th
                    style={{
                      padding: "12px",
                      color: "#64748b",
                      fontWeight: "600",
                      fontSize: "14px",
                    }}
                  >
                    Status
                  </th>
                  <th
                    style={{
                      padding: "12px",
                      color: "#64748b",
                      fontWeight: "600",
                      fontSize: "14px",
                    }}
                  >
                    Progress
                  </th>
                  <th
                    style={{
                      padding: "12px",
                      color: "#64748b",
                      fontWeight: "600",
                      fontSize: "14px",
                    }}
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {TendersData.map((pkg, idx) => (
                  <tr key={idx} style={{ borderBottom: "1px solid #f1f5f9" }}>
                    <td
                      style={{
                        padding: "16px",
                        color: "#1e293b",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      {pkg.TenderId}
                    </td>
                    <td
                      style={{
                        padding: "16px",
                        color: "#1e293b",
                        fontSize: "14px",
                      }}
                    >
                      {pkg.TenderName}
                    </td>
                    <td
                      style={{
                        padding: "16px",
                        color: "#64748b",
                        fontSize: "14px",
                      }}
                    >
                      {pkg.projectId}
                    </td>
                    <td
                      style={{
                        padding: "16px",
                        color: "#64748b",
                        fontSize: "14px",
                      }}
                    >
                      {pkg.length}
                    </td>
                    <td
                      style={{
                        padding: "16px",
                        color: "#1e293b",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      {pkg.budget}
                    </td>
                    <td
                      style={{
                        padding: "16px",
                        color: "#64748b",
                        fontSize: "14px",
                      }}
                    >
                      {pkg.contractor}
                    </td>
                    <td style={{ padding: "16px" }}>
                      <span
                        style={{
                          padding: "4px 12px",
                          borderRadius: "12px",
                          fontSize: "12px",
                          fontWeight: "600",
                          background:
                            pkg.status === "Ongoing"
                              ? "#dbeafe"
                              : pkg.status === "Completed"
                                ? "#d1fae5"
                                : "#fef3c7",
                          color:
                            pkg.status === "Ongoing"
                              ? "#1e40af"
                              : pkg.status === "Completed"
                                ? "#065f46"
                                : "#92400e",
                        }}
                      >
                        {pkg.status}
                      </span>
                    </td>
                    <td style={{ padding: "16px" }}>
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
                            background: "#e2e8f0",
                            borderRadius: "4px",
                            overflow: "hidden",
                            minWidth: "60px",
                          }}
                        >
                          <div
                            style={{
                              width: `${pkg.progress}%`,
                              height: "100%",
                              background:
                                pkg.progress === 100
                                  ? "#10b981"
                                  : pkg.progress > 50
                                    ? "#3b82f6"
                                    : "#f59e0b",
                              borderRadius: "4px",
                            }}
                          />
                        </div>
                        <span
                          style={{
                            fontSize: "14px",
                            fontWeight: "600",
                            color: "#1e293b",
                            minWidth: "40px",
                          }}
                        >
                          {pkg.progress}%
                        </span>
                      </div>
                    </td>
                    <td style={{ padding: "16px" }}>
                      <div style={{ display: "flex", gap: "8px" }}>
                        <button
                          onClick={() => {
                            setSelectedTender(pkg);
                            setIsViewTenderDetailsOpen(true);
                          }}
                          style={{
                            padding: "6px 12px",
                            background: "#64748b",
                            color: "white",
                            border: "none",
                            borderRadius: "6px",
                            fontSize: "13px",
                            fontWeight: "600",
                            cursor: "pointer",
                          }}
                        >
                          View
                        </button>
                        {pkg.contractor === "Not Assigned" &&
                          role === "PIU" && (
                            <button
                              onClick={() => {
                                setSelectedTender(pkg);
                                setIsAssignContractorOpen(true);
                              }}
                              style={{
                                padding: "6px 12px",
                                background: "#3b82f6",
                                color: "white",
                                border: "none",
                                borderRadius: "6px",
                                fontSize: "13px",
                                fontWeight: "600",
                                cursor: "pointer",
                              }}
                            >
                              Assign
                            </button>
                          )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Create Project Modal (PMU) */}
      <Modal
        isOpen={isCreateProjectOpen}
        onClose={() => setIsCreateProjectOpen(false)}
        title="Create New Project"
        width="800px"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          <div style={{ gridColumn: "1 / -1" }}>
            <FormField
              label="Project Name"
              placeholder="e.g., Indore-Bhopal Corridor"
              required
            />
          </div>
          <FormField label="Project ID" placeholder="e.g., NH-06" required />
          <FormField label="NH Number" placeholder="e.g., NH-47" required />
          <FormField
            label="Total Length (km)"
            type="number"
            placeholder="e.g., 125"
            required
          />
          <FormField
            label="Sanctioned Cost (₹ Cr)"
            type="number"
            placeholder="e.g., 8500"
            required
          />
        </div>

        <FormField
          label="Assign to PIU"
          type="select"
          options={["PIU-Central", "PIU-East", "PIU-West", "PIU-North"]}
          required
        />

        <div style={{ marginTop: "20px" }}>
          <h4
            style={{ fontSize: "14px", color: "#1e293b", marginBottom: "12px" }}
          >
            Project Location
          </h4>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
          >
            <FormField
              label="Start Chainage"
              placeholder="e.g., 0+000"
              required
            />
            <FormField
              label="End Chainage"
              placeholder="e.g., 125+000"
              required
            />
            <FormField label="District" placeholder="e.g., Indore" required />
            <FormField label="State" value="Madhya Pradesh" />
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <h4
            style={{ fontSize: "14px", color: "#1e293b", marginBottom: "12px" }}
          >
            Project Timeline
          </h4>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
          >
            <FormField label="Start Date" type="date" required />
            <FormField label="Completion Date" type="date" required />
          </div>
        </div>

        <FormField label="Project Description" type="textarea" rows={3} />
        <FormField label="Upload Project DPR" type="file" />

        <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
          <button
            onClick={handleCreateProject}
            style={{
              flex: 1,
              padding: "12px",
              background: "#10b981",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Create Project
          </button>
          <button
            onClick={() => setIsCreateProjectOpen(false)}
            style={{
              flex: 1,
              padding: "12px",
              background: "#e2e8f0",
              color: "#64748b",
              border: "none",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
        </div>
      </Modal>

      {/* Create Tender Modal */}
      <Modal
        isOpen={isCreateTenderOpen}
        onClose={() => setIsCreateTenderOpen(false)}
        title="Create New Tender"
        width="800px"
      >
        <div
          style={{
            background: "#f8fafc",
            padding: "16px",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{ fontSize: "12px", color: "#64748b", marginBottom: "4px" }}
          >
            SELECT PROJECT
          </div>
          <FormField
            label=""
            type="select"
            options={[
              "NH-01 - Indore-Bhopal Corridor",
              "NH-02 - Jabalpur-Rewa Highway",
              "NH-04 - Ujjain-Ratlam Section",
              "NH-05 - Sagar Ring Road",
            ]}
            required
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          <FormField label="Tender ID" placeholder="e.g., PKG-01-F" required />
          <FormField
            label="Tender Name"
            placeholder="e.g., Toll Plaza & Facilities"
            required
          />
        </div>

        <div style={{ marginTop: "20px" }}>
          <h4
            style={{ fontSize: "14px", color: "#1e293b", marginBottom: "12px" }}
          >
            Tender Scope
          </h4>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
          >
            <FormField
              label="Start Chainage"
              placeholder="e.g., 45+000"
              required
            />
            <FormField
              label="End Chainage"
              placeholder="e.g., 65+000"
              required
            />
            <FormField
              label="Tender Length (km)"
              type="number"
              placeholder="e.g., 20"
              required
            />
            <FormField
              label="Tender Budget (₹ Cr)"
              type="number"
              placeholder="e.g., 1000"
              required
            />
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <h4
            style={{ fontSize: "14px", color: "#1e293b", marginBottom: "12px" }}
          >
            Work Components
          </h4>
          <FormField
            label="Primary Work Type"
            type="select"
            options={[
              "Complete Highway Construction",
              "Earthwork & Pavement",
              "Bridges & Structures",
              "Service Roads & Interchanges",
              "Safety & Road Furniture",
              "Toll Plaza & Facilities",
            ]}
            required
          />
          <FormField
            label="Scope of Work"
            type="textarea"
            rows={3}
            placeholder="Detailed description of work to be executed..."
            required
          />
        </div>

        <div style={{ marginTop: "20px" }}>
          <h4
            style={{ fontSize: "14px", color: "#1e293b", marginBottom: "12px" }}
          >
            Tender Timeline
          </h4>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
          >
            <FormField label="Tender Float Date" type="date" />
            <FormField label="Estimated Start Date" type="date" required />
            <FormField label="Estimated Completion Date" type="date" required />
            <FormField
              label="Contract Period (Months)"
              type="number"
              placeholder="e.g., 24"
            />
          </div>
        </div>

        <FormField label="Upload Tender Documents" type="file" />
        <FormField label="Remarks" type="textarea" rows={2} />

        <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
          <button
            onClick={handleCreateTender}
            style={{
              flex: 1,
              padding: "12px",
              background: "#10b981",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Create Tender
          </button>
          <button
            onClick={() => setIsCreateTenderOpen(false)}
            style={{
              flex: 1,
              padding: "12px",
              background: "#e2e8f0",
              color: "#64748b",
              border: "none",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
        </div>
      </Modal>

      {/* Assign Contractor to Tender Modal (PIU) */}
      <Modal
        isOpen={isAssignContractorOpen}
        onClose={() => {
          setIsAssignContractorOpen(false);
          setSelectedTender(null);
        }}
        title="Assign Contractor to Tender"
        width="700px"
      >
        {selectedTender && (
          <>
            <div
              style={{
                background: "#f8fafc",
                padding: "16px",
                borderRadius: "8px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  color: "#64748b",
                  marginBottom: "4px",
                }}
              >
                Tender
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#1e293b",
                }}
              >
                {selectedTender.TenderId} - {selectedTender.TenderName}
              </div>
              <div
                style={{ fontSize: "14px", color: "#64748b", marginTop: "8px" }}
              >
                Length: {selectedTender.length} • Budget:{" "}
                {selectedTender.budget}
              </div>
            </div>

            <FormField
              label="Select Contractor"
              type="select"
              options={[
                "ABC Constructions Pvt Ltd",
                "XYZ Builders & Developers",
                "PQR Infrastructure Ltd",
                "LMN Contractors",
                "RST Engineering",
              ]}
              required
            />
            <FormField
              label="Contract Value (₹ Cr)"
              type="number"
              placeholder="e.g., 1100"
              required
            />
            <FormField label="Contract Start Date" type="date" required />
            <FormField label="Contract End Date" type="date" required />
            <FormField
              label="Work Order Number"
              placeholder="e.g., WO-2024-160"
              required
            />
            <FormField label="Work Order Date" type="date" required />

            <div style={{ marginTop: "20px" }}>
              <h4
                style={{
                  fontSize: "14px",
                  color: "#1e293b",
                  marginBottom: "12px",
                }}
              >
                Assign Engineers
              </h4>
              <FormField
                label="Assistant Engineer (AE)"
                type="select"
                options={[
                  "AE - Rajesh Kumar",
                  "AE - Priya Sharma",
                  "AE - Amit Verma",
                ]}
                required
              />
              <FormField
                label="Junior Engineer (JE)"
                type="select"
                options={[
                  "JE - Sunil Patel",
                  "JE - Anjali Singh",
                  "JE - Vikram Rao",
                ]}
                required
              />
              <FormField
                label="Authority Engineer"
                type="select"
                options={["Auth Eng - S.K. Mishra", "Auth Eng - R.P. Gupta"]}
                required
              />
            </div>

            <FormField label="Upload Contract Agreement" type="file" required />
            <FormField label="Remarks" type="textarea" rows={2} />

            <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
              <button
                onClick={handleAssignContractor}
                style={{
                  flex: 1,
                  padding: "12px",
                  background: "#10b981",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Assign Contractor
              </button>
              <button
                onClick={() => {
                  setIsAssignContractorOpen(false);
                  setSelectedTender(null);
                }}
                style={{
                  flex: 1,
                  padding: "12px",
                  background: "#e2e8f0",
                  color: "#64748b",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </Modal>

      {/* View Project Details Modal */}
      <Modal
        isOpen={isViewDetailsOpen}
        onClose={() => {
          setIsViewDetailsOpen(false);
          setSelectedProject(null);
        }}
        title="Project Details"
        width="900px"
      >
        {selectedProject && (
          <>
            <div
              style={{
                background: "#f8fafc",
                padding: "20px",
                borderRadius: "8px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#64748b",
                      marginBottom: "4px",
                    }}
                  >
                    Project ID
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#1e293b",
                    }}
                  >
                    {selectedProject.id}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#64748b",
                      marginBottom: "4px",
                    }}
                  >
                    Status
                  </div>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "4px 12px",
                      borderRadius: "12px",
                      fontSize: "12px",
                      fontWeight: "600",
                      background:
                        selectedProject.status === "Completed"
                          ? "#d1fae5"
                          : selectedProject.status === "Ongoing"
                            ? "#dbeafe"
                            : "#fef3c7",
                      color:
                        selectedProject.status === "Completed"
                          ? "#065f46"
                          : selectedProject.status === "Ongoing"
                            ? "#1e40af"
                            : "#92400e",
                    }}
                  >
                    {selectedProject.status}
                  </span>
                </div>
                <div style={{ gridColumn: "1 / -1" }}>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#64748b",
                      marginBottom: "4px",
                    }}
                  >
                    Project Name
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#1e293b",
                    }}
                  >
                    {selectedProject.name}
                  </div>
                </div>
                {role === "PMU" && "piu" in selectedProject && (
                  <div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#64748b",
                        marginBottom: "4px",
                      }}
                    >
                      Assigned PIU
                    </div>
                    <div style={{ fontSize: "14px", color: "#1e293b" }}>
                      {selectedProject.piu}
                    </div>
                  </div>
                )}
                <div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#64748b",
                      marginBottom: "4px",
                    }}
                  >
                    Total Tenders
                  </div>
                  <div
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "#3b82f6",
                    }}
                  >
                    {selectedProject.Tenders}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#64748b",
                      marginBottom: "4px",
                    }}
                  >
                    Budget
                  </div>
                  <div
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "#1e293b",
                    }}
                  >
                    {selectedProject.budget}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#64748b",
                      marginBottom: "4px",
                    }}
                  >
                    Progress
                  </div>
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
                        background: "#e2e8f0",
                        borderRadius: "4px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: `${selectedProject.progress}%`,
                          height: "100%",
                          background:
                            selectedProject.progress === 100
                              ? "#10b981"
                              : selectedProject.progress > 50
                                ? "#3b82f6"
                                : "#f59e0b",
                          borderRadius: "4px",
                        }}
                      />
                    </div>
                    <span
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#1e293b",
                      }}
                    >
                      {selectedProject.progress}%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tender Breakdown */}
            <div style={{ marginBottom: "20px" }}>
              <h4
                style={{
                  fontSize: "14px",
                  color: "#1e293b",
                  marginBottom: "12px",
                }}
              >
                Tender Breakdown
              </h4>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {TendersData.filter(
                  (pkg) => pkg.projectId === selectedProject.id,
                ).map((pkg, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: "16px",
                      border: "1px solid #e2e8f0",
                      borderRadius: "8px",
                      display: "grid",
                      gridTemplateColumns: "2fr 1fr 1fr 1fr 100px",
                      gap: "16px",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#1e293b",
                          marginBottom: "4px",
                        }}
                      >
                        {pkg.TenderId}
                      </div>
                      <div style={{ fontSize: "13px", color: "#64748b" }}>
                        {pkg.TenderName}
                      </div>
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "12px",
                          color: "#64748b",
                          marginBottom: "2px",
                        }}
                      >
                        Length
                      </div>
                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#1e293b",
                        }}
                      >
                        {pkg.length}
                      </div>
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "12px",
                          color: "#64748b",
                          marginBottom: "2px",
                        }}
                      >
                        Budget
                      </div>
                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#1e293b",
                        }}
                      >
                        {pkg.budget}
                      </div>
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "12px",
                          color: "#64748b",
                          marginBottom: "4px",
                        }}
                      >
                        Progress
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <div
                          style={{
                            flex: 1,
                            height: "6px",
                            background: "#e2e8f0",
                            borderRadius: "3px",
                            overflow: "hidden",
                          }}
                        >
                          <div
                            style={{
                              width: `${pkg.progress}%`,
                              height: "100%",
                              background:
                                pkg.progress === 100 ? "#10b981" : "#3b82f6",
                              borderRadius: "3px",
                            }}
                          />
                        </div>
                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: "600",
                            color: "#64748b",
                          }}
                        >
                          {pkg.progress}%
                        </span>
                      </div>
                    </div>
                    <span
                      style={{
                        padding: "4px 8px",
                        borderRadius: "8px",
                        fontSize: "11px",
                        fontWeight: "600",
                        textAlign: "center",
                        background:
                          pkg.status === "Ongoing"
                            ? "#dbeafe"
                            : pkg.status === "Completed"
                              ? "#d1fae5"
                              : "#fef3c7",
                        color:
                          pkg.status === "Ongoing"
                            ? "#1e40af"
                            : pkg.status === "Completed"
                              ? "#065f46"
                              : "#92400e",
                      }}
                    >
                      {pkg.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setIsViewDetailsOpen(false);
                setSelectedProject(null);
              }}
              style={{
                width: "100%",
                padding: "12px",
                background: "#e2e8f0",
                color: "#64748b",
                border: "none",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </>
        )}
      </Modal>

      {/* View Tender Details Modal */}
      <Modal
        isOpen={isViewTenderDetailsOpen}
        onClose={() => {
          setIsViewTenderDetailsOpen(false);
          setSelectedTender(null);
        }}
        title="Tender Details"
        width="800px"
      >
        {selectedTender && (
          <>
            <div
              style={{
                background: "#f8fafc",
                padding: "20px",
                borderRadius: "8px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                }}
              >
                <div style={{ gridColumn: "1 / -1" }}>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#64748b",
                      marginBottom: "4px",
                    }}
                  >
                    Tender ID
                  </div>
                  <div
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "#1e293b",
                    }}
                  >
                    {selectedTender.TenderId}
                  </div>
                </div>
                <div style={{ gridColumn: "1 / -1" }}>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#64748b",
                      marginBottom: "4px",
                    }}
                  >
                    Tender Name
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#1e293b",
                    }}
                  >
                    {selectedTender.TenderName}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#64748b",
                      marginBottom: "4px",
                    }}
                  >
                    Project
                  </div>
                  <div style={{ fontSize: "14px", color: "#1e293b" }}>
                    {selectedTender.projectId}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#64748b",
                      marginBottom: "4px",
                    }}
                  >
                    Status
                  </div>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "4px 12px",
                      borderRadius: "12px",
                      fontSize: "12px",
                      fontWeight: "600",
                      background:
                        selectedTender.status === "Ongoing"
                          ? "#dbeafe"
                          : selectedTender.status === "Completed"
                            ? "#d1fae5"
                            : "#fef3c7",
                      color:
                        selectedTender.status === "Ongoing"
                          ? "#1e40af"
                          : selectedTender.status === "Completed"
                            ? "#065f46"
                            : "#92400e",
                    }}
                  >
                    {selectedTender.status}
                  </span>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#64748b",
                      marginBottom: "4px",
                    }}
                  >
                    Chainage
                  </div>
                  <div style={{ fontSize: "14px", color: "#1e293b" }}>
                    {selectedTender.startChainage} to{" "}
                    {selectedTender.endChainage}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#64748b",
                      marginBottom: "4px",
                    }}
                  >
                    Length
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#1e293b",
                    }}
                  >
                    {selectedTender.length}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#64748b",
                      marginBottom: "4px",
                    }}
                  >
                    Tender Budget
                  </div>
                  <div
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "#1e293b",
                    }}
                  >
                    {selectedTender.budget}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#64748b",
                      marginBottom: "4px",
                    }}
                  >
                    Contractor
                  </div>
                  <div style={{ fontSize: "14px", color: "#1e293b" }}>
                    {selectedTender.contractor}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#64748b",
                      marginBottom: "4px",
                    }}
                  >
                    Work Order No.
                  </div>
                  <div style={{ fontSize: "14px", color: "#1e293b" }}>
                    {selectedTender.workOrderNo}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#64748b",
                      marginBottom: "4px",
                    }}
                  >
                    Work Order Date
                  </div>
                  <div style={{ fontSize: "14px", color: "#1e293b" }}>
                    {selectedTender.workOrderDate}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#64748b",
                      marginBottom: "4px",
                    }}
                  >
                    Completion Date
                  </div>
                  <div style={{ fontSize: "14px", color: "#1e293b" }}>
                    {selectedTender.completionDate}
                  </div>
                </div>
                <div style={{ gridColumn: "1 / -1" }}>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#64748b",
                      marginBottom: "4px",
                    }}
                  >
                    Progress
                  </div>
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
                        height: "12px",
                        background: "#e2e8f0",
                        borderRadius: "6px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: `${selectedTender.progress}%`,
                          height: "100%",
                          background:
                            selectedTender.progress === 100
                              ? "#10b981"
                              : selectedTender.progress > 50
                                ? "#3b82f6"
                                : "#f59e0b",
                          borderRadius: "6px",
                        }}
                      />
                    </div>
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: "700",
                        color: "#1e293b",
                        minWidth: "50px",
                      }}
                    >
                      {selectedTender.progress}%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setIsViewTenderDetailsOpen(false);
                setselectedTender(null);
              }}
              style={{
                width: "100%",
                padding: "12px",
                background: "#e2e8f0",
                color: "#64748b",
                border: "none",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </>
        )}
      </Modal>
    </div>
  );
}
