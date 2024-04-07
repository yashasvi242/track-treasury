import React from 'react';
import HomeContainer from '../containers/HomeContainer';
import {makeAuthenticatedGETRequest, makeAuthenticatedPOSTRequest} from '../utils/serverHelpers';
import '../styles/incomes.css';
import globalContext from '../contexts/globalContext';

const Incomes = ({}) => {

    
    
    return(
        <HomeContainer currActiveScreen={"incomes"}>
           
            <div className='income-heading-div font-semibold text-3xl text-left flex items-end pl-10 text-gray-700'>
                Incomes
            </div>

            
        </HomeContainer>
    )
}

export default Incomes;
