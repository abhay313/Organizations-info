import React, { useEffect, useState} from 'react';
import {Autocomplete} from '@material-ui/lab';

import axios from 'axios';
import { TextField } from '@material-ui/core';
import Card from './Card';
import Appbar from './Appbar';

const App = () => {
    
    const [companyName, setCompanyName] = useState([]);
    const [data, setData] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState();
    const [details, setDetails] = useState();

    useEffect(() => {
        axios.get('http://localhost:10000/posts')
        .then((response) => {
            const companyData = response.data;
            setData(companyData)
            const c = companyData.map((company) => (company.Name))
            setCompanyName(c)
           
        }).catch(() => {
            console.log("Not recieved")
        })
    }, [])

    const getCompany = (e) => {
        setSelectedCompany(e.target.value)
        const info = data.filter((comp) => comp.Name === selectedCompany)
        const myArray = Object.values(info); 
        const val = myArray[0];
        setDetails(val);
    };

    return(
        <div>
            <Appbar />
            <Autocomplete
                className="box"
                id="autocomplete"
                options={companyName}
                renderInput={(params) => (
                    <div ref={params.InputProps.ref}>
                    <TextField  style={{ width: 500 }} placeholder="Enter Company Name Here" variant="outlined"type="text" {...params.inputProps} onClick={getCompany}/>
                    </div>
                )}
            />
            
            <Card info={details} />       
        </div>
    );
}

export default App;