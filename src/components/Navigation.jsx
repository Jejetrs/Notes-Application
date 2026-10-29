import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut, FiPlusCircle, FiArchive, FiSun, FiMoon, FiGlobe, FiUser } from "react-icons/fi";
import { useTheme } from "../hooks/useTheme";
import { useAuth } from "../hooks/useAuth";
import { useLanguage } from "../hooks/useLanguage";

function Navigation() {
  const navigate = useNavigate();
  const { logout, authUser } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  const onLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="app-header">
      <h1 className="app-title">
        <Link to="/">{t.appTitle}</Link>
      </h1>

      <nav className="nav-menu">
        <Link to="/notes/new" className="nav-btn" title={t.addNote}>
          <FiPlusCircle size={20} />
        </Link>
        <Link to="/archives" className="nav-btn" title={t.archive}>
          <FiArchive size={20} />
        </Link>
        <button 
          className="nav-btn" 
          onClick={toggleLanguage} 
          title={language === "id" ? "Change to English" : "Ubah ke Indonesia"}
        >
          <FiGlobe size={20} />
          <span style={{ fontSize: '0.75rem', marginLeft: '0.25rem' }}>
            {language.toUpperCase()}
          </span>
        </button>
        <button className="nav-btn" onClick={toggleTheme} title="Toggle Theme">
          {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
        </button>
        <button className="nav-btn" onClick={onLogout} title={t.logout}>
          <FiLogOut size={20} />
        </button>
        {authUser && (
          <div className="user-info">
            <FiUser size={16} />
            <span className="user-name">{authUser.name}</span>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navigation;