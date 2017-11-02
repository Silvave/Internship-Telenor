define(() => {
  return () => {
      var videoData
      var timeInterval
      var player

      function onYouTubeIframeAPIReady(internVideoData) {
          // Hides telenor thumb image to display iframe player
          $('.img-thump-wrapper').hide()

          updatePlayerData(internVideoData)

          player = new YT.Player('ytplayer', {
              width: 0,
              height: 0,
              videoId: videoData.videoId,
              playerVars: {
                  'rel': 0,
                  'controls': 0,
                  'showinfo': 0
              },
              events: {
                  'onReady': onPlayerReady,
                  'onStateChange': onPlayerStateChange
              }
          });
      }

      function onPlayerReady() {
          loadQuestionVideoClip()
      }

      function onPlayerStateChange(event) {
          if (event.data === YT.PlayerState.PLAYING) {
              setTimeInterval()
              return
          } else if (event.data === YT.PlayerState.ENDED) {
              changeFromPlayerToThumpImg()
          }

          if (timeInterval) {
              clearTimeInterval()
          }
      }

      function loadQuestionVideoClip() {
          let currentClipInfo = videoData.questionsInfo[videoData.currentQuestionId]
          let allowSeekAhead = true

          player.seekTo(currentClipInfo.start, allowSeekAhead)
      }

      function setTimeInterval() {
          let intervalMilliseconds = 1000

          function checkYTPlayerPosition() {
              let videoCurrentTimeSeconds = Math.trunc(player.getCurrentTime())
              let currentClipInfo = videoData.questionsInfo[videoData.currentQuestionId]

              if (videoCurrentTimeSeconds >= currentClipInfo.end) {
                  changeToNextQuestion(videoData.currentQuestionId + 1)
              }
          }

          timeInterval = setInterval(checkYTPlayerPosition, intervalMilliseconds)
      }

      function clearTimeInterval() {
          clearInterval(timeInterval)
      }

      function changeToNextQuestion(nextQuestionIndex) {
          $('.question').eq(nextQuestionIndex).trigger('click', ["FakeClick"])
      }

      function updatePlayerData(newVideoData) {
          videoData = newVideoData
      }

      function changeFromPlayerToThumpImg() {
          $('.question').removeClass('active')
          $('#ytplayer').hide()
          $('.img-thump-wrapper').show()
          $(window).trigger('resize')
      }

      return {
          readyPlayer: onYouTubeIframeAPIReady,
          updatePlayerData,
          loadQuestionVideoClip
      }
  }
})
