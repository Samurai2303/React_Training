import {useEffect, useState} from "react";
import {photosService} from "../../../services";
import {Photo} from "../Photo/Photo";

function Photos() {
    let [photos, setPhotos] = useState([]);

    useEffect(() => {
        photosService.getAll().then(({data}) => setPhotos(data));
    }, []);

    return (
        <div>
            {photos.length ? photos.map((value, index) => <Photo photo={value} key={index}/>) : <div>Loading...</div>}
        </div>
    );
}

export {Photos};
