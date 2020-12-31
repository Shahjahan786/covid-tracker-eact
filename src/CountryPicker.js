import React, { useEffect, useState } from "react";

import { NativeSelect, FormControl } from "@material-ui/core";


export default function CountryPicker(props) {

    let [countries, setCountries] = useState([]);



    useEffect(() => {
        async function getCountries() {
            let response = await fetch("https://covid19.mathdro.id/api/countries");
            let json = await response.json();
            setCountries(Object.values(json.countries));
            console.log(Object.values(json.countries));
        }

        getCountries();

    }, [])

    if (countries === []) {
        return <h2>Please wait...</h2>
    }

    return (


        <FormControl className="formControl" style={{marginTop:'25px'}}>


            <h3 >Select Country</h3>
            <NativeSelect
                defaultValue=""
                onChange={(e) => props.handleChange(e.target.value)}>
                <option value="Select">Select</option>
                <option value="Global">Global</option>
                {countries.map((country, i) => (
                    <option key={i} value={country.name}>
                        {country.name}
                    </option>
                ))}
            </NativeSelect>
        </FormControl>
    );

}