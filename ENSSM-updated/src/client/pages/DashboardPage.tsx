import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap, BookOpen, ExternalLink, LogOut, Sparkles, ArrowRight, User, Globe, Bus, Calendar } from 'lucide-react';
import ChatBot from '@/client/components/ChatBot';

// To add more platform cards, simply add new objects to this array.
// Each card needs: id, title, arabicTitle, description, icon, color, bgGlow, borderColor, hoverBorder, link, badge, stats
const platforms = [
  {
    id: 'elibrary',
    title: 'E-library of \n الأستاذ د. Hussein Kwash',
    arabicTitle: 'مكتبة د.الأستاذ Hussein Kwash',
    description: 'Access thousands of academic books, research papers, and educational resources tailored for deaf education specialists.',
    icon: BookOpen,
    color: 'from-blue-500 to-cyan-500',
    bgGlow: 'bg-blue-500/20',
    borderColor: 'border-blue-400/30',
    hoverBorder: 'hover:border-blue-400/60',
    link: 'http://localhost/ENSSMLMS/school-management-system/Elibrary/User/index.php',
    badge: 'Academic Resources',
    stats: '10,000+ Books',
  },
  {
    id: 'transportation',
    title: 'Transportation',
    arabicTitle: 'المواصلات',
    description: 'Access transportation services, bus routes, and schedules for students.',
    icon: Bus,
    color: 'from-amber-500 to-yellow-500',
    bgGlow: 'bg-amber-500/20',
    borderColor: 'border-amber-400/30',
    hoverBorder: 'hover:border-amber-400/60',
    link: 'http://localhost/ENSSMLMS/school-management-system/buspanel.php',
    badge: 'Transport',
    stats: 'Bus Routes',
  },
  {
    id: 'eventCalendar',
    title: 'Event Calendar',
    arabicTitle: 'تقويم الفعاليات',
    description: 'View upcoming events, exams, and important dates for the school year.',
    icon: Calendar,
    color: 'from-pink-500 to-rose-500',
    bgGlow: 'bg-pink-500/20',
    borderColor: 'border-pink-400/30',
    hoverBorder: 'hover:border-pink-400/60',
    link: '#',
    badge: 'Events',
    stats: 'Upcoming',
  },
  {
    id: 'lms',
    title: 'LMS',
    arabicTitle: 'منصة التعلم',
    description: 'Access the Learning Management System for online courses, assignments, and educational content.',
    icon: BookOpen,
    color: 'from-teal-500 to-cyan-500',
    bgGlow: 'bg-teal-500/20',
    borderColor: 'border-teal-400/30',
    hoverBorder: 'hover:border-teal-400/60',
    link: '#',
    badge: 'Learning Platform',
    stats: 'Online Courses',
  },
  {
    id: 'moodle',
    title: 'Moodle',
    arabicTitle: 'مoodle',
    description: 'Open source learning management system for online learning.',
    icon: BookOpen,
    color: 'from-orange-500 to-red-500',
    bgGlow: 'bg-orange-500/20',
    borderColor: 'border-orange-400/30',
    hoverBorder: 'hover:border-orange-400/60',
    link: '#',
    badge: 'E-Learning',
    stats: 'Courses',
  },
  {
    id: 'messagerie',
    title: 'Messagerie',
    arabicTitle: 'الرسائل',
    description: 'Access your institutional email and messaging system for communication.',
    icon: BookOpen,
    color: 'from-rose-500 to-red-500',
    bgGlow: 'bg-rose-500/20',
    borderColor: 'border-rose-400/30',
    hoverBorder: 'hover:border-rose-400/60',
    link: '#',
    badge: 'Communication',
    stats: 'Emails',
  },
  {
    id: 'ministerPortal',
    title: 'Progres Portal',
    arabicTitle: 'Progres بوابة',
    description: 'Access the official Ministry of Higher Education portal for academic registration and progression tracking.',
    icon: Globe,
    color: 'from-indigo-500 to-violet-500',
    bgGlow: 'bg-indigo-500/20',
    borderColor: 'border-indigo-400/30',
    hoverBorder: 'hover:border-indigo-400/60',
    link: 'https://progres.mesrs.dz/webfve/pages/index.xhtml',
    badge: 'Ministry Portal',
    stats: 'Progress Tracking',
  },
  {
    id: 'schoolInfo',
    title: 'School Information',
    arabicTitle: 'معلومات المدرسة',
    description: 'Access school information, news, and updates about ENS-SM.',
    icon: GraduationCap,
    color: 'from-green-500 to-emerald-500',
    bgGlow: 'bg-green-500/20',
    borderColor: 'border-green-400/30',
    hoverBorder: 'hover:border-green-400/60',
    link: 'http://localhost/ENSSMLMS/school-management-system/documentation.php',
    badge: 'Information',
    stats: 'News & Updates',
  },
];

