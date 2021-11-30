export default function LeftInfos(data) {

    if (data.data.show == undefined) {
        return false
    }
    else {
        const genres = data.data['genres']
        const show = data.data['show'].show

        const info = [
            { title: ' ', data: ' ' },
            { title: 'Pays', data: show.country },
            { title: 'Genres', data: genres },
            { title: "Durée d'un épisode", data: `${show.length} minutes` },
            { title: "Statut", data: show.status },
            { title: "Chaine", data: show.network }
        ]
        return (
            <div>
                {info.map((da, index) => {
                    if (da.title == 'Genres') {
                        return (
                            <div style={{ marginBottom: '20px' }} key={index}>
                                <h2 style={{ fontSize: '18px', marginBottom: '5px' }}>{da.title.toUpperCase()}</h2>
                                <span style={{ fontSize: '16px' }}>
                                    {da.data.map((e, index) => {
                                        return (
                                            <span key={index}>{e} </span>
                                        )
                                    }
                                    )}
                                </span>
                            </div>
                        )
                    }
                    return (
                        <div style={{ marginBottom: '20px' }} key={index}>
                            <h2 style={{ fontSize: '18px', marginBottom: '5px' }}>{da.title.toUpperCase()}</h2>
                            <span style={{ fontSize: '16px' }}>{da.data}</span>
                        </div>
                    )
                })}
            </div>
        )
    }
}