import React, { useState, useEffect } from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { searchMember } from '../../pages/api/user'
import { addFriend } from '../../pages/api/friends'

export default function SearchMember(token) {

    const [filterData, setFilterData] = useState([])
    const [searchWord, setSearchWord] = useState("")

    const tok = token.token.token

    const handleFilter = (e) => {
        setSearchWord(e.target.value)
        searchMember(searchWord).then((res) => setFilterData(res))
    }

    const newFriend = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        alert('Ami ajouté')
        addFriend(tok, e.target.value)
        location.reload()
    }

    let searchData = null

    if (filterData.users == undefined) {
    }
    else if (searchWord == "") {
        searchData =
            <div></div>
    }
    else {
        searchData =
            <div className="dataResult">
                {filterData.users.map((user, key) => {
                    return (
                        <a key={key} href={`/user/${user.id}`} className="dataItem">
                            <p>{user.id} - {user.login}</p>
                            <button value={user.id}
                            onClick={newFriend}
                            >+</button>
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