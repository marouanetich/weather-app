import 'bootstrap/dist/css/bootstrap.min.css';
import './Weather.css';
import { useState, useEffect, useReducer } from 'react';
import LoadingWeather from './components/LoadingWeather';
import Search from './components/Search';
import ForeCastNow from './components/ForeCastNow';
import ForeCastCurrentDay from './components/ForeCastCurrentDayHourly';
import ForeCast7Days from './components/ForeCast7Days';

const initialState = {
  forecastCurrentDay: null,
  forecast7Days: null,
  loading: true,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_SUCCESS': {
      return {
        ...state,
        forecastCurrentDay: action.payload,
        loading: false
      };
    }
    case 'FETCH_SUCCESS_7_DAYS': {
      return {
        ...state,
        forecast7Days: action.payload,
        loading: false
      };
    }
    case 'FETCH_ERROR': {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }
    default: {
      return state;
    }
  }
}

function WeatherApp() {
  const [city, setCity] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);
  const [date, setDate] = useState(getCurrentDate);
  const apiKey = process.env.REACT_APP_API_KEY;

  async function fetchData(url, type) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (response.status === 200) {
        dispatch({ type, payload: data });
      } else {
        dispatch({ type: 'FETCH_DOES_NOT_EXIST' });
      }
    } catch (err) {
      dispatch({ type: 'FETCH_ERROR', payload: err.message });
    }
  }

  useEffect(() => {
    if (!city) {
      fetchData(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=khouribga&date=${date}`, 'FETCH_SUCCESS');
      fetchData(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=khouribga&days=7`, 'FETCH_SUCCESS_7_DAYS');
    }
  }, [date]);

  useEffect(() => {
    if (city) {
      fetchData(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&date=${date}`, 'FETCH_SUCCESS');
      fetchData(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7`, 'FETCH_SUCCESS_7_DAYS');
    }
  }, [city, date]);

  function getDayName(localTime) {
    const dayNumber = new Date(localTime).getDay();
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = weekDays[dayNumber];
    return dayName;
  }

  // Get the current date in this format YYYY-MM-DD
  function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  
  if (state.error) {
    console.log(state.error);
  }

  if (state.loading) {
    return <LoadingWeather />;
  }

  console.log(state.forecastCurrentDay);
  console.log(state.forecast7Days);

  return (
    <div className='container my-4'>
      <Search setCity={setCity} />
      <div className='weather-container mt-4 p-3'>
        <ForeCastNow state={state} getDayName={getDayName} />
        <ForeCastCurrentDay state={state} />
        <ForeCast7Days state={state} getDayName={getDayName} setDate={setDate} />
      </div>
    </div>
  );
}

export default WeatherApp;
