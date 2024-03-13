import React from 'react';
import { useTranslation } from 'react-i18next';

const PhrasePage = () => {
  const { t } = useTranslation('translations');
  
  return (
    <div>
        <h2>{t("Phrase")}</h2>
          <h3>{t("ventajasPhrase")}</h3>
          <p>{t("Phrase_evaluation_ventajas_1")}</p>
          <p>{t("Phrase_evaluation_ventajas_2")}</p>
          <p>{t("Phrase_evaluation_ventajas_3")}</p>
          <h3>{t("Desventajas_Phrase")}</h3>
          <p>{t("Phrase_evaluation_desventajas")}</p>
          <h3>{t("Phrase_precio")}</h3>
          <p>{t("Phrase_evaluation_precio")}</p>
    </div>
  );
};

export default PhrasePage;