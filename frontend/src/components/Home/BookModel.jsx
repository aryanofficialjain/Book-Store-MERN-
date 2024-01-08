import { FaBook, FaUser } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';


const BookModel = ({ book, onClose }) => {
  return (
    <div className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center ' onClick={onClose}>
      <div className='w-1/2 h-[400] bg-white rounded-xl p-4 flex flex-col relative' onClick={(event) => event.stopPropagation()}>
        <MdClose className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer ' onClick={onClose} />

        <h2 className='w-fit px-4 py-1 bg-red-600 rounded-lg'>{book.publishYear}</h2>
        <h4 className='my-2 text-gray-500'>{book._id}</h4>
        <div className='flex justify-start items-center gap-x-2'>
          <FaBook className='text-red-400 text-2xl' />
          <h2 className='my-1'>{book.title}</h2>
        </div>
        <div className='flex justify-start items-center gap-x-2'>
          <FaUser className='text-red-400 text-2xl' />
          <h2 className='my-1'>{book.author}</h2>
          <p className='mt-4'>Anything You Want </p>
          <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur error porro eaque voluptate. Mollitia, maiores labore. Deleniti cumque iure, quisquam animi sit, quam facilis maiores voluptatem voluptatibus sapiente, quos doloribus quasi quia fugiat amet minima iusto? Quaerat atque expedita exercitatprovident saepe. Repellat blanditiis suscipit aliquid velit, saepe iusto.</p>
        </div>
      </div>
    </div>  
      )
}

      export default BookModel