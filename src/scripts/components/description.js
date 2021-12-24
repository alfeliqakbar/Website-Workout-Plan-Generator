class describeWeb extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    
        <div class="row p-3">
        <h2>Purpose</h2>
        <div class="col-md-6">
          <img src="assets/hero.jpg" class="img-fluid" alt="hero">
        </div>
        <div class="col-md-6">
            <p style="font-size:1.2em;text-align:justify">This website was created to help everyone live healthier and exercise with tools that are easy to find and easy to use. thereby strengthening the immune system and preventing various diseases.</p>
        </div>
        </div>
        <div class="row mt-3 p-3">
        <h2>The advantages of this website</h2>
        <ul class="list-group list-group-flush">
          <li class="list-group-item fs-5"><i class="far fa-check-circle" style="color:green"></i> Free To Use</li>
          <li class="list-group-item fs-5"><i class="far fa-check-circle" style="color:green"></i> Easy to understand</li>
          <li class="list-group-item fs-5"><i class="far fa-check-circle" style="color:green"></i> Fast and save memory</li>
          <li class="list-group-item fs-5"><i class="far fa-check-circle" style="color:green"></i> Supports various devices</li>
          <li class="list-group-item fs-5"><i class="far fa-check-circle" style="color:green"></i> Care about your health</li>
        </ul>
        </div>
    
    `;
  }
}

customElements.define('describe-web', describeWeb);
