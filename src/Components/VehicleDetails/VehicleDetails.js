import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import image1 from '../../images/Map.png';
import ResultShow from '../ResultShow/ResultShow';


const VehicleDetails = () => {
    const { id } = useParams();
    const fakeDatas = fakeData;
    const vehicleData = fakeDatas.find(vehicle => vehicle.id === parseInt(id));
    const [vehicleInfo, setVehicleInfo] = useState({
        isSet: false,
        showForm: true
    })
    const handleSubmit = (e) => {
        const newInfo = { ...vehicleInfo,...vehicleData }
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
                                    <input className="btn btn-primary" type="submit" value="Search" />
                                </div>
                            </div>
                        }
                        {vehicleInfo.isSet &&

                            <ResultShow vehicleInfo={vehicleInfo}></ResultShow>
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

export default VehicleDetails;