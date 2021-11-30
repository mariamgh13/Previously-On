import Menu from './menu'
import User from './user'

export default function Navbar(data) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', padding: '20px' }}>
            <Menu token={data.token}/>
            <User token={data.token} />
        </div>
    );
}