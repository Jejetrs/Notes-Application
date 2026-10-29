import React from 'react';
import PropTypes from 'prop-types';
import { FiCheck } from 'react-icons/fi';
import { useLanguage } from '../hooks/useLanguage';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyInputHandler = this.onBodyInputHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    this.setState({
      title: event.target.value,
    });
  }

  onBodyInputHandler(event) {
    this.setState({
      body: event.target.innerHTML,
    });
  }

  onSubmitHandler() {
    this.props.addNote(this.state);
  }

  render() {
    const { t } = this.props;
    
    return (
      <>
        <div className="add-new-page__input">
          <input
            className="add-new-page__input__title"
            type="text"
            placeholder={t.noteTitle}
            value={this.state.title}
            onChange={this.onTitleChangeHandler}
          />
          <div
            className="add-new-page__input__body"
            data-placeholder={t.noteBody}
            contentEditable
            onInput={this.onBodyInputHandler}
          />
        </div>
        <div className="add-new-page__action">
          <button
            className="action"
            type="button"
            title={t.save}
            onClick={this.onSubmitHandler}
          >
            <FiCheck /> {t.save}
          </button>
        </div>
      </>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
  t: PropTypes.object.isRequired,
};

function NoteInputWithLanguage(props) {
  const { t } = useLanguage();
  return <NoteInput {...props} t={t} />;
}

export default NoteInputWithLanguage;