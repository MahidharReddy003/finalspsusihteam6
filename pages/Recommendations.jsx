import React, { useState } from 'react';
import { TrendingUp, Star, MapPin, Clock, DollarSign, Users, Building2, Briefcase, Target, Heart, Share2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { formatDate, formatCurrency, getDomainColor, truncateText } from '../utils';

export default function Recommendations() {
  const [savedRecommendations, setSavedRecommendations] = useState(new Set());
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Mock data for recommended internships
  const recommendations = [
    {
      id: 1,
      title: "Full Stack Developer Intern",
      company_name: "TechCorp Solutions",
      company_logo: "https://via.placeholder.com/50",
      description: "Perfect match for your React and Node.js skills. High match score based on your profile.",
      domain: "Full Stack Development",
      required_skills: ["React", "Node.js", "MongoDB", "JavaScript"],
      location: "Bangalore",
      work_mode: "Hybrid",
      duration: "6 months",
      stipend: 25000,
      application_deadline: "2024-02-15",
      total_positions: 5,
      filled_positions: 2,
      status: "Active",
      match_score: 95,
      match_reasons: ["Skills match: 95%", "Location preference", "Salary expectations met"]
    },
    {
      id: 2,
      title: "Data Science Intern",
      company_name: "DataViz Analytics",
      company_logo: "https://via.placeholder.com/50",
      description: "Great opportunity to apply your Python and ML knowledge in real-world projects.",
      domain: "Data Science",
      required_skills: ["Python", "Pandas", "NumPy", "Machine Learning"],
      location: "Mumbai",
      work_mode: "Remote",
      duration: "3 months",
      stipend: 30000,
      application_deadline: "2024-01-30",
      total_positions: 3,
      filled_positions: 1,
      status: "Active",
      match_score: 88,
      match_reasons: ["Skills match: 88%", "Remote work preference", "High stipend"]
    },
    {
      id: 3,
      title: "Mobile App Developer",
      company_name: "AppStudio",
      company_logo: "https://via.placeholder.com/50",
      description: "Excellent fit for your mobile development interests and React Native experience.",
      domain: "Mobile Development",
      required_skills: ["React Native", "Flutter", "JavaScript", "Dart"],
      location: "Delhi",
      work_mode: "On-site",
      duration: "4 months",
      stipend: 20000,
      application_deadline: "2024-02-20",
      total_positions: 4,
      filled_positions: 0,
      status: "Active",
      match_score: 82,
      match_reasons: ["Skills match: 82%", "Domain interest", "Good learning opportunity"]
    },
    {
      id: 4,
      title: "AI/ML Engineer Intern",
      company_name: "AI Innovations",
      company_logo: "https://via.placeholder.com/50",
      description: "Cutting-edge AI projects that align with your machine learning coursework.",
      domain: "AI/ML",
      required_skills: ["Python", "TensorFlow", "PyTorch", "Deep Learning"],
      location: "Bangalore",
      work_mode: "Hybrid",
      duration: "6 months",
      stipend: 35000,
      application_deadline: "2024-02-10",
      total_positions: 2,
      filled_positions: 1,
      status: "Active",
      match_score: 78,
      match_reasons: ["Skills match: 78%", "High stipend", "Career growth potential"]
    }
  ];

  const filteredRecommendations = selectedFilter === 'all' 
    ? recommendations 
    : recommendations.filter(rec => {
        if (selectedFilter === 'high') return rec.match_score >= 90;
        if (selectedFilter === 'medium') return rec.match_score >= 70 && rec.match_score < 90;
        if (selectedFilter === 'low') return rec.match_score < 70;
        return true;
      });

  const getMatchScoreColor = (score) => {
    if (score >= 90) return 'text-green-600 bg-green-100';
    if (score >= 70) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <TrendingUp className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-slate-900">AI Recommendations</h1>
        </div>
        <p className="text-slate-600">Personalized internship recommendations based on your profile and preferences</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Total Recommendations</p>
              <p className="text-2xl font-bold text-slate-900">{recommendations.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">High Match (90%+)</p>
              <p className="text-2xl font-bold text-slate-900">
                {recommendations.filter(r => r.match_score >= 90).length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Avg Match Score</p>
              <p className="text-2xl font-bold text-slate-900">
                {Math.round(recommendations.reduce((acc, r) => acc + r.match_score, 0) / recommendations.length)}%
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Applied This Week</p>
              <p className="text-2xl font-bold text-slate-900">3</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
        <div className="flex flex-wrap gap-3">
          <Button
            variant={selectedFilter === 'all' ? 'default' : 'outline'}
            onClick={() => setSelectedFilter('all')}
          >
            All Recommendations ({recommendations.length})
          </Button>
          <Button
            variant={selectedFilter === 'high' ? 'default' : 'outline'}
            onClick={() => setSelectedFilter('high')}
          >
            High Match ({recommendations.filter(r => r.match_score >= 90).length})
          </Button>
          <Button
            variant={selectedFilter === 'medium' ? 'default' : 'outline'}
            onClick={() => setSelectedFilter('medium')}
          >
            Medium Match ({recommendations.filter(r => r.match_score >= 70 && r.match_score < 90).length})
          </Button>
          <Button
            variant={selectedFilter === 'low' ? 'default' : 'outline'}
            onClick={() => setSelectedFilter('low')}
          >
            Low Match ({recommendations.filter(r => r.match_score < 70).length})
          </Button>
        </div>
      </div>

      {/* Recommendations Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {filteredRecommendations.map(internship => (
          <div key={internship.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
            {/* Match Score Badge */}
            <div className="p-4 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-slate-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="font-semibold text-slate-900">Match Score</span>
                </div>
                <Badge 
                  className={`px-3 py-1 font-bold ${getMatchScoreColor(internship.match_score)}`}
                >
                  {internship.match_score}%
                </Badge>
              </div>
            </div>

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
                {internship.description}
              </p>

              {/* Match Reasons */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-slate-700">Why this matches you:</p>
                <ul className="space-y-1">
                  {internship.match_reasons.map((reason, index) => (
                    <li key={index} className="text-sm text-slate-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      {reason}
                    </li>
                  ))}
                </ul>
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
              <div className="flex gap-2 mb-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    const newSaved = new Set(savedRecommendations);
                    if (newSaved.has(internship.id)) {
                      newSaved.delete(internship.id);
                      alert('Removed from saved recommendations');
                    } else {
                      newSaved.add(internship.id);
                      alert('Added to saved recommendations');
                    }
                    setSavedRecommendations(newSaved);
                  }}
                  className={savedRecommendations.has(internship.id) ? 'text-red-600' : ''}
                >
                  <Heart className={`w-4 h-4 ${savedRecommendations.has(internship.id) ? 'fill-current' : ''}`} />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: internship.title,
                        text: `Check out this recommended internship: ${internship.title} at ${internship.company}`,
                        url: window.location.href
                      });
                    } else {
                      alert('Sharing functionality not available on this browser');
                    }
                  }}
                >
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex gap-3">
                <Button 
                  className="flex-1" 
                  size="lg"
                  onClick={() => {
                    alert(`Applying to ${internship.title} at ${internship.company}`);
                    // Here you would typically navigate to application form or make API call
                  }}
                >
                  <Briefcase className="w-4 h-4 mr-2" />
                  Apply Now
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => {
                    const newSaved = new Set(savedRecommendations);
                    if (newSaved.has(internship.id)) {
                      newSaved.delete(internship.id);
                      alert('Removed from saved recommendations');
                    } else {
                      newSaved.add(internship.id);
                      alert('Added to saved recommendations');
                    }
                    setSavedRecommendations(newSaved);
                  }}
                >
                  {savedRecommendations.has(internship.id) ? 'Saved' : 'Save'}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredRecommendations.length === 0 && (
        <div className="text-center py-12">
          <TrendingUp className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-slate-900 mb-2">No recommendations found</h3>
          <p className="text-slate-600 mb-6">Try adjusting your filters or update your profile for better matches</p>
          <Button 
            variant="outline" 
            onClick={() => setSelectedFilter('all')}
          >
            Show All Recommendations
          </Button>
        </div>
      )}
    </div>
  );
}
