import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';

class PostList extends Component {
    componentDidMount(){

        this.props.fetchPosts();
    }


    render(){
        return <div>Post List</div>;
    }
}

const mapStateToProps = state => {
    return state;
}

const actionCreator =  {
    fetchPosts,
}
export default connect(mapStateToProps,actionCreator) (PostList);