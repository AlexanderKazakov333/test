import React from "react";
import './main.css';

const Main = ({setCity, getWeather, weather, isLoading, isActive, resetF, city, error400, error404}) => {

  return (
      <div className="main">

        <div>
          <input type="text" className="input-city" placeholder='Введите город' onChange={(event) => setCity(event.target.value)} value={city}/>
          <input type="button" className="button-city" value='Узнать погоду' onClick={getWeather}/>
          <input type="button" className="button-city" value='Сбросить' onClick={resetF}/>
        </div>


        

        <div className="weather">

        <div className="town-country">
        {   isActive &&
        <div>
          {isLoading ?
            <div></div>
            :
            <div className="country">
              <span>Страна:</span> {weather.location.country}
            </div>
          }
        </div>
      }



      {   isActive &&
        <div>
          {isLoading ?
            <div></div>
            :
            <div>
              <span>Город:</span> {weather.location.name}
            </div>
          }
        </div>
      }






        </div>



        

      {   isActive ?
        <div>
          {isLoading ?
            <div className="loading">Loading...</div>
            :
            <div className="tempreture">
              {weather.current.temp_c} <span>C°</span>
            </div>
          }
        </div>
        : null
      }

      {error400 && <p className="p-errors">В запросе есть синтаксическая ошибка!!!</p>}
      {error404 && <p className="p-errors">Сервер недоступен, повторите попытку позже</p>}

      <div className="param">
      {   isActive &&
        <div>
          {isLoading ?
            <div></div>
            :
            <div className="wind-str">
              <span>Сила ветра:</span> {weather.current.wind_kph} <span>км/ч</span>
            </div>
          }
        </div>
      }

      {   isActive &&
        <div>
          {isLoading ?
            <div></div>
            :
            <div>
              <span>Давление:</span> {weather.current.pressure_mb} <span>Н/м²</span>
            </div>
          }
        </div>
      }
      </div>



      
        </div>

    </div>
  )
}

export default Main;