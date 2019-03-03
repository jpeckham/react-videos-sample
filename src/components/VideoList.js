import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {
    // props.videos
    const videoItems = videos.map(video => <VideoItem onVideoSelect={onVideoSelect} key={video.id.videoId} video={video} />);
    return <div className="ui relaxed divided list">{videoItems}</div>;
};

export default VideoList;