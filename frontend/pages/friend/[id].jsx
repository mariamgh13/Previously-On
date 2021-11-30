import ListFriend from '../../components/friends/ListFriend'
import { getUser } from '../api/user'

export async function getServerSideProps(params) {
    
    const userId = params.params.id
    const user = await getUser(userId)

    return {
        props: {
            user, userId
        }
    }
}


function Friends(data) {

    return (
        <div style={{ width: '1080px', marginLeft: '50px' }}>
            <ListFriend data={data} />
        </div>
    )
}

export default Friends