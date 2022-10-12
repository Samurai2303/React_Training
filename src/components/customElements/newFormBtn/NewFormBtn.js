import css from './newFormBtn.module.css';

function NewFormBtn({children, onClick}) {

    return (
        <div className={css.wrap} onClick={() => onClick()}>
            {children}
        </div>
    );
}

export {NewFormBtn};
