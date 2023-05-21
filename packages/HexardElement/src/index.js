export default class hexardElement extends HTMLElement {
  constructor() {
    super();
    this._props = {};
    this._rendered = false;
  }

  connectedCallback() {
    if (!this._rendered) {
      this.render();
      this._rendered = true;
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this._props[name] = newValue;
      if (this._rendered) {
        this.render();
      }
    }
  }

  render() {
    const appElement = document.querySelector('#app');
    if (appElement) {
      appElement.innerHTML = this.template();
    }
  }

  template() {
    throw new Error('You must implement the template method in your component.');
  }

  get props() {
    return this._props;
  }

  set props(newProps) {
    for (const prop in newProps) {
      if (newProps.hasOwnProperty(prop)) {
        this._props[prop] = newProps[prop];
        this.setAttribute(prop, newProps[prop]);
      }
    }
    if (this._rendered) {
      this.render();
    }
  }
}

customElements.define('hexard-component', hexardElement);
