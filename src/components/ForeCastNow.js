function ForeCastNow({ state, getDayName }) {
  return (
    state.forecastCurrentDay &&
    <div className="forecast-now-container">
      <div className='mb-3'>Today's Forecast for <strong>{state.forecastCurrentDay.location.country}, {state.forecastCurrentDay.location.name}</strong></div>
        {
          state.forecastCurrentDay.forecast.forecastday.map(obj => (
            obj.hour.map(obj => (
              obj.time === new Date().toISOString().slice(0, 14).replace('T', ' ') + '00' &&
              <div key={obj.time_epoch} className='d-flex justify-content-between flex-wrap gap-5'>
                <div className='d-flex gap-5'>
                  <div className='d-flex align-items-center'>
                    <img style={{ width: '80px' }} src={obj.condition.icon} />
                    <div>
                      <div className='fs-1 fw-bold d-flex align-items-center'>{obj.temp_c}&deg;<sup className='fs-6'>C</sup></div>
                      <div className='fs-1 fw-bold d-flex align-items-center'>{obj.temp_f}&deg;<sup className='fs-6'>F</sup></div>
                    </div>
                  </div>
                  <div className='mt-2 d-flex flex-column gap-1'>
                    <div style={{ fontSize: '14px' }}><b>Precipitation:</b> {obj.precip_in}%</div>
                    <div style={{ fontSize: '14px' }}><b>Wind:</b> {obj.wind_kph} km/h</div>
                    <div style={{ fontSize: '14px' }}><b>Humidity:</b> {obj.humidity}%</div>
                    <div style={{ fontSize: '14px' }}><b>UV Index:</b> {obj.uv}</div>
                  </div>
                </div>
                <div className='weather-date-time text-end'>
                  <div className='fs-4 fw-bold'>Weather</div>
                  <div>{getDayName(state.forecastCurrentDay.forecast.forecastday[0].date)} {state.forecastCurrentDay.location.localtime.split(' ')[1]}</div>
                  <div>{obj.condition.text}</div>
                </div>
              </div>
            ))
          ))
        }
    </div>
    // state.forecastCurrentDay &&
    // <div className="forecast-now-container">
    //   <div className='mb-3'>Today's Forecast for <strong>{state.forecastCurrentDay.location.country}, {state.forecastCurrentDay.location.name}</strong></div>
    //   <div className='d-flex justify-content-between flex-wrap gap-5'>
    //     <div className='d-flex gap-5'>
    //       <div className='d-flex align-items-center'>
    //         <img style={{ width: '80px' }} src={state.forecastCurrentDay.forecast.forecastday[0].day.condition.icon} />
    //         <div>
    //           <div className='fs-1 fw-bold d-flex align-items-center'>{state.forecastCurrentDay.forecast.forecastday[0].day.mintemp_c}&deg;<sup className='fs-6'>C</sup></div>
    //           <div className='fs-1 fw-bold d-flex align-items-center'>{state.forecastCurrentDay.forecast.forecastday[0].day.mintemp_f}&deg;<sup className='fs-6'>F</sup></div>
    //         </div>
    //       </div>
    //       <div className='mt-2 d-flex flex-column gap-1'>
    //         <div style={{ fontSize: '14px' }}><b>Precipitation:</b> {state.forecastCurrentDay.current.precip_in}%</div>
    //         <div style={{ fontSize: '14px' }}><b>Wind:</b> {state.forecastCurrentDay.current.wind_kph} km/h</div>
    //         <div style={{ fontSize: '14px' }}><b>Humidity:</b> {state.forecastCurrentDay.current.humidity}%</div>
    //         <div style={{ fontSize: '14px' }}><b>UV Index:</b> {state.forecastCurrentDay.forecast.forecastday[0].day.uv}</div>
    //       </div>
    //     </div>
    //     <div className='weather-date-time text-end'>
    //       <div className='fs-4 fw-bold'>Weather</div>
    //       <div>{getDayName(state.forecastCurrentDay.forecast.forecastday[0].date)} {state.forecastCurrentDay.location.localtime.split(' ')[1]}</div>
    //       <div>{state.forecastCurrentDay.forecast.forecastday[0].day.condition.text}</div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default ForeCastNow;
