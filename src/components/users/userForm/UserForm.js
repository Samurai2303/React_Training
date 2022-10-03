import {useForm} from "react-hook-form";
import {usersService} from "../../../services";
import {useContext} from "react";
import {Context} from "../../../index";


function UserForm() {
    let {reset, setValue, handleSubmit, register, formState: {isValid, errors}} = useForm({mode: "all"});

    let context = useContext(Context);

    function submit(data) {
        usersService.post(data).then(value => context.setUsers(users => users = [...users, value.data]));
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type={'text'} placeholder={'Name'} {...register('name', {
                    required: true,
                    minLength: {value: 2, message: 'Minimal length of the name must be 2 characters'},
                    maxLength: {value: 15, message: 'Maximal length of name must be 15 characters'}
                })}/>
                <input type={'text'} placeholder={'Username'} {...register('username', {
                    required: true,
                    minLength: {value: 4, message: 'Minimal length of the username is 4 characters'},
                    maxLength: {value: 20, message: 'Maximal length of the username is 20 characters'}
                })}/>
                <input type={'email'} placeholder={'Email'} {...register('email', {
                    required: true,
                    minLength: {value: 10, message: 'Minimal length of email is 10 characters'},
                    maxLength: {value: 40, message: 'Maximal length of email is 40 characters'}
                })}/>
                <input type={'number'} placeholder={'Phone'} {...register('phone', {
                    required: true,
                    min: {value: 380000000000, message: 'Phone number must starts from 380'},
                    max: {value: 390000000000, message: 'Phone number must starts from 380'},
                    valueAsNumber: true
                })}/>
                <input type={'text'} placeholder={'City'} {...register('address.city', {
                    required: true,
                    minLength: {value: 3, message: 'Minimal length of city is 3 characters'},
                    maxLength: {value: 20, message: 'Maximal length of city is 20 characters'}
                })}/>
                <input type={'text'} placeholder={'Street'} {...register('address.street', {
                    required: true,
                    minLength: {value: 4, message: 'Minimal length of street is 4 characters'},
                    maxLength: {value: 20, message: 'Maximal length of street is 20 characters'}
                })}/>
                <input type={'text'} placeholder={'Suite'} {...register('address.suite', {
                    required: true,
                    minLength: {value: 5, message: 'Minimal length of suite is 5 characters'},
                    maxLength: {value: 18, message: 'Maximal length of suite is 18 characters'}
                })}/>
                <input type={'number'} placeholder={'Zipcode'} {...register('address.zipcode', {
                    required: true,
                    min: {value: 100000, message: 'Minimal length of zipcode is 6 characters'},
                    max: {value: 100000000000000000, message: 'Maximal length of zipcode is 18 characters'},
                    valueAsNumber: true
                })}/>
                <input type={'number'} placeholder={'Lat'} {...register('address.geo.lat', {
                    required: true,
                    minLength: {value: 0.01, message: 'Minimal length of lat is 2 characters'},
                    maxLength: {value: 100000000000000, message: 'Maximal length of lat is 15 characters'},
                    valueAsNumber: true
                })}/>
                <input type={'number'} placeholder={'Lng'} {...register('address.geo.lng', {
                    required: true,
                    minLength: {value: 0.01, message: 'Minimal length of lng is 2 characters'},
                    maxLength: {value: 100000000000000, message: 'Maximal length of lng is 15 characters'},
                    valueAsNumber: true
                })}/>
                <input type={'text'} placeholder={'Company name'} {...register('company.name', {
                    required: true,
                    minLength: {value: 3, message: 'Minimal length of company name is 3 characters'},
                    maxLength: {value: 20, message: 'Maximal length of company name is 20 characters'}
                })}/>
                <input type={'text'} placeholder={'Website'} {...register('website', {
                    required: true,
                    minLength: {value: 5, message: 'Minimal length of website is 5 characters'},
                    maxLength: {value: 40, message: 'Maximal length of website is 40 characters'}
                })}/>
                <input type={'text'} placeholder={'Catchphrase'} {...register('company.catchPhrase', {
                    required: true,
                    minLength: {value: 5, message: 'Minimal length of catchphrase is 5 characters'},
                    maxLength: {value: 100, message: 'Maximal length of catchphrase is 100 characters'}
                })}/>
                <input type={'text'} placeholder={'Bs'} {...register('company.bs', {
                    required: true,
                    minLength: {value: 5, message: 'Minimal length of bs is 5 characters'},
                    maxLength: {value: 50, message: 'Maximal length of bs is 50 characters'}
                })}/>
                <button disabled={!isValid}>Create new user</button>
            </form>
            <div>
                {errors.name ? <p>{errors.name.message}</p> : false}
                {errors.username ? <p>{errors.username.message}</p> : false}
                {errors.email ? <p>{errors.email.message}</p> : false}
                {errors.phone ? <p>{errors.phone.message}</p> : false}
                {errors.address?.city ? <p>{errors.address.city.message}</p> : false}
                {errors.address?.street ? <p>{errors.address.street.message}</p> : false}
                {errors.address?.suite ? <p>{errors.address.suite.message}</p> : false}
                {errors.address?.zipcode ? <p>{errors.address.zipcode.message}</p> : false}
                {errors.address?.geo?.lat ? <p>{errors.address.geo.lat.message}</p> : false}
                {errors.address?.geo?.lng ? <p>{errors.address.geo.lng.message}</p> : false}
                {errors.company?.name ? <p>{errors.company.name.message}</p> : false}
                {errors.website ? <p>{errors.website.message}</p> : false}
                {errors.company?.catchPhrase ? <p>{errors.company.catchPhrase.message}</p> : false}
                {errors.company?.bs ? <p>{errors.company.bs.message}</p> : false}
            </div>
        </div>
    );
}

export {UserForm};
