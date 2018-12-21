import React, { Component } from "react";
import { connect } from "react-redux";
import {selectSong} from '../actions';

class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button green" onClick={() => this.props.selectSong(song)} >Select</button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui devided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
};
const mapAction = {
  selectSong,
};
export default connect(mapStateToProps,mapAction)(SongList);