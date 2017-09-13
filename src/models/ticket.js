import Moment from "moment";

class Ticket {
  constructor(names, location, issue) {
    this.names = names;
    this.location = location;
    this.issue = issue;
    this.timeOpened = new Moment();
    this.timeSinceOpened = "a few seconds";
  }

  setTimeSinceOpened() {
    this.timeSinceOpened = this.timeOpened.fromNow(true);
  }

}

export default Ticket;
