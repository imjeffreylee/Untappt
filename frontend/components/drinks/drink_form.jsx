import React from "react";
import { connect } from "react-redux";
import { fetchBrewery } from "../../actions/brewery_actions";
import { createDrink } from "../../actions/drink_actions";

class DrinkForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drink_name: "",
            brewery_id: props.match.params.breweryId,
            style: "",
            ABV: null,
            IBU: null,
            description: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        let breweryId = this.props.match.params.breweryId;
        this.props.fetchBrewery(breweryId);
    }

    handleChange(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createDrink(this.state).then(this.props.history.push(`/breweries/${this.state.brewery_id}`))
    }

    render() {
        if (!this.props.brewery) {
            return null;
        }
        
        return (
            <div className="beer-form-master">
                <div className="create-space"></div>
                <form className="add-beer-form" onSubmit={this.handleSubmit} >
                    <div className="form-container">
                        <h1>Add New Beer</h1>
                        <h2>Didn't find what you were looking for? Use this form to add a new beer.</h2>
                        <p>Beer Creation Guidelines</p>
                        <ul>
                            <li>Don't include the brewery in the beer name.</li>
                            <li>Only add the vintage year if the year is part of the label artwork. "Bottled On" and "Best Before" dates are not valid for this.</li>
                            <li>Please make your beer name proper case.</li>
                            <li>Do not create a beer that are blends of 2 or more beers. This goes for any beers that are blended at a Bar/Brewery after kegging.</li>
                            <li>Give your homebrew an original name, don't use another name for beer that is commerical to avoid confusion.</li>
                            <li>For homebrews, please create your own brewery name, do not use another Homebrewery that has already been created that isn't your brewery.</li>
                            <li>Homebrew clones are not allowed. Always give your beer a unique name - do not use the name of the kit or the recipe.</li>
                            <li>Please do not add non-supported drinks (Wine, Water, etc) to Untappd.</li>
                            <li>Please note that by not following these guidelines may results in revoking of your Beer Creation privileges.</li>
                        </ul>
                    </div>
                    <label>BEER NAME
                        <input type="text" onChange={this.handleChange("drink_name")} />
                    </label>
                    <label>BREWERY NAME
                        <input type="text" disabled value={this.props.brewery.brewery_name} />
                    </label>
                    <div className="abv-ibu-style">
                        <div className="abv">
                            <label>ABV
                                <input type="number" onChange={this.handleChange("ABV")} />
                            </label>
                        </div>
                        <div className="ibu">
                            <label>IBU
                                <input type="text" onChange={this.handleChange("IBU")} />
                            </label>
                        </div>
                        <div className="beer-style">
                            <label>STYLE
                                <select name="style" defaultValue="Select a style" onChange={this.handleChange("style")}>
                                    <option disabled value="Select a style">Select a style</option>
                                    <option value="Cider">Cider</option>
                                    <option value="IPA">IPA</option>
                                    <option value="IPA - American">IPA - American</option>
                                    <option value="Lager">Lager</option>
                                    <option value="Lager - Euro Pale">Lager - Euro Pale</option>
                                    <option value="Lager - Japanese Rice">Lager - Japanese Rice</option>
                                    <option value="Lager - Pale">Lager - Pale</option>
                                    <option value="Märzen">Märzen</option>
                                    <option value="Mead">Mead</option>
                                    <option value="Pale Ale">Pale Ale</option>
                                    <option value="Porter">Porter</option>
                                    <option value="Stout">Stout</option>
                                    <option value="Spiced">Spiced</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="description">
                        <label>DESCRIPTION
                            <textarea name="description" onChange={this.handleChange("description")}></textarea>
                        </label>
                    </div>
                    <input type="submit" value="Add New Beer" />
                </form>
            </div>
        )
    }
}

const msp = (state, ownProps) => {
    let breweryId = ownProps.match.params.breweryId;
    return {
        brewery: state.entities.breweries[breweryId]
    }
}

const mdp = dispatch => ({
    fetchBrewery: id => dispatch(fetchBrewery(id)),
    createDrink: drink => dispatch(createDrink(drink))
})

export default connect(msp, mdp)(DrinkForm);