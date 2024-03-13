import React from 'react';
import { useTranslation } from 'react-i18next';

const LocalisePage = () => {
  const { t } = useTranslation('translations');
  
  return (
    <div>
      <h2>{t("Localise")}</h2>
      <h3>{t("ventajasLokalise")}</h3>
          <p>{t("Lokalise_evaluation_ventajas_1")}</p>
          <p>{t("Lokalise_evaluation_ventajas_2")}</p>
          <p>{t("Lokalise_evaluation_ventajas_3")}</p>
          <h3>{t("Desventajas_Lokalise")}</h3>
          <p>{t("Lokalise_evaluation_desventajas")}</p>
          <h3>{t("Lokalise_precio")}</h3>
          <p>{t("Lokalise_evaluation_precio")}</p>
    </div>
  );
};

export default LocalisePage;