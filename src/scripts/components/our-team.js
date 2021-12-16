class ourTeam extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    
        <h2>Our Team</h2>
        <div class="row d-flex justify-content-center mb-3">
        <div class="card p-3" style="width: 18rem;">
            <img src="/assets/profil-team.jpg" class="rounded-circle mx-auto" alt="..." style="width:200px">
            <div class="card-body">
            <h5 class="card-title">Al Feliq Akbar</h5>
            <p class="card-text">Universitas.</p>
            <ul class="list-unstyled list-inline">
                <li class="list-inline-item">
                    <a href="#" class="btn-floating text-black btn-sm fs-2"><i class="fab fa-instagram"></i></a>
                </li>
                <li class="list-inline-item">
                    <a href="#" class="btn-floating text-black btn-sm fs-2"><i class="fab fa-github"></i></a>
                </li>
                <li class="list-inline-item">
                    <a href="#" class="btn-floating text-black btn-sm fs-2"><i class="fab fa-linkedin"></i></a>
                </li>
            </ul>
            </div>
        </div>
        </div>

        <div class="row d-flex justify-content-center mb-3">
        <div class="card p-3" style="width: 18rem;">
            <img src="/assets/profil-team.jpg" class="rounded-circle mx-auto" alt="..." style="width:200px">
            <div class="card-body">
            <h5 class="card-title">Mochammad Maulana</h5>
            <p class="card-text">Universitas Jember.</p>
            <ul class="list-unstyled list-inline">
                <li class="list-inline-item">
                    <a href="#" class="btn-floating text-black btn-sm fs-2"><i class="fab fa-instagram"></i></a>
                </li>
                <li class="list-inline-item">
                    <a href="#" class="btn-floating text-black btn-sm fs-2"><i class="fab fa-github"></i></a>
                </li>
                <li class="list-inline-item">
                    <a href="#" class="btn-floating text-black btn-sm fs-2"><i class="fab fa-linkedin"></i></a>
                </li>
            </ul>
            </div>
        </div>
        </div>

    
    `;
  }
}

customElements.define('our-team', ourTeam);
