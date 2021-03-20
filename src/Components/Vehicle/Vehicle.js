import React from 'react';
import { Link } from 'react-router-dom';

const Vehicle = (props) => {
    console.log(props);
    const {name,img,id} = props.vahicle;
    return (
        <div className='col-lg-3 col-md-4 col-sm-6 mt-5'>
            <Link to={`/destinationKey/${id}`}>
                <div class="card mb-5" style={{width: '15rem',border:'none', boxShadow:"10px 10px 30px lightgray", height:"250px"}}>
                <img style={{width:'90%',height:"180px", padding:"10px"}} src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h4 class="card-text text-center pb-5"><strong>{name}</strong></h4>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default Vehicle;