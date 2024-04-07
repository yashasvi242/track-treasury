import { Link } from 'react-router-dom';
import HomeContainer from '../containers/HomeContainer';
import {Icon} from '@iconify/react';

export default function More({}){
    return(
        <HomeContainer currActiveScreen={"more"}>
            

                    
        </HomeContainer>
    )
}

const SingleMoreCard = ({title, link, linkTitle,iconifySrc, underline}) => {
    return(
      <div className='w-full'>
            <div className='w-full shadow-lg rounded-lg bg-white px-5 py-5 flex items-center'>
            <div className='w-1/2 flex space-x-5 items-center ' >
                <Icon icon={iconifySrc} fontSize={40}/>
                <div className=' text-lg font-semibold text-gray-700'>
                    {title}
                </div>
            </div>
            <div className='h-full w-1/2 flex justify-end pr-3'>
                <div className='h-full flex space-x-2 text-lg '>
                    {/* <div>Link : </div> */}
                    <Link to={link}>
                        <div className={`font-semibold ${underline?('underline'):('')} text-blue-900`}>
                            {linkTitle}
                        </div>
                    </Link>
                </div>
            </div>
            </div>
        </div>  

    );
}