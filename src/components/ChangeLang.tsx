import { useLang } from '../context/useLang';
import { LangContextType } from '../types/contextTypes';
import i18n from '../i18n';
import { ChangeLangStyle } from '../styles/components/ChangeLangStyles';
import { useTranslation } from 'react-i18next';

const ChangeLang = () => {
	const { setLang } = useLang() as LangContextType;
	const { t } = useTranslation();

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
		setLang(lng);
	};

	return (
		<ChangeLangStyle>
			<li>
				<button onClick={() => changeLanguage('pl')}>
					<img
						src="https://flagcdn.com/w40/pl.png"
						alt={t('lang_polish')}
						title={`${t('change_lang')} ${t('lang_polish')}`}
					/>
				</button>
			</li>
			<li>
				<button onClick={() => changeLanguage('en')}>
					<img
						src="https://flagcdn.com/w40/us.png"
						alt={t('lang_usa')}
						title={`${t('change_lang')} ${t('lang_usa')}`}
					/>
				</button>
			</li>
		</ChangeLangStyle>
	);
};

export default ChangeLang;
