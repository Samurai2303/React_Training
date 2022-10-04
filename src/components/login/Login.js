import {useForm} from "react-hook-form";
import {authService} from "../../services";
import {useState} from "react";
import {useNavigate} from 'react-router-dom';


function Login() {
    let {register, handleSubmit} = useForm();

    let navigate = useNavigate();

    let [error, setError] = useState(null);

    async function submit(user) {
        try {
            let {data} = await authService.login(user);
            authService.setTokens(data);
            navigate('/cars');
        } catch (e) {
            setError(e.response.data?.username);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="text" placeholder={'password'} {...register('password')}/>
                <button>Log in</button>
            </form>
            {error && <p>{error}</p>}

        </div>
    );
}

export {Login};
