import React from 'react';
import person from '../../images/peopleicon.png';
import arrow from '../../images/red-down-arrow.png';

const ResultShow = (props) => {
    const gariInfo = props.vehicleInfo;
    return (
        <div>
            <div className="parentDiv">
                <div className="search-result">
                    <h1>{gariInfo.pick}</h1>
                    <div><img style={{width:"50%", height:"100px", backgroundColor:"lightgray"}} src={arrow} alt=""/></div>
                    <h1>{gariInfo.drop}</h1>
                </div>
                <div style={{ display: "flex", margin: "20px 0", backgroundColor: "white", padding: "0 10px", borderRadius: "5px" }}>
                    <img style={{ width: "70px", height: "70px", marginRight: "20px" }} src={gariInfo.img} alt="" />
                    <h3 style={{ marginRight: "15px", marginTop: "15px" }}>{gariInfo.name}</h3>
                    <img style={{ width: "30px", height: "30px", marginTop: "15px" }} src={person} alt="" /><h6 style={{ marginRight: "15px", marginTop: "15px" }}>{gariInfo.person1}</h6>
                    <h4 style={{ marginTop: "15px" }} >$ {gariInfo.price}</h4>
                </div>
                <div style={{ display: "flex", margin: "20px 0", backgroundColor: "white", padding: "0 10px", borderRadius: "5px" }}>
                    <img style={{ width: "70px", height: "70px", marginRight: "20px" }} src={gariInfo.img} alt="" />
                    <h3 style={{ marginRight: "15px", marginTop: "15px" }}>{gariInfo.name}</h3>
                    <img style={{ width: "30px", height: "30px", marginTop: "15px" }} src={person} alt="" /><h6 style={{ marginRight: "15px", marginTop: "15px" }}>{gariInfo.person2}</h6>
                    <h4 style={{ marginTop: "15px" }}>$ {gariInfo.price * gariInfo.person2}</h4>
                </div>
                <div style={{ display: "flex", margin: "20px 0", backgroundColor: "white", padding: "0 10px", borderRadius: "5px" }}>
                    <img style={{ width: "70px", height: "70px", marginRight: "20px" }} src={gariInfo.img} alt="" />
                    <h3 style={{ marginRight: "15px", marginTop: "15px" }}>{gariInfo.name}</h3>
                    <img style={{ width: "30px", height: "30px", marginTop: "15px" }} src={person} alt="" /><h6 style={{ marginRight: "15px", marginTop: "15px" }}>{gariInfo.person3}</h6>
                    <h5 style={{ marginTop: "15px" }}>$ {gariInfo.price * 3}</h5>
                </div>
            </div>
        </div>
    );
};

export default ResultShow;