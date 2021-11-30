
import Rating from './rating'
import AddEpisode from './addEpisode'
import LatestEpisode from './latestEpisode'
import NextEpisode from '../../nextEpisode'

import Link from 'next/link'

export default function CenterInfo(data) {

    const slug = data.data.slug
    const episode = data.data.episode.episode
    const show = data.data.show.show
    const seasons = data.data.seasons.seasons

    let views = `${episode.seen_total}`
    if (views >= 100000 && views < 1000000) {
        views = `${views.substring(0, 3)}K membres`
    }
    else if (views >= 10000 && views < 100000) {
        views = `${views.substring(0, 2)}K membres`
    }
    else if (views >= 1000 && views < 10000) {
        views = `${views.substring(0, 1)}K membres`
    }
    else {
        views = `${views} membres`
    }
    const rating = episode.note.mean

    return (
        <div>
            <div>
                <Link href={`/shows/${show.id}`} as={`/${slug}/${show.id}`}>
                    <a>
                        <h3>{show.title}</h3>
                    </a>
                </Link>
            </div>
            <div>
                <h1>{episode.title}</h1>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ marginRight: '20px' }}>
                    <Rating data={rating} />
                </div>
                <div style={{ marginRight: '20px' }}>
                    <span>{views}</span>
                </div>
            </div>
            <div>
                <div>
                    <p>{episode.description}</p>
                </div>
                <div style={{ display: 'flex' }}>
                    <div>
                        <AddEpisode data={data.data} />
                    </div>
                    {episode.platform_links.map((plat, index) => {
                        return (
                            <div key={index} style={{ width: '50px', height: '50px', margin: ' 0 30px', borderRadius: '10px' }}>
                                <a href={plat.link} target="_blank">
                                    {plat.platform}
                                </a>
                            </div>
                        )
                    })}
                </div>
                {/* <div style={{ width: '130%' }}>
                    <NextEpisode data={data.data} />
                </div> */}
            </div>
        </div>
    )
}