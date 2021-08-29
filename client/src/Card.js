import React from 'react';
import './App.css';

const Card = ({info}) => {

    if(info){
    let Established, Name, website, Location, Zipcode, Description, Owner;
     for (const [key, value] of Object.entries(info)) {
        
         if(`${key}`==='Established'){
             Established = `${value}`
         }else if(`${key}`==='Name'){
             Name = `${value}`
         }else if(`${key}`==='website'){
             website = `${value}`
         }else if(`${key}`==='Location'){
             Location = `${value}`
         }else if(`${key}`==='Zipcode'){
             Zipcode = `${value}`
         }else if(`${key}`==='Description'){
             Description = `${value}`
         }else {
             Owner = `${value}`;
         }
       }
      
       return(
        <div className="main-cart">
            <p className="company">{info.Name}</p>
            <p className="description">{`"${info.Description}"`}</p>
            <p className="website">www.{info.website}</p>
            <div className="center-content">
                <p className="owner">&nbsp;&nbsp;&nbsp;Owner:&nbsp;&nbsp;<span>{info.Owner}</span></p>
                <p className="location">Location:&nbsp;&nbsp;{info.Location} </p>
                <p className="zipcode">&nbsp;&nbsp;Zipcode:&nbsp;&nbsp;{info.Zipcode}</p>
                <p className="established">Established In:&nbsp;&nbsp;<span>{info.Established}</span></p>
            </div>
           
              
        </div>
    );
}else {
    return null;
}

   

    
}

export default Card;