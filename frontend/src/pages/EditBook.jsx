import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate,  useParams } from 'react-router-dom';

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    axios
    .get(`http://localhost:5555/books/${id}`)
    .then((res)=> {
      setTitle(res.data.title);
      setAuthor(res.data.author);
      setPublishYear(res.data.publishYear);
      setLoading(false);
    })
    .catch((error)=> {
      setLoading(false);
      alert("plase check the console");
      console.log(error);
    })
  
  }, [])
  

  const navigate = useNavigate();
  const editbook = ()=> {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
    .put(`http://localhost:5555/books/${id}`, data)
    .then(()=> {
      setLoading(false);
      navigate('/');
    })
    .catch((error)=> {
      setLoading(false);
      alert("Check the Console please ");
      console.log(error);
    })
  };
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Edit Book</h1>
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

          <button className='p-2 bg-sky-600 text-white w-[50]' onClick={editbook}>Save</button>
          


        </div>

        
      )}
    </div>
  )
}

export default EditBook