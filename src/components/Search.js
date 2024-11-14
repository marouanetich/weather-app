import { useRef } from "react";

function Search({ setCity }) {
  const inputRef = useRef();

  function clearInput() {
    inputRef.current.value = '';
    inputRef.current.focus();
  }

  return (
    <div className='d-flex align-items-center gap-3'>
      <div className='input-container'>
        <input ref={inputRef} list="cities" className='form-control' placeholder="Search for a city.." onKeyDown={({ key }) => {
          if (key === 'Enter') {
            setCity(inputRef.current.value);
          }
        }} />
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
        <i className="fa-solid fa-xmark clear-icon" onClick={clearInput}></i>
      </div>
      <button className='btn btn-sm btn-primary' onClick={() => setCity(inputRef.current.value)}>Search</button>
    </div>
  );
}

export default Search;
