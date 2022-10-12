import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {albumActions} from "../../../redux";
import {Album} from "../Album/Album";

function Albums() {

    let dispatch = useDispatch();
    let {albums, albumsLoading, albumsError} = useSelector(state => state.albumsReducer);

    useEffect(() => {
        dispatch(albumActions.getAll());
    }, []);

    return (
        <div>
            {albumsLoading && <div>Loading albums...</div>}
            {albumsError && <div>Error(</div>}
            {albumsLoading ? false : albumsError ? false : albums.length ?
                albums.map((value, index) => <Album album={value} key={index}/>) : <div>Have no albums</div>}
        </div>
    );
}

export {Albums};
