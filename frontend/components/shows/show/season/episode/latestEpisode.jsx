import React, { useEffect, useState } from 'react'
import { getLatestEpisode } from '../../../../../pages/api/episode'
import { getPicture } from '../../../../../pages/api/picture'

export default function LatestEpisode(data) {

    const [picture, setPicture] = useState(1)
    const [test, setTest] = useState()

    const episode = data.data.latestEpisode

    useEffect(() => {
        getPicture(episode.episode.id).then(res => setPicture(res))
    }, [test]);

    return (
        <div style={{marginTop: '50px'}}>
            <div style={{ width: '100%', height: '250px', border: '1px solid black', display: 'flex' }}>
                <div>
                    <img src={picture.url} alt='image' />
                </div>
                <div>
                    <h3>Dernière épisode</h3>
                    <h4>{episode.episode.code} - {episode.episode.title}</h4>
                </div>
            </div>
        </div>
    )
}

