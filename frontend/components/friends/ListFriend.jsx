import React, { useState, useEffect } from 'react'
import { getFriends, deleteBlockFriend, deleteFriend, getBlockedFriends, blockFriend } from '../../pages/api/friends'
import { getNotifications, deleteNotifications } from '../../pages/api/notification'
import { addFriend } from '../../pages/api/friends'

export default function ListFriend(data) {

    const [friends, setFriends] = useState()
    const [blockedFriends, setBlockedFriends] = useState()
    const [notification, setNotification] = useState()
    // const [delNotification, setDelNotification] = useState()

    let token = {}
    if (data.data.token == null) {
        return null
    }
    else {
        token = data.data.token.token
    }
    const userId = parseInt(data.data.userId)

    useEffect(() => {
        getFriends(token, userId).then(res => setFriends(res))
        getBlockedFriends(token).then(res => setBlockedFriends(res))
        getNotifications(token).then(res => setNotification(res))
    }, [])

    const delFriend = (e) => {
        deleteFriend(token, e.target.value)
        alert("Ami supprimé")
        location.reload()
    }

    const addFrien = (e) => {
        addFriend(token, e.target.value)
        alert("Ami ajouté")
        location.reload()
    }

    const bloFriend = (e) => {
        blockFriend(token, e.target.value)
        alert("Ami bloqué")
        location.reload()
    }

    const unBloFriend = (e) => {
        deleteBlockFriend(token, e.target.value)
        alert("Ami débloqué")
        location.reload()
    }

    const delNotif = (e) => {
        deleteNotifications(token, e.target.value)
        alert("Notifs débloqué")
        location.reload()
    }

    if (friends != undefined && blockedFriends != undefined && notification != undefined) {
        return (
            <div>
                <h1>List friends</h1>
                {friends.users.map((friend, key) => {
                    return (
                        <div key={key}>
                            <a href={`/user/${friend.id}`}>
                                <h4>{friend.login}</h4>
                            </a>
                            <button
                                value={friend.id}
                                onClick={delFriend}
                            >retirer ami</button>
                            <button
                                value={friend.id}
                                onClick={bloFriend}
                            >Blocker ami</button>
                        </div>
                    )
                })}
                <div style={{ marginTop: '50px' }}>
                    <h1>List Blocked friends</h1>
                    {blockedFriends.users.length != 0 ?
                        <div>
                            {blockedFriends.users.map((block, key) => {
                                return (
                                    <div key={key}>
                                        {/* <a href={`/user/${block.id}`}> */}
                                        <h4>{block.login}</h4>
                                        {/* </a> */}
                                        <button
                                            value={block.id}
                                            onClick={unBloFriend}
                                        >
                                            Débloquer ami
                                        </button>
                                    </div>
                                )
                            })}
                        </div>
                        :
                        <div>
                            <h4>Aucun user bloqué</h4>
                        </div>
                    }
                </div>
                <div style={{ marginTop: '50px' }}>
                    <h1>Demande d'ami</h1>
                    {notification.notifications.map((notif, key) => {
                        console.log(notif)
                        let userName = notif.text.replace(/ .*/, '')
                        let userId = parseInt(notif.ref_id)
                        console.log(userName)
                        return (
                            <div key={key} style={{ marginBottom: '20px', border: '1px solid black' }}>
                                <p>
                                    {notif.date} :
                                </p>
                                <div style={{ display: 'flex'}}>
                                    <a href={`/user/${userId}`}>
                                        {userName}
                                    </a>
                                    <button
                                        value={userId}
                                        onClick={addFrien}
                                    >
                                        Ajouter en ami
                                    </button>
                                </div>
                                <p>{notif.text}</p>
                                <button
                                    value={notif.id}
                                    onClick={delNotif}
                                >
                                    Supprimer notif
                                </button>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
    else return null
}

