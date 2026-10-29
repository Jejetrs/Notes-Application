import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NoteInput from "../components/NoteInput";
import { addNote } from "../utils/network-data";
import { useLanguage } from "../hooks/useLanguage";

function AddPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { t } = useLanguage();

  const onAddNoteHandler = async (note) => {
    setLoading(true);
    const { error } = await addNote(note);
    setLoading(false);
    if (!error) navigate("/");
  };

  return (
    <section>
      <h2>{t.addNewNote}</h2>
      {loading ? (
        <div className="loading">
          <div className="spinner"></div>
          <p>{t.loading}</p>
        </div>
      ) : (
        <NoteInput addNote={onAddNoteHandler} />
      )}
    </section>
  );
}

export default AddPage;