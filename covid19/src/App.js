import React,{useState, useEffect} from 'react'
import FrontScreen from './frontscreen/FrontScreen'

const App = ()=>{
  const [data,setData] = useState([])
  
  useEffect(()=>{
    fetch("https://api.covid19india.org/data.json")
    .then((res)=>res.json())
    .then((json)=>{
      setData(json.statewise)
    })
  },[])
  return (
    <div>
      <FrontScreen dataList={data}/>
    </div>
  )
}

export default App