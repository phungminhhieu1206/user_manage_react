import React, { Component } from 'react';

class SearchComponent extends Component {
    render() {
        return (
            <div className="col-12">
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" aria-describedby="helpId" placeholder="Nhập từ khoá" style={{ width: '610px' }} />
                        <div className="btn btn-info"> Tìm</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchComponent;