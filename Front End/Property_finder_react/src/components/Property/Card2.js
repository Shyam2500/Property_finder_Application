import React, { Component } from 'react'

export default class Card2 extends Component {
    render() {
        return (
            <div>
                
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="card" >
                            {/* <img className="card-img-top" src="" alt="Card image cap" height="200px" /> */}
                            <div className="card-body">
                                <h3 className="card-title">1 BHK </h3>
                               
                                <a href="#" className="btn btn-primary">Search</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card" >
                            <img className="card-img-top" src="" alt="Card image cap" height="200px" />
                            <div className="card-body">
                                <h3 className="card-title">2 BHK </h3>
                                <a href="#" className="btn btn-primary">Search</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card" >
                            <img className="card-img-top" src="" alt="Card image cap" height="200px" />
                            <div className="card-body">
                                <h3 className="card-title">3 BHK </h3>
                                <a href="#" className="btn btn-primary">Search</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="row">
                <div className="col-sm">
                            <div className="card" >
                                <img className="card-img-top" src="" alt="Card image cap" height="200px" />
                                <div className="card-body">
                                <h3 className="card-title">4 BHK </h3>
                                    <a href="#" className="btn btn-primary">Search</a>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm">
                                <div className="card" >
                                    <img className="card-img-top" src="..." alt="Card image cap" height="200px" />
                                    <div className="card-body">
                                <h3 className="card-title">Bungalow </h3>
                                        <a href="#" className="btn btn-primary">Search</a>
                                    </div>
                                </div>
                                </div>
                                <div className="col-sm">
                                    <div className="card" >
                                        <img className="card-img-top" src="..." alt="Card image cap" height="200px" />
                                        <div className="card-body">
                                <h3 className="card-title">Villa </h3>
                                            <a href="#" className="btn btn-primary">Search</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

            </div>
        )
    }
}
