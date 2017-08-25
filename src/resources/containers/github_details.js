import React, {Component} from 'react';
import {connect} from 'react-redux';


class GetRepos extends Component {

  constructor (props) {
    super(props)
    this.state = {
      list: [],
      value: '',
      result: false
    }
    this.handleGithubLoad = this.handleGithubLoad.bind(this)
  }

  handleGithubLoad (event) {
      var username = this.props.user.github
        fetch('https://api.github.com/users/' + username + '/repos')
        .then(response => response.json())
        .then(data => console.log(data));
    return
  }

  render () {
    return (
        //here should list of hg elements render
<div>

</div>
    )
}
}

function mapStateToProps(state) {
    return {user: state.activeUser};
};

export default connect(mapStateToProps)(GetRepos);
