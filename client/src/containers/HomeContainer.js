import '../styles/home.css';
import IconText from '../components/shared/IconText';
import { Icon } from '@iconify/react';
import { useCookies } from 'react-cookie';
// import {mainLogo} from '../../assets/images/shared/main-logo.png';

export default function HomeContainer({children, currActiveScreen}){

    const [cookie, setCookie, deleteCookie] = useCookies(["token"]);

    return(
        <div className="h-full w-full flex  bg-gradient-to-r from-blue-300 to-blue-600">
 
            {/* left side bar */}
            <div className="home-left bg-[#161616]">
                <div className="home-left-inner bg-white h-full w-full bg-opacity-60">
                    <div className='w-full flex justify-start items-center space-y-2 py-6 px-6 mb-4 '>
                        {/* <Icon icon="iconamoon:profile-circle-bold" className='text-4xl' color={'white'}/> */}
                        {/* <Icon icon="bxs:coin-stack" className='text-yellow-200' fontSize={30}/> */}
                        <div className='h-[45px] text-2xl text-yellow-200'  >
                            {/* TrackTreasury™ */}
                            {/* <img className='h-full' src={'https://i.ibb.co/kHHfvXg/logo.png'}/> */}
                            <img className='h-full' src={'https://i.ibb.co/CWtQYjz/logo-1.png'}/>
                            
                        </div>
                    </div>
                    <IconText 
                        iconSrc={"fluent-mdl2:b-i-dashboard"} 
                        text={"Dashboard"} 
                        active={currActiveScreen === "dashboard"}// active will have value true sent to the IconText component when this condition (currActiveScreen is equal to home)
                        targetLink={'/dashboard'}
                    /> 
                    {/* i might add transactions tab in future */}
                    {/* <IconText 
                        iconSrc={"ph:wallet-fill"} 
                        text={"Transactions"}
                        active={currActiveScreen === "transactions"}
                        targetLink={'/transactions'}
                    /> */}
                    
                    <IconText 
                        iconSrc={"solar:money-bag-bold"} 
                        text={"Incomes"}
                        active={currActiveScreen === "incomes"}
                        targetLink={'/incomes'}
                    />
                    <IconText 
                        iconSrc={"solar:cash-out-bold"} 
                        text={"Expenses"}
                        // active={currActiveScreen === "expenses"}
                        active={currActiveScreen === "expenses"} 
                        targetLink={'/expenses'}
                    />
                    
                    <IconText 
                        iconSrc={"material-symbols:more"} 
                        text={"More"}
                        active={currActiveScreen === "more"}
                        targetLink={'/more'}
                    />
                    <div className='h-[40%] flex items-end pb-5  '>
                        <div className=' cursor-pointer' onClick={()=>{
                            deleteCookie('token');  
                        }}>
                            <IconText 
                                iconSrc={"ri:logout-circle-r-line"} 
                                text={"Log out"}
                            />
                        </div>
                    </div>

                    <div className=' h-[15%] text-gray-400 text-sm font-normal text-left pl-5 flex items-end'>
                        © 2024 TrackTreasury™ 
                    </div>
                </div>
            </div>

            {/* right pannel  */}
            <div className='home-right '>
                {/* <div className="w-full home-right-inner bg-gray-300 h-full w-full"> */}
                <div className="w-full home-right-inner bg-[#eae9f4] h-full w-full">

                    {children} {/* here whatsoever page uses this container, their code will be added here */}
                </div>
            </div>


        </div>
    )
}
