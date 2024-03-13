import React from 'react';
import { useTranslation } from 'react-i18next';

const CrowdinPage = () => {
  const { t } = useTranslation('translations');
  
  return (
    <div>
        <h2>{t("Crowdin")}</h2>
          <h3>{t("ventajasCrowdin")}</h3>
          <p>{t("Crowdin_evaluation_ventajas_1")}</p>
          <p>{t("Crowdin_evaluation_ventajas_2")}</p>
          <p>{t("Crowdin_evaluation_ventajas_3")}</p>
          <p>{t("Crowdin_evaluation_ventajas_4")}</p>
          <h3>{t("DesventajasCrowdin")}</h3>
          <p>{t("Crowdin_evaluation_desventajas")}</p>
          <h3>{t("Crowdin_precio")}</h3>
          <p>{t("Crowdin_evaluation_precio")}</p>
    </div>
  );
};

export default CrowdinPage;