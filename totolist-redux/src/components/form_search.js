import React from 'react';

class FormSearch extends React.Component {
    render() {
        return (
            <div className="col-md-3 form-search">
                <div className="input-group md-form form-sm form-2 pl-0">
                    <input className="form-control my-0 py-1 red-border" type="text" placeholder="text search" aria-label="Search" />
                    <div className="input-group-append">
                        <button className="input-group-text red lighten-3" id="basic-text1">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormSearch;
