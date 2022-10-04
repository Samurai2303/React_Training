import {useCount1, actions} from "../../redusers";

function Counter1() {
    let [state, dispatch] = useCount1();

  return (
      <div>
          <h2>Counter 1 - {state.count1}</h2>
          <button onClick={()=>dispatch({type:actions.inc})}>Inc</button>
          <button onClick={()=>dispatch({type:actions.dec})}>Dec</button>
          <button onClick={()=>dispatch({type:actions.reset})}>Reset</button>
          <button onClick={()=>dispatch({type:actions.set, payload:10})}>Set</button>

      </div>
  );
}

export {Counter1};
