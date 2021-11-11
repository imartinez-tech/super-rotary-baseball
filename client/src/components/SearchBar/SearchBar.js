import React, { useState } from 'react';
import "./SearchBar.css"
import SearchIcon from '@mui/icons-material/Search';



function SearchBar({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);
    return (
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder={placeholder} />
                <div className="searchIcon"><SearchIcon /></div>
            </div>
            <div className="dataResult">
                {/* {data.map((value, key) => {
                    return (
                    <a className="dataItem">{}</a>
                );
                })} */}
            </div>
        </div>
    )
}

export default SearchBar;
