import { getEpisode, getLatestEpisode } from '../../api/episode'
import { getPicture } from '../../api/picture'
import { getShow, getSeasons, getEpisodes } from '../../api/shows'
import LeftInfos from '../../../components/shows/show/season/episode/leftinfo'
import CenterInfo from '../../../components/shows/show/season/episode/centerInfo'
import RightInfo from '../../../components/shows/show/season/episode/rightinfo'

export async function getServerSideProps(params) {

    const episode = await getEpisode(params.params.id)
    const episodes = await getEpisodes(episode.episode.show.id, episode.episode.season)
    const latestEpisode = await getLatestEpisode(episode.episode.show.id)
    const show = await getShow(episode.episode.show.id)
    const seasons = await getSeasons(episode.episode.show.id)
    const slug = params.params.dynamic

    return {
        props: {
            episode, show, seasons, episodes, latestEpisode, slug
        }
    }
}

export default function Episodes(data) {

    return (
        <div>
            <div style={{ width: '1080px' }}>
                <div style={{ display: 'flex', padding: '0 20px', width: '100%' }}>
                    <div style={{ width: '20%', textAlign: 'right', padding: '0 10px' }}>
                        <LeftInfos data={data} />
                    </div>
                    <div style={{ width: '50%', padding: '0 10px' }}>
                        <CenterInfo data={data} />
                    </div>
                    <div style={{ width: '30%', padding: '0 10px' }}>
                        <RightInfo data={data} />
                    </div>
                </div>
                <div style={{ display: 'flex', padding: '0 20px' }}>
                    <div style={{ width: '0%', textAlign: 'right', padding: '0 10px' }}></div>
                    {/* <div style={{ width: '100%', padding: '0 10px' }}>
                        <LatestEpisode data={data} />
                    </div> */}
                    <div style={{ width: '0%', textAlign: 'right', padding: '0 10px' }}></div>
                </div>
            </div >
        </div>
    )
}