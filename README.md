# MCA Internship Portal - PM Scheme

A comprehensive internship portal designed for MCA students to find and apply for internships, with AI-powered recommendations and company management features.

## Features

### For Students
- **Browse Internships**: Search and filter internship opportunities by domain, location, and other criteria
- **AI Recommendations**: Personalized internship recommendations based on profile and preferences
- **Application Tracking**: Monitor the status of your applications in real-time
- **Profile Management**: Complete profile with skills, preferences, and portfolio links

### For Companies
- **Internship Management**: Post, edit, and manage internship opportunities
- **Application Review**: Review and manage student applications
- **Analytics Dashboard**: Track application statistics and performance metrics

## Tech Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite

## Project Structure

```
sih/
├── src/
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles with Tailwind
├── pages/                   # Page components
│   ├── Dashboard.jsx        # Main dashboard
│   ├── Profile.jsx          # Student profile management
│   ├── Internships.jsx      # Browse internships
│   ├── Recommendations.jsx  # AI recommendations
│   ├── Applications.jsx     # Application tracking
│   └── CompanyPortal.jsx    # Company management portal
├── components/
│   └── ui/                  # Reusable UI components
│       ├── button.jsx       # Button component
│       ├── badge.jsx        # Badge component
│       └── sidebar.jsx      # Sidebar navigation
├── utils/
│   └── index.js             # Utility functions
├── Entities/                # Data schemas
│   ├── Student.json         # Student entity schema
│   ├── Internship.json      # Internship entity schema
│   └── Application.json     # Application entity schema
├── Layout.js                # Main layout component
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── index.html               # HTML template
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sih
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Data Models

### Student
- Personal information (name, email, phone)
- Academic details (course, semester, CGPA, university)
- Skills and interests
- Preferences (location, work mode, stipend)
- Portfolio links (LinkedIn, GitHub, portfolio)

### Internship
- Basic details (title, company, description)
- Requirements (skills, CGPA, eligible courses)
- Logistics (location, work mode, duration, stipend)
- Application details (deadline, positions, selection process)

### Application
- Student and internship references
- Application status and timeline
- Interview details (if applicable)
- Match score and recommendation reasons

## Features in Detail

### AI Recommendations
The system provides personalized internship recommendations based on:
- Skill match percentage
- Location preferences
- Salary expectations
- Domain interests
- Academic performance

### Application Tracking
Students can track their applications through various statuses:
- Applied
- Under Review
- Shortlisted
- Interview Scheduled
- Selected
- Rejected
- Withdrawn

### Company Portal
Companies can:
- Post new internship opportunities
- Review and manage applications
- Track application statistics
- Schedule interviews
- Provide feedback

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions, please contact the development team or create an issue in the repository.
