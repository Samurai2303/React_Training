import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {photosActions} from "../../../redux";
import {Photo} from "../Photo/Photo";

function Photos() {

    let dispatch = useDispatch();
    let {photos, photosLoading, photosError} = useSelector(state => state.photosReducer);

    useEffect(() => {
        dispatch(photosActions.getAll());
    }, []);

    return (
        <div>
            {photosLoading && <div>Loading photos...</div>}
            {photosError && <div>Error(</div>}
            {photosLoading ? false : photosError ? false : photos ?
                photos.map((value, index) => <Photo photo={value} key={index}/>) : <div>Have no photos</div>}
        </div>
    );
}

export {Photos};
