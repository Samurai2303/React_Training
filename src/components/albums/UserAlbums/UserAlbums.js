import {useParams} from "react-router-dom";
import {albumsService} from "../../../services";
import {Album} from "../Album/Album";
import {useEffect, useState} from "react";

function UserAlbums() {
    let {id} = useParams();
    let [albums, setAlbums] = useState([]);
    useEffect(() => {
        albumsService.getAlbumsOfUser(id).then(({data}) => setAlbums(data));
    }, [id]);

    return (
        <div>
            {albums.length ? albums.map((value, index) => <Album album={value} key={index}/>) : <div>Loading...</div>}

        </div>
    );
}

export {UserAlbums};
