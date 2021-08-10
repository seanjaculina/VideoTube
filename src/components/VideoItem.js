import React from 'react';

const VideoItem = ({video}) =>{
    return(
        <div key={video.key}>
           <img src={video.snippet.thumbnails.high.url}/>
            {video.snippet.title}
        </div>
    )
}


export default VideoItem;
