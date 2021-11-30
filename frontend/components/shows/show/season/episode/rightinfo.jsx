import React, { useState, useEffect } from 'react'
import Picture from './picture'

function rightinfo(data) {

    return (
        <div style={{ width: '100%' }}>
            <Picture data={data} />
        </div>
    )
}

export default rightinfo
