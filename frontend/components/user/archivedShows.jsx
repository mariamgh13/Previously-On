import Link from 'next/link'
import { archiveShows } from '../../pages/api/shows'

export default function Shows({ data }) {

    const shows = data['shows'].shows
    const token = data['token'].token

    return (
        <div>
            <div>
                <h1>Liste de Séries</h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                {shows.map((show, index) => {
                    return (
                        <div key={index}>
                            <div>
                                <div onClick={e => {
                                    archiveShows(token, e.target.value)
                                }}>
                                    <button value={show.id}>+</button>
                                </div>
                                <Link href={`/shows/${show.id}`}>
                                    <a>
                                        <div>
                                            <img src={show.images.poster} style={{ width: '175px' }} />
                                            <h3>{show.title}</h3>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
