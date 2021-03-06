import VideoListEntry from './VideoListEntry.js'; //possibly .jsx . at the beginning.?
import exampleVideoData from '../data/exampleVideoData.js';

var VideoList = (props) => ( //also can be {videos}, if you videos.map will work
  <div className="video-list">
    {props.videos.map(video =>
      <VideoListEntry
      handleClick={props.handleClick}
      video={video}
      key={video.id.videoId}
      />
    )}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
