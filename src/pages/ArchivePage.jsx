import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NotesList from "../components/NotesList";
import SearchBar from "../components/SearchBar";
import { getArchivedNotes, deleteNote, unarchiveNote } from "../utils/network-data";
import { useLanguage } from "../hooks/useLanguage";

function ArchivePage() {
  const [notes, setNotes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const { t, language } = useLanguage();

  // Debug: Cek translation
  console.log("ArchivePage Language:", language);
  console.log("archivedNotes:", t.archivedNotes);
  console.log("emptyArchiveTitle:", t.emptyArchiveTitle);
  console.log("emptyArchiveMessage:", t.emptyArchiveMessage);

  // Ambil keyword dari URL
  const keyword = searchParams.get("keyword") || "";

  const fetchArchived = async () => {
    setLoading(true);
    const { error, data } = await getArchivedNotes();
    if (!error) setNotes(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchArchived();
  }, []);

  const onDelete = async (id) => {
    const confirmed = window.confirm(t.deleteConfirm);
    if (confirmed) {
      await deleteNote(id);
      fetchArchived();
    }
  };

  const onUnarchive = async (id) => {
    await unarchiveNote(id);
    fetchArchived();
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
      <h2>{t.archivedNotes}</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChange} />
      {loading ? (
        <div className="loading">
          <div className="spinner"></div>
          <p>{t.loadingArchive}</p>
        </div>
      ) : (
        <>
          {filteredNotes.length > 0 ? (
            <NotesList 
              notes={filteredNotes} 
              onDelete={onDelete} 
              onArchive={onUnarchive}
              isArchived={true}
            />
          ) : (
            <div className="empty-state">
              <div className="empty-state__icon">🔍</div>
              <h3 className="empty-state__title">
                {keyword ? t.notFoundTitle : t.emptyArchiveTitle}
              </h3>
              <p className="empty-state__message">
                {keyword 
                  ? t.notFoundMessage.replace('{keyword}', keyword)
                  : t.emptyArchiveMessage
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

export default ArchivePage;