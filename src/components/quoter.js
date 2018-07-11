import React, { Component } from 'react'

class Quoter extends Component {
    render() {
        return (
            <button className={"testimonial-button" + this.props.classes.button} onClick={this.props.updateQuoterStatus}>
                <div className={"testimonial-overlay" + this.props.classes.button} />

                <div className={this.props.classes.img}>
                    <img src={this.props.src} />
                </div>
            </button>
        )
    }
}

export default Quoter
