import {useCount2, actions} from "../../redusers";

function Counter2() {
    let [state, dispatch] = useCount2();

    return (
        <div>
            <h2>Counter 2 - {state.count2}</h2>
            <button onClick={()=>dispatch({type:actions.inc})}>Inc</button>
            <button onClick={()=>dispatch({type:actions.dec})}>Dec</button>
            <button onClick={()=>dispatch({type:actions.reset})}>Reset</button>
            <button onClick={()=>dispatch({type:actions.set, payload:20})}>Set</button>

        </div>
    );
}

export {Counter2};
