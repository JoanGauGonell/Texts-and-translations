export const changeLanguage = newLanguage => ({
    type: 'CHANGE_LANGUAGE',
    payload: newLanguage
  });
export 
    const toggleLanguage = language => ({
    type: 'TOGGLE_LANGUAGE',
    payload: language
  });
  
  export const saveLanguages = () => ({
    type: 'SAVE_LANGUAGES'
  });