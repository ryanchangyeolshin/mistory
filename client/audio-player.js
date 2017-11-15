import React, { Component } from 'react'
import Typography from 'material-ui/Typography'

const styles = {
  audioPlayer: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: '#4054b1',
    marginRight: 300,
    marginTop: 30,
    padding: 30,
    borderRadius: 5
  },
  title: {
    color: 'white',
    textDecoration: 'underline',
    textAlign: 'center',
    marginBottom: 20
  },
  buttons: {
    position: 'relative',
    top: 3,
    marginLeft: 50,
    color: 'white'
  },
  play: {
    minWidth: 50
  },
  pause: {
    minWidth: 50
  },
  stop: {
    marginLeft: 20
  },
  durationBar: {
    position: 'relative',
    bottom: 10,
    width: 700,
    marginLeft: 50
  },
  volumeIcon: {
    minWidth: 50,
    position: 'relative',
    top: 3,
    color: 'white',
    marginLeft: 50
  },
  volumeBar: {
    position: 'relative',
    bottom: 10,
    width: 150,
    marginLeft: 20
  }
}

class AudioPlayer extends Component {
  constructor(props) {
    super(props)
    this.src = this.props.src
    this.title = this.props.title
    this.handlePlay = this.handlePlay.bind(this)
    this.handlePause = this.handlePause.bind(this)
    this.handleStop = this.handleStop.bind(this)
    this.setAudio = this.setAudio.bind(this)
    this.setSlider = this.setSlider.bind(this)
    this.scrubTime = this.scrubTime.bind(this)
    this.togglePlay = this.togglePlay.bind(this)
    this.toggleVolume = this.toggleVolume.bind(this)
    this.state = {
      playing: false,
      volume: 1,
      duration: null
    }
  }

  handlePlay() {
    this.audio.play()
  }

  handlePause() {
    this.audio.pause()
  }

  handleStop() {
    this.audio.currentTime = 0
    this.slider.value = 0
    this.audio.pause()
  }

  setAudio(audio) {
    this.audio = audio
  }

  setSlider(slider) {
    this.slider = slider
  }

  setVolume(volume) {
    this.volume = volume
  }

  togglePlay() {
    return this.state.playing === false
      ? <i className="fa fa-play fa-3x" style={styles.play} onClick={this.handlePlay} />
      : <i className="fa fa-pause fa-3x" style={styles.pause} onClick={this.handlePause} />
  }

  scrubTime() {
    this.audio.currentTime = this.slider.value
  }

  volumeChange() {

  }

  toggleVolume() {
    if (this.state.volume > 0.5) {
      return <i className="fa fa-volume-up fa-3x" style={styles.volumeIcon} onClick={this.handlePlay} />
    }
    else if (this.state.volume > 0 && this.state.volume < 0.5) {
      return <i className="fa fa-volume-down fa-3x" style={styles.volumeIcon} onClick={this.handlePlay} />
    }
    else {
      return <i className="fa fa-volume-off fa-3x" style={styles.volumeIcon} onClick={this.handlePlay} />
    }
  }

  componentDidMount() {
    this.slider.value = 0
    this.currentTimeInterval = null

    this.audio.onloadedmetadata = () => {
      this.setState({ duration: this.audio.duration })
    }

    this.audio.onplay = () => {
      this.currentTimeInterval = setInterval(() => {
        this.setState({ playing: true })
        this.slider.value = this.audio.currentTime
      }, 15)
    }

    this.audio.onpause = () => {
      this.setState({ playing: false })
      clearInterval(this.currentTimeInterval)
    }

    this.volume.onchange = (e) => {
      this.audio.volume = e.target.value
      this.setState({ volume: e.target.value })
    }
  }

  render() {
    return (
      <div className="audio-player" style={styles.audioPlayer}>
        <audio ref={audio => this.setAudio(audio)} src={this.src} />
        <Typography type="title" style={styles.title}>{this.title}</Typography>
        <span className="control-buttons" style={styles.buttons}>
          {this.togglePlay()}
          <i className="fa fa-stop fa-3x" style={styles.stop} onClick={this.handleStop} />
        </span>
        <input ref={slider => this.setSlider(slider)}
          type="range"
          name="duration"
          style={styles.durationBar}
          min="0"
          max={this.state.duration}
          step="any"
          onChange={this.scrubTime}
        />
        {this.toggleVolume()}
        <input ref={volume => this.setVolume(volume)}
          type="range"
          name="volume"
          style={styles.volumeBar}
          step="any"
          min="0"
          max="1" />
      </div>
    )
  }
}

export default AudioPlayer
