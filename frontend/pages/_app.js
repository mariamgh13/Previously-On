import '../styles/globals.css'
import Navbar from '../components/navbar/navbar'
import { checkToken } from '../utils/token'
import '../components/navbar/SearchBar.css'
import React, { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }) {

    const [token, setToken] = useState(null)

    useEffect(() => {
        checkToken().then(res => setToken(res))
    }, [])

    if (!token) {
        console.log("toto")
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', height: '100vh' }}>
                <div style={{ width: '300px', height: '100%', justifyContent: 'center', display: 'flex', borderRight: '1px solid black' }}>
                    <Navbar token={token}/>
                </div>
                <div style={{ width: '100%' }}>
                    <Component {...pageProps} token={token}/>
                </div>
            </div>)
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', height: '100vh' }}>
        {console.log('hello')}
            <div style={{ width: '300px', height: '100%', justifyContent: 'center', display: 'flex', borderRight: '1px solid black' }}>
                <Navbar token={token} />
            </div>
            <div style={{ width: '100%' }}>
                <Component {...pageProps} token={token} />
            </div>
        </div>
    )
}

export default MyApp