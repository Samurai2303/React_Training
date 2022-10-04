import {useEffect, useState} from "react";
import {carsService} from "../../../services";
import {Car} from "../Car/Car";

function Cars() {

let [cars,setCars] = useState([]);

useEffect(() => {
    carsService.getAll().then(({data:response})=>{
        setCars(response.data);
    })
}, [])

  return (
      <div>
          {cars.length?cars.map(value => <Car car={value} key={value.id}/>):<div>Loading...</div>}

      </div>
  );
}

export {Cars};
