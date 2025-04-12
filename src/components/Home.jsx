import React, { useContext } from 'react'
import Contextapi from '../contextapi/Context'

function Home() {
let {fetchdata,Data,fetchdata1}= useContext(Contextapi);
fetchdata();
fetchdata1();

console.log(Data)
  return (
    <div>Home</div>
  
  )
}

export default Home