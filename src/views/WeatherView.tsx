import { useState } from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import Loading from '../components/Loading';
import WeatherInfo from '../components/weather/WeatherInfo';
import WeatherMain from '../components/weather/WeatherMain';
import { DataWeatherContext } from '../context/useDataWeather';
import { useLang } from '../context/useLang';
import { LangContextType } from '../types/contextTypes';
import Error from '../components/Error';

const WeatherView = () => {
	const { pathname } = useLocation();
	const city = pathname.substr(1);
	const { lang } = useLang() as LangContextType;
	const key = process.env.REACT_APP_KEY_API_WEATHER || '';

	const [getUnits, setUnits] = useState('metric');

	const api = async (city: string, key: string, lang: string, getUnits: string) => {
		const res = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${getUnits}&appid=${key}&lang=${lang}`
		);
		const data = await res.json();
		console.log(data);

		/* const resOne = await fetch(
			`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=hourly,daily&appid=${key}`
		);

		const dataOne = await resOne.json();
		console.log(dataOne); */

		return data;
	};

	const { isLoading, data, isError } = useQuery(
		['weatherMain', city, key, lang, getUnits],
		() => api(city, key, lang, getUnits),
		{
			cacheTime: 0,
			refetchOnMount: false,
			refetchOnWindowFocus: false,
			refetchOnReconnect: false
		}
	);

	if (isLoading) return <Loading />;

	if (isError || parseInt(data.cod) === 404) return <Error />;

	return (
		<DataWeatherContext.Provider value={{ data, getUnits, setUnits }}>
			<WeatherMain />
			<WeatherInfo />
		</DataWeatherContext.Provider>
	);
};

export default WeatherView;
