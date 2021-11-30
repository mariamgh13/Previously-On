import React, { useState, useEffect } from 'react'
import { addShows, deleteShows, getUserShows } from '../../../pages/api/shows'
import { useRouter } from 'next/router'

export default function addShow(data) {

    const [s, setS] = useState()
    const token = data.data['token']
    const show = data.data['show'].show
    const userId = data.data['cookie'].user.id

    useEffect(() => {
        getUserShows(userId).then(response => setS(response))
    }, []);

    let check = false

    if (s == undefined) {
        return false
    }
    else {
        s.shows.map((value, key) => {
            if (value.id == show.id) {
                check = true
                return
            }
        })
    }

    let button =
        <div>
            <button value={show.id} style={{ width: '50px', height: '50px', borderRadius: '10px', border: 'none', backgroundColor: 'red' }}>+</button>
        </div>
    if (check == true) {
        button =
            <div>
                <button value={show.id} style={{ width: '50px', height: '50px', borderRadius: '10px', border: 'none', backgroundColor: 'green' }}>-</button>
            </div>
    }

    const add = () => {
        if (check == false) {
            addShows(token, show.id)
            alert('Série ajouté à ta liste')
            location.reload()
        }
        else {
            deleteShows(token, show.id)
            alert('Série supprimé de ta liste')
            location.reload()
        }
    }

    return (
        <div>
            <div style={{ width: '50px', height: '50px' }} onClick={add}>
                {button}
            </div>
        </div>
    )
}