import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { motion } from "framer-motion";
import { 
  Upload, 
  Plus, 
  X, 
  Save, 
  User as UserIcon, 
  GraduationCap, 
  Code, 
  MapPin, 
  Award,
  ExternalLink,
  Github,
  Linkedin,
  Globe
} from "lucide-react";

const SKILLS_OPTIONS = [
  "JavaScript", "Python", "Java", "React", "Node.js", "Angular", "Vue.js", "MongoDB", "MySQL", 
  "PostgreSQL", "AWS", "Azure", "Docker", "Kubernetes", "Git", "HTML/CSS", "TypeScript", 
  "Spring Boot", "Django", "Flask", "Machine Learning", "Data Science", "AI", "TensorFlow", 
  "PyTorch", "Cybersecurity", "DevOps", "CI/CD", "Linux", "Android", "iOS", "Flutter", "React Native"
];

const DOMAINS = [
  "Web Development", "Mobile Development", "Data Science", "AI/ML", "Cloud Computing", 
  "Cybersecurity", "DevOps", "UI/UX Design", "Backend Development", "Full Stack Development"
];

export default function Profile() {
  const [profile, setProfile] = useState({
    full_name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91 9876543210',
    college_name: 'ABC University',
    course: 'MCA',
    semester: 3,
    cgpa: 8.5,
    skills: ['React', 'Node.js', 'JavaScript'],
    preferred_domains: ['Web Development', 'Full Stack Development'],
    preferred_locations: ['Bangalore', 'Mumbai'],
    github_profile: 'https://github.com/johndoe',
    linkedin_profile: 'https://linkedin.com/in/johndoe',
    portfolio_url: 'https://johndoe.dev',
    certifications: [],
    projects: [
      {
        name: 'E-commerce Platform',
        description: 'A full-stack e-commerce application built with React and Node.js',
        technologies: ['React', 'Node.js', 'MongoDB'],
        github_url: 'https://github.com/johndoe/ecommerce'
      }
    ],
    previous_internships: [],
    availability: 'Immediate',
    resume_url: ''
  });
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Profile saved successfully!');
    } catch (error) {
      alert('Error saving profile. Please try again.');
      console.error('Error saving profile:', error);
    } finally {
      setSaving(false);
    }
  };

  const handleFileUpload = async (file) => {
    setUploading(true);
    try {
      // Simulate file upload
      await new Promise(resolve => setTimeout(resolve, 2000));
      setProfile(prev => ({ ...prev, resume_url: 'https://example.com/resume.pdf' }));
      alert('Resume uploaded successfully!');
    } catch (error) {
      alert('Error uploading file. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const addSkill = (skill) => {
    if (!profile.skills.includes(skill)) {
      setProfile(prev => ({ ...prev, skills: [...prev.skills, skill] }));
    }
  };

  const removeSkill = (skillToRemove) => {
    setProfile(prev => ({ 
      ...prev, 
      skills: prev.skills.filter(skill => skill !== skillToRemove) 
    }));
  };

  const addProject = () => {
    setProfile(prev => ({
      ...prev,
      projects: [...prev.projects, {
        name: '',
        description: '',
        technologies: [],
        github_url: ''
      }]
    }));
  };

  const updateProject = (index, field, value) => {
    setProfile(prev => ({
      ...prev,
      projects: prev.projects.map((project, i) => 
        i === index ? { ...project, [field]: value } : project
      )
    }));
  };

  const removeProject = (index) => {
    setProfile(prev => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index)
    }));
  };

  const calculateCompleteness = () => {
    const requiredFields = [
      'full_name', 'email', 'phone', 'college_name', 'course', 'semester', 'cgpa'
    ];
    const optionalFields = [
      'skills', 'preferred_domains', 'github_profile', 'linkedin_profile', 'projects'
    ];
    
    let completed = 0;
    let total = requiredFields.length + optionalFields.length;

    requiredFields.forEach(field => {
      if (profile[field] && profile[field] !== '') completed++;
    });

    optionalFields.forEach(field => {
      if (profile[field] && profile[field].length > 0) completed++;
    });

    return Math.round((completed / total) * 100);
  };

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-4 mb-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent"
        >
          My Profile
        </motion.h1>
        <div className="max-w-md mx-auto">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-slate-600">Profile Completeness</span>
            <span className="text-sm font-bold text-blue-600">{calculateCompleteness()}%</span>
          </div>
          <Progress value={calculateCompleteness()} className="h-2" />
        </div>
      </div>

      {/* Basic Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <Card className="shadow-lg border-0">
          <CardHeader className="border-b border-slate-200">
            <CardTitle className="flex items-center gap-2">
              <UserIcon className="w-5 h-5 text-blue-600" />
              Basic Information
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="full_name">Full Name *</Label>
                <Input
                  id="full_name"
                  value={profile.full_name}
                  onChange={(e) => setProfile(prev => ({ ...prev, full_name: e.target.value }))}
                  placeholder="Your full name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={profile.phone}
                  onChange={(e) => setProfile(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="+91 9876543210"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="college_name">College/University *</Label>
                <Input
                  id="college_name"
                  value={profile.college_name}
                  onChange={(e) => setProfile(prev => ({ ...prev, college_name: e.target.value }))}
                  placeholder="Your college name"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Academic Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <Card className="shadow-lg border-0">
          <CardHeader className="border-b border-slate-200">
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-emerald-600" />
              Academic Information
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="course">Course *</Label>
                <Select value={profile.course} onValueChange={(value) => setProfile(prev => ({ ...prev, course: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="MCA">MCA</SelectItem>
                    <SelectItem value="M.Tech CS">M.Tech CS</SelectItem>
                    <SelectItem value="M.Sc CS">M.Sc CS</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="semester">Current Semester *</Label>
                <Select value={profile.semester?.toString()} onValueChange={(value) => setProfile(prev => ({ ...prev, semester: parseInt(value) }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select semester" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1,2,3,4,5,6].map(sem => (
                      <SelectItem key={sem} value={sem.toString()}>{sem}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="cgpa">CGPA *</Label>
                <Input
                  id="cgpa"
                  type="number"
                  step="0.01"
                  min="0"
                  max="10"
                  value={profile.cgpa}
                  onChange={(e) => setProfile(prev => ({ ...prev, cgpa: parseFloat(e.target.value) || '' }))}
                  placeholder="9.5"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Skills & Preferences */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <Card className="shadow-lg border-0">
          <CardHeader className="border-b border-slate-200">
            <CardTitle className="flex items-center gap-2">
              <Code className="w-5 h-5 text-purple-600" />
              Skills & Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            {/* Skills */}
            <div className="space-y-3">
              <Label>Technical Skills</Label>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                    {skill}
                    <button
                      onClick={() => removeSkill(skill)}
                      className="ml-2 hover:text-red-600"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
              <Select onValueChange={addSkill}>
                <SelectTrigger>
                  <SelectValue placeholder="Add a skill" />
                </SelectTrigger>
                <SelectContent>
                  {SKILLS_OPTIONS.filter(skill => !profile.skills.includes(skill)).map((skill) => (
                    <SelectItem key={skill} value={skill}>{skill}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Preferred Domains */}
            <div className="space-y-3">
              <Label>Preferred Domains</Label>
              <div className="flex flex-wrap gap-2">
                {profile.preferred_domains.map((domain, index) => (
                  <Badge key={index} variant="secondary" className="bg-emerald-100 text-emerald-800">
                    {domain}
                    <button
                      onClick={() => setProfile(prev => ({ 
                        ...prev, 
                        preferred_domains: prev.preferred_domains.filter(d => d !== domain) 
                      }))}
                      className="ml-2 hover:text-red-600"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
              <Select onValueChange={(domain) => {
                if (!profile.preferred_domains.includes(domain)) {
                  setProfile(prev => ({ ...prev, preferred_domains: [...prev.preferred_domains, domain] }));
                }
              }}>
                <SelectTrigger>
                  <SelectValue placeholder="Add preferred domain" />
                </SelectTrigger>
                <SelectContent>
                  {DOMAINS.filter(domain => !profile.preferred_domains.includes(domain)).map((domain) => (
                    <SelectItem key={domain} value={domain}>{domain}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Projects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-8"
      >
        <Card className="shadow-lg border-0">
          <CardHeader className="border-b border-slate-200">
            <div className="flex justify-between items-center">
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-orange-600" />
                Projects
              </CardTitle>
              <Button onClick={addProject} variant="outline" size="sm" className="gap-2">
                <Plus className="w-4 h-4" />
                Add Project
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            {profile.projects.length === 0 ? (
              <div className="text-center py-8 text-slate-500">
                <Award className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No projects added yet</p>
                <p className="text-sm">Add your academic or personal projects to showcase your skills</p>
              </div>
            ) : (
              <div className="space-y-6">
                {profile.projects.map((project, index) => (
                  <div key={index} className="p-4 border border-slate-200 rounded-lg space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-slate-900">Project {index + 1}</h3>
                      <Button
                        onClick={() => removeProject(index)}
                        variant="ghost"
                        size="sm"
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        placeholder="Project name"
                        value={project.name}
                        onChange={(e) => updateProject(index, 'name', e.target.value)}
                      />
                      <Input
                        placeholder="GitHub URL"
                        value={project.github_url}
                        onChange={(e) => updateProject(index, 'github_url', e.target.value)}
                      />
                    </div>
                    <Textarea
                      placeholder="Project description"
                      value={project.description}
                      onChange={(e) => updateProject(index, 'description', e.target.value)}
                      rows={3}
                    />
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {/* Links & Resume */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-8"
      >
        <Card className="shadow-lg border-0">
          <CardHeader className="border-b border-slate-200">
            <CardTitle className="flex items-center gap-2">
              <ExternalLink className="w-5 h-5 text-indigo-600" />
              Links & Resume
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="github" className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  GitHub Profile
                </Label>
                <Input
                  id="github"
                  value={profile.github_profile}
                  onChange={(e) => setProfile(prev => ({ ...prev, github_profile: e.target.value }))}
                  placeholder="https://github.com/username"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedin" className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn Profile
                </Label>
                <Input
                  id="linkedin"
                  value={profile.linkedin_profile}
                  onChange={(e) => setProfile(prev => ({ ...prev, linkedin_profile: e.target.value }))}
                  placeholder="https://linkedin.com/in/username"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="portfolio" className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  Portfolio Website
                </Label>
                <Input
                  id="portfolio"
                  value={profile.portfolio_url}
                  onChange={(e) => setProfile(prev => ({ ...prev, portfolio_url: e.target.value }))}
                  placeholder="https://yourportfolio.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Resume Upload</Label>
              <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => {
                    if (e.target.files[0]) {
                      handleFileUpload(e.target.files[0]);
                    }
                  }}
                  className="hidden"
                  id="resume-upload"
                />
                <label htmlFor="resume-upload" className="cursor-pointer">
                  <Upload className="w-8 h-8 mx-auto mb-2 text-slate-400" />
                  <p className="text-sm text-slate-600">
                    {uploading ? 'Uploading...' : 'Click to upload your resume'}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    PDF, DOC, DOCX files only
                  </p>
                </label>
                {profile.resume_url && (
                  <div className="mt-3">
                    <a 
                      href={profile.resume_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      View uploaded resume →
                    </a>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Save Button */}
      <div className="flex justify-center">
        <Button 
          onClick={handleSave}
          disabled={saving}
          className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 px-8 py-2 text-lg"
        >
          {saving ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Saving...
            </>
          ) : (
            <>
              <Save className="w-5 h-5 mr-2" />
              Save Profile
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
