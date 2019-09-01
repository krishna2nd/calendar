var dType = 'dType'
class DQuery {
  constructor(input) {
    this.type = dType
    this.elements = []
    if (typeof input === 'function') {
      window.addEventListener('DOMContentLoaded', input)
      return
    }
    var tag = null
    if (typeof input === 'string' && (tag = /^<(.{1,})\/>$/.exec(input))) {
      try {
        this.element = document.createElement(tag[1].trim())
      } catch (e) {}
    } else {
      this.elements = document.querySelectorAll(input)
    }
    return this
  }
  append(ele) {
    if (ele.type === dType && this.element && ele.element) {
      this.element.append(ele.element)
    }
    return this
  }
  appendTo(ele) {
    if (ele.type === dType) {
      ele.append(this.element)
      return
    }
    ele.append(this.element)
    return this
  }
  addClass(className) {
    this.elements.forEach(function(element) {
      element.classList.add(className)
    })
    return this
  }
  html(_html) {
    this.elements.forEach(function(element) {
      element.innerHTML = _html || ''
    })
    if (this.element) this.element.innerHTML = _html
    return this
  }
  text(_text) {
    this.elements.forEach(function(element) {
      element.innerText = _text || ''
    })
    if (this.element) this.element.innerText = _text
    return this
  }
  attr(key, value) {
    this.elements.forEach(function(element) {
      element.setAttribute(key, value)
    })
    return this
  }
  on(_event, _handler, _options) {
    const _preventHandler = function(e) {
      _handler.apply(this, arguments)
      if (e) {
        e.preventDefault && e.preventDefault()
        e.stopPropagation && e.stopPropagation()
      }
    }
    this.elements.forEach(function(element) {
      element.addEventListener(_event, _preventHandler, _options)
    })
    return this
  }
}

const $ = function(selector) {
  return new DQuery(selector)
}

export default $
export { DQuery }
