import React, { useState } from 'react';
import fakeData from '../../fakeData';
import image1 from '../../images/Map.png';
import ResultShow from '../ResultShow/ResultShow';

const Destination = () => {

    const [vehicleInfo, setVehicleInfo] = useState({
        isSet: false,
        showForm: true,
        selectBtn: false
    })
    const handleSubmit = (e) => {
        const newInfo = { ...vehicleInfo }
        newInfo.isSet = true;
        newInfo.showForm = false;
        setVehicleInfo(newInfo);
        e.preventDefault();
        e.target.reset();
    }
    const handleBlur = (e) =>{
        if (e.target.name === 'pick') {
            const userSignInfo = { ...vehicleInfo };
            userSignInfo[e.target.name] = e.target.value;
            setVehicleInfo(userSignInfo);
        }
        if (e.target.name === 'drop') {
            const userSignInfo = { ...vehicleInfo };
            userSignInfo[e.target.name] = e.target.value;
            setVehicleInfo(userSignInfo);
        }
    }
    const handleClick = (e) =>{
        const fakeDatas = fakeData;
        const selectedItem  = fakeDatas.find(item => item.id == e.target.value);
        const newInfo = {...vehicleInfo, ...selectedItem};
        newInfo.selectBtn = true;
        setVehicleInfo(newInfo);
        console.log(newInfo);
        console.log(e.target.value);
    }
    console.log(vehicleInfo);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <form onSubmit={handleSubmit} style={{ backgroundColor: "lightgray", borderRadius: "10px", padding: "15px 20px" }}>
                        {vehicleInfo.showForm &&
                            <div className="input-parent">
                                <div class="form-group">
                                    <label for="exampleInputEmail1"><strong>Pick</strong></label>
                                    <input type="text" onBlur={handleBlur} name="pick" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Location From" required />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1"><strong>Drop</strong></label>
                                    <input type="text" onBlur={handleBlur} name="drop" class="form-control" id="exampleInputPassword1" placeholder="Location To" required />
                                    <br />
                                    <input style={{marginRight:"20px"}} className="btn btn-primary" type="submit" value="Search" />
                                    <select onChange={handleClick}  class="form-select btn btn-danger" aria-label="Default select example">
                                        <option selected disabled>Open this select menu</option>
                                        <option value="1">Bike</option>
                                        <option value="2">Bus</option>
                                        <option value="3">Train</option>
                                        <option value="4">car</option>
                                    </select>
                                </div>
                            </div>
                        }
                        {(vehicleInfo.isSet && vehicleInfo.selectBtn) &&
                        
                            <ResultShow vehicleInfo = {vehicleInfo}></ResultShow>
                        }
                    </form>
                </div>
                <div className="col-md-8">
                    <img src={image1} alt="" />
                </div>
            </div>
        </div>
    );
};    

export default Destination;