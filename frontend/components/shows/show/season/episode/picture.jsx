import React, { useState, useEffect } from 'react'
import { getPicture } from '../../../../../pages/api/picture'

function picture(data) {

    const [picture, setPicture] = useState(1)
    const [test, setTest] = useState()

    const episode = data.data.data.episode.episode

    useEffect(() => {
        getPicture(episode.id).then(res => setPicture(res))
    }, [test]);

    return (
        <div style={{ width: '100%' }}>
            <img src={picture.url} alt='poster' style={{ width: '100%' }} />
        </div>
    )
}

export default picture
