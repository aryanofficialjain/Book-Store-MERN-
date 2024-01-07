import {FaArrowLeft} from "react-icons/fa";
import { Link } from 'react-router-dom';

const BackButton = ({destination = '/'}) => {
  return (
    <div className='flex'>
        <Link to={destination} className='bg-sky-700 text-white px-4 py-2 rounded-lg w-fit'>
            <FaArrowLeft className="text-3xl"/>
        </Link>
    </div>
  )
}

export default BackButton