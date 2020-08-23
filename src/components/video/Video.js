import React from 'react'
import YouTube from  'react-youtube'

function Video() {

     const opts = {
          height: '800',
          width: '1300',
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
          },
        };

     function _onReady(event){
          event.target.pauseVideo()
     }

     return (
          <YouTube videoId="_rvoIFiSZmc" opts={opts} onReady={_onReady} />
     )
}

export default Video