export async function getEpisode(idEpisode) {
    const data = await fetch(`https://api.betaseries.com/episodes/display?client_id=4344d675a081&id=${idEpisode}`)
    return await data.json()
}

export async function getSeenEpisode(token, idShow, idEpisode) {
    const data = await fetch(`https://api.betaseries.com/episodes/search?client_id=4344d675a081&token=${token}&show_id=${idShow}&number=${idEpisode}`)
    return await data.json()
}

export async function getLatestEpisode(idEpisode) {
    const data = await fetch(`https://api.betaseries.com/episodes/latest?client_id=4344d675a081&id=${idEpisode}`)
    return await data.json()
}

export async function postEpisodeWatch(token, id) {
    const res = await fetch(
        "https://api.betaseries.com/episodes/watched", {
            body: JSON.stringify({
                id: id,
                token: token,
                client_id: '4344d675a081'
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }
    )
    const result = await res.json()
    return result
}

export async function deleteEpisodeWatch(token, id) {
    const res = await fetch(
        "https://api.betaseries.com/episodes/watched", {
            body: JSON.stringify({
                id: id,
                token: token,
                client_id: '4344d675a081'
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        }
    )
    const result = await res.json()
    return result
}