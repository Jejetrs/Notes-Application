import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';

function NotFoundPage() {
  const { t } = useLanguage();
  
  return (
    <section className="detail-page">
      <h2>404 - {t.notFound}</h2>
      <p>{t.pageNotFoundMessage || "Maaf, halaman yang Anda cari tidak dapat ditemukan."}</p>
      <p>
        <Link to="/">{t.backToHome || "Kembali ke Beranda"}</Link>
      </p>
    </section>
  );
}

export default NotFoundPage;