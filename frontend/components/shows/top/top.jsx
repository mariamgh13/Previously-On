import Link from 'next/link'
import { addShows } from '../../../pages/api/shows'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};
export default function topTop(data) {

    const TopShows = data.data['top']
    let token = data.data['token']

    if (data.data['token'] == undefined) {
        return null
    }
    else {
        token = data.data['token'].token
    }

    return (
        <div>
            <Carousel responsive={responsive}>
                {TopShows.shows.map((show, index) => (
                    <div key={index}>
                        <div style={{ width: '175px' }}>
                            <div
                                style={{ position: 'relative' }}
                                onClick={e => {
                                    addShows(token, e.target.value)
                                    alert('Série ajouté aux favoris')
                                }}                            >
                                <button value={show.id}>+</button>
                            </div>
                            <Link href={`/shows/${show.id}`} as={`/${show.slug}/${show.id}`}>
                                <a>
                                    <div>
                                        <img src={show.poster} style={{ width: '175px' }} />
                                        <h3>{show.title}</h3>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}