import React,{useEffect,useState} from 'react'
import "./home.css"

const Home = () => {
    const [time, setTime] = useState(new Date())
    const refreshTime = ()=>{
        setTime(new Date())
    }
    useEffect(() => {
        const timer =  setInterval(refreshTime,1000)
        return function cleanTime() {
            clearInterval(timer);
          };
    }, [])

    
    return (
        <div className="jumbotron">
            <div className="content">
                <h3 className="welcome-message">Welcome Chief!</h3>
                <h3 className="date">{time.toLocaleDateString()}</h3>
                <h1 className="local-time">{time.toLocaleTimeString()}</h1>
            </div>
        </div>
    )
}

export default Home
