import React, { useState } from 'react';
import { Search, Filter, MapPin, Clock, DollarSign, Users, Building2, Briefcase } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { formatDate, formatCurrency, getDomainColor, truncateText } from '../utils';

export default function Internships() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  // Mock data for internships
  const internships = [
    {
      id: 1,
      title: "Full Stack Developer Intern",
      company_name: "TechCorp Solutions",
      company_logo: "https://via.placeholder.com/50",
      description: "Join our dynamic team to build scalable web applications using modern technologies like React, Node.js, and MongoDB.",
      domain: "Full Stack Development",
      required_skills: ["React", "Node.js", "MongoDB", "JavaScript"],
      location: "Bangalore",
      work_mode: "Hybrid",
      duration: "6 months",
      stipend: 25000,
      application_deadline: "2024-02-15",
      total_positions: 5,
      filled_positions: 2,
      status: "Active"
    },
    {
      id: 2,
      title: "Data Science Intern",
      company_name: "DataViz Analytics",
      company_logo: "https://via.placeholder.com/50",
      description: "Work on real-world data analysis projects using Python, pandas, and machine learning algorithms.",
      domain: "Data Science",
      required_skills: ["Python", "Pandas", "NumPy", "Machine Learning"],
      location: "Mumbai",
      work_mode: "Remote",
      duration: "3 months",
      stipend: 30000,
      application_deadline: "2024-01-30",
      total_positions: 3,
      filled_positions: 1,
      status: "Active"
    },
    {
      id: 3,
      title: "Mobile App Developer",
      company_name: "AppStudio",
      company_logo: "https://via.placeholder.com/50",
      description: "Develop cross-platform mobile applications using React Native and Flutter.",
      domain: "Mobile Development",
      required_skills: ["React Native", "Flutter", "JavaScript", "Dart"],
      location: "Delhi",
      work_mode: "On-site",
      duration: "4 months",
      stipend: 20000,
      application_deadline: "2024-02-20",
      total_positions: 4,
      filled_positions: 0,
      status: "Active"
    }
  ];

  const domains = ['All', 'Web Development', 'Mobile Development', 'Data Science', 'AI/ML', 'Cloud Computing', 'Cybersecurity', 'DevOps', 'UI/UX Design', 'Backend Development', 'Full Stack Development'];
  const locations = ['All', 'Bangalore', 'Mumbai', 'Delhi', 'Hyderabad', 'Chennai', 'Pune', 'Remote'];

  const filteredInternships = internships.filter(internship => {
    const matchesSearch = internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         internship.company_name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDomain = selectedDomain === 'All' || internship.domain === selectedDomain;
    const matchesLocation = selectedLocation === 'All' || internship.location === selectedLocation;
    
    return matchesSearch && matchesDomain && matchesLocation;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Browse Internships</h1>
        <p className="text-slate-600">Find the perfect internship opportunity that matches your skills and interests</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search internships or companies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Domain Filter */}
          <div className="lg:w-48">
            <select
              value={selectedDomain}
              onChange={(e) => setSelectedDomain(e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {domains.map(domain => (
                <option key={domain} value={domain}>{domain}</option>
              ))}
            </select>
          </div>

          {/* Location Filter */}
          <div className="lg:w-48">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-slate-600">
          Found <span className="font-semibold text-slate-900">{filteredInternships.length}</span> internship{filteredInternships.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Internships Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredInternships.map(internship => (
          <div key={internship.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
            {/* Header */}
            <div className="p-6 border-b border-slate-100">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img 
                    src={internship.company_logo} 
                    alt={internship.company_name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-slate-900 text-lg">{internship.title}</h3>
                    <p className="text-slate-600 text-sm">{internship.company_name}</p>
                  </div>
                </div>
                <Badge variant={getDomainColor(internship.domain).split(' ')[0].replace('bg-', '')}>
                  {internship.domain}
                </Badge>
              </div>
              
              <p className="text-slate-600 text-sm mb-4">
                {truncateText(internship.description, 120)}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {internship.required_skills.slice(0, 3).map(skill => (
                  <Badge key={skill} variant="secondary" size="sm">
                    {skill}
                  </Badge>
                ))}
                {internship.required_skills.length > 3 && (
                  <Badge variant="outline" size="sm">
                    +{internship.required_skills.length - 3} more
                  </Badge>
                )}
              </div>
            </div>

            {/* Details */}
            <div className="p-6 space-y-3">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <MapPin className="w-4 h-4" />
                <span>{internship.location}</span>
                <span className="mx-2">•</span>
                <span className="capitalize">{internship.work_mode}</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Clock className="w-4 h-4" />
                <span>{internship.duration}</span>
                <span className="mx-2">•</span>
                <DollarSign className="w-4 h-4" />
                <span>{formatCurrency(internship.stipend)}/month</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Users className="w-4 h-4" />
                <span>{internship.filled_positions}/{internship.total_positions} positions filled</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Building2 className="w-4 h-4" />
                <span>Apply by {formatDate(internship.application_deadline)}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 pt-0">
              <Button className="w-full" size="lg">
                <Briefcase className="w-4 h-4 mr-2" />
                Apply Now
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredInternships.length === 0 && (
        <div className="text-center py-12">
          <Briefcase className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-slate-900 mb-2">No internships found</h3>
          <p className="text-slate-600 mb-6">Try adjusting your search criteria or filters</p>
          <Button 
            variant="outline" 
            onClick={() => {
              setSearchTerm('');
              setSelectedDomain('All');
              setSelectedLocation('All');
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
}
