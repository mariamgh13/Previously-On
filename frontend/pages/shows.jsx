import { faFire, faSkull, faHelicopter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    getTopShows,
    getActionShows,
    getAnimeShows,
    getHorrorShows,
    getRealityShows,
    getAllGenres
} from './api/shows'
import { useRouter } from "next/router"
import TopAnime from '../components/shows/top/anime'
import TopHorror from '../components/shows/top/horror'
import TopReality from '../components/shows/top/reality'
import TopAction from '../components/shows/top/action'
import TopTop from '../components/shows/top/top'
import React, { useState } from 'react'

export async function getServerSideProps() {
    const TopShows = await getTopShows()
    const ActionShows = await getActionShows()
    const AnimeShows = await getAnimeShows()
    const HorrorShows = await getHorrorShows()
    const RealityShows = await getRealityShows()
    const Genres = await getAllGenres()

    return {
        props: {
            TopShows,
            ActionShows,
            AnimeShows,
            HorrorShows,
            RealityShows,
            Genres
        }
    }
}

function AllShow({ TopShows, ActionShows, AnimeShows, HorrorShows, RealityShows, Genres, token }) {

    const router = useRouter()

    if (token == false) {
        alert("Vous n'êtes pas connecté !")
        router.push('/login')
    }

    let genres = Object.entries(Genres.genres)
    const [value, setValue] = useState("");



    let data = []
    data['token'] = token
    data['top'] = TopShows
    data['action'] = ActionShows
    data['anime'] = AnimeShows
    data['horror'] = HorrorShows
    data['reality'] = RealityShows

    const a = () => {
        console.log(value)
    }

    return (
        <div style={{ width: '1080px' }}>

            <div style={{ width: '100%', padding: '0px 50px' }}>
                <select
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                >
                    {genres.map((genre, index) => {
                        // console.log(genre[0].toLowerCase())
                        return (
                            <option key={index} value={genre[0].toLowerCase()}>{genre[1]}</option>
                        )
                    })}
                </select>
                <button onClick={e =>
                    router.push(`/shows/genre?genre=${value}`)
                }
                >submit</button>
            </div>

            <div style={{ width: '100%', padding: '0px 50px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h2><FontAwesomeIcon icon={faFire} /> Top</h2>
                    <button style={{ border: 'none', backgroundColor: 'white' }}
                        value=''
                        onClick={(e) => console.log(e.target.value)}
                    >Voir plus</button>
                </div>
                <TopTop data={data} />
            </div>

            <div style={{ width: '100%', padding: '0px 50px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h2><FontAwesomeIcon icon={faHelicopter} /> Action</h2>
                    <button style={{ border: 'none', backgroundColor: 'white' }}
                        value='Action'
                        onClick={(e) => {
                            router.push(`/shows/genre?genre=${e.target.value.toLowerCase()}`)
                        }}
                    >Voir plus</button>
                </div>
                <TopAction data={data} />
            </div>

            <div style={{ width: '100%', padding: '0px 50px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h2><FontAwesomeIcon icon={faFire} /> Anime</h2>
                    <button style={{ border: 'none', backgroundColor: 'white' }}
                        value='Anime'
                        onClick={(e) => {
                            router.push(`/shows/genre?genre=${e.target.value.toLowerCase()}`)
                        }}
                    >Voir plus</button>
                </div>
                <TopAnime data={data} />
            </div>

            <div style={{ width: '100%', padding: '0px 50px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h2><FontAwesomeIcon icon={faSkull} /> Horreur</h2>
                    <button style={{ border: 'none', backgroundColor: 'white' }}
                        value='Horror'
                        onClick={(e) => {
                            router.push(`/shows/genre?genre=${e.target.value.toLowerCase()}`)
                        }}
                    >Voir plus</button>
                </div>
                <TopHorror data={data} />
            </div>

            <div style={{ width: '100%', padding: '0px 50px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h2><FontAwesomeIcon icon={faSkull} /> Reality Show</h2>
                    <button style={{ border: 'none', backgroundColor: 'white' }}
                        value='Reality'
                        onClick={(e) => {
                            router.push(`/shows/genre?genre=${e.target.value.toLowerCase()}`)
                        }}
                    >Voir plus</button>
                </div>
                <TopReality data={data} />
            </div>
        </div>
    )
}

export default AllShow