import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NotesList from "../components/NotesList";
import SearchBar from "../components/SearchBar";
import { getActiveNotes, deleteNote, archiveNote } from "../utils/network-data";
import { useLanguage } from "../hooks/useLanguage";

function HomePage() {
  const [notes, setNotes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  
  // Cek useLanguage
  let t;
  try {
    const langContext = useLanguage();
    t = langContext.t;
  } catch (error) {
    // Fallback ke bahasa Indonesia
    console.error("LanguageContext not available:", error);
    t = {
      activeNotes: "Catatan Aktif",
      loadingNotes: "Memuat catatan...",
      notFoundTitle: "Tidak Ditemukan",
      notFoundMessage: "Tidak ada catatan yang cocok dengan pencarian '{keyword}'",
      noNotesTitle: "Belum Ada Catatan",
      noNotesMessage: "Mulai buat catatan pertama Anda dengan klik tombol + di atas",
      clearSearch: "Hapus Pencarian",
      deleteConfirm: "Yakin ingin menghapus catatan ini?"
    };
  }

  // Ambil keyword dari URL
  const keyword = searchParams.get("keyword") || "";

  const fetchNotes = async () => {
    setLoading(true);
    const { error, data } = await getActiveNotes();
    if (!error) setNotes(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const onDelete = async (id) => {
    const confirmed = window.confirm(t.deleteConfirm);
    if (confirmed) {
      await deleteNote(id);
      fetchNotes();
    }
  };

  const onArchive = async (id) => {
    await archiveNote(id);
    fetchNotes();
  };

  // Update URL saat keyword berubah
  const onKeywordChange = (newKeyword) => {
    if (newKeyword) {
      setSearchParams({ keyword: newKeyword });
    } else {
      setSearchParams({});
    }
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <section className="notes-page">
      <h2>{t.activeNotes}</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChange} />
      {loading ? (
        <div className="loading">
          <div className="spinner"></div>
          <p>{t.loadingNotes}</p>
        </div>
      ) : (
        <>
          {filteredNotes.length > 0 ? (
            <NotesList notes={filteredNotes} onDelete={onDelete} onArchive={onArchive} />
          ) : (
            <div className="empty-state">
              <div className="empty-state__icon">🔍</div>
              <h3 className="empty-state__title">
                {keyword ? t.notFoundTitle : t.noNotesTitle}
              </h3>
              <p className="empty-state__message">
                {keyword 
                  ? t.notFoundMessage.replace('{keyword}', keyword)
                  : t.noNotesMessage
                }
              </p>
              {keyword && (
                <button 
                  className="empty-state__button"
                  onClick={() => onKeywordChange("")}
                >
                  {t.clearSearch}
                </button>
              )}
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default HomePage;