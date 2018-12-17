import React from "react";
import { connect } from "react-redux";

const SongDetail = props => {
  console.log(props);
  

  if(!props.song){
    return <div>Select a Song</div>
  }else
  return (
    <div>
      <h3>Song Detail</h3>
      <div>Song Name: {props.song.title}</div>
      <br />
      <div>Duration: {props.song.duration}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong}
};
export default connect(mapStateToProps)(SongDetail);
