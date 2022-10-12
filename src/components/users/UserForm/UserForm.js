import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {usersActions} from "../../../redux";
import {CloseBtn} from "../../customElements/CloseBtn/CloseBtn";

function UserForm() {

    let dispatch = useDispatch();

    let {register, formState: {isValid, errors}, handleSubmit, reset, setValue} = useForm({mode:"all"});

    async function submit(data) {
        await dispatch(usersActions.postUser({user: data}));
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <p>User info</p>
                <input type="text" placeholder={'Name'} {...register('name', {
                    minLength: {value: 2, message: 'Minimal length of name is 2 characters'},
                    maxLength: {value: 15, message: 'Maximum length of name is 15 characters'},
                    required: true
                })}/>
                <input type="text" placeholder={'Username'} {...register('username', {
                    minLength: {value: 4, message: 'Minimal length of username is 4 characters'},
                    maxLength: {value: 20, message: 'Maximal length of username is 20 characters'},
                    required: true
                })}/>
                <input type="email" placeholder={'Email'} {...register('email', {
                    minLength: {value: 10, message: 'Minimal length of email is 10 characters'},
                    maxLength: {value: 30, message: 'Maximal length of email is 30 characters'},
                    required: true
                })}/>
                <input type="number" placeholder={'Phone'} {...register('phone', {
                    minLength: {value: 12, message: 'Length of number must be 12 digits'},
                    maxLength: {value: 12, message: 'Length of number must be 12 digits'},
                    required: true
                })}/>
                <p>Address</p>
                <input type="text" placeholder={'City'} {...register('address.city', {
                    minLength: {value: 4, message: 'Minimal length of city name is 4 characters'},
                    maxLength: {value: 15, message: 'Maximal length of city name is 15 characters'},
                    required: true
                })}/>
                <input type="text" placeholder={'Street'} {...register('address.street', {
                    minLength: {value: 5, message: 'Minimal length of street name is 5 characters'},
                    maxLength: {value: 18, message: 'Maximal length of street name is 18 characters'},
                    required: true
                })}/>
                <input type="text" placeholder={'Suite'} {...register('address.suite', {
                    minLength: {value: 6, message: 'Minimal length of suite is 6 characters'},
                    maxLength: {value: 15, message: 'Maximal length of suite is 15 characters'},
                    required: true
                })}/>
                <input type="number" placeholder={'Zipcode'} {...register('address.zipcode', {
                    minLength: {value: 6, message: 'Minimal length of zipcode is 6 characters'},
                    maxLength: {value: 16, message: 'Maximal length of zipcode is 16 characters'},
                    required: true
                })}/>
                <p>Geo</p>
                <input type="number" placeholder={'Lat'} {...register('address.geo.lat', {
                    minLength: {value: 2, message: 'Minimal length of lat is 2 characters'},
                    maxLength: {value: 20, message: 'Maximal length of lat is 20 characters'},
                    required: true
                })}/>
                <input type="number" placeholder={'Lng'} {...register('address.geo.lng', {
                    minLength: {value: 2, message: 'Minimal length of lng is 2 characters'},
                    maxLength: {value: 20, message: 'Maximal length of lng is 20 characters'},
                    required: true
                })}/>
                <p>Company info</p>
                <input type="text" placeholder={'Company name'} {...register('company.name', {
                    minLength: {value: 4, message: 'Minimal length of company name is 4 characters'},
                    maxLength: {value: 25, message: 'Maximal length of company name is 25 characters'},
                    required: true
                })}/>
                <input type="text" placeholder={'Website'} {...register('website', {
                    minLength: {value: 5, message: 'Minimal length of website is 5 characters'},
                    maxLength: {value: 40, message: 'Maximal length of website is 30 characters'},
                    required: true
                })}/>
                <input type="text" placeholder={'catchPhrase'} {...register('company.catchPhrase', {
                    minLength: {value: 8, message: 'Minimal length of catchPhrase is 8 characters'},
                    maxLength: {value: 50, message: 'Maximal length of catchPhrase is 50 characters'},
                    required: true
                })}/>
                <input type="text" placeholder={'Bs'} {...register('company.bs', {
                    minLength: {value: 6, message: 'Minimal length of bs is 6 characters'},
                    maxLength: {value: 40, message: 'Minimal length of bs is 40 characters'},
                    required: true
                })}/>
                <button disabled={!isValid}>Save user</button>
            </form>
            <div>
                {errors?.name && <p>{errors.name.message}</p>}
                {errors?.username && <p>{errors.username.message}</p>}
                {errors?.email && <p>{errors.email.message}</p>}
                {errors?.phone && <p>{errors.phone.message}</p>}
                {errors?.address?.city && <p>{errors.address.city.message}</p>}
                {errors?.address?.street && <p>{errors.address.street.message}</p>}
                {errors?.address?.suite && <p>{errors.address.suite.message}</p>}
                {errors?.address?.zipcode && <p>{errors.address.zipcode.message}</p>}
                {errors?.address?.geo?.lat && <p>{errors.address.geo.lat.message}</p>}
                {errors?.address?.geo?.lng && <p>{errors.address.geo.lng.message}</p>}
                {errors?.website && <p>{errors.website.message}</p>}
                {errors?.company?.name && <p>{errors.company.name.message}</p>}
                {errors?.company?.catchPhrase && <p>{errors.company.catchPhrase.message}</p>}
                {errors?.company?.bs && <p>{errors.company.bs.message}</p>}
            </div>
            <CloseBtn onClick={() => dispatch(usersActions.toggleForm)}/>

        </div>
    );
}

export {UserForm};
