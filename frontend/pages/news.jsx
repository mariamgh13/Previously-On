function AllEpisodes({ data }) {
    let news = data.news
    return (
        <div>
            <h1>News</h1>
            <div style={{ width: '' }}>
                {news.map(e => (
                    <div style={{ border: '1px solid black' }}>
                        <a href={e.url} target="_blank">
                            <article>
                                <div>
                                    <h1>{e.title}</h1>
                                    <p>{e.date}</p>
                                    <img src={e.picture_url} style={{ width: '400px' }} />
                                </div>
                            </article>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

AllEpisodes.getInitialProps = async (ctx) => {
    const API_KEY = "4344d675a081"
    try {
        const res = await fetch(`https://api.betaseries.com/news/last?client_id=${API_KEY}`)
        const json = await res.json()
        return { data: json }
    } catch (error) {
        console.log(error)
    }
}

export default AllEpisodes