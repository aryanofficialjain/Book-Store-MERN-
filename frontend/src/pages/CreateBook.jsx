import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';


const CreateBook = () => {
  const {enqueueSnackbar} = useSnackbar();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const savebook = ()=> {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
    .post('http://localhost:5555/books', data)
    .then(()=> {
      setLoading(false);
      enqueueSnackbar("Book Created Sussecfully", {variant:'success'});
      navigate('/');
    })
    .catch((error)=> {
      setLoading(false);
      alert("Check the Console please ");
      enqueueSnackbar("Error", {variant:"error"})
      console.log(error);
    })
  };
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Create a Book</h1>
      {loading ? (
        <Spinner/>
      ): (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600] p-4 mx-auto'>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-600 '>Title</label>
            <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full' name="" id="" />
          </div>

          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-600 '>Author</label>
            <input type="text" value={author} onChange={(e)=> setAuthor(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full' name="" id="" />
          </div>
          

          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-600 '>Publish Year</label>
            <input type="text" value={publishYear} onChange={(e)=> setPublishYear(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full' name="" id="" />
          </div>

          <button className='p-2 bg-green-600 text-white w-[50]' onClick={savebook}>Save</button>
          


        </div>

        
      )}
    </div>
  )
}

export default CreateBook