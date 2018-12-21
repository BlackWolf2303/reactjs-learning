import React, { Component } from "react";
import { connect } from "react-redux";


class SongList extends Component {
  List() {
    {console.log(this.props)};
    
    return this.props.songs.map(song => {
      return (       
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button green" onClick={() => this.props.dispatch.selectSong.select(song)} >Select</button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui devided list">{this.List()}</div>;
  }
}

const mapStateToProps = state => {
  return { 
    songs: state.songs,
    selectSong: state.selectSong
};
}
export default connect(mapStateToProps)(SongList);

// const mapStateToProps = state => {
  
//   return { 
//     songs: state.songs,
// };
// }

// const mapDispatch = ({ selectSong: { select}}) => ({
//   select: (song) => select(song),
// })
// export default connect(mapStateToProps,mapDispatch)(SongList);