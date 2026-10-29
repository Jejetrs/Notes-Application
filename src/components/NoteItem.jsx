import React from "react";
import { Link } from "react-router-dom";
import { FiTrash2, FiArchive, FiArrowUpCircle, FiEdit2 } from "react-icons/fi";
import PropTypes from "prop-types";

function NoteItem({ id, title, createdAt, body, onDelete, onArchive, isArchived }) {
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('id-ID', options);
  };

  const stripHtml = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  return (
    <div className="note-item">
      <Link to={`/notes/${id}`} className="note-item__link">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{formatDate(createdAt)}</p>
        <p className="note-item__body">{stripHtml(body).substring(0, 100)}...</p>
      </Link>

      <div className="note-item__actions">
        <Link 
          to={`/notes/edit/${id}`}
          className="action-btn edit-btn" 
          title="Edit"
        >
          <FiEdit2 />
        </Link>
        <button 
          className="action-btn archive-btn" 
          onClick={() => onArchive(id)} 
          title={isArchived ? "Batal Arsip" : "Arsipkan"}
        >
          {isArchived ? <FiArrowUpCircle /> : <FiArchive />}
        </button>
        <button 
          className="action-btn delete-btn" 
          onClick={() => onDelete(id)} 
          title="Hapus"
        >
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  isArchived: PropTypes.bool,
};

NoteItem.defaultProps = {
  isArchived: false,
};

export default NoteItem;