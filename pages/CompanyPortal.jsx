import React, { useState } from 'react';
import { Building2, Plus, Users, TrendingUp, Calendar, FileText, Eye, Edit, Trash2, Search, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { formatDate, formatCurrency, getDomainColor, getStatusColor } from '../utils';

export default function CompanyPortal() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [showNewInternshipModal, setShowNewInternshipModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [newInternshipForm, setNewInternshipForm] = useState({
    title: '',
    domain: 'Web Development',
    description: '',
    stipend: '',
    duration: ''
  });

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
      created: "2024-01-10",
      description: "Join our dynamic team as a Full Stack Developer Intern. You'll work on real-world projects using modern technologies like React, Node.js, and MongoDB.",
      requirements: ["React", "Node.js", "JavaScript", "MongoDB"],
      stipend: "₹25,000/month",
      location: "Remote",
      duration: "6 months"
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
      created: "2024-01-05",
      description: "Work on cutting-edge data science projects. Analyze large datasets and build machine learning models.",
      requirements: ["Python", "Pandas", "Machine Learning", "SQL"],
      stipend: "₹30,000/month",
      location: "Hybrid",
      duration: "4 months"
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
      created: "2024-01-01",
      description: "Develop mobile applications for iOS and Android platforms using React Native.",
      requirements: ["React Native", "JavaScript", "Mobile Development"],
      stipend: "₹28,000/month",
      location: "On-site",
      duration: "5 months"
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
      skills: ["React", "Node.js", "MongoDB"],
      email: "rahul.sharma@email.com",
      phone: "+91 98765 43210",
      university: "Delhi University",
      resume: "rahul_sharma_resume.pdf",
      cover_letter: "I am passionate about full-stack development and have worked on several projects using React and Node.js..."
    },
    {
      id: 2,
      student_name: "Priya Patel",
      internship_title: "Data Science Intern",
      application_date: "2024-01-19",
      status: "Shortlisted",
      match_score: 88,
      cgpa: 8.8,
      skills: ["Python", "Pandas", "Machine Learning"],
      email: "priya.patel@email.com",
      phone: "+91 98765 43211",
      university: "Mumbai University",
      resume: "priya_patel_resume.pdf",
      cover_letter: "I have a strong foundation in data science and have completed several ML projects..."
    },
    {
      id: 3,
      student_name: "Amit Kumar",
      internship_title: "Full Stack Developer Intern",
      application_date: "2024-01-18",
      status: "Applied",
      match_score: 85,
      cgpa: 8.2,
      skills: ["JavaScript", "React", "Express"],
      email: "amit.kumar@email.com",
      phone: "+91 98765 43212",
      university: "Bangalore University",
      resume: "amit_kumar_resume.pdf",
      cover_letter: "I am excited to apply for this position and contribute to your development team..."
    }
  ];

  const filteredInternships = recentInternships.filter(internship =>
    internship.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredApplications = recentApplications.filter(application =>
    application.student_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    application.internship_title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Button handlers
  const handleViewInternship = (internship) => {
    setSelectedInternship(internship);
    setShowViewModal(true);
  };

  const handleEditInternship = (internship) => {
    setSelectedInternship(internship);
    setShowEditModal(true);
  };

  const handleDeleteInternship = (internshipId) => {
    if (window.confirm('Are you sure you want to delete this internship?')) {
      // Here you would typically make an API call to delete the internship
      console.log('Deleting internship:', internshipId);
      alert('Internship deleted successfully!');
    }
  };

  const handleViewApplication = (application) => {
    setSelectedApplication(application);
    setShowViewModal(true);
  };

  const handleUpdateApplicationStatus = (applicationId, newStatus) => {
    // Here you would typically make an API call to update the status
    console.log('Updating application status:', applicationId, newStatus);
    alert(`Application status updated to ${newStatus}!`);
  };

  const handlePostNewInternship = () => {
    setShowNewInternshipModal(true);
  };

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
                <Button onClick={handlePostNewInternship}>
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
                <Button onClick={handlePostNewInternship}>
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
                          <Badge className={getDomainColor(internship.domain)}>
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
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleViewInternship(internship)}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleEditInternship(internship)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleDeleteInternship(internship.id)}
                            className="text-red-600 hover:text-red-700"
                          >
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
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleViewApplication(application)}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <select
                            value={application.status}
                            onChange={(e) => handleUpdateApplicationStatus(application.id, e.target.value)}
                            className="px-3 py-1 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          >
                            <option value="Applied">Applied</option>
                            <option value="Under Review">Under Review</option>
                            <option value="Shortlisted">Shortlisted</option>
                            <option value="Interview Scheduled">Interview Scheduled</option>
                            <option value="Selected">Selected</option>
                            <option value="Rejected">Rejected</option>
                          </select>
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

      {/* View Modal */}
      {showViewModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-900">
                {selectedInternship ? 'Internship Details' : 'Application Details'}
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setShowViewModal(false);
                  setSelectedInternship(null);
                  setSelectedApplication(null);
                }}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            {selectedInternship && (
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">{selectedInternship.title}</h4>
                  <Badge className={getDomainColor(selectedInternship.domain)}>
                    {selectedInternship.domain}
                  </Badge>
                </div>
                <div>
                  <h5 className="font-medium text-slate-900 mb-2">Description</h5>
                  <p className="text-slate-600">{selectedInternship.description}</p>
                </div>
                <div>
                  <h5 className="font-medium text-slate-900 mb-2">Requirements</h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedInternship.requirements.map(req => (
                      <Badge key={req} variant="secondary" size="sm">{req}</Badge>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-slate-600">Stipend</p>
                    <p className="font-medium">{selectedInternship.stipend}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Location</p>
                    <p className="font-medium">{selectedInternship.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Duration</p>
                    <p className="font-medium">{selectedInternship.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Deadline</p>
                    <p className="font-medium">{formatDate(selectedInternship.deadline)}</p>
                  </div>
                </div>
              </div>
            )}

            {selectedApplication && (
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">{selectedApplication.student_name}</h4>
                  <p className="text-slate-600">{selectedApplication.internship_title}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-slate-600">Email</p>
                    <p className="font-medium">{selectedApplication.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Phone</p>
                    <p className="font-medium">{selectedApplication.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">University</p>
                    <p className="font-medium">{selectedApplication.university}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">CGPA</p>
                    <p className="font-medium">{selectedApplication.cgpa}</p>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium text-slate-900 mb-2">Skills</h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedApplication.skills.map(skill => (
                      <Badge key={skill} variant="secondary" size="sm">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-medium text-slate-900 mb-2">Cover Letter</h5>
                  <p className="text-slate-600">{selectedApplication.cover_letter}</p>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      alert(`Downloading resume for ${selectedApplication.student_name}`);
                      // Here you would typically download the resume file
                    }}
                  >
                    Download Resume
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      alert(`Scheduling interview for ${selectedApplication.student_name} for ${selectedApplication.internship_title}`);
                      // Here you would typically open interview scheduling modal
                    }}
                  >
                    Schedule Interview
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* New Internship Modal */}
      {showNewInternshipModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-900">Post New Internship</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowNewInternshipModal(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              alert('New internship posted successfully!');
              setShowNewInternshipModal(false);
              setNewInternshipForm({
                title: '',
                domain: 'Web Development',
                description: '',
                stipend: '',
                duration: ''
              });
            }}>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
                <input
                  type="text"
                  value={newInternshipForm.title}
                  onChange={(e) => setNewInternshipForm(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Full Stack Developer Intern"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Domain</label>
                <select 
                  value={newInternshipForm.domain}
                  onChange={(e) => setNewInternshipForm(prev => ({ ...prev, domain: e.target.value }))}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option>Web Development</option>
                  <option>Mobile Development</option>
                  <option>Data Science</option>
                  <option>AI/ML</option>
                  <option>Full Stack Development</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                <textarea
                  rows={4}
                  value={newInternshipForm.description}
                  onChange={(e) => setNewInternshipForm(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe the internship role and responsibilities..."
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Stipend</label>
                  <input
                    type="text"
                    value={newInternshipForm.stipend}
                    onChange={(e) => setNewInternshipForm(prev => ({ ...prev, stipend: e.target.value }))}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., ₹25,000/month"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Duration</label>
                  <input
                    type="text"
                    value={newInternshipForm.duration}
                    onChange={(e) => setNewInternshipForm(prev => ({ ...prev, duration: e.target.value }))}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., 6 months"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Button type="submit" className="flex-1">
                  Post Internship
                </Button>
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => setShowNewInternshipModal(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
