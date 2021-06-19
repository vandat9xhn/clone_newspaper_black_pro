import React, { useState } from 'react';
import PropTypes from 'prop-types';
// 
import InputSearch from '../../../../../component/input_seacrh/InputSearch';

// 
HomeNRSearch.propTypes = {
    
};

// 
function HomeNRSearch(props) {
    // 
    const [value, setValue] = useState('')

    // 
    function handleChange(e) {
        setValue(e.target.value)
    }

    // 
    function handleSearch() {
        console.log(value);
    }
    
    // 
    return (
        <div className="HomeNRSearch">
            <InputSearch
                value={value}
                handleChange={handleChange}
                handleSearch={handleSearch}
            />
        </div>
    );
}

export default HomeNRSearch;