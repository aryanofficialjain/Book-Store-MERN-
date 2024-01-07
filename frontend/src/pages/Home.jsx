import React, { useEffect, useState } from 'react'
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import BooksTable from '../components/Home/BooksTable';
import CardsTable from '../components/Home/CardsTable';



const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setloading] = useState(false);
  const [showstate, setShowState] = useState('table');
  useEffect(() => {
    setloading(true);
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        console.log(response.data.data);
        setBooks(response.data.data);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
        setloading(false);
      })
  }, [])

  const showtable = () => {
    setShowState('table');
  }

  const showcard = () => {
    setShowState('card');
  }



  return (

    <div className='p-4'>
      <div className='flex w-full items-center justify-center my-3 gap-3 '>
        <button className='bg-green-400 hover:bg-green-700 text-white px-4 py-1 rounded-lg ' onClick={showtable}>Table</button>
        <button className='bg-sky-300 hover:bg-sky-700 text-white px-4 py-1 rounded-lg ' onClick={showcard}>Card</button>
      </div>
      <div className='flex justify-around items-center'>
        <h1 className='text-3xl my-8'>Book List</h1>
        <Link to='/books/create'>
          <FaPlus className='text-sky-800 text-4xl' />
        </Link>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        showstate === 'table' ? (<BooksTable books={books} />) : (<CardsTable books={books} />)

      )

      }



    </div>
  )
}

export default Home