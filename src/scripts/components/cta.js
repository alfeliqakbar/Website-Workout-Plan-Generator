class CallToAction extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <a href="#/workout-plan-generator" class="btn btn-primary" role="button">
      Get My Workout Plan
    </a>
    `;
  }
}

customElements.define('call-to-action', CallToAction);
