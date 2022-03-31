import React from 'react'
import './Date.css'



const Date=(prop)=>{
    const month=prop.date.toLocaleString("en-US", {month:'long'});
    const year=prop.date.getFullYear();
    const date=prop.date.toLocaleString("en-US",{day:'2-digit'});
 return(
     <div  className='expense-date'>
         <div className='expense-month'>{ month }</div>
         <div className='expense-year'>{ year }</div>
         <div className='expense-date'>{ date }</div>
     </div>
 );
}

export default Date;