import React, { useState, useEffect } from 'react'
import { getEpisodes, getShow, getSeasons, getUserShows } from '../api/shows'
import { useRouter } from "next/router"
import { checkToken } from '../../utils/token'

import LeftInfos from '../../components/shows/show/leftinfo'
import CenterInfo from '../../components/shows/show/centerInfo'
import RightInfo from '../../components/shows/show/rightinfo'
import Seasons from '../../components/shows/show/season/season'

export async function getServerSideProps(ctx) {

    const token = await checkToken(ctx)
    const slug = await ctx.query
    const show = await getShow(ctx.params.id)
    const seasons = await getSeasons(ctx.params.id)
    const id = ctx.params.id

    return {
        props: {
            show, seasons, slug, token, id
        }
    }
}

// export default function Show({ dataShows, dataSeasons, slug, token }) {
export default function Show(datas) {

    let cookie = datas.token
    let token = ""
    if (datas.token == undefined) {
        return null
    }
    else {
        token = datas.token.token
    }

    const [show, setShow] = useState()
    const seasons = datas.seasons.seasons
    // const cookie = datas.token
    // const token = cookie.token


    useEffect(() => {
        getShow(datas.id, token).then(res => setShow(res))
    }, []);

    let data = []

    if (show != undefined) {
        let genres = Object.values(show.show.genres)
        genres = JSON.stringify(genres)
        genres = JSON.parse(genres)

        data['token'] = token
        data['cookie'] = cookie
        data['genres'] = genres
        data['show'] = show
        data['seasons'] = seasons
        data['slug'] = datas.slug
        data['id'] = datas.id
    }
    else
        return false

    return (
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
            <div style={{ display: 'flex', padding: '0 20px', marginTop: '50px', borderTop: '1px solid black' }}>
                <div style={{ width: '0%', textAlign: 'right', padding: '0 10px' }}></div>
                <div style={{ width: '100%', padding: '0 10px' }}>
                    <Seasons data={data} />
                </div>
                <div style={{ width: '0%', textAlign: 'right', padding: '0 10px' }}></div>
            </div>
        </div >
    )
}