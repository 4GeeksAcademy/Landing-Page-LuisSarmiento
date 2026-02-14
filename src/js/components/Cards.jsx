import React from "react";

const Cards = () => {
    return (
        <div className="cards img-fluid">
            
                <img src="src/img/rigo-baby.jpg" className="card-img-top" alt="..."></img>
                <div className="card-body ">
                    <div className="d-flex justify-content-center align-items-center">
                    <h5 className="card-title">Card title</h5>
                    </div>
                    <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <div className="d-flex justify-content-center align-items-center">
                    <a href="#" className="btn btn-primary ">Go somewhere</a>
                    </div>
                </div>
            
        </div>
    )
}

export default Cards