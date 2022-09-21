import {useForm} from "react-hook-form";
import {postObj, postUsingAxios} from "../../services/form2.service/form2.api.post";

export function Form2() {

    let {register, handleSubmit, watch, formState:{errors}} = useForm({defaultValues:{title:'default title', body:'default body', userId:3}});

    function onSubmit(data) {
        // console.log(data);

        // postObj(data);

        postUsingAxios(data).then(value => console.log(value.data));

    }

    // console.log(watch('title'));

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('title', {required:true})}/>
                {errors.title && <p>Error in title (title is required)</p>}
                <input {...register('body')}/>
                <input type="submit" value={'Submit'}/>
                <select {...register('userId')}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </form>
        </div>
    )
}