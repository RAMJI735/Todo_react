import React, { useContext, useEffect, useState } from 'react'
import ContextApi from 'e:/Hanumant/myNoteBook/src/ContextApi/Context';
import Contextapi from '../contextapi/Context';
import Card from './Card';

function Form() {
    const [data, setdata]= useState([]);
    let {FetchTask,AddData,GetData,DeleteData}= useContext(Contextapi);
    



const getinput=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})
    console.log(data)
}

const submit=async(e)=>{
    e.preventDefault()
    AddData(data);
// fetchdata();

}

useEffect(()=>{
    FetchTask()
},[]);


  return (
    <div >




<form >
<h1 style={{display: 'flex', justifyContent:'center', fontSize:40, backgroundColor:"red"}}>TODO LIST</h1>
<div style={{display: 'flex', justifyContent:'center', fontSize:40,flexDirection:"column"}}>
    <label htmlFor="todo" style={{textAlign:"center"}} >Task</label>
    <input type="text" name="task" style={{padding:10,width:200,margin:"auto"}}  id='todo' onChange={getinput} />

    <button onClick={submit} style={{margin:"auto",padding:"10" ,marginTop:10}}>Add task</button>
</div>
</form>

<div>
    
</div>

<div style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>


{GetData.map((element,i)=>{
return(
<div key={i}>
<Card task={element.task} id={element._id} DeleteData={DeleteData} />
</div>
)})}

</div>

</div>
)




}

export default Form