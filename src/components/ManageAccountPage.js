import React from 'react';
import Header from './Header';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLanguage, saveLanguages } from '../actions/languageActions';

const ManageAccountPage = () => {
  const dispatch = useDispatch();
  const selectedLanguages = useSelector(state => state.language.selectedLanguages);
  const saveMessage = useSelector(state => state.language.saveMessage);
  const availableLanguages = useSelector(state => state.language.availableLanguages);

  const handleToggleLanguage = (lang) => {
    dispatch(toggleLanguage(lang));
  };

  const handleSave = () => {
    dispatch(saveLanguages());
  };

  return (
    <div>
      <Header />
      <h2>Manage Account Page</h2>
      <div>
        <form>
          {availableLanguages.map((language) => (
            <label key={language.id}>
              <input
                type="checkbox"
                checked={selectedLanguages.includes(language.id)}
                onChange={() => handleToggleLanguage(language.id)}
              />
              {language.label}
            </label>
          ))}
          <button type="button" onClick={handleSave}>Save</button>
        </form>
        {saveMessage && <div>{saveMessage}</div>}
      </div>
    </div>
  );
};

export default ManageAccountPage;
