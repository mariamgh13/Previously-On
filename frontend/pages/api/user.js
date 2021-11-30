export async function getUser(id) {
    const data = await fetch(`https://api.betaseries.com/members/infos?client_id=4344d675a081&id=${id}`)
    return await data.json()
}

export async function searchMember(login) {
    const data = await fetch(`https://api.betaseries.com/members/search?client_id=4344d675a081&login=${login}%`)
    return await data.json()
}