import { getUser } from '../api/user'
import { getUserShows, getFavoriteShow } from '../api/shows'

import Image from 'next/image'
import profilePic from '../../public/zoro.gif'
import UserShows from '../../components/user/userShows'
import FavoritesShow from '../../components/user/favoriteShows'
import ListFriend from '../../components/friends/ListFriend'

export async function getServerSideProps(params) {
    
    const userId = params.params.id
    const user = await getUser(userId)
    const listShow = await getUserShows(userId)
    const favoriteShow = await getFavoriteShow(userId)

    return {
        props: {
            listShow, user, favoriteShow, userId
        }
    }
}

function User(data) {

    const user = data.user.member

    return (
        <div style={{ width: '1080px', marginLeft: '50px' }}>
            <div className='banner' style={{
                // backgroundImage: 'url(' + show.images.banner + ')',
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                height: '188px',
                width: '100%',
            }}>
                <div style={{ backdropFilter: 'brightness(45%)', color: 'white', height: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                </div>
            </div>
            <div style={{ width: '100%', paddingLeft: '25px', display: 'flex' }}>
                <div style={{ width: '150px', height: '150px', borderRadius: '150px', border: '1px solid black', margin: '-80px 25px 0 0' }}>
                    <Image
                        src={profilePic}
                        alt="Profil Picture"
                        width={750}
                        height={750}
                        className="profile-picture"
                    />
                </div>
                <div style={{ margin: '-75px 25px 0 0', zIndex: '1' }}>
                    {/* <h2 style={{ color: 'black' }}>{user.login}</h2> */}
                </div>
            </div>
            <UserShows data={data} />
            <FavoritesShow data={data} />
        </div>
    )
}

export default User