import React, {Component} from 'react';
import PropTypes from 'prop-types';

var apiBaseUrl = "http://localhost:4000/data/";

class GetData extends Component {
    constructor(props) {
        super();
        this.state = {
            data: props.loadData
        };
    }
    onLoadData() {
        this.props.downloadData(this.state.Data);
    };
    onHandleChange(event) {
        this.setState({data: event.target.value});
    }
    componentDidMount() {
        var component = this;
        //binding this to parent scope
        fetch(apiBaseUrl)
        //fetching json from server
            .then((response) => {
            return response.json()
        }).then((json) => {
            component.setState({data: json})
            //pass json data to state
             function showJson(){
                return(json)
            }
            showJson()
            console.log('parsed json', json)
        }).catch((ex) => {
            console.log('parsing failed', ex)
        });

    }
    render() {
        return (
            <div>
                <ul>lol</ul>
                <button onClick={this.onLoadData.bind(this)}>Dupa</button>
            </div>

        )
    }
}
GetData.PropTypes = {
    initLoadData: PropTypes.string
};
export default GetData;
