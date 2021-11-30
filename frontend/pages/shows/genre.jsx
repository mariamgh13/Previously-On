import React from 'react'
import { getByGenre } from '../api/shows'
import Link from 'next/link'

export async function getServerSideProps(ctx) {

    console.log(ctx)
    const showsGenre = await getByGenre(ctx.query.genre)

    return {
        props: {
            showsGenre
        }
    }
}

export default function Genre(data) {
    
    const shows = data.showsGenre.shows
    console.log(shows)

    return (
        <div style={{ width: '1080px', border: '1px solid black'}}>
            <h1>Genres</h1>
            <div>
                {shows.map((show, index) => {

                    return(
                        <div key={index} style={{width: '30%', border: '1px solid red'}}>
                            <Link
                            href={`/${show.slug}/${show.id}`}>
                                <a>
                                    <h1>{show.title} - ({show.release_date})</h1>
                                    <img src={show.poster} alt="" style={{ width: '100%'}}/>
                                </a>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}