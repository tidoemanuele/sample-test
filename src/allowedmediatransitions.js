function AllowedMediaTransitions(mediaplayer) {
  const player = mediaplayer

  const MediaPlayerState = {
    EMPTY: "EMPTY", // No source set
    STOPPED: "STOPPED", // Source set but no playback
    BUFFERING: "BUFFERING", // Not enough data to play, waiting to download more
    PLAYING: "PLAYING", // Media is playing
    PAUSED: "PAUSED", // Media is paused
    COMPLETE: "COMPLETE", // Media has reached its end point
    ERROR: "ERROR", // An error occurred
  }

  function canBePaused() {
    const pausableStates = [MediaPlayerState.BUFFERING, MediaPlayerState.PLAYING]

    return pausableStates.indexOf(player.getState()) !== -1
  }

  function canBeStopped() {
    const unstoppableStates = [MediaPlayerState.EMPTY, MediaPlayerState.ERROR]

    return unstoppableStates.indexOf(player.getState()) === -1
  }

  function canBeginSeek() {
    const unseekableStates = [MediaPlayerState.EMPTY, MediaPlayerState.ERROR]

    const state = player.getState()
    return state ? unseekableStates.indexOf(state) === -1 : false
  }

  function canResume() {
    return player.getState() === MediaPlayerState.PAUSED || player.getState() === MediaPlayerState.BUFFERING
  }

  return {
    canBePaused,
    canBeStopped,
    canBeginSeek,
    canResume,
  }
}

export default AllowedMediaTransitions
