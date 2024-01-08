import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
import { useSnackbar } from 'notistack'

const DeleteBook = () => {
  const {enqueueSnackbar} = useSnackbar();
  const [loading, setLoading] = useState();
  const navigate = useNavigate();
  const {id} = useParams();
  const [Checkinput, setCheckInput] = useState("");
  const deletebook = ()=> {
    if(id === Checkinput){
      setLoading(true);
    axios
    .delete(`http://localhost:5555/books/${id}`)
    .then(()=>{
      setLoading(false);
      enqueueSnackbar("Book Created Sussecfully", {variant:'success'});
      navigate('/');
    })
    .catch((error)=> {
      setLoading(false);
      alert("check the console for error");
      enqueueSnackbar("Error", {variant:"error"})
      console.log(error);
    })

  }
  else{
    alert("write the correct Id");
  }
}


  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4 '>Delete Book</h1>
      {loading ? (
        <Spinner/>
      ): ""}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600] p-8 mx-auto'>
        <h2 className='text-3xl'>Are you Sure, To Delete it</h2><br />
        <h3>Write This to Continue</h3><br />
        <h3> {id} </h3>
        <input  className="text-xl w-1/3 p-3 my-3 border border-slate-500" type="text" name="" id="" value={Checkinput} onChange={(e)=> setCheckInput(e.target.value)} />
        <button onClick={deletebook} className='p-4 bg-red-600 text-white m-8 w-full '>Yes,Delete</button>
      </div>
    </div>
  )
}

export default DeleteBook