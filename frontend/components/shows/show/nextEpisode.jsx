import React from 'react'
import Link from 'next/link';

export default function NextEpisode(data) {

    if (data.data.show == undefined) {
        return false
    }
    else if(data.data['show'].show.user.next.id == null) {
        return false
    }
    else {
        const next = data.data['show'].show.user.next
        const slug = data.data['slug']

        return (
            <div style={{ marginTop: '50px', border: '1px solid black', padding: '20px'}}>
                    <Link
                        href={`/${slug.dynamic}/episode/${next.id}`}
                    >
                        <a style={{ width: '100%', display: 'flex' }}>
                            <div>
                            <img src={next.image} alt='image' width='250px'/>
                            </div>
                            <div>
                                <h3>Prochaine épisode</h3>
                                <h4>{next.code} - {next.title}</h4>

                            </div>
                        </a>
                    </Link>
            </div>
        )
    }
}

