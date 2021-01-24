import { DataWeatherContextType, useDataWeather } from '../../context/useDataWeather';
import WeatherIcon from './WeatherIcon';
import WeatherTemp from './WeatherTemp';

const WeatherMain = () => {
	const { data } = useDataWeather() as DataWeatherContextType;

	return (
		<section className="weather">
			<div className="container">
				<h1 className="weather_title">
					{data.name}, {data.sys.country}
				</h1>

				<WeatherIcon />

				<WeatherTemp />
			</div>
		</section>
	);
};

export default WeatherMain;