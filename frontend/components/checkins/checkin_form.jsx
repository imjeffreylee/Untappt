import React from "react";

class CheckinForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drink_id: this.props.drink.id,
            review: "",
            rating: 5,
            slideVal: 8
        }
        this.handleSubmit = this.handleSubmit.bind(this);
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

    // render() {
    //     return (

    //     )
    // }
}