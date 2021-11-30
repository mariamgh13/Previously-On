import {
  faUsers,
  faBell,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import cookie from "js-cookie";
import { checkToken } from "../../utils/token";
import SearchMember from "./friends";
import React, { useState, useEffect } from "react";
import { getFriends } from "../../pages/api/friends";
import { useRouter } from 'next/router'
import { getNotifications } from '../../pages/api/notification'

export default function User({ token }) {

  const router = useRouter()

  const logout = () => {
    cookie.remove("token", { path: "/" });
    router.push('/login')
  };

  let test = () => {
    if (!token) {
      return (
        <div>
          <Link href={`/register`}>
            <a>
              <div style={{ display: "flex" }}>
                <FontAwesomeIcon
                  icon={faSignOutAlt}
                  style={{ marginRight: "10px", width: "30px" }}
                />
                <span>Créer un compte</span>
              </div>
            </a>
          </Link>
          <Link href={`/login`}>
            <a>
              <div style={{ display: "flex" }}>
                <FontAwesomeIcon
                  icon={faSignOutAlt}
                  style={{ marginRight: "10px", width: "30px" }}
                />
                <span>Se connecter</span>
              </div>
            </a>
          </Link>
        </div>
      );
    } else {
      const [friends, setFriends] = useState();
      const [notification, setNotification] = useState()

      let tok = {};
      if (token == null) {
        return null;
      } else {
        tok = token.token;
      }
      useEffect(() => {
        getFriends(tok, token.user.id).then((res) => setFriends(res))
        getNotifications(token.token).then(res => setNotification(res))
      }, []);

      console.log(notification);
      if (friends != undefined && notification != undefined) {
        return (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ width: "50%" }}>
                <a href={`/user/${token.user.id}`}>
                  <span>{token.user.login}</span>
                </a>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "50%",
                }}
              >
                <div>
                  <div style={{ width: "25px" }}>
                    <a href={`/friend/${token.user.id}`} style={{ display: "flex"}}>
                      <FontAwesomeIcon icon={faUsers} />
                      <span> {friends.users.length}</span>
                    </a>
                  </div>
                </div>
                <div>
                  <FontAwesomeIcon icon={faBell} />
                  <span> {notification.notifications.length}</span>
                </div>
              </div>
            </div>
            <SearchMember token={token} />
            <div style={{ margin: "25px 0", paddingBottom: "25px" }}>
              <div style={{ margin: "10px 0", fontSize: "20px" }}>
                <Link href={`/settings`}>
                  <a>
                    <div style={{ display: "flex" }}>
                      <FontAwesomeIcon
                        icon={faCog}
                        style={{ marginRight: "10px", width: "30px" }}
                      />
                      <span onClick={logout}>Paramètres</span>
                    </div>
                  </a>
                </Link>
                <Link href={`/login`}>
                  <a>
                    <div style={{ display: "flex" }}>
                      <FontAwesomeIcon
                        icon={faSignOutAlt}
                        style={{ marginRight: "10px", width: "30px" }}
                      />
                      <span onClick={logout}>Se déconnecter</span>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        );
      } else return null;
    }
  };

  return test();
}
