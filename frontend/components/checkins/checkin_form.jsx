import React from "react";

class CheckinForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drink_id: this.props.drink.id,
            review: "",
            rating: 0,
            slideVal: 8
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        document.addEventListener("keydown", (e) => {
            if (e.keyCode === 27) this.props.closeModal();
        })
    }

    handleChange(field) {
        return (e) => {
            this.setState({ [field]: e.target.value }, () => {
                this.setState({ 'rating': (this.state.slideVal * 0.25) })
            });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createCheckin(this.state.drink_id, this.state).then(() => this.props.closeModal());
    }

    render() {
        return (
            <div className="checkin-form">
                <div className="checkin-form-top">
                    <h3 className="checkin-form-title">Check-In</h3>
                    <a onClick={this.props.closeModal}>
                        <i className="fas fa-times modal-close-icon"></i>
                    </a>
                </div>
                <div className="checkin-form-body">
                    <form onSubmit={this.handleSubmit} method="post">
                        <div className="photo-and-text">
                            <textarea className="review-text" placeholder="What did you think?" onChange={this.handleChange("review")}></textarea>
                            <input type="button" className="checkin-photo-button"/>
                        </div>
                        <div className="slideset-and-confirm">
                            <div className="slide-output">
                                <input type="range" name="rating" min="1" max="5" className="checkin-form-slide"/>
                                <div className="output-container">
                                    <p>5</p>
                                    <p className="text-star">STARS</p>
                                </div>
                            </div>
                            <div className="confirm-container">
                                <input className="confirm-btn" type="submit" value="Confirm"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default CheckinForm;