import React from 'react'

function rightinfo(data) {

    if (data.data.show == undefined){
        return false
    }
    else {
        const image = data.data['show'].show.images
        
        return (
            <div style={{width: '100%'}}>
                <img src={image.poster} alt='poster' style={{ width: '100%'}}/>
            </div>
        )
    }

}

export default rightinfo
