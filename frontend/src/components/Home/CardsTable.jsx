import React from 'react';
import { FaUser, FaBook, FaEdit, FaInfoCircle, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SingleBooksCard from './SingleBooksCard';


const CardsTable = ({ books }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 justify-center items-center'>
      {books.map((item) => (
        <SingleBooksCard key={item._id} book={item} />
      ))}
    </div>
  );
};

export default CardsTable;
