
import Rating from './rating'
import AddShow from './addShow'
import Next from './nextEpisode'

export default function CenterInfo(data) {

    if (data.data.show == undefined) {
        return false
    }
    else {
        const show = data.data['show'].show
        const rating = show.notes.mean
        let followers = show.followers

        if (followers >= 100000 && followers < 1000000) {
            followers = `${followers.substring(0, 3)}K membres`
        }
        else if (followers >= 10000 && followers < 100000) {
            followers = `${followers.substring(0, 2)}K membres`
        }
        else if (followers >= 1000 && followers < 10000) {
            followers = `${followers.substring(0, 1)}K membres`
        }
        else {
            followers = `${followers} membres`
        }

        let platforms = null
        if (show.platforms == null) {
            platforms = null
        }
        else {
            platforms =
                <div style={{ display: 'flex' }}>
                    {show.platforms.svods.map((plat, index) => {
                        return (
                            <div key={index}>
                                <a href={plat.link_url} target="_blank">
                                    <img src={plat.logo} alt="logo" style={{ width: '50px', borderRadius: '10px', marginRight: '10px' }} />
                                </a>
                            </div>
                        )
                    })}
                </div>
        }

        return (
            <div>
                <div>
                    <h1>{show.title}</h1>
                </div>
                <div style={{ display: 'flex' }}>
                    <div style={{ marginRight: '20px' }}>
                        <Rating data={rating} />
                    </div>
                    <div style={{ marginRight: '20px' }}>
                        <span>{followers}</span>
                    </div>
                    <div style={{ marginRight: '20px' }}>
                        <span>{show.seasons} saisons</span>
                    </div>
                    <div style={{ marginRight: '20px' }}>
                        <span>{show.episodes} épisodes</span>
                    </div>
                </div>
                <div>
                    <div>
                        <p>{show.description}</p>
                    </div>
                    <div style={{ display: 'flex' }}>
                        {platforms}
                        <div>
                            <AddShow data={data.data} />
                        </div>
                    </div>
                    <div>
                        <Next data={data.data} />
                    </div>
                </div>
            </div>
        )

    }
}