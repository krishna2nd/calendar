import './ruler.style.css'

const htmlHour = label => {
  return `<div class="hour" data-hour="${label}">
    <div class="half-hour">
      <div class="quater-hour">
        <div class="mins">
          <div class="min"></div>
          <div class="min"></div>
          <div class="min"></div>
          <div class="min"></div>
          <div class="min"></div>
        </div>
        <div class="mins">
          <div class="min"></div>
          <div class="min"></div>
          <div class="min"></div>
          <div class="min"></div>
          <div class="min"></div>
        </div>
        <div class="mins">
          <div class="min"></div>
          <div class="min"></div>
          <div class="min"></div>
          <div class="min"></div>
          <div class="min"></div>
        </div>
      </div>

      <div class="quater-hour">
        <div class="mins">
          <div class="min"></div>
          <div class="min"></div>
          <div class="min"></div>
          <div class="min"></div>
          <div class="min"></div>
        </div>
        <div class="mins">
          <div class="min"></div>
          <div class="min"></div>
          <div class="min"></div>
          <div class="min"></div>
          <div class="min"></div>
        </div>
        <div class="mins">
          <div class="min"></div>
          <div class="min"></div>
          <div class="min"></div>
          <div class="min"></div>
          <div class="min"></div>
        </div>
      </div>
    </div>
    <div class="half-hour">
      <div class="quater-hour">
        <div class="mins">
          <div class="min"></div>
          <div class="min"></div>
          <div class="min"></div>
          <div class="min"></div>
          <div class="min"></div>
        </div>
        <div class="mins">
          <div class="min"></div>
          <div class="min"></div>
          <div class="min"></div>
          <div class="min"></div>
          <div class="min"></div>
        </div>
        <div class="mins">
          <div class="min"></div>
          <div class="min"></div>
          <div class="min"></div>
          <div class="min"></div>
          <div class="min"></div>
        </div>
      </div>

      <div class="quater-hour">
        <div class="mins">
          <div class="min"></div>
          <div class="min"></div>
          <div class="min"></div>
          <div class="min"></div>
          <div class="min"></div>
        </div>
        <div class="mins">
          <div class="min"></div>
          <div class="min"></div>
          <div class="min"></div>
          <div class="min"></div>
          <div class="min"></div>
        </div>
        <div class="mins">
          <div class="min"></div>
          <div class="min"></div>
          <div class="min"></div>
          <div class="min"></div>
          <div class="min"></div>
        </div>
      </div>
    </div>
  </div>`
}

class Ruler {
  constructor(hourLabel) {
    this.hours = hourLabel
  }
  render() {
    return `
    <div class="ruler">
        ${this.hours.map(label => this.renderHour(label)).join('')}
    </div>`
  }

  renderHour(label) {
    return htmlHour(label)
  }
}

export default Ruler
