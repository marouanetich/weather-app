import { useState } from 'react';

function ForeCast7Days({ state, getDayName, setDate }) {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  const handleDayClick = (index, date) => {
    setDate(date);
    setSelectedDayIndex(index);
  };

  return (
    state.forecast7Days &&
    <div className='forecast-7-days mt-4'>
      <div className='text-uppercase fw-bold mb-3'>3-day forecast</div>
      <div className='d-flex align-items-center justify-content-between gap-5'>
        {state.forecast7Days.forecast.forecastday.map((obj, index) => (
          <div
            style={{ cursor: 'pointer' }}
            className={`text-center p-3 rounded-4 pointer ${selectedDayIndex === index ? 'visible' : ''}`}
            key={obj.date_epoch}
            onClick={() => handleDayClick(index, obj.date)}
          >
            <div>{getDayName(obj.date).substring(0, 3)}</div>
            <img src={obj.day.condition.icon} alt={`Weather icon for ${getDayName(obj.date)}`} />
            <div className='d-flex gap-2 justify-content-center' style={{ fontSize: '14px' }}>
              <span>{obj.day.maxtemp_c}&deg;</span>
              <span>{obj.day.mintemp_c}&deg;</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ForeCast7Days;
