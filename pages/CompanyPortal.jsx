import React, { useState } from 'react';
import { Building2, Plus, Users, TrendingUp, Calendar, FileText, Eye, Edit, Trash2, Search } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { formatDate, formatCurrency, getDomainColor } from '../utils';

export default function CompanyPortal() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for company portal
  const companyStats = {
    totalInternships: 12,
    activeInternships: 8,
    totalApplications: 156,
    pendingApplications: 23,
    selectedCandidates: 45,
    averageRating: 4.2
  };

  const recentInternships = [
    {
      id: 1,
      title: "Full Stack Developer Intern",
      domain: "Full Stack Development",
      applications: 25,
      positions: 5,
      filled: 3,
      status: "Active",
      deadline: "2024-02-15",
      created: "2024-01-10"
    },
    {
      id: 2,
      title: "Data Science Intern",
      domain: "Data Science",
      applications: 18,
      positions: 3,
      filled: 2,
      status: "Active",
      deadline: "2024-01-30",
      created: "2024-01-05"
    },
    {
      id: 3,
      title: "Mobile App Developer",
      domain: "Mobile Development",
      applications: 32,
      positions: 4,
      filled: 4,
      status: "Closed",
      deadline: "2024-01-20",
      created: "2024-01-01"
    }
  ];

  const recentApplications = [
    {
      id: 1,
      student_name: "Rahul Sharma",
      internship_title: "Full Stack Developer Intern",
      application_date: "2024-01-20",
      status: "Under Review",
      match_score: 92,
      cgpa: 8.5,
      skills: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      student_name: "Priya Patel",
      internship_title: "Data Science Intern",
      application_date: "2024-01-19",
      status: "Shortlisted",
      match_score: 88,
      cgpa: 8.8,
      skills: ["Python", "Pandas", "Machine Learning"]
    },
    {
      id: 3,
      student_name: "Amit Kumar",
      internship_title: "Full Stack Developer Intern",
      application_date: "2024-01-18",
      status: "Applied",
      match_score: 85,
      cgpa: 8.2,
      skills: ["JavaScript", "React", "Express"]
    }
  ];

  const filteredInternships = recentInternships.filter(internship =>
    internship.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredApplications = recentApplications.filter(application =>
    application.student_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    application.internship_title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Building2 className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-slate-900">Company Portal</h1>
        </div>
        <p className="text-slate-600">Manage your internship postings and applications</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Total Internships</p>
              <p className="text-2xl font-bold text-slate-900">{companyStats.totalInternships}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Active Internships</p>
              <p className="text-2xl font-bold text-slate-900">{companyStats.activeInternships}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Total Applications</p>
              <p className="text-2xl font-bold text-slate-900">{companyStats.totalApplications}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Pending Review</p>
              <p className="text-2xl font-bold text-slate-900">{companyStats.pendingApplications}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 mb-8">
        <div className="border-b border-slate-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'overview'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('internships')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'internships'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              }`}
            >
              Internships
            </button>
            <button
              onClick={() => setActiveTab('applications')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'applications'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              }`}
            >
              Applications
            </button>
          </nav>
        </div>

        <div className="p-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">Recent Activity</h3>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Post New Internship
                </Button>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Recent Internships */}
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-medium text-slate-900 mb-4">Recent Internships</h4>
                  <div className="space-y-3">
                    {recentInternships.slice(0, 3).map(internship => (
                      <div key={internship.id} className="flex items-center justify-between p-3 bg-white rounded-lg">
                        <div>
                          <p className="font-medium text-slate-900 text-sm">{internship.title}</p>
                          <p className="text-slate-500 text-xs">{internship.applications} applications</p>
                        </div>
                        <Badge variant={internship.status === 'Active' ? 'success' : 'secondary'}>
                          {internship.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Applications */}
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-medium text-slate-900 mb-4">Recent Applications</h4>
                  <div className="space-y-3">
                    {recentApplications.slice(0, 3).map(application => (
                      <div key={application.id} className="flex items-center justify-between p-3 bg-white rounded-lg">
                        <div>
                          <p className="font-medium text-slate-900 text-sm">{application.student_name}</p>
                          <p className="text-slate-500 text-xs">{application.internship_title}</p>
                        </div>
                        <Badge className={getStatusColor(application.status)}>
                          {application.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Internships Tab */}
          {activeTab === 'internships' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <h3 className="text-lg font-semibold text-slate-900">Manage Internships</h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search internships..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Post New Internship
                </Button>
              </div>

              <div className="space-y-4">
                {filteredInternships.map(internship => (
                  <div key={internship.id} className="border border-slate-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-semibold text-slate-900 text-lg">{internship.title}</h4>
                        <div className="flex items-center gap-4 mt-2 text-sm text-slate-600">
                          <Badge variant={getDomainColor(internship.domain).split(' ')[0].replace('bg-', '')}>
                            {internship.domain}
                          </Badge>
                          <span>Created: {formatDate(internship.created)}</span>
                          <span>Deadline: {formatDate(internship.deadline)}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant={internship.status === 'Active' ? 'success' : 'secondary'}>
                          {internship.status}
                        </Badge>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="text-center p-3 bg-slate-50 rounded-lg">
                        <p className="font-semibold text-slate-900">{internship.applications}</p>
                        <p className="text-slate-600">Applications</p>
                      </div>
                      <div className="text-center p-3 bg-slate-50 rounded-lg">
                        <p className="font-semibold text-slate-900">{internship.filled}/{internship.positions}</p>
                        <p className="text-slate-600">Positions Filled</p>
                      </div>
                      <div className="text-center p-3 bg-slate-50 rounded-lg">
                        <p className="font-semibold text-slate-900">
                          {Math.round((internship.filled / internship.positions) * 100)}%
                        </p>
                        <p className="text-slate-600">Fill Rate</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Applications Tab */}
          {activeTab === 'applications' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <h3 className="text-lg font-semibold text-slate-900">Review Applications</h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search applications..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {filteredApplications.map(application => (
                  <div key={application.id} className="border border-slate-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                          <span className="font-semibold text-slate-600">
                            {application.student_name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 text-lg">{application.student_name}</h4>
                          <p className="text-slate-600">{application.internship_title}</p>
                          <div className="flex items-center gap-4 mt-1 text-sm text-slate-500">
                            <span>Applied: {formatDate(application.application_date)}</span>
                            <span>CGPA: {application.cgpa}</span>
                            <span>Match: {application.match_score}%</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge className={getStatusColor(application.status)}>
                          {application.status}
                        </Badge>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {application.skills.map(skill => (
                        <Badge key={skill} variant="secondary" size="sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
