import {AlbumForm, Albums} from "../../components";
import css from './albumsPage.module.css';

function AlbumsPage() {

    return (
        <div className={css.wrap}>
            <Albums/>
            <AlbumForm/>
        </div>
    );
}

export {AlbumsPage};
