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
  Scale,
} from "lucide-react";
import { Link } from "react-router-dom";

type PageType =
  | "home"
  | "early-life"
  | "manchester"
  | "real-madrid"
  | "juventus"
  | "alnassr"
  | "portugal"
  | "personal-life"
  | "gallery"
  | "facts-records"
  | "Comparison";

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
    { id: "home", label: "Home", tooltip: "Главная", icon: Home },
    { id: "early-life", label: "Истоки легенды", tooltip: "Истоки легенды", icon: Calendar },
    { id: "manchester", label: "Манчестер Юнайтед", tooltip: "Манчестер Юнайтед", icon: Trophy },
    { id: "real-madrid", label: "Реал Мадрид", tooltip: "Реал Мадрид", icon: Trophy },
    { id: "juventus", label: "Ювентус: Эра Роналду", tooltip: "Ювентус: Эра Роналду", icon: Trophy },
    { id: "alnassr", label: "Аль-Наср: Саудовская революция", tooltip: "Аль-Наср: Саудовская революция", icon: Trophy },
    { id: "portugal", label: "Сборная Португалии", tooltip: "Сборная Португалии", icon: Users },
    { id: "personal-life", label: "Личная жизнь", tooltip: "Личная жизнь", icon: Heart },
    { id: "gallery", label: "Галерея CR7", tooltip: "Галерея CR7", icon: Image },
    { id: "facts-records", label: "Факты и рекорды", tooltip: "Факты и рекорды", icon: Award },
    { id: "Comparison", label: "Сравнение футбольных легенд", tooltip: "Сравнение легенд", icon: Scale },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-yellow-50 via-white to-yellow-50 backdrop-blur-md border-b border-yellow-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative lg:flex-row lg:justify-start">
          {/* Логотип */}
          <Link to="/">
            <div className="flex items-center space-x-3 w-full lg:w-auto">
              <div className="flex justify-center w-full lg:justify-start">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center overflow-hidden ring-2 ring-yellow-300 shadow-lg">
                  <img
                    src="https://ryazan.vse-footbolki.ru/image/cache/catalog/vsm/0/2/2919/2919825/previews/people_1_sign_front_white_700-280x280.jpg"
                    alt="CR7"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="hidden sm:block ml-3">
                  <h1 className="text-xl font-extrabold text-gray-900 tracking-tight">
                    Cristiano Ronaldo
                  </h1>
                  <p className="text-xs text-gray-500 font-medium">
                    Official Tribute
                  </p>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-2 ml-10">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;

              return (
                <div key={item.id} className="relative group">
                  <button
                    onClick={() => onPageChange(item.id as PageType)}
                    className={`px-3 py-2 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                      isActive
                        ? "bg-yellow-100 text-yellow-800 border border-yellow-300 shadow-sm"
                        : "text-gray-700 hover:bg-yellow-50 hover:text-yellow-700"
                    }`}
                  >
                    <Icon size={20} />
                  </button>

                  {/* Tooltip */}
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-[-45px] opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 transform group-hover:translate-y-1 bg-yellow-400 text-white text-sm font-medium px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap">
                    {item.tooltip}
                    <div className="absolute top-[-5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-yellow-400 rotate-45"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-yellow-100 transition"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-yellow-200 py-4 bg-white shadow-md rounded-b-xl">
            <div className="grid grid-cols-2 gap-3">
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
                    className={`p-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                      isActive
                        ? "bg-yellow-100 text-yellow-800 border border-yellow-300"
                        : "text-gray-700 hover:bg-yellow-50 hover:text-yellow-700"
                    }`}
                  >
                    <Icon size={18} />
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
