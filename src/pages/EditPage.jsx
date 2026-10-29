import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getNote, deleteNote, addNote } from "../utils/network-data";
import { FiCheck, FiX } from "react-icons/fi";
import { useLanguage } from "../hooks/useLanguage";

function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [note, setNote] = useState(null);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    async function fetchNote() {
      setLoading(true);
      const { error, data } = await getNote(id);
      if (!error && data) {
        setNote(data);
        setTitle(data.title);
        setBody(data.body);
      } else {
        navigate("/");
      }
      setLoading(false);
    }
    fetchNote();
  }, [id, navigate]);

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onBodyInput = (e) => {
    setBody(e.target.innerHTML);
  };

  const onSaveHandler = async () => {
    if (!title.trim() || !body.trim()) {
      alert("Judul dan isi catatan tidak boleh kosong!");
      return;
    }

    setSaving(true);
    
    // Strategi: Hapus catatan lama, buat baru dengan data yang sudah diedit
    // Karena API tidak mendukung edit langsung
    const { error: deleteError } = await deleteNote(id);
    
    if (!deleteError) {
      const { error: createError, data } = await addNote({ title, body });
      setSaving(false);
      
      if (!createError && data) {
        navigate(`/notes/${data.id}`);
      } else {
        alert("Gagal menyimpan perubahan!");
      }
    } else {
      setSaving(false);
      alert("Gagal menyimpan perubahan!");
    }
  };

  const onCancelHandler = () => {
    navigate(`/notes/${id}`);
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
      <section>
        <p className="empty-message">{t.notFound}</p>
      </section>
    );
  }

  return (
    <section>
      <h2>{t.editNote || "Edit Catatan"}</h2>
      {saving ? (
        <div className="loading">
          <div className="spinner"></div>
          <p>{t.saving || "Menyimpan..."}</p>
        </div>
      ) : (
        <>
          <div className="add-new-page__input">
            <input
              className="add-new-page__input__title"
              type="text"
              placeholder={t.noteTitle}
              value={title}
              onChange={onTitleChange}
            />
            <div
              className="add-new-page__input__body"
              data-placeholder={t.noteBody}
              contentEditable
              onInput={onBodyInput}
              dangerouslySetInnerHTML={{ __html: body }}
            />
          </div>
          <div className="add-new-page__action">
            <button
              className="action action-cancel"
              type="button"
              title={t.cancel || "Batal"}
              onClick={onCancelHandler}
            >
              <FiX /> {t.cancel || "Batal"}
            </button>
            <button
              className="action action-save"
              type="button"
              title={t.save}
              onClick={onSaveHandler}
            >
              <FiCheck /> {t.save}
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default EditPage;