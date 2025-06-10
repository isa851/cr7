import React, { useState } from "react";
import {
  Menu,
  X,
  Trophy,
  Home,
  Calendar,
  Users,
  Heart,
  Image,
  Award,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

type PageType =
  | "home"
  | "early-life"
  | "manchester"
  | "real-madrid"
  | "juventus-alnassr"
  | "portugal"
  | "personal-life"
  | "gallery"
  | "facts-records";

interface NavigationProps {
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  currentPage,
  onPageChange,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { id: "home", label: "", icon: Home },
    { id: "early-life", label: " ", icon: Calendar },
    { id: "manchester", label: " ", icon: Trophy },
    { id: "real-madrid", label: " ", icon: Trophy },
    { id: "juventus-alnassr", label: "", icon: Trophy },
    { id: "portugal", label: " ", icon: Users },
    { id: "personal-life", label: " ", icon: Heart },
    { id: "gallery", label: "", icon: Image },
    { id: "facts-records", label: "  ", icon: Award },
    { id: "author-of-the-site", label: "  ", icon: User },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative lg:flex-row lg:justify-start">
          {/* Logo */}
          <Link to="/">
            <div className="flex items-center space-x-3 w-full lg:w-auto">
              <div className="flex justify-center w-full lg:justify-start">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    <img src="https://ryazan.vse-footbolki.ru/image/cache/catalog/vsm/0/2/2919/2919825/previews/people_1_sign_front_white_700-280x280.jpg" alt="" />
                  </span>
                </div>
                <div className="hidden sm:block ml-3">
                  <h1 className="text-xl font-bold text-gray-900">
                    Cristiano Ronaldo
                  </h1>
                  <p className="text-xs text-gray-600">Official Tribute</p>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-1 ml-10">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id as PageType)}
                  className={`px-3 py-2 rounded-lg text-xl font-medium transition-all duration-200 flex items-center space-x-2 ${
                    isActive
                      ? "bg-yellow-100 text-yellow-800 border border-yellow-300"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <Icon size={16} />
                  <span className="hidden xl:inline">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="grid grid-cols-2 gap-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onPageChange(item.id as PageType);
                      setIsMenuOpen(false);
                    }}
                    className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                      isActive
                        ? "bg-yellow-100 text-yellow-800 border border-yellow-300"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Icon size={16} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
