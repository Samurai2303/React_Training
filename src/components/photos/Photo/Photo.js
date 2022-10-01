import {useState} from "react";

function Photo({photo}) {
    let [showPhoto, setShowPhoto] = useState(false);

    let showHidePhoto = () => {
        if (showPhoto) {
            setShowPhoto(false);
        } else {
            setShowPhoto(true);
        }
    }

    return (
        <div>
            <h3>Album Id - {photo.albumId} <br/> Id - {photo.id}</h3>
            <p>Title - {photo.title}</p>
            {showPhoto ? <img src={`${photo.thumbnailUrl}`} alt="photo"/> : false}
            {showPhoto ? <button onClick={() => showHidePhoto()}>Hide photo</button> :
                <button onClick={() => showHidePhoto()}>Show photo</button>}

        </div>
    );
}

export {Photo};
