import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';

function NotesList({ notes, onDelete, onArchive, isArchived }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem 
          key={note.id} 
          {...note} 
          onDelete={onDelete}
          onArchive={onArchive}
          isArchived={isArchived}
        />
      ))}
    </div>
  );
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  isArchived: PropTypes.bool,
};

NotesList.defaultProps = {
  isArchived: false,
};

export default NotesList;