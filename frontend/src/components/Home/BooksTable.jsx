import React, { useEffect, useState } from 'react'
import axios from "axios";
import Spinner from "../Spinner";
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

const BooksTable = ({ books }) => {
    return (
        <table className='w-full border-separate border-spacing-2'>
            <thead>
                <tr>
                    <th className='border border-slate-600 rounded-md' >No.</th>
                    <th className='border border-slate-600 rounded-md' >Title</th>
                    <th className='border border-slate-600 rounded-md max-md:hidden' >Author</th>
                    <th className='border border-slate-600 rounded-md max-md:hidden' >PublishYear</th>
                    <th className='border border-slate-600 rounded-md ' >Operations</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book, index) => (
                    <tr className='h-8' key={book._id}>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {index + 1}
                        </td>

                        <td className='border border-slate-700 rounded-md text-center'>
                            {book.title}
                        </td>

                        <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                            {book.author}
                        </td>

                        <td className='border border-slate-700 rounded-md text-center'>
                            {book.publishYear}
                        </td>

                        <td className='border border-slate-700 rounded-md text-center'>
                            <div className='flex justify-center gap-x-4'>
                                <Link to={`books/detail/${book._id}`}>
                                    <FaInfoCircle className='text-xl text-yellow-500' />
                                </Link>

                                <Link to={`books/edit/${book._id}`}>
                                    <FaEdit className='text-xl text-sky-600' />
                                </Link>

                                <Link to={`books/delete/${book._id}`}>
                                    <FaTrash className='text-xl text-red-700' />
                                </Link>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>


        </table>

    )
}

export default BooksTable