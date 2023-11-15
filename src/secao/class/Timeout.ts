export default class Timeout {
  id;
  hanlder;
  start;
  timeLeft;
  constructor(handler: TimerHandler, time: number) {
    this.id = setTimeout(handler, time);
    this.hanlder = handler;
    this.start = Date.now();
    this.timeLeft = time;
  }

  clear() {
    clearTimeout(this.id);
  }

  pause() {
    const passed = Date.now() - this.start;
    this.timeLeft = this.timeLeft - passed;
    this.clear();
  }

  continue() {
    this.clear();
    this.id = setTimeout(this.hanlder, this.timeLeft);
    this.start = Date.now();
  }
}
