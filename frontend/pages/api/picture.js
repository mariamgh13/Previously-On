export async function getPicture(id) {
    const data = await fetch(`https://api.betaseries.com/pictures/episodes?client_id=4344d675a081&id=${id}`)
        // .then(res => res.json())
    return await data
}