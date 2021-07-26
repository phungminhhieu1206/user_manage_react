import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-4">Project quản lý thành viên bằng React JS, JSON</h1>
                    <hr className="my-4" />
                </div>
            </div>
        );
    }
}

export default HeaderComponent;