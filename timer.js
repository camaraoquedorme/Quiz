class Time {

  constructor(minutes, seconds) {
    this.minutes = minutes;
    this.seconds = seconds;
  }

  toSeconds() {
    return (this.minutes * 60) + this.seconds;
  }

  toString() {
    function slice(value) {
      return `0${value}`.slice(-2)
    }
    return `${slice(this.minutes)}:${slice((this.seconds))}`;
  }

  static fromSeconds(seconds) {

    const _seconds = seconds % 60;

    const _minutes = (seconds - _seconds) / 60;

    return new Time(_minutes, _seconds);
  }
}

function getSeconds() {

  return Math.floor(Date.now() / 1000);

}

function timer(minutes, seconds, callback, onfinish) {

  const time = new Time(minutes, seconds);
  const end = getSeconds() + time.toSeconds();

  let _continue = true;

  function loop() {

    const _now = end - getSeconds();
    const _time = Time.fromSeconds(_now);

    if (_continue) {

      if (_time.toSeconds() > 0) {

        callback(_time);

        setTimeout(loop, 1000);

      }

      else {

        callback(_time);

        onfinish(_time);

      }

    }

    else onfinish(_time);

  }

  loop();

  function stopLoop() {

    _continue = false;

  }

  return stopLoop;
}

export { timer };