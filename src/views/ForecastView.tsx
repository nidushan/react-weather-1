import { Link, useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { useGlobal } from '../context/useGlobal';
import { GlobalContextType } from '../types/contextTypes';
import { Container } from '../styles/global';
import { ForecastOptionsStyle, ForecastTitleStyle, ForecastButtonBackStyle } from '../styles/views/ForecastViewStyles';
import Loading from '../components/Loading';
import Error from '../components/Error';
import ForecastList from '../components/forecast/ForecastList';
import Flags from '../components/Flags';
import WeatherUnits from '../components/weather/WeatherUnits';

const ForecastView = () => {
  const { pathname } = useLocation();
  const city = pathname.split('/')[1];
  const key = process.env.REACT_APP_KEY_API_WEATHER || '';
  const { lang, getUnits } = useGlobal() as GlobalContextType;
  const { t } = useTranslation();

  const api = async (city: string, key: string, lang: string, units: string) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${key}&lang=${lang}`
    );
    const data = await res.json();
    console.log(data);

    return data;
  };

  const { isLoading, data, isError } = useQuery(
    ['weatherForecast', city, key, lang, getUnits],
    () => api(city, key, lang, getUnits),
    {
      cacheTime: 0,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false
    }
  );

  if (isLoading) return <Loading />;
  if (isError || parseInt(data.cod) === 401) return <Error code={500}>{t('error_500_weather')}</Error>;
  if (parseInt(data.cod) === 404) return <Error code={404}>{t('error_404_weather')}</Error>;

  return (
    <Container>
      <ForecastTitleStyle>
        <h1>
          {data.city.name} <Flags country={data.city.country} />
        </h1>
      </ForecastTitleStyle>

      <ForecastOptionsStyle>
        <Link to={`/${city}`}>
          <ForecastButtonBackStyle>
            <FontAwesomeIcon icon={faChevronLeft} /> {t('forecast_button_back')}
          </ForecastButtonBackStyle>
        </Link>

        <WeatherUnits />
      </ForecastOptionsStyle>

      <ForecastList list={data.list} />
    </Container>
  );
};

export default ForecastView;
