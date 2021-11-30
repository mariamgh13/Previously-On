export async function getNotifications(token) {
    const data = await fetch(`https://api.betaseries.com/members/notifications?client_id=4344d675a081&token=${token}&types=friend`)
    return await data.json()
}

export async function deleteNotifications(token, id) {
    const res = await fetch(
        "https://api.betaseries.com/members/notification", {
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