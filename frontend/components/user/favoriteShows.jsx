import Link from 'next/link'
import { deleteFavoriteShows } from '../../pages/api/shows'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {  faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
}

export default function FavoritesShow(data) {

    let token = ""
    if (data.data.token == null) {
        return null
    }
    else {
        token = data.data.token
    }
    const shows = data.data.favoriteShow.shows
    const userId = parseInt(data.data.userId)

    const deleteFavorite = (e) => {
        deleteFavoriteShows(token.token, e.target.value)
        alert('Série supprimé de la liste')
        location.reload()
    }

    return (
        <div>
            <div>
                <h1>Séries favorites</h1>
            </div>
            <div>
                <Carousel responsive={responsive}>
                    {shows.map((show, index) => {
                        return (
                            <div key={index} style={{ width: '175px' }}>
                                <div>
                                    {token.user.id == userId ?
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div onClick={deleteFavorite}>
                                                <button value={show.id}>
                                                    <FontAwesomeIcon icon={faTrashAlt} />
                                                    -
                                                </button>
                                            </div>
                                        </div>
                                        :
                                        <div></div>}
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
                </Carousel>
            </div>
        </div>
    )
}
