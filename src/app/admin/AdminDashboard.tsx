"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { Trash2, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, X, LogOut } from "lucide-react";

// ── Types ────────────────────────────────────────────────────────────────────

interface Enquiry {
  enq_id: number;
  full_name: string;
  country_code: string;
  phone_number: string;
  email_address: string;
  service_interested: string;
  project_type: string;
  project_location: string;
  project_timeline: string;
  message: string;
  enquiry_status: "pending" | "handled";
  enquiry_time: string;
}

interface ApiResponse {
  success: boolean;
  enquiries: Enquiry[];
  total: number;
  page: number;
  totalPages: number;
}

// ── Filter option lists (must match the enquiry form exactly) ────────────────

const SERVICE_OPTIONS = [
  "Construction",
  "Interior Designing & Execution",
  "Swimming Pools",
  "Landscaping",
  "Water Features",
  "Water Wellness",
  "Real Estate & Property Consultancy",
  "AMC & Facility Management",
];

const PROJECT_TYPE_OPTIONS = [
  "Luxury Villa",
  "Residential Development",
  "Commercial Project",
  "Renovation / Upgrade",
  "Wellness Space",
  "Outdoor / Landscape Project",
  "Property Investment",
  "Other",
];

const TIMELINE_OPTIONS = [
  "Immediate",
  "Within 1 Month",
  "Within 3 Months",
  "Within 6 Months",
  "Flexible",
];

// ── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

// ── Main component ───────────────────────────────────────────────────────────

