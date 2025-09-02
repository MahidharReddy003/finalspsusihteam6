import React, { useState } from 'react';
import { FileText, Clock, CheckCircle, XCircle, AlertCircle, Eye, Download, Calendar } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { formatDate, getStatusColor } from '../utils';

export default function Applications() {
  const [selectedStatus, setSelectedStatus] = useState('all');

  // Mock data for applications
  const applications = [
    {
      id: 1,
      internship_title: "Full Stack Developer Intern",
      company_name: "TechCorp Solutions",
      company_logo: "https://via.placeholder.com/50",
      application_date: "2024-01-15",
      status: "Under Review",
      interview_date: "2024-01-25",
      interview_mode: "Online",
      cover_letter: "I am excited to apply for the Full Stack Developer Intern position...",
      match_score: 95,
      last_updated: "2024-01-20"
    },
    {
      id: 2,
      internship_title: "Data Science Intern",
      company_name: "DataViz Analytics",
      company_logo: "https://via.placeholder.com/50",
      application_date: "2024-01-10",
      status: "Shortlisted",
      interview_date: "2024-01-30",
      interview_mode: "In-person",
      cover_letter: "With my strong background in Python and machine learning...",
      match_score: 88,
      last_updated: "2024-01-18"
    },
    {
      id: 3,
      internship_title: "Mobile App Developer",
      company_name: "AppStudio",
      company_logo: "https://via.placeholder.com/50",
      application_date: "2024-01-05",
      status: "Selected",
      interview_date: "2024-01-20",
      interview_mode: "Online",
      cover_letter: "I have been passionate about mobile development...",
      match_score: 82,
      last_updated: "2024-01-22"
    },
    {
      id: 4,
      internship_title: "AI/ML Engineer Intern",
      company_name: "AI Innovations",
      company_logo: "https://via.placeholder.com/50",
      application_date: "2024-01-12",
      status: "Rejected",
      interview_date: null,
      interview_mode: null,
      cover_letter: "My experience with deep learning frameworks...",
      match_score: 78,
      rejection_reason: "Position filled by another candidate",
      last_updated: "2024-01-19"
    },
    {
      id: 5,
      internship_title: "Backend Developer Intern",
      company_name: "CloudTech Solutions",
      company_logo: "https://via.placeholder.com/50",
      application_date: "2024-01-08",
      status: "Interview Scheduled",
      interview_date: "2024-02-05",
      interview_mode: "Online",
      cover_letter: "I am particularly interested in backend development...",
      match_score: 85,
      last_updated: "2024-01-21"
    }
  ];

  const statuses = ['all', 'Applied', 'Under Review', 'Shortlisted', 'Interview Scheduled', 'Selected', 'Rejected', 'Withdrawn'];

  const filteredApplications = selectedStatus === 'all' 
    ? applications 
    : applications.filter(app => app.status === selectedStatus);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Selected':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'Rejected':
        return <XCircle className="w-5 h-5 text-red-600" />;
      case 'Interview Scheduled':
        return <Calendar className="w-5 h-5 text-blue-600" />;
      case 'Shortlisted':
        return <CheckCircle className="w-5 h-5 text-purple-600" />;
      case 'Under Review':
        return <Clock className="w-5 h-5 text-yellow-600" />;
      default:
        return <FileText className="w-5 h-5 text-slate-600" />;
    }
  };

  const getStatusCount = (status) => {
    if (status === 'all') return applications.length;
    return applications.filter(app => app.status === status).length;
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">My Applications</h1>
        <p className="text-slate-600">Track the status of your internship applications</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Total Applications</p>
              <p className="text-2xl font-bold text-slate-900">{applications.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Selected</p>
              <p className="text-2xl font-bold text-slate-900">
                {applications.filter(app => app.status === 'Selected').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">In Progress</p>
              <p className="text-2xl font-bold text-slate-900">
                {applications.filter(app => ['Applied', 'Under Review', 'Shortlisted', 'Interview Scheduled'].includes(app.status)).length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <XCircle className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Rejected</p>
              <p className="text-2xl font-bold text-slate-900">
                {applications.filter(app => app.status === 'Rejected').length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Status Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
        <div className="flex flex-wrap gap-3">
          {statuses.map(status => (
            <Button
              key={status}
              variant={selectedStatus === status ? 'default' : 'outline'}
              onClick={() => setSelectedStatus(status)}
            >
              {status === 'all' ? 'All' : status} ({getStatusCount(status)})
            </Button>
          ))}
        </div>
      </div>

      {/* Applications List */}
      <div className="space-y-6">
        {filteredApplications.map(application => (
          <div key={application.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <img 
                    src={application.company_logo} 
                    alt={application.company_name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-slate-900 text-lg">{application.internship_title}</h3>
                    <p className="text-slate-600">{application.company_name}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                      <span>Applied: {formatDate(application.application_date)}</span>
                      <span>Match Score: {application.match_score}%</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className={getStatusColor(application.status)}>
                    {application.status}
                  </Badge>
                  {getStatusIcon(application.status)}
                </div>
              </div>

              {/* Status-specific information */}
              {application.status === 'Interview Scheduled' && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-blue-900">Interview Scheduled</span>
                  </div>
                  <div className="text-sm text-blue-800">
                    <p>Date: {formatDate(application.interview_date)}</p>
                    <p>Mode: {application.interview_mode}</p>
                  </div>
                </div>
              )}

              {application.status === 'Rejected' && application.rejection_reason && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="w-5 h-5 text-red-600" />
                    <span className="font-semibold text-red-900">Application Rejected</span>
                  </div>
                  <p className="text-sm text-red-800">Reason: {application.rejection_reason}</p>
                </div>
              )}

              {application.status === 'Selected' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-green-900">Congratulations! You've been selected</span>
                  </div>
                  <p className="text-sm text-green-800">The company will contact you soon with further details.</p>
                </div>
              )}

              {/* Cover Letter Preview */}
              <div className="mb-4">
                <h4 className="font-medium text-slate-900 mb-2">Cover Letter Preview</h4>
                <p className="text-slate-600 text-sm line-clamp-2">
                  {application.cover_letter}
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <span>Last updated: {formatDate(application.last_updated)}</span>
                </div>
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      alert(`Viewing application details for ${application.internship_title} at ${application.company}`);
                      // Here you would typically navigate to application details page
                    }}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      alert(`Downloading application for ${application.internship_title}`);
                      // Here you would typically generate and download application PDF
                    }}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  {application.status === 'Applied' && (
                    <Button 
                      variant="destructive" 
                      size="sm"
                      onClick={() => {
                        if (window.confirm(`Are you sure you want to withdraw your application for ${application.internship_title}?`)) {
                          alert(`Application withdrawn for ${application.internship_title}`);
                          // Here you would typically make API call to withdraw application
                        }
                      }}
                    >
                      Withdraw
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredApplications.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-slate-900 mb-2">No applications found</h3>
          <p className="text-slate-600 mb-6">
            {selectedStatus === 'all' 
              ? "You haven't applied to any internships yet. Start browsing opportunities!"
              : `No applications with status "${selectedStatus}" found.`
            }
          </p>
          {selectedStatus === 'all' ? (
            <Button>
              Browse Internships
            </Button>
          ) : (
            <Button 
              variant="outline" 
              onClick={() => setSelectedStatus('all')}
            >
              View All Applications
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
