import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  getNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from "../utils/network-data";
import { FiTrash2, FiArchive, FiArrowUpCircle, FiEdit2 } from "react-icons/fi";
import { useLanguage } from "../hooks/useLanguage";

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    async function fetchNote() {
      setLoading(true);
      const { error, data } = await getNote(id);
      if (!error) setNote(data);
      setLoading(false);
    }
    fetchNote();
  }, [id]);

  const onDelete = async () => {
    const confirmed = window.confirm(t.deleteConfirm);
    if (confirmed) {
      await deleteNote(id);
      navigate("/");
    }
  };

  const onArchive = async () => {
    await archiveNote(id);
    navigate("/archives");
  };

  const onUnarchive = async () => {
    await unarchiveNote(id);
    navigate("/");
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>{t.loadingNotes}</p>
      </div>
    );
  }

  if (!note) {
    return (
      <section className="detail-page">
        <p className="empty-message">{t.notFound}</p>
      </section>
    );
  }

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(date).toLocaleDateString('id-ID', options);
  };

  return (
    <section className="detail-page">
      <h2>{note.title}</h2>
      <p>{t.createdAt} {formatDate(note.createdAt)}</p>
      <div 
        className="detail-page__content"
        dangerouslySetInnerHTML={{ __html: note.body }} 
      />
      <div className="detail-page__actions">
        <button onClick={onDelete} title={t.delete} className="btn-delete">
          <FiTrash2 /> {t.delete}
        </button>
        <Link to={`/notes/edit/${id}`} className="btn-edit" title={t.edit || "Edit"}>
          <FiEdit2 /> {t.edit || "Edit"}
        </Link>
        {note.archived ? (
          <button onClick={onUnarchive} title={t.unarchive} className="btn-archive">
            <FiArrowUpCircle /> {t.unarchive}
          </button>
        ) : (
          <button onClick={onArchive} title={t.archiveAction} className="btn-archive">
            <FiArchive /> {t.archiveAction}
          </button>
        )}
      </div>
    </section>
  );
}

export default DetailPage;