function ForeCastCurrentDayHourly({ state }) {
  return (
    state.forecastCurrentDay &&
    <div className='forecast-current-day-hourly d-flex gap-4 mt-5 pb-4'>
      {
        state.forecastCurrentDay.forecast.forecastday.map(obj => (
          obj.hour.map(obj => (
            <div key={obj.time_epoch} className='text-center'>
              <div>{obj.time.split(' ')[1]}</div>
              <img src={obj.condition.icon} />
              <div>{obj.condition.text}</div>
            </div>
          ))
        ))
      }
    </div>
  );
}

export default ForeCastCurrentDayHourly;
