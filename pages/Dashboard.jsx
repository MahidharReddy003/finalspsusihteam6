import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Briefcase, 
  Calendar,
  Star,
  MapPin,
  Clock,
  DollarSign
} from 'lucide-react';
import { formatDate, formatCurrency } from '../utils';

export default function Dashboard() {
  // Mock data for dashboard
  const stats = {
    totalInternships: 45,
    activeApplications: 8,
    interviewsScheduled: 3,
    averageMatchScore: 87
  };

  const recentInternships = [
    {
      id: 1,
      title: "Full Stack Developer Intern",
      company: "TechCorp Solutions",
      location: "Bangalore",
      stipend: 25000,
      deadline: "2024-02-15",
      matchScore: 95
    },
    {
      id: 2,
      title: "Data Science Intern",
      company: "DataViz Analytics",
      location: "Mumbai",
      stipend: 30000,
      deadline: "2024-01-30",
      matchScore: 88
    },
    {
      id: 3,
      title: "Mobile App Developer",
      company: "AppStudio",
      location: "Delhi",
      stipend: 20000,
      deadline: "2024-02-20",
      matchScore: 82
    }
  ];

  const upcomingInterviews = [
    {
      id: 1,
      company: "TechCorp Solutions",
      position: "Full Stack Developer Intern",
      date: "2024-01-25",
      time: "10:00 AM",
      mode: "Online"
    },
    {
      id: 2,
      company: "DataViz Analytics",
      position: "Data Science Intern",
      date: "2024-01-30",
      time: "2:00 PM",
      mode: "In-person"
    }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Dashboard</h1>
        <p className="text-slate-600">Welcome back! Here's what's happening with your internship applications.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Total Internships</p>
                <p className="text-2xl font-bold text-slate-900">{stats.totalInternships}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Active Applications</p>
                <p className="text-2xl font-bold text-slate-900">{stats.activeApplications}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Interviews Scheduled</p>
                <p className="text-2xl font-bold text-slate-900">{stats.interviewsScheduled}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Avg Match Score</p>
                <p className="text-2xl font-bold text-slate-900">{stats.averageMatchScore}%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Recent Internships */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              Recommended Internships
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentInternships.map((internship) => (
                <div key={internship.id} className="p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-slate-900">{internship.title}</h3>
                      <p className="text-slate-600 text-sm">{internship.company}</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      {internship.matchScore}% Match
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm text-slate-600 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{internship.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      <span>{formatCurrency(internship.stipend)}/month</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>Deadline: {formatDate(internship.deadline)}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full" size="sm">
                    Apply Now
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Interviews */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-purple-600" />
              Upcoming Interviews
            </CardTitle>
          </CardHeader>
          <CardContent>
            {upcomingInterviews.length === 0 ? (
              <div className="text-center py-8 text-slate-500">
                <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No upcoming interviews</p>
                <p className="text-sm">Keep applying to get interview opportunities!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {upcomingInterviews.map((interview) => (
                  <div key={interview.id} className="p-4 border border-slate-200 rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-slate-900">{interview.company}</h3>
                        <p className="text-slate-600 text-sm">{interview.position}</p>
                      </div>
                      <Badge variant="outline" className="text-purple-600 border-purple-300">
                        {interview.mode}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-slate-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(interview.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{interview.time}</span>
                      </div>
                    </div>
                    
                    <div className="mt-3 flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        View Details
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        Reschedule
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button className="h-16 flex-col gap-2" variant="outline">
                <Briefcase className="w-6 h-6" />
                Browse Internships
              </Button>
              <Button className="h-16 flex-col gap-2" variant="outline">
                <TrendingUp className="w-6 h-6" />
                View Recommendations
              </Button>
              <Button className="h-16 flex-col gap-2" variant="outline">
                <Users className="w-6 h-6" />
                My Applications
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}