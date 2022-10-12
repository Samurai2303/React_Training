import css from './closeBtn.module.css';

function CloseBtn({children, onClick}) {

  return (
      <div className={css.btn} onClick={onClick()}>
          {children}
      </div>
  );
}

export {CloseBtn};
