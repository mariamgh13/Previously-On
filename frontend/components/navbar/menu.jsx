import {
  faCalendarDay,
  faNewspaper,
  faCompass,
  faTasks,
  faSearch,
  faTv,
  faFilm,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import SearchBar from "./searchbar";

export default function Menu() {
  let menuData = [
    { link: "/news", icon: faNewspaper, title: "News" },
    { link: "/shows", icon: faTv, title: "Séries" },
  ];

  return (
    <div>
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a href="/">
            <img
              src="../../logo.png"
              alt="logo"
              style={{ width: "75px", height: "75px" }}
            />
          </a>
        </div>
        <div>
          <h3 style={{ marginBottom: "0px" }}>Recherche de série</h3>
          <SearchBar />
        </div>
      </div>
      <div
        style={{
          margin: "25px 0",
          paddingBottom: "25px",
          borderBottom: "1px solid black",
        }}
      >
        {menuData.map((data, index) => (
          <div key={index} style={{ margin: "10px 0", fontSize: "20px" }}>
            <Link href={`${data.link}`}>
              <a>
                <div style={{ display: "flex" }}>
                  <FontAwesomeIcon
                    icon={data.icon}
                    style={{ marginRight: "10px", width: "30px" }}
                  />
                  {data.title}
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
