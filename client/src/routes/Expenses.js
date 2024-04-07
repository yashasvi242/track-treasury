import React from 'react';
import HomeContainer from '../containers/HomeContainer';
import '../styles/expenses.css';


const Expenses = ({}) => {


    return(
        <HomeContainer currActiveScreen={"expenses"}>
            
            <div className='expense-heading-div font-semibold text-3xl text-left flex items-end pl-10 text-gray-700'>
                Expenses
            </div>


        </HomeContainer>
    )
}


export default Expenses;