/**
 * Utility functions for the MCA Internship Portal
 */

/**
 * Creates a URL for a given page name
 * @param {string} pageName - The name of the page
 * @returns {string} The URL for the page
 */
export function createPageUrl(pageName) {
  const baseUrl = '/';
  
  // Convert page name to kebab-case for URL
  const urlPath = pageName
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');
  
  return `${baseUrl}${urlPath}`;
}

/**
 * Formats a date string to a readable format
 * @param {string} dateString - The date string to format
 * @returns {string} Formatted date string
 */
export function formatDate(dateString) {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Formats currency amount
 * @param {number} amount - The amount to format
 * @returns {string} Formatted currency string
 */
export function formatCurrency(amount) {
  if (!amount) return '₹0';
  
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}

/**
 * Calculates the percentage of filled positions
 * @param {number} filled - Number of filled positions
 * @param {number} total - Total number of positions
 * @returns {number} Percentage filled
 */
export function calculateFillPercentage(filled, total) {
  if (!total || total === 0) return 0;
  return Math.round((filled / total) * 100);
}

/**
 * Gets status color for application status
 * @param {string} status - Application status
 * @returns {string} Tailwind CSS color class
 */
export function getStatusColor(status) {
  const statusColors = {
    'Applied': 'bg-blue-100 text-blue-800',
    'Under Review': 'bg-yellow-100 text-yellow-800',
    'Shortlisted': 'bg-purple-100 text-purple-800',
    'Interview Scheduled': 'bg-indigo-100 text-indigo-800',
    'Selected': 'bg-green-100 text-green-800',
    'Rejected': 'bg-red-100 text-red-800',
    'Withdrawn': 'bg-gray-100 text-gray-800'
  };
  
  return statusColors[status] || 'bg-gray-100 text-gray-800';
}

/**
 * Gets domain color for internship domain
 * @param {string} domain - Internship domain
 * @returns {string} Tailwind CSS color class
 */
export function getDomainColor(domain) {
  const domainColors = {
    'Web Development': 'bg-blue-100 text-blue-800',
    'Mobile Development': 'bg-purple-100 text-purple-800',
    'Data Science': 'bg-green-100 text-green-800',
    'AI/ML': 'bg-red-100 text-red-800',
    'Cloud Computing': 'bg-indigo-100 text-indigo-800',
    'Cybersecurity': 'bg-orange-100 text-orange-800',
    'DevOps': 'bg-teal-100 text-teal-800',
    'UI/UX Design': 'bg-pink-100 text-pink-800',
    'Backend Development': 'bg-gray-100 text-gray-800',
    'Full Stack Development': 'bg-cyan-100 text-cyan-800'
  };
  
  return domainColors[domain] || 'bg-gray-100 text-gray-800';
}

/**
 * Truncates text to a specified length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 */
export function truncateText(text, maxLength = 100) {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

/**
 * Validates email format
 * @param {string} email - Email to validate
 * @returns {boolean} Whether email is valid
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Generates a random ID
 * @returns {string} Random ID
 */
export function generateId() {
  return Math.random().toString(36).substr(2, 9);
}
