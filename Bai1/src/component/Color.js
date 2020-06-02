import React from 'react';

class Color extends React.Component {
    render() {
        var style = {
            width: "160px",
            height: "50px",
            backgroundColor: this.props.color
        }
        return (
            <div className="block_color">
                <div className="name-color">
                    <p>{this.props.id}</p>
                    <p>{this.props.name}</p>
                </div>
                <div style={style}></div>
            </div>
        )
    }
}
export default Color;