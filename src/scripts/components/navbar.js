class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">EZ-Fit</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item mx-3">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link" href="#">About Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    `;
  }
}

customElements.define('nav-bar', Navbar);
