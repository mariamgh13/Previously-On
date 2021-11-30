import React, { useState, useEffect } from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { searchShow } from '../../pages/api/shows'

function SearchBar() {

    const [filterData, setFilterData] = useState([])
    const [searchWord, setSearchWord] = useState("")

    const handleFilter = (e) => {
        setSearchWord(e.target.value)
        searchShow(searchWord).then((res) => setFilterData(res))
    }
    let searchData = null

    if (filterData.shows == undefined) {
    
    }
    else if (searchWord == "") {
        searchData =
            <div></div>
    }
    else {
        searchData =
            <div className="dataResult">
                {filterData.shows.map((show, key) => {
                    return (
                        <a key={key} href={`/${show.slug}/${show.id}`} className="dataItem">
                            <p>{show.title}</p>
                        </a>
                    )
                })}
            </div>
    }
    return (
        <div>
            <div style={{ border: '1px solid black', marginTop: '5px', display: 'flex', height: '40px' }}>
                <span style={{ padding: '10px' }}><FontAwesomeIcon icon={faSearch} style={{ paddingTop: '50px 0' }} /></span>
                <input type="text" placeholder="Rechercher" style={{ border: 'none' }}
                    onChange={handleFilter}
                />
            </div>
            {searchData}
            <div style={{ marginTop: '25px', borderBottom: '1px solid black' }}></div>
        </div>
    )
}

export default SearchBar
