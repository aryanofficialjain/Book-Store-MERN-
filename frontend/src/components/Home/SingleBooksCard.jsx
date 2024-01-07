import React from 'react'
import { FaUser, FaBook, FaEdit, FaInfoCircle, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleBooksCard = ({book}) => {
    console.log(book);
  return (
    <div className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl' key={book._id}>
          <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-600 rounded-lg'>{book.publishYear}</h2>
          <h4 className='my-2 text-gray-500'>{book._id}</h4>
          <div className='flex justify-start items-center gap-x-2'>
            <FaBook className='text-red-400 text-2xl' />
            <h2 className='my-1'>{book.title}</h2>
          </div>
          <div className='flex justify-start items-center gap-x-2'>
            <FaUser className='text-red-400 text-2xl' />
            <h2 className='my-1'>{book.author}</h2>
          </div>
          <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
            <Link to={`/books/detail/${book._id}`}>
              <FaInfoCircle className='text-2xl text-yellow-500 hover:text-black' />
            </Link>

            <Link to={`/books/edit/${book._id}`}>
              <FaEdit className='text-2xl text-green-800 hover:text-black' />
            </Link>

            <Link to={`/books/delete/${book._id}`}>
              <FaTrash className='text-2xl text-red-600 hover:text-black' />
            </Link>
          </div>
        </div>
  )
}

export default SingleBooksCard