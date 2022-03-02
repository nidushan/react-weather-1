import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';
import { DarkModeButtonStyle } from '../styles/components/DarkModeButtonStyles';

const DarkModeButton = () => {
  const { t } = useTranslation();

  return (
    <label className="switch">
    <DarkModeButtonStyle title={t('darkmode_button')} aria-label={t('darkmode_button')}>
      <FontAwesomeIcon icon={faAdjust} />
      <input type="checkbox"/>
    </DarkModeButtonStyle>
    </label>
  );
};
export default DarkModeButton;
