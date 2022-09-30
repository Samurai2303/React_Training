import css from './button.module.css';

function Button({children, onClick}) {

  return (
      <div className={css.button} onClick={()=>onClick()}>{children}</div>
  );
}

export {Button};
