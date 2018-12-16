import React, { Component } from "react";
import { connect } from "react-redux";
import {dispatch} from '@rematch/core';
import { selectSong } from '../models';
class SongList extends Component {
  renderList() {
    {console.log(this.props)};
    return this.props.songs.map(song => {
      return (       
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button green" onClick={() => dispatch.selectSong.select(song)} >Select</button>
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

  
  return { 
    songs: state.songs
  };
};

export default connect(mapStateToProps)(SongList);
