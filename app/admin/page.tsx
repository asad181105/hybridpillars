"use client";

import { useState, useEffect } from "react";
import { storage, FormSubmission } from "@/lib/storage";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  Mail, 
  Phone, 
  Building2, 
  MessageSquare, 
  Clock, 
  Trash2, 
  CheckCircle, 
  XCircle,
  TrendingUp,
  Users,
  FileText,
  Filter
} from "lucide-react";
import { motion } from "framer-motion";

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [filter, setFilter] = useState<'all' | 'new' | 'contacted' | 'qualified' | 'converted'>('all');
  const [typeFilter, setTypeFilter] = useState<'all' | 'contact' | 'get-in-touch'>('all');

  useEffect(() => {
    loadSubmissions();
    // Refresh every 5 seconds to catch new submissions
    const interval = setInterval(loadSubmissions, 5000);
    return () => clearInterval(interval);
  }, []);

  const loadSubmissions = () => {
    const all = storage.getAll();
    setSubmissions(all.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()));
  };

  const handleStatusChange = (id: string, status: FormSubmission['status']) => {
    storage.updateStatus(id, status);
    loadSubmissions();
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this submission?')) {
      storage.delete(id);
      loadSubmissions();
    }
  };

  const filteredSubmissions = submissions.filter(sub => {
    const statusMatch = filter === 'all' || sub.status === filter;
    const typeMatch = typeFilter === 'all' || sub.type === typeFilter;
    return statusMatch && typeMatch;
  });

  const stats = {
    total: submissions.length,
    new: submissions.filter(s => s.status === 'new').length,
    contacted: submissions.filter(s => s.status === 'contacted').length,
    qualified: submissions.filter(s => s.status === 'qualified').length,
    converted: submissions.filter(s => s.status === 'converted').length,
    contact: submissions.filter(s => s.type === 'contact').length,
    getInTouch: submissions.filter(s => s.type === 'get-in-touch').length,
  };

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'new': return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      case 'contacted': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      case 'qualified': return 'bg-purple-500/20 text-purple-400 border-purple-500/50';
      case 'converted': return 'bg-green-500/20 text-green-400 border-green-500/50';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#020212] to-black text-white">
      <Navbar variant="static" />
      
      <div className="container mx-auto px-4 py-12 pt-24">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
          <p className="text-gray-400">Manage queries, sales, and leads</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">Total Submissions</span>
              <FileText className="w-5 h-5 text-red-400" />
            </div>
            <p className="text-3xl font-bold">{stats.total}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">New Leads</span>
              <Users className="w-5 h-5 text-blue-400" />
            </div>
            <p className="text-3xl font-bold text-blue-400">{stats.new}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">Qualified</span>
              <TrendingUp className="w-5 h-5 text-purple-400" />
            </div>
            <p className="text-3xl font-bold text-purple-400">{stats.qualified}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">Converted</span>
              <CheckCircle className="w-5 h-5 text-green-400" />
            </div>
            <p className="text-3xl font-bold text-green-400">{stats.converted}</p>
          </motion.div>
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <span className="text-sm text-gray-400">Status:</span>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as any)}
              className="px-4 py-2 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:border-red-500"
            >
              <option value="all">All</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="qualified">Qualified</option>
              <option value="converted">Converted</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">Type:</span>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value as any)}
              className="px-4 py-2 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:border-red-500"
            >
              <option value="all">All</option>
              <option value="contact">Contact</option>
              <option value="get-in-touch">Get in Touch</option>
            </select>
          </div>

          <div className="ml-auto text-sm text-gray-400">
            Showing {filteredSubmissions.length} of {stats.total} submissions
          </div>
        </div>

        {/* Submissions List */}
        <div className="space-y-4">
          {filteredSubmissions.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <FileText className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p>No submissions found</p>
            </div>
          ) : (
            filteredSubmissions.map((submission, index) => (
              <motion.div
                key={submission.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm hover:border-white/20 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{submission.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Mail className="w-4 h-4" />
                            <span>{submission.email}</span>
                          </div>
                          {submission.company && (
                            <div className="flex items-center gap-1">
                              <Building2 className="w-4 h-4" />
                              <span>{submission.company}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{new Date(submission.timestamp).toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(submission.status)}`}>
                          {submission.status || 'new'}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-500/20 text-red-400 border border-red-500/50">
                          {submission.type}
                        </span>
                      </div>
                    </div>

                    {(submission.message || submission.topic) && (
                      <div className="mb-4 p-4 rounded-lg bg-white/5 border border-white/10">
                        <div className="flex items-start gap-2">
                          <MessageSquare className="w-5 h-5 text-gray-400 mt-0.5" />
                          <p className="text-gray-300 flex-1">
                            {submission.message || submission.topic}
                          </p>
                        </div>
                      </div>
                    )}

                    {submission.urgency && (
                      <div className="text-sm text-gray-400">
                        <span className="font-semibold">Urgency:</span> {submission.urgency}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-2 md:min-w-[200px]">
                    <div className="flex gap-2">
                      <select
                        value={submission.status || 'new'}
                        onChange={(e) => handleStatusChange(submission.id, e.target.value as FormSubmission['status'])}
                        className="flex-1 px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-red-500"
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="qualified">Qualified</option>
                        <option value="converted">Converted</option>
                      </select>
                      <button
                        onClick={() => handleDelete(submission.id)}
                        className="px-3 py-2 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400 hover:bg-red-500/30 transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <a
                      href={`mailto:${submission.email}`}
                      className="w-full px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-sm font-semibold text-center transition-colors"
                    >
                      Send Email
                    </a>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}

