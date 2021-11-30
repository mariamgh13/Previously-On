export async function addFriend(token, id) {

    const res = await fetch(
        "https://api.betaseries.com/friends/friend", {
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

export async function deleteFriend(token, id) {
    const res = await fetch(
        "https://api.betaseries.com/friends/friend", {
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

export async function blockFriend(token, id) {
    const res = await fetch(
        "https://api.betaseries.com/friends/block", {
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

export async function deleteBlockFriend(token, id) {
    const res = await fetch(
        "https://api.betaseries.com/friends/block", {
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

export async function getFriends(token, id, blocked) {
    const data = await fetch(`https://api.betaseries.com/friends/list?client_id=4344d675a081&id=${id}&token=${token}&blocked=${blocked}`)
    return await data.json()
}

export async function getBlockedFriends(token) {
    const data = await fetch(`https://api.betaseries.com/friends/list?client_id=4344d675a081&token=${token}&blocked=true`)
    return await data.json()
}

export async function getRequestFriends(token, received) {
    console.log(received)
    const data = await fetch(`https://api.betaseries.com/friends/requests?client_id=4344d675a081&token=${token}&received=${received}`)
    return await data.json()
}