export default function DashboardPage() {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden flex flex-col">
      {/* Background ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/10 bg-white/5 backdrop-blur-xl flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white p-1 ring-2 ring-amber-400/60 shadow-md group-hover:scale-105 transition-all overflow-hidden">
              <img src="/assets/pic5.jpeg" alt="ENSSM Logo" className="w-full h-full object-contain rounded-full" />
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-bold text-sm leading-none">ENSSM</p>
              <p className="text-white/50 text-xs">User Portal</p>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.open('http://localhost/ENSSMLMS/school-management-system/login.php', '_blank')}
              className="flex items-center gap-2 bg-white/10 hover:bg-cyan-500/20 border border-white/20 hover:border-cyan-400/40 text-white/70 hover:text-cyan-300 rounded-full px-4 py-2 text-sm transition-all duration-300"
            >
              <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                <User className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-white/80 text-sm font-medium">User Login</span>
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-white/10 hover:bg-red-500/20 border border-white/20 hover:border-red-400/40 text-white/70 hover:text-red-300 rounded-full px-4 py-2 text-sm transition-all duration-300"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1 overflow-y-auto">
        {/* Welcome hero */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/80 px-5 py-2 rounded-full text-sm font-medium border border-white/20 mb-4">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            Welcome to your ENSSM Family
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Your Services
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent mt-1">
              Hub
            </span>
          </h1>
          <p className="text-white/60 max-w-xl mx-auto text-base">
            Access all your platforms in one place. Click any card below to get started.
          </p>
        </div>

        {/* Platform Cards - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
          {platforms.map((platform) => {
            const Icon = platform.icon;
            const isHovered = hoveredId === platform.id;

            return (
              <a
                key={platform.id}
                href={platform.link}
                target={platform.id === 'transportation' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredId(platform.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group relative bg-white/10 backdrop-blur-xl rounded-2xl border ${platform.borderColor} ${platform.hoverBorder} shadow-xl hover:shadow-2xl transition-all duration-400 overflow-hidden cursor-pointer hover:scale-[1.02] hover:-translate-y-1 block`}
              >
                {/* Glow on hover */}
                <div className={`absolute inset-0 ${platform.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl`} />

                {/* Top gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${platform.color} opacity-60 group-hover:opacity-100 transition-opacity`} />

                <div className="relative p-5">
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-white/40 uppercase tracking-wider">{platform.badge}</span>
                    <span className={`text-xs font-bold bg-gradient-to-r ${platform.color} bg-clip-text text-transparent`}>{platform.stats}</span>
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 bg-gradient-to-br ${platform.color} rounded-xl flex items-center justify-center shadow-lg mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <div className="mb-2">
                    <p className="text-white/40 text-xs mb-0.5">{platform.arabicTitle}</p>
                    <h2 className="text-xl font-bold text-white group-hover:text-cyan-100 transition-colors">
                      {platform.title}
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="text-white/60 text-sm leading-relaxed">
                    {platform.description}
                  </p>

                  {/* CTA */}
                  <div className={`flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${platform.color} bg-clip-text text-transparent group-hover:gap-3 transition-all duration-300 mt-3`}>
                    <span>Open Platform</span>
                    <ExternalLink className="w-4 h-4 text-white/50 group-hover:text-white/80 transition-colors" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Footer note */}
        <div className="text-center mt-6">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} ENS-SM — Higher School for Teachers of Deaf and Mute, Algeria
          </p>
          <Link to="/" className="text-white/30 hover:text-white/60 text-sm transition-colors mt-1 inline-block">
            ← Back to Main Website
          </Link>
        </div>
      </main>
      <ChatBot />
    </div>
  );
}