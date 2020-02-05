import React from 'react'

export default props =>
    <header>
        <div className="navbar navbar-dark bg-dark box-shadow">
            <div className="container d-flex justify-content-between">
                <a app-link="#" className="navbar-brand d-flex align-items-center">
                    <i className="header-icon fa fa-paw text-warning"></i><strong className="font-weight-light pl-2">PetShop</strong>
                </a>
                <button className="navbar-toggler collapsed"
                    data-toggle="collapse" data-target="#header">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>
        <div className="bg-dark collapse" id="header">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-md-7 py-4">
                        <h4 className="text-white">Sobre</h4>
                        <p className="text-muted">Texto descritivo...</p>
                    </div>
                    <div className="col-sm-4 offset-md-1 py-4">
                        <h4 className="text-white">Contato</h4>
                        <ul className="list-unstyled">
                            <li>
                                <a app-link="#" className="text-white">Twitter</a>
                            </li>
                            <li>
                                <a app-link="#" className="text-white">Facebook</a>
                            </li>
                            <li>
                                <a app-link="mailto:#" className="text-white">Email</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>