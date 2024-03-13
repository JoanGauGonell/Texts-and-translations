const initialState = {
    selectedLanguages: [],
    saveMessage: '',
    availableLanguages: [
      { id: 'en', label: 'English' },
      { id: 'de', label: 'German' },
      { id: 'es', label: 'Spanish' },
      { id: 'fr', label: 'French' },
    ],
  };
  
  const languageReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_LANGUAGE':
        const isSelected = state.selectedLanguages.includes(action.payload);
        return {
          ...state,
          selectedLanguages: isSelected
            ? state.selectedLanguages.filter(id => id !== action.payload)
            : [...state.selectedLanguages, action.payload],
        };
      case 'SAVE_LANGUAGES':
        return {
          ...state,
          saveMessage: 'Your preferences have been saved.'
        };
      default:
        return state;
    }
  };
  
  export default languageReducer;
  