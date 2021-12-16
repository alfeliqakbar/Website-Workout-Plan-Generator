class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="jumbotron jumbotron-fluid d-flex align-items-center">
      <div class="container text-center">
        <h1 class="display-3 text-white">Get Fit With Us</h1>
        <p class="lead text-white fst-italic">
          Workout plan made easy. No-equipment training, anywhere, anytime
        </p>
        <a class="btn btn-primary" href="#/workout-plan-generator" role="button"
          >Get Started</a
        >
      </div>
    </div>
    `;
  }
}

customElements.define('jumbotron-section', Jumbotron);
