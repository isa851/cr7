import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import DonatePage from "./pages/DonatePage";
import EarlyLifePage from "./pages/EarlyLifePage";
import ManchesterPage from "./pages/ManchesterPage";
import RealMadridPage from "./pages/RealMadridPage";
import AlNassrPage from "./pages/AlNassrPage";
import JuventusPage from "./pages/JuventusPage";
import PortugalPage from "./pages/PortugalPage";
import PersonalLifePage from "./pages/PersonalLifePage";
import GalleryPage from "./pages/GalleryPage";
import FactsRecordsPage from "./pages/FactsRecordsPage";
import AuthorPage from "./pages/AuthorPage";

type PageType =
  | "home"
  | "donate"
  | "early-life"
  | "manchester"
  | "real-madrid"
  | "alnassr"
  | "juventus"
  | "portugal"
  | "personal-life"
  | "gallery"
  | "facts-records"
  | "author-of-the-site";

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("home");
  const [isLoading, setIsLoading] = useState(false);

  const handlePageChange = (page: PageType) => {
    if (page === currentPage) return;

    setIsLoading(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 300);
  };

  const renderPage = () => {
    if (isLoading) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-yellow-400 mx-auto mb-4"></div>
            <p className="text-white text-lg">Loading...</p>
          </div>
        </div>
      );
    }

    switch (currentPage) {
      case "home":
        return <HomePage />;
        case "donate":
          return <DonatePage />;
      case "early-life":
        return <EarlyLifePage />;
      case "manchester":
        return <ManchesterPage />;
      case "real-madrid":
        return <RealMadridPage />;
      case "alnassr":
        return <AlNassrPage />;
      case "juventus":
        return <JuventusPage />;
      case "portugal":
        return <PortugalPage />;
      case "personal-life":
        return <PersonalLifePage />;
      case "gallery":
        return <GalleryPage />;
      case "facts-records":
        return <FactsRecordsPage />;
      case "author-of-the-site":
        return <AuthorPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
      <main className="transition-opacity duration-300">{renderPage()}</main>
    </div>
  );
}

export default App;
