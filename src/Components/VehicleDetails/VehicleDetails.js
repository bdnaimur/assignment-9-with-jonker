import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import image1 from '../../images/Map.png';
import person from '../../images/peopleicon.png';
import arrow from '../../images/arrow1.png';


const VehicleDetails = () => {
    const { id } = useParams();
    const fakeDatas = fakeData;
    const vehicleData = fakeDatas.find(vehicle => vehicle.id === parseInt(id));
    console.log(fakeDatas);
    console.log(vehicleData);
    const [vehicleInfo, setVehicleInfo] = useState({
        isSet: false,
        showForm: true
    })
    const handleSubmit = (e) => {
        const newInfo = { ...vehicleInfo }
        newInfo.isSet = true;
        newInfo.showForm = false;
        setVehicleInfo(newInfo);
        // console.log("clicked", searchValue);
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
                            <div className="parentDiv">
                                <div className="search-result">
                                    <h1>{vehicleInfo.pick}</h1>
                                    <div><img style={{width:"80px", height:"100px", backgroundColor:"lightgray"}} src={arrow} alt=""/></div>
                                    <h1>{vehicleInfo.drop}</h1>
                                </div>
                                <div style={{ display: "flex", margin: "20px 0", backgroundColor: "white", padding: "0 10px", borderRadius: "5px" }}>
                                    <img style={{ width: "70px", height: "70px", marginRight: "20px" }} src={vehicleData.img} alt="" />
                                    <h3 style={{ marginRight: "15px", marginTop: "15px" }}>{vehicleData.name}</h3>
                                    <img style={{ width: "30px", height: "30px", marginTop: "15px" }} src={person} alt="" /><h6 style={{ marginRight: "15px", marginTop: "15px" }}>{vehicleData.person1}</h6>
                                    <h4 style={{ marginTop: "15px" }} >$ {vehicleData.price}</h4>
                                </div>
                                <div style={{ display: "flex", margin: "20px 0", backgroundColor: "white", padding: "0 10px", borderRadius: "5px" }}>
                                    <img style={{ width: "70px", height: "70px", marginRight: "20px" }} src={vehicleData.img} alt="" />
                                    <h3 style={{ marginRight: "15px", marginTop: "15px" }}>{vehicleData.name}</h3>
                                    <img style={{ width: "30px", height: "30px", marginTop: "15px" }} src={person} alt="" /><h6 style={{ marginRight: "15px", marginTop: "15px" }}>{vehicleData.person2}</h6>
                                    <h4 style={{ marginTop: "15px" }}>$ {vehicleData.price * 2}</h4>
                                </div>
                                <div style={{ display: "flex", margin: "20px 0", backgroundColor: "white", padding: "0 10px", borderRadius: "5px" }}>
                                    <img style={{ width: "70px", height: "70px", marginRight: "20px" }} src={vehicleData.img} alt="" />
                                    <h3 style={{ marginRight: "15px", marginTop: "15px" }}>{vehicleData.name}</h3>
                                    <img style={{ width: "30px", height: "30px", marginTop: "15px" }} src={person} alt="" /><h6 style={{ marginRight: "15px", marginTop: "15px" }}>{vehicleData.person3}</h6>
                                    <h5 style={{ marginTop: "15px" }}>$ {vehicleData.price * 3}</h5>
                                </div>
                            </div>
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