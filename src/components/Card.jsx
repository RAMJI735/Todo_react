import React, { useContext, useState } from 'react'
import Modal from '@mui/material/Modal';
import Contextapi from '../contextapi/Context';
import { red } from '@mui/material/colors';

function Card({task,id,DeleteData}) {

  let {updateNotes}= useContext(Contextapi);
  const[isChecked,setisChecked]=useState(false);

const [data,setdata]=useState({task:task});

  const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
    
      const changeval=(e)=>{
setdata({...data,[e.target.name]:e.target.value});
console.log(data);
      }


      const updateform = (e) => {
        e.preventDefault();
        updateNotes(id, data);
        handleClose();
    };
    
    


const Delete=()=>{
DeleteData(id);
    }

    
const handleCheck=()=>{
  setisChecked(!isChecked);
  console.log(isChecked);
}

const styles = { textDecorationLine: isChecked ? "line-through" : "none" };



  return (
    <div>

<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
       {/* <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, nam!s</div> */}

       <form className="mt-6 w-1/2 max-lg:w-full mb-0 space-y-4 rounded-lg p-4 shadow-sm sm:p-6 lg:p-8 bg-red-200" >

<div>
    <label htmlFor="task" className=""><span className='text-rose-500'>Edit Task</span></label>
    <div className="relative">
        <input id='task'
        onChange={changeval}
        value={data.task}
            name='task'
            type="text"
            
            className="w-full border-2 rounded-lg outline-none border-gray-200 mt-2 p-4 pe-12 text-sm shadow-xs"
            placeholder="Edit Task"
        />
    </div>
</div>


<button className='border-2 border-amber-800 rounded p-1 bg-white hover:bg-black hover:text-white'  type='submit' onClick={updateform}  >Update</button>

</form>
      </Modal>


<div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>



     <label >
      <input type="checkbox" onClick={handleCheck}  />
     

      <span style={styles} >{task}</span>
      
     </label>
<div>

<button onClick={handleOpen}>Edit</button>
<button onClick={Delete}>Delete</button>
</div>
</div>




    </div>
  )
}

export default Card