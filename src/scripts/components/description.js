class describeWeb extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    
        <div class="row p-3">
        <h2>Tujuan</h2>
        <div class="col-md-6">
            <img src="/assets/hero.jpg" class="img-fluid" alt="">
        </div>
        <div class="col-md-6">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, id delectus eius enim accusantium molestias. Molestiae pariatur laborum dignissimos possimus.</p>
        </div>
        </div>
        <div class="row mt-3 p-3">
        <h2>Anjass</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, tempore.</p>
        </div>
    
    `;
  }
}

customElements.define('describe-web', describeWeb);
