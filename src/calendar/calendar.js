class Calendar {
  constructor(_events) {
    this.events = new CalendarEvents(_events || [])
  }

  add(_event) {
    this.events.add(_event)
    this.renderEvents()
  }

  renderRuler() {}
  renderEvents() {}

  render() {
    this.renderRuler()
    this.renderEvents()
  }
}

export default Calendar
