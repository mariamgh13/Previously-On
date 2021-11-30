import React, { useState, useEffect } from 'react'
import { getEpisodes } from '../../../../pages/api/shows'
import { getPicture } from '../../../../pages/api/picture'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from 'next/link';
import { useRouter } from 'next/router'

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


export default function Season(data) {

    if (data.data['show'] === undefined) {
        return false
    }
    else {
        const show = data.data['show'].show
        const seasons = data.data['seasons']
        const slug = data.data['slug']
        const [saison, setSaison] = useState(1)
        const [episodes, setEpisodes] = useState()
        const router = useRouter()

        useEffect(() => {
            getEpisodes(show.id, saison).then(response => setEpisodes(response))
        }, [saison]);

        if (episodes != undefined) {

            return (
                <div style={{ width: '100%' }}>
                    <div>
                        <h1>Saisons ({seasons.length})</h1>
                    </div>
                    <Carousel responsive={responsive}>
                        {seasons.map((season, index) => {
                            return (
                                <div key={index} id={season.number} onClick={(e) => {
                                    setSaison(e.target.id)
                                }}>
                                    <img src={season.image} alt="image" style={{ width: '150px' }} id={season.number} onClick={(e) => {
                                        setSaison(e.target.id)
                                    }} />
                                    <p style={{ margin: '0' }} id={season.number} onClick={(e) => setSaison(e.target.id)}>Saison {season.number}</p>
                                    <span value={season.number} id={season.number} onClick={(e) => setSaison(e.target.id)}>{season.episodes} épisodes</span>
                                </div>
                            )
                        })}
                    </Carousel>
                    <div>
                        <h1>Épisodes ({episodes.episodes.length})</h1>
                    </div>
                    <div>
                        <Carousel responsive={responsive}>
                            {episodes.episodes.map((episode, index) => {
                                return (
                                    <div key={index} style={{ textAlign: 'center' }}>
                                        <div style={{ height: '100px', border: '1px solid black' }}></div>
                                        <Link
                                            href={`/${slug.dynamic}/episode/${episode.id}`}
                                        >
                                            <a>
                                                <p>{episode.code} <br /> {episode.title}</p>
                                            </a>
                                        </Link>
                                    </div>
                                )
                            })}
                        </Carousel>
                    </div>
                </div>
            )
        }
        else {
            return null
        }
    }
}