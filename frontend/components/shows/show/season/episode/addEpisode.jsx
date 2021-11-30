import React, { useEffect, useState } from 'react'
import { postEpisodeWatch, deleteEpisodeWatch, getSeenEpisode } from '../../../../../pages/api/episode'

export default function addShow(data) {

    let token = ""
    if (data.data.token == undefined) {
        return null
    }
    else {
        token = data.data.token.token
    }

    const [seen, setSeen] = useState(null)
    const episode = data.data.episode.episode

    useEffect(() => {
        getSeenEpisode(token, episode.show.id, episode.code).then(res => setSeen(res))
    }, [])

    const see = () => {
        if (seen.episode.user.seen == false) {
            postEpisodeWatch(token, episode.id)
            alert('Episode noté comme vu')
            location.reload()
        }
        else {
            deleteEpisodeWatch(token, episode.id)
            alert('Episode noté comme non vu')
            location.reload()
        }
    }

    let button =
        <div>
            <button value={episode.id} style={{ width: '50px', height: '50px', borderRadius: '10px', border: 'none', backgroundColor: 'red' }}>+</button>
            <span>Marquer comme vu</span>
        </div>

    if (seen == null)
        console.log('')
    else if (seen.episode.user.seen == true) {
        button =
            <div>
                <button value={episode.id} style={{ width: '50px', height: '50px', borderRadius: '10px', border: 'none', backgroundColor: 'green' }}>+</button>
                <span>Episode déjà vu</span>
            </div>
    }
    return (
        <div>
            <div style={{ width: '50px', height: '50px', textAlign: 'center' }}
                onClick={see}
            >
                {button}
            </div>
        </div>
    )
}