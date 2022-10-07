import {useForm} from "react-hook-form";
import {reducer} from "../../reducers";

function DogForm() {
    let {reset, register, handleSubmit} = useForm();

    let submit = (data) => {
        reducer(state, action){

        }
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'dog name'} {...register('dogName')}/>
            <button>Save dog</button>
        </form>
    );
}

export {DogForm};
