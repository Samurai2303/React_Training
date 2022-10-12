import {useState} from "react";

function Photo({photo}) {

    let [showPhoto, setShowPhoto] = useState(false);

    return (
        <div>
            <h3>ID - {photo.id} <br/> Album ID - {photo.albumId}</h3>
            <p>Title - {photo.title}</p>
            <button onClick={() => setShowPhoto(true)}>Show photo</button>
            <button>Edit photo</button>
            <button>DeletePhoto</button>
            {showPhoto && <div>
                <img src={photo.thumbnailUrl} alt="photo"/>
                <button onClick={() => setShowPhoto(false)}>Hide</button>
            </div>}
        </div>
    );
}

export {Photo};
