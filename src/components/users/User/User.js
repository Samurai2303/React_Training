import {useState} from "react";
import {useNavigate} from "react-router-dom";

function User({user}) {
    let {address} = user;
    let {company} = user;

    let navigate = useNavigate();
    let [details, setDetails] = useState(null);


    return (
        <div>
            <h3>Id - {user.id} <br/> Name - {user.name}</h3>
            <p>Username - {user.username} <br/>
                Email - {user.email} <br/>
                Phone - {user.phone}</p>
            {details && <div>
                <h4>Address:</h4>
                <p>City - {address.city} <br/>
                    Street - {address.street} <br/>
                    Suite - {address.suite} <br/>
                    Zipcode - {address.zipcode}</p>
                <h4>Geo:</h4>
                <p>Lat - {address.geo.lat} <br/>
                    Lng - {address.geo.lng}</p>
                <h4>Company:</h4>
                <p>Company name - {company.name} <br/>
                    Website - {user.website} <br/>
                    CatchPhrase - {company.catchPhrase} <br/>
                    Bs - {company.bs}</p>

                <button onClick={()=>{navigate(`${user.id}/posts`)}}>Posts of the user</button>
                <button onClick={()=>{navigate(`${user.id}/albums`)}}>Albums of the user</button>
                <button onClick={()=>{navigate(`${user.id}/todos`)}}>Todos of user</button>
                <button onClick={()=>setDetails(null)}>Hide</button>
            </div>}

            <button onClick={() => setDetails(user)}>Show details</button>
            <button>Edit</button>
            <button>Delete</button>
            <hr/>
        </div>
    );
}

export {User};
