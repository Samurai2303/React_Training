import css from './photosPage.module.css';
import {PhotoForm, Photos, SelectedPhoto} from "../../components";

function PhotosPage() {

    return (
        <div className={css.wrap}>
            <Photos/>
            <SelectedPhoto/>
            <PhotoForm/>
        </div>
    );
}

export {PhotosPage};