export default function AdminDashboard() {
  // Data state
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  // Filter & sort state
  const [search, setSearch] = useState("");
  const [service, setService] = useState("");
  const [projectType, setProjectType] = useState("");
  const [timeline, setTimeline] = useState("");
  const [status, setStatus] = useState("");
  const [sortBy, setSortBy] = useState("created_at");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [page, setPage] = useState(1);

  const router = useRouter();

  // UI state
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null);
  const [togglingId, setTogglingId] = useState<number | null>(null);

  // Debounce search — wait 400ms after typing before fetching
  const searchDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    if (searchDebounceRef.current) clearTimeout(searchDebounceRef.current);
    searchDebounceRef.current = setTimeout(() => setDebouncedSearch(search), 400);
    return () => {
      if (searchDebounceRef.current) clearTimeout(searchDebounceRef.current);
    };
  }, [search]);

  // ── Fetch enquiries ────────────────────────────────────────────────────────

  const fetchEnquiries = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        search: debouncedSearch,
        service,
        projectType,
        timeline,
        status,
        sortBy,
        sortDir,
        page: String(page),
      });
      const res = await fetch(`/api/admin/enquiries?${params}`);
      const data: ApiResponse = await res.json();
      if (data.success) {
        setEnquiries(data.enquiries);
        setTotal(data.total);
        setTotalPages(data.totalPages);
      }
    } catch (err) {
      console.error("Failed to fetch enquiries:", err);
    } finally {
      setLoading(false);
    }
  }, [debouncedSearch, service, projectType, timeline, status, sortBy, sortDir, page]);

  // Re-fetch whenever any filter/sort/page changes
  useEffect(() => {
    fetchEnquiries();
  }, [fetchEnquiries]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setPage(1);
  }, [debouncedSearch, service, projectType, timeline, status, sortBy, sortDir]);

  // ── Stats derived from total + current page data ───────────────────────────

  const pendingCount = enquiries.filter((e) => e.enquiry_status === "pending").length;
  const handledCount = enquiries.filter((e) => e.enquiry_status === "handled").length;

  // ── Actions ────────────────────────────────────────────────────────────────

  async function toggleStatus(enquiry: Enquiry) {
    const newStatus = enquiry.enquiry_status === "pending" ? "handled" : "pending";
    setTogglingId(enquiry.enq_id);
    try {
      await fetch(`/api/admin/enquiries/${enquiry.enq_id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      setEnquiries((prev) =>
        prev.map((e) => (e.enq_id === enquiry.enq_id ? { ...e, enquiry_status: newStatus } : e))
      );
    } catch (err) {
      console.error("Failed to update status:", err);
    } finally {
      setTogglingId(null);
    }
  }

  async function deleteEnquiry(id: number) {
    try {
      await fetch(`/api/admin/enquiries/${id}`, { method: "DELETE" });
      setEnquiries((prev) => prev.filter((e) => e.enq_id !== id));
      setTotal((prev) => prev - 1);
      setConfirmDeleteId(null);
    } catch (err) {
      console.error("Failed to delete enquiry:", err);
    }
  }

  async function logout() {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/admin/login");
  }

  function clearFilters() {
    setSearch("");
    setService("");
    setProjectType("");
    setTimeline("");
    setStatus("");
    setSortBy("created_at");
    setSortDir("desc");
    setPage(1);
  }

  const hasActiveFilters = search || service || projectType || timeline || status;

  // ── Sort toggle helper ─────────────────────────────────────────────────────

  function handleSort(col: string) {
    if (sortBy === col) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(col);
      setSortDir("desc");
    }
  }

  function SortIcon({ col }: { col: string }) {
    if (sortBy !== col) return <ChevronDown size={12} className="opacity-30" />;
    return sortDir === "asc"
      ? <ChevronUp size={12} className="text-gold-400" />
      : <ChevronDown size={12} className="text-gold-400" />;
  }

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-brand-950 text-cream-100">

      {/* ── Top bar ── */}
      <header className="border-b border-brand-800/60 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/white_logo.png" alt="Vivente" className="h-7 w-auto opacity-90" />
          <span className="text-gold-400/60 text-lg">|</span>
          <span className="text-cream-200/50 text-sm font-medium tracking-widest uppercase">Admin</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-cream-200/30 text-xs">Enquiries Dashboard</span>
          <button
            onClick={logout}
            className="flex items-center gap-1.5 text-xs text-cream-200/30 hover:text-red-400 transition-colors"
          >
            <LogOut size={13} /> Logout
          </button>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 space-y-6">

        {/* ── Stats row ── */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Total (this page)", value: enquiries.length, color: "text-cream-100" },
            { label: "Pending", value: pendingCount, color: "text-amber-400" },
            { label: "Completed", value: handledCount, color: "text-emerald-400" },
          ].map((s) => (
            <div key={s.label} className="bg-brand-900/50 border border-brand-700/30 rounded-2xl px-5 py-4">
              <p className="text-cream-200/40 text-xs uppercase tracking-widest mb-1">{s.label}</p>
              <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* ── Search + filters ── */}
        <div className="bg-brand-900/40 border border-brand-700/30 rounded-2xl p-4 space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search input */}
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search by name, email, phone, location, message…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-brand-950/60 border border-brand-700/40 focus:border-gold-500/50 rounded-xl px-4 py-2.5 text-sm text-cream-100 placeholder:text-cream-200/25 outline-none transition-colors"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-cream-200/30 hover:text-cream-200/70">
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Clear button */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1.5 text-xs text-gold-400/70 hover:text-gold-400 border border-gold-500/20 hover:border-gold-500/40 rounded-xl px-4 py-2.5 transition-colors whitespace-nowrap"
              >
                <X size={12} /> Clear all
              </button>
            )}
          </div>

          {/* Filter dropdowns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Service", value: service, setter: setService, options: SERVICE_OPTIONS },
              { label: "Project Type", value: projectType, setter: setProjectType, options: PROJECT_TYPE_OPTIONS },
              { label: "Timeline", value: timeline, setter: setTimeline, options: TIMELINE_OPTIONS },
              { label: "Status", value: status, setter: setStatus, options: ["pending", "handled"], labels: ["Pending", "Completed"] },
            ].map((f) => (
              <select
                key={f.label}
                value={f.value}
                onChange={(e) => f.setter(e.target.value)}
                className="bg-brand-950/60 border border-brand-700/40 focus:border-gold-500/50 rounded-xl px-3 py-2.5 text-sm text-cream-100/80 outline-none transition-colors"
              >
                <option value="">All {f.label}s</option>
                {f.options.map((o, i) => (
                  <option key={o} value={o}>{"labels" in f ? f.labels![i] : o}</option>
                ))}
              </select>
            ))}
          </div>
        </div>

        {/* ── Table ── */}
        <div className="bg-brand-900/40 border border-brand-700/30 rounded-2xl overflow-hidden">

          {/* Total count line */}
          <div className="px-5 py-3 border-b border-brand-700/30 flex items-center justify-between">
            <span className="text-cream-200/40 text-xs">
              {loading ? "Loading…" : `${total} enquir${total === 1 ? "y" : "ies"} found`}
            </span>
          </div>

          {/* Desktop table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-brand-700/30 text-cream-200/40 text-xs uppercase tracking-wider">
                  {[
                    { label: "Name", col: "full_name" },
                    { label: "Service", col: "service_interested" },
                    { label: "Type", col: "project_type" },
                    { label: "Timeline", col: "project_timeline" },
                    { label: "Location", col: null },
                    { label: "Status", col: null },
                    { label: "Date", col: "created_at" },
                    { label: "", col: null },
                  ].map((h) => (
                    <th
                      key={h.label}
                      className={`px-4 py-3 text-left font-medium ${h.col ? "cursor-pointer select-none hover:text-cream-200/70" : ""}`}
                      onClick={() => h.col && handleSort(h.col)}
                    >
                      <span className="flex items-center gap-1">
                        {h.label}
                        {h.col && <SortIcon col={h.col} />}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={8} className="px-4 py-16 text-center text-cream-200/30 text-sm">
                      Loading enquiries…
                    </td>
                  </tr>
                ) : enquiries.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="px-4 py-16 text-center text-cream-200/30 text-sm">
                      No enquiries found.
                    </td>
                  </tr>
                ) : (
                  enquiries.map((e) => (
                    <React.Fragment key={e.enq_id}>
                      {/* Main row */}
                      <tr
                        key={e.enq_id}
                        onClick={() => setExpandedId(expandedId === e.enq_id ? null : e.enq_id)}
                        className="border-b border-brand-800/40 hover:bg-brand-800/30 cursor-pointer transition-colors group"
                      >
                        <td className="px-4 py-3 font-medium text-cream-100/90 whitespace-nowrap">{e.full_name}</td>
                        <td className="px-4 py-3 text-cream-200/60 max-w-[160px] truncate">{e.service_interested}</td>
                        <td className="px-4 py-3 text-cream-200/50 max-w-[140px] truncate">{e.project_type}</td>
                        <td className="px-4 py-3 text-cream-200/50 whitespace-nowrap">{e.project_timeline}</td>
                        <td className="px-4 py-3 text-cream-200/50 max-w-[120px] truncate">{e.project_location || "—"}</td>

                        {/* Status badge — click to toggle */}
                        <td className="px-4 py-3" onClick={(ev) => ev.stopPropagation()}>
                          <button
                            onClick={() => toggleStatus(e)}
                            disabled={togglingId === e.enq_id}
                            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                              e.enquiry_status === "handled"
                                ? "bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25 border border-emerald-500/20"
                                : "bg-amber-500/15 text-amber-400 hover:bg-amber-500/25 border border-amber-500/20"
                            } ${togglingId === e.enq_id ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                          >
                            {e.enquiry_status === "handled" ? "Completed" : "Pending"}
                          </button>
                        </td>

                        <td className="px-4 py-3 text-cream-200/40 whitespace-nowrap text-xs">{formatDate(e.enquiry_time)}</td>

                        {/* Delete — click to confirm, click again to delete */}
                        <td className="px-4 py-3" onClick={(ev) => ev.stopPropagation()}>
                          {confirmDeleteId === e.enq_id ? (
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => deleteEnquiry(e.enq_id)}
                                className="text-xs text-red-400 hover:text-red-300 font-semibold"
                              >
                                Confirm
                              </button>
                              <button
                                onClick={() => setConfirmDeleteId(null)}
                                className="text-xs text-cream-200/40 hover:text-cream-200/70"
                              >
                                Cancel
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => setConfirmDeleteId(e.enq_id)}
                              className="text-cream-200/20 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
                            >
                              <Trash2 size={15} />
                            </button>
                          )}
                        </td>
                      </tr>

                      {/* Expanded detail row */}
                      {expandedId === e.enq_id && (
                        <tr key={`${e.enq_id}-expanded`} className="bg-brand-950/60 border-b border-brand-700/30">
                          <td colSpan={8} className="px-6 py-5">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                              {[
                                { label: "Email", value: e.email_address },
                                { label: "Phone", value: `${e.country_code} ${e.phone_number}` },
                                { label: "Location", value: e.project_location || "—" },
                              ].map((field) => (
                                <div key={field.label}>
                                  <p className="text-xs text-cream-200/30 uppercase tracking-widest mb-1">{field.label}</p>
                                  <p className="text-sm text-cream-100/80">{field.value}</p>
                                </div>
                              ))}
                            </div>
                            <div>
                              <p className="text-xs text-cream-200/30 uppercase tracking-widest mb-2">Message</p>
                              <p className="text-sm text-cream-100/70 leading-relaxed whitespace-pre-wrap bg-brand-900/50 rounded-xl p-4 border border-brand-700/20">
                                {e.message}
                              </p>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── Pagination ── */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="flex items-center gap-1 px-4 py-2 rounded-xl border border-brand-700/40 text-cream-200/50 hover:text-cream-100 hover:border-gold-500/40 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-sm"
            >
              <ChevronLeft size={14} /> Prev
            </button>
            <span className="text-cream-200/40 text-sm">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="flex items-center gap-1 px-4 py-2 rounded-xl border border-brand-700/40 text-cream-200/50 hover:text-cream-100 hover:border-gold-500/40 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-sm"
            >
              Next <ChevronRight size={14} />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
