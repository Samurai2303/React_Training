import {useForm} from "react-hook-form";
import {useAuth} from "../../hooks";
import {useLocation, useNavigate} from "react-router-dom";

function Login() {

    let {register, reset, handleSubmit} = useForm();

    let {logIn} = useAuth();

    let {state} = useLocation();

    let navigate = useNavigate();

    function submit(data) {
        logIn(data, ()=>{navigate(state.pathname, {replace:true})});

        reset();
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'username'} {...register('name')}/>
            <button>Save user< /button>
        </form>
    );
}

export {Login};
