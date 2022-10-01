import {Context} from "../../index";

function About() {

  return (
      <div>
          <p>{Context.user?JSON.stringify(Context.user):false}</p>
          <p>{Context.post?JSON.stringify(Context.post):false}</p>

      </div>
  );
}

export {About};
