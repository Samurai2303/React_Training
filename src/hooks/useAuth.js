import {useContext} from "react";
import {AuthContext} from "../hoc";

let useAuth = () => useContext(AuthContext);

export {useAuth};