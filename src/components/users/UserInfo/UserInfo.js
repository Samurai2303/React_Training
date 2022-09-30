import {useState} from "react";

function UserInfo({user}) {
    let {address} = user;
    let {company} = user;

    let [showHide, setShowHide] = useState(true);

    return (
        <div>
            <h3>Id - {user.id} <br/> Name - {user.name}</h3>
            <p>Username - {user.username} <br/>
                Email - {user.email} <br/>
                Phone - {user.phone}</p>
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

                <button onClick={()=>setShowHide(false)}>Hide</button>
        </div>
    );
}

export {UserInfo};