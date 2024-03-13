import React from 'react';
import { useTranslation } from 'react-i18next';

const TransifexPage = () => {
  const { t } = useTranslation('translations');
  
  return (
    <div>
      <h2>{t("Transifex")}</h2>
          <h3>{t("ventajasTransifex")}</h3>
          <p>{t("Transifex_evaluation_ventajas_1")}</p>
          <p>{t("Transifex_evaluation_ventajas_2")}</p>
          <p>{t("Transifex_evaluation_ventajas_3")}</p>
          <h3>{t("Desventajas_Transitex")}</h3>
          <p>{t("Transifex_evaluation_costo")}</p>
          <h3>{t("Transifex_precio")}</h3>
          <p>{t("Transifex_evaluation_precio")}</p>
    </div>
  );
};

export default TransifexPage;
