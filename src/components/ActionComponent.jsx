import React, { Component } from 'react';

class ActionComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            editStatus: true
        }
    }

    updateEditStatus = () => {
        this.setState({
            editStatus: !this.state.editStatus
        });
    }

    renderEditBtn = () => {
        if (this.state.editStatus === true) {
            return (
                <div className="col-3">
                    <div className="card border-primary mb-3">
                        <div className="card-header">Thêm mới user vào hệ thống </div>
                        <div className="card-body text-primary">
                            <div className="form-group">
                                <input type="text" className="form-control" aria-describedby="helpId" placeholder="Tên User" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" aria-describedby="helpId" placeholder="Điện thoại " />
                            </div>
                            <div className="form-group">
                                <select className="custom-select" required>
                                    <option value>Chọn Quyền mặc định </option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Modrator</option>
                                    <option value={3}>Normal</option>
                                </select>
                            </div>
                            <div className="form-group col-12">
                                <div className="row">
                                    <div
                                        className="btn btn-block btn-outline-primary col-5"
                                        onClick={() => this.updateEditStatus()}>Add</div>
                                    <div className="col-2"></div>
                                    <div
                                        className="btn btn-block btn-outline-secondary col-5"
                                        onClick={() => this.updateEditStatus()}>Close</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="col-3">
                    <div
                        className="btn btn-block btn-outline-info"
                        onClick={() => this.updateEditStatus()}>Thêm mới</div>
                </div>
            );
        }
    }

    render() {
        return this.renderEditBtn();
    }
}

export default ActionComponent;