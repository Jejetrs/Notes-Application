import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import useInput from "../hooks/useInput";
import { login as loginAPI } from "../utils/network-data";
import { useLanguage } from "../hooks/useLanguage";

function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { t } = useLanguage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    const { error, data } = await loginAPI({ email, password });
    
    setLoading(false);

    if (!error) {
      login(data.accessToken);
      navigate("/");
    } else {
      setErrorMessage("Login gagal. Periksa email dan password Anda.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>{t.login}</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
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
              placeholder={t.password}
              value={password}
              onChange={onPasswordChange}
              required 
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? t.loading : t.login}
          </button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <p className="auth-link">
          {t.noAccount} <Link to="/register">{t.registerHere}</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;