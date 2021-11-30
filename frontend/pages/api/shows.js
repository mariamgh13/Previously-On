export async function getTopShows() {
    const LIMIT = 'limit=' + 15
    const data = await fetch(`https://api.betaseries.com/search/shows?client_id=4344d675a081&${LIMIT}&tri=suivis`)
    return await data.json()
}

export async function getActionShows() {
    const LIMIT = 'limit=' + 15
    const data = await fetch(`https://api.betaseries.com/search/shows?client_id=4344d675a081&${LIMIT}&genres=action&tri=suivis`)
    return await data.json()
}

export async function getAnimeShows() {
    const LIMIT = 'limit=' + 15
    const data = await fetch(`https://api.betaseries.com/search/shows?client_id=4344d675a081&${LIMIT}&genres=anime&tri=suivis`)
    return await data.json()
}

export async function getHorrorShows() {
    const LIMIT = 'limit=' + 15
    const data = await fetch(`https://api.betaseries.com/search/shows?client_id=4344d675a081&${LIMIT}&genres=horror&tri=suivis`)
    return await data.json()
}

export async function getRealityShows() {
    const LIMIT = 'limit=' + 15
    const data = await fetch(`https://api.betaseries.com/search/shows?client_id=4344d675a081&${LIMIT}&genres=reality&tri=suivis`)
    return await data.json()
}

export async function getAllGenres() {
    const data = await fetch(`https://api.betaseries.com/shows/genres?client_id=4344d675a081`)
    return await data.json()
}

export async function getByGenre(genre) {
    const LIMIT = 'limit=' + 50
    const data = await fetch(`https://api.betaseries.com/search/shows?client_id=4344d675a081&genres=${genre}&${LIMIT}`)
    return await data.json()
}

export async function getEpisodes(idShow, idSeason) {
    const data = await fetch(`https://api.betaseries.com/shows/episodes?client_id=4344d675a081&id=${idShow}&season=${idSeason}`)

    return await data.json()
}

export async function getShow(idShow, token) {
    const data = await fetch(`https://api.betaseries.com/shows/display?client_id=4344d675a081&id=${idShow}&token=${token}`)
    return await data.json()
}

export async function getSeasons(idShow) {
    const data = await fetch(`https://api.betaseries.com/shows/seasons?client_id=4344d675a081&id=${idShow}`)

    return await data.json()
}

export async function getUserShows(id) {
    const data = await fetch(`https://api.betaseries.com/shows/member?client_id=4344d675a081&id=${id}`)
    return await data.json()
}

export async function getUserShowsArchived(id) {
    const data = await fetch(`https://api.betaseries.com/shows/member?client_id=4344d675a081&id=${id}&status=archived`)
    return await data.json()
}

export async function addShows(token, id) {
    const res = await fetch(
        "https://api.betaseries.com/shows/show", {
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

export async function deleteShows(token, id) {
    const res = await fetch(
        "https://api.betaseries.com/shows/show", {
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

export async function deleteShowUser(id) {
    const data = await fetch(`https://api.betaseries.com/shows/show?client_id=4344d675a081&id=${id}`)
    return await data.json()
}

export async function addFavoriteShows(token, id) {
    const res = await fetch(
        "https://api.betaseries.com/shows/favorite", {
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

export async function deleteFavoriteShows(token, id) {
    const res = await fetch(
        "https://api.betaseries.com/shows/favorite", {
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

export async function getFavoriteShow(id) {
    const data = await fetch(`https://api.betaseries.com/shows/favorites?client_id=4344d675a081&id=${id}&order=progression`)
    return await data.json()
}

export async function archiveShows(token, id) {
    const res = await fetch(
        "https://api.betaseries.com/shows/archive", {
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

export async function searchShow(title) {
    const data = await fetch(`https://api.betaseries.com/search/shows?client_id=4344d675a081&text=${title}&limit=10`)
    return await data.json()
}