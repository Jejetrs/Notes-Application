import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useInput from "../hooks/useInput";
import { register as registerAPI } from "../utils/network-data";
import { useLanguage } from "../hooks/useLanguage";

function RegisterPage() {
  const navigate = useNavigate();
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { t } = useLanguage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error: isError } = await registerAPI({ name, email, password });
    
    setLoading(false);

    if (!isError) {
      navigate("/login");
    } else {
      setError("Registrasi gagal. Periksa data Anda.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>{t.register}</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">{t.fullName}</label>
            <input 
              type="text" 
              id="name"
              placeholder={t.fullName}
              value={name}
              onChange={onNameChange}
              required 
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">{t.email}</label>
            <input 
              type="email" 
              id="email"
              placeholder={t.email}
              value={email}
              onChange={onEmailChange}
              required 
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">{t.password}</label>
            <input 
              type="password" 
              id="password"
              placeholder={`${t.password} (min. 6 characters)`}
              value={password}
              onChange={onPasswordChange}
              minLength="6"
              required 
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? t.loading : t.register}
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
        <p className="auth-link">
          {t.haveAccount} <Link to="/login">{t.loginHere}</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;