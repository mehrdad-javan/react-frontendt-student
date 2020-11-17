import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <header>
                    <div className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div className="navbar-nav">
                            <a href="#" className="nav-item nav-link active">Home</a>
                            <a href="/student" className="nav-item nav-link">Student List</a>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;
