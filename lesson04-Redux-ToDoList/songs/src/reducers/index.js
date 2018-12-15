import { combineReducers } from 'redux';

const songReducer = () => {
  return [
    { title: 'No Srubs', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'All start', duration: '3:15' },
    { title: 'I want it that way', duration: '1:45' }
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type ==='SONG_SELECTED'){
    return action.paypload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer 
});