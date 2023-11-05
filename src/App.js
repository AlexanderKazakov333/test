import './App.css';
import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import {useState} from "react";

function App() {
  
  const API_KEY = '317147e078c54d6c882102156230710'
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [error400, setError400] = useState(false)
  const [error404, setError404] = useState(false)

    window.onload = async function windowF() {
      try{
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Bishkek&aqi=no`)
        const data = await response.json()
        if(response.status === 200){
          setIsActive(true)
          setWeather(data)
        } else if(response.status === 400) {
          setError400(true)
          setCity('')
        } 
      }
      catch (error){
        setError404(true)
        setCity('')
      }
  
      finally{
        setIsLoading(false)
      }
    }
    

  const getWeather = async () => {
    setIsLoading(true)
    try{
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`)
      const data = await response.json()
      if(response.status === 200){
        setIsActive(true)
        setWeather(data)
      } else if(response.status === 400) {
        setError400(true)
        setIsActive(null)
        setWeather(null)
        setCity('')
      } 
    }
    catch (error){
      setError404(true)
      setIsActive(null)
      setWeather(null)
      setCity('')
    }

    finally{
      setIsLoading(false)
    }
  }


  const resetF = async () => {
    setIsActive(null)
    setWeather(null)
    setCity('')
    setError400(false)
    setError404(false)
      try{
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Bishkek&aqi=no`)
        const data = await response.json()
        if(response.status === 200){
          setIsActive(true)
          setWeather(data)
        } else if(response.status === 400) {
          setError400(true)
        } 
      }
      catch (error){
        setError404(true)
      }
  
      finally{
        setIsLoading(false)
      }

  }

  
  
    return (
    <div className="App">
      <Header/>
      <Main
        setCity={setCity}
        getWeather={getWeather}
        weather={weather}
        isLoading={isLoading}
        isActive={isActive}
        resetF = {resetF}
        city = {city}
        error400 = {error400}
        error404 = {error404}
      />
      <Footer />
    </div>
  );
}

export default App;
