// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Database, Network, Monitor } from 'lucide-react';

const Home: React.FC = () => {
  const subjects = [
    {
      name: 'Operating Systems',
      path: '/os',
      icon: Monitor,
      description: 'Process management, memory, file systems',
      color: 'bg-blue-500 hover:bg-blue-600',
      questions: '200 Questions'
    },
    {
      name: 'Database Management',
      path: '/dbms',
      icon: Database,
      description: 'SQL, normalization, transactions',
      color: 'bg-green-500 hover:bg-green-600',
      questions: '200 Questions'
    },
    {
      name: 'Computer Networks',
      path: '/cn',
      icon: Network,
      description: 'Protocols, OSI model, networking',
      color: 'bg-purple-500 hover:bg-purple-600',
      questions: '200 Questions'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6">
          <div className="flex items-center">
            <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-indigo-600 mr-2 sm:mr-3 flex-shrink-0" />
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                Placement Quiz App
              </h1>
              <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">
                Master CS fundamentals for interviews
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Choose Your Subject
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Practice with curated questions for technical interviews
          </p>
        </div>

        {/* Subject Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {subjects.map((subject) => {
            const Icon = subject.icon;
            return (
              <Link
                key={subject.name}
                to={subject.path}
                className="group block"
              >
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                  <div className={`${subject.color} h-24 sm:h-28 lg:h-32 flex items-center justify-center transition-colors duration-300`}>
                    <Icon className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16 text-white" />
                  </div>
                  <div className="p-4 sm:p-5 lg:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors leading-tight">
                      {subject.name}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 leading-relaxed">
                      {subject.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-medium text-indigo-600">
                        {subject.questions}
                      </span>
                      <span className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-700">
                        Start Quiz →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Features Section */}
        <div className="mt-12 sm:mt-16 bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
            Quiz Features
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl lg:text-2xl">✓</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">
                Instant Feedback
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Get immediate results with correct answers
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl lg:text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">
                Easy Navigation
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Jump to any question quickly
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl lg:text-2xl">📊</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">
                Live Scoring
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Track performance in real-time
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl lg:text-2xl">📚</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">
                Comprehensive
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                All major CS topics covered
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-8 sm:mt-12 lg:mt-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
          <div className="text-center text-gray-600">
            <p className="text-sm sm:text-base">&copy; Made by Dhruv Paste 🚀</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;