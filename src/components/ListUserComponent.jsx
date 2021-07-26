import React, { Component } from 'react';

class ListUserComponent extends Component {
    render() {
        return (
            <div className="col-9">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên </th>
                            <th>Điện thoại </th>
                            <th>Quyền </th>
                            <th>Thao tác </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">1</td>
                            <td>Trần Đức Lương</td>
                            <td>0988998822</td>
                            <td>Moderator</td>
                            <td>
                                <div className="btn-group">
                                    <div className="btn btn-warning sua"> <i className="fa fa-edit    " /> Sửa </div>
                                    <div className="btn btn-danger btn-block xoa"> <i className="fa fa-delete    " /> Xoá
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">2</td>
                            <td>Trần Đức Lương</td>
                            <td>0988998822</td>
                            <td>Moderator</td>
                            <td>
                                <div className="btn-group">
                                    <div className="btn btn-warning sua"> <i className="fa fa-edit    " /> Sửa </div>
                                    <div className="btn btn-danger xoa"> <i className="fa fa-delete    " /> Xoá </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">3</td>
                            <td>Phan văn tài em</td>
                            <td>0988998822</td>
                            <td>Moderator</td>
                            <td>
                                <div className="btn-group">
                                    <div className="btn btn-warning sua"> <i className="fa fa-edit    " /> Sửa </div>
                                    <div className="btn btn-danger xoa"> <i className="fa fa-delete    " /> Xoá </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">4</td>
                            <td>Bui Tien Dung</td>
                            <td>0988998822</td>
                            <td>Moderator</td>
                            <td>
                                <div className="btn-group">
                                    <div className="btn btn-warning sua"> <i className="fa fa-edit    " /> Sửa </div>
                                    <div className="btn btn-danger xoa"> <i className="fa fa-delete    " /> Xoá </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">5</td>
                            <td>Trần Đức Lương</td>
                            <td>0988998822</td>
                            <td>Moderator</td>
                            <td>
                                <div className="btn-group">
                                    <div className="btn btn-warning sua"> <i className="fa fa-edit    " /> Sửa </div>
                                    <div className="btn btn-danger xoa"> <i className="fa fa-delete    " /> Xoá </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">6</td>
                            <td>Trần Đức Lương</td>
                            <td>0988998822</td>
                            <td>Moderator</td>
                            <td>
                                <div className="btn-group">
                                    <div className="btn btn-warning sua"> <i className="fa fa-edit    " /> Sửa </div>
                                    <div className="btn btn-danger xoa"> <i className="fa fa-delete    " /> Xoá </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        );
    }
}

export default ListUserComponent;