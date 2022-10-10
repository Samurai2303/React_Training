import {useSelector} from "react-redux";

function SelectedUser() {

    let {selectedUser} = useSelector(state => state.usersReducer);

    return (
        <div>
            {selectedUser && <div>
                <div>
                    <h3>Id - {selectedUser.id} <br/>
                        Name - {selectedUser.name}</h3>
                    <p>Username - {selectedUser.username} <br/>
                        Email - {selectedUser.email} <br/>
                        Phone - {selectedUser.phone}</p>
                    <h4>Address:</h4>
                    <p>City - {selectedUser.address.city}<br/>
                        Street - {selectedUser.address.street}<br/>
                        Suite - {selectedUser.address.suite}<br/>
                        Zipcode - {selectedUser.address.zipcode}</p>
                    <h5>Geo:</h5>
                    <p>Lat - {selectedUser.address.geo.lat}<br/>
                        Lng - {selectedUser.address.geo.lng}</p>
                    <h4>Company:</h4>
                    <p>Company name - {selectedUser.company.name} <br/>
                        Website - {selectedUser.website} <br/>
                        CatchPhrase - {selectedUser.company.catchPhrase} <br/>
                        Bs - {selectedUser.company.bs}</p>
                </div>
                <div>Close</div>
            </div>}

        </div>
    );
}

export {SelectedUser};
