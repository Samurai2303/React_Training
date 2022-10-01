import {useEffect, useState} from "react";
import {albumsService} from "../../../services";
import {Album} from "../Album/Album";

function Albums() {
    let [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumsService.getAll().then(({data}) => setAlbums(data));
    }, []);

    return (
        <div>
            {albums.length ? albums.map((value, index) => <Album album={value} key={index}/>) : <div>Loading...</div>}
        </div>
    );
}

export {Albums};
