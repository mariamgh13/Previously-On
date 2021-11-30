import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function rating(data) {

    const rating = data.data

    let star = 'star'
    if (rating >= 4.75) {
        star = <div><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
    }
    else if (rating < 4.75 && rating >= 4.25) {
        star = <div><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfAlt} /></div>
    }
    else if (rating < 4.25 && rating >= 3.75) {
        star = <div><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
    }
    else if (rating < 3.75 && rating >= 3.25) {
        star = <div><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfAlt} /></div>
    }
    else if (rating < 3.25 && rating >= 2.75) {
        star = <div><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
    }
    else if (rating < 2.75 && rating >= 2.25) {
        star = <div><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfAlt} /></div>
    }
    else if (rating < 2.25 && rating >= 1.75) {
        star = <div><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
    }
    else if (rating < 1.75 && rating >= 1.25) {
        star = <div><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
    }
    else if (rating < 1.25 && rating >= 0.75) {
        star = <div><FontAwesomeIcon icon={faStar} /></div>
    }
    else if (rating < 0.75 && rating >= 0.25) {
        star = <div><FontAwesomeIcon icon={faStarHalfAlt} /></div>
    }
    else if (rating < 0.25) {
        star = <div><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfAlt} /></div>
    }


    return (
        <span>
            {star}
        </span>
    )
}

export default rating
