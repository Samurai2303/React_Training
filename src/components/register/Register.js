import {useForm} from "react-hook-form";
import {authService} from "../../services";
import {useState} from "react";
import {useNavigate} from 'react-router-dom';

function Register() {

    let navigate = useNavigate();

    let {reset, handleSubmit, register} = useForm();

    let [error, setError] = useState(null);

    async function submit(user) {
        try {
           await authService.register(user);
            navigate('./login');
        } catch (e) {
            setError(e.response?.data?.username);
        }
        reset();
    }

    return (
        <div>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="text" placeholder={'password'} {...register('password')}/>
                <button>Create</button>
            </form>

        </div>
    );
}

export {Register};
