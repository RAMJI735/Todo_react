

import React, { useState } from 'react'
import contextapi from './Context'

function ContextState({children}) {
 const[GetData, setGetData]= useState([]);

     let DataProvider= contextapi.Provider;

   



    //  add task

const AddData=async(data)=>{
  
    let res= await fetch("http://localhost:8080/add",{
              method:"POST",
              headers: {
                  "Content-Type": "application/json",
                  

              },
              body: JSON.stringify(data),
          }) 
        
      let resulted=  await res.json();
      console.log(resulted);
        FetchTask()
        
        }



// fetch task

const FetchTask=async()=>{

  let res= await fetch("http://localhost:8080/");



let result=  await res.json();
console.log(result);
setGetData(result)
console.log(GetData)


}

// Delete task

const DeleteData=async(id)=>{
  console.log(id)
  let res= await fetch(`http://localhost:8080/${id}/delete`,{
            method:"Delete",
            
        
        }) 
      
    let result=  await res.json();
    console.log(result);

    setGetData(GetData.filter((element) => element._id !== id));
    
      }


      const updateNotes = async (noteId, note) => {
        const response = await fetch(
          `http://localhost:8080/edit/${noteId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              
            },
            body: JSON.stringify(note),
          }
        );
        const data = await response.json();
        console.log(data);
        if (data.success) {
          let newNotes = JSON.parse(JSON.stringify(GetData));
    
          for (let i = 0; i < newNotes.length; i++) {
            let elements = newNotes[i];
            if (noteId === elements._id) {
              elements.task = note.task;
              break;
            }
          }
          setGetData(newNotes);
        }    
      }






  return (
    <DataProvider value={{FetchTask,GetData,setGetData,AddData,DeleteData,updateNotes}}>
        {children}
    </DataProvider>
  )
}

export default ContextState