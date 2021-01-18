import React from 'react'
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import {Button, Container, Col, Row} from 'react-bootstrap'

import pp from '../Images/play_pause.svg'
import stop from '../Images/stop.svg'

import './CSS/Timer.css'

function formatTime(time){
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  //MM:SS
  console.log(`${minutes}:${seconds}`)
  return `${minutes}:${seconds}`;
}

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Listo!</div>;
  }

  return (
    <div className="timer">
      <div className="value">{formatTime(remainingTime)}</div>
      <div className="text">seconds</div>
    </div>
  );
};

function Timer(props){
  const [play, setPlay] = React.useState(props.play)
  const [key, setKey] = React.useState(0)

  React.useEffect(() => {
    if (props.play !== play) {
      setPlay(props.play);
    }
  }, [props.play]);

  return(
    <Container>
      <Col>
        <Row>
            <CountdownCircleTimer
              onComplete={() => {
                setPlay(false)
                setKey(prevKey => prevKey + 1)
              }}
              key={key}
              isPlaying={play}
              duration={props.duracion}
              colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
              >
              {renderTime}
            </CountdownCircleTimer>
        </Row>
          <Row>
            <Col>
              <Button className='BtnControl' onClick={() => setPlay(!play)}><img src={pp}/></Button>
            </Col>
            <Col>
              <Button className='BtnControl' onClick={() => {
                setPlay(false)
                setKey(prevKey => prevKey + 1)
              }}>
                  <img src={stop}/>
              </Button>
            </Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
      </Col>
    </Container>
  )
}

export default Timer