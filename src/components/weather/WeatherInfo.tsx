import WeatherInfoBox from './WeatherInfoBox';
import { useDataWeather } from '../../context/useDataWeather';
import { DataWeatherContextType } from '../../types/contextTypes';
import { faThermometer, faLevelDownAlt, faLongArrowAltUp, faCloud } from '@fortawesome/free-solid-svg-icons';
import { ConvertSpeed, ConvertTemp } from './ConvertUnits';
import { useTranslation } from 'react-i18next';

const WeatherInfo = () => {
	const { data } = useDataWeather() as DataWeatherContextType;
	const { t } = useTranslation();

	return (
		<section className="weather_info">
			<div className="container">
				<WeatherInfoBox title={t('weather_feels_like')} icon={faThermometer}>
					<ConvertTemp temp={data.main.feels_like} degrees={true} />
				</WeatherInfoBox>

				<WeatherInfoBox title={t('weather_pressure')} icon={faLevelDownAlt}>
					{data.main.pressure} hPa
				</WeatherInfoBox>

				<WeatherInfoBox title={t('weather_wind')} icon={faLongArrowAltUp} rotate={data.wind.deg}>
					<ConvertSpeed speed={data.wind.speed} />
				</WeatherInfoBox>

				<WeatherInfoBox title={t('weather_cloudiness')} icon={faCloud}>
					{data.clouds.all}%
				</WeatherInfoBox>
			</div>
		</section>
	);
};

export default WeatherInfo;
