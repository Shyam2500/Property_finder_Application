import React from "react";


const Card = () => {
    return (
        <React.Fragment>

            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="card" >
                            <img className="card-img-top" src="https://cdn.pixabay.com/photo/2019/03/20/07/08/pune-4067841_960_720.jpg" alt="Card image cap" height="200px" />
                            <div className="card-body">
                                <h2 className="card-title">Pune </h2>

                                <a href={`/getbycity/pune`} className="btn btn-primary">Search</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card" >
                            <img className="card-img-top" src="https://cdn.pixabay.com/photo/2016/05/03/20/01/mumbai-1370023_960_720.jpg" alt="Card image cap" height="200px" />
                            <div className="card-body">
                                <h2 className="card-title">Mumbai </h2>
                                <a href="/getbycitymumbai" className="btn btn-primary">Search</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card " >
                            <img className="card-img-top" src="https://media.gettyimages.com/photos/deekshabhoomi-picture-id1296288838?k=6&m=1296288838&s=612x612&w=0&h=kxinBYjZcEwsVg8RkHHdHTLfdYWeCbYcKWwNFflMP4g=" alt="Card image cap" height="200px" />
                            <div className="card-body">
                                <h2 className="card-title">Nagpur </h2>
                                <a href="/getbycity/nagpur" className="btn btn-primary">search</a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <div className="card" >
                            <img className="card-img-top" src="https://cdn.pixabay.com/photo/2020/06/19/03/40/bengaluru-5315608__340.jpg" alt="Card image cap" height="200px" />
                            <div className="card-body">
                                <h2 className="card-title">Banglore </h2>
                                <a href="/getbycity/banglore" className="btn btn-primary">Search</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card" >
                            <img className="card-img-top" src="https://images.pexels.com/photos/2349168/pexels-photo-2349168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap" height="200px" />
                            <div className="card-body">
                                <h2 className="card-title">Delhi </h2>
                                <a href="/getbycity/delhi" className="btn btn-primary">Search</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card" >
                            <img className="card-img-top" src="https://images.unsplash.com/photo-1560237606-f82b6cb1ebbf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=843&q=80" alt="Card image cap" height="200px" />
                            <div className="card-body">
                                <h2 className="card-title">Hyderabad </h2>
                                <a href="/getbycity/hyderabad" className="btn btn-primary">Search</a>
                            </div>
                        </div>
                    </div>
                  
                </div>
                
            </div>

        </React.Fragment>
    );
}
export default Card;