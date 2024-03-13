import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';


function LanguageSelector() {
  const { i18n } = useTranslation();
  const selectedLanguages = useSelector(state => state.language.selectedLanguages);
  const availableLanguages = useSelector(state => state.language.availableLanguages);
  const dispatch = useDispatch();

  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const handleChangeLanguage = (event) => {
    const newLanguage = event.target.value;
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };
  return (
    <select onChange={handleChangeLanguage} value={currentLanguage}>
      {selectedLanguages.map(langId => {
        const language = availableLanguages.find(lang => lang.id === langId);
        return (
          <option key={langId} value={langId}>
            {language.label}
          </option>
        );
      })}
    </select>
  );
}

export default LanguageSelector;
