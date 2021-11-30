export default function LeftInfos(data) {

    const episode = data.data.episode.episode

    const info = [
        { title: ' ', data: ' ' },
        { title: 'Sortie Originale', data: episode.date },
        { title: 'Numéro', data: episode.code },
    ]

    return (
        <div style={{}}>
            {info.map((da, index) => {
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