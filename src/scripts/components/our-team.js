class ourTeam extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    
        <h2>Our Team</h2>
        <div class="row d-flex justify-content-center mb-3">
        <div class="card p-3" style="width: 18rem;">
            <img src="assets/feliq-profile.jpeg" class="rounded-circle mx-auto" alt="profile-image" style="width:200px; object-fit: cover; object-position: center;">
            <div class="card-body">
            <h5 class="card-title">Al Feliq Akbar</h5>
            <p class="card-text">STMIK Indo Daya Suvana</p>
            <ul class="list-unstyled list-inline">
                <li class="list-inline-item">
                    <a target="_blank" href="https://www.instagram.com/unclebull.co/" class="btn-floating text-black btn-sm fs-2"><i class="fab fa-instagram"></i></a>
                </li>
                <li class="list-inline-item">
                    <a target="_blank" href="https://github.com/alfeliqakbar" class="btn-floating text-black btn-sm fs-2"><i class="fab fa-github"></i></a>
                </li>
                <li class="list-inline-item">
                    <a target="_blank" href="https://www.linkedin.com/in/al-feliq-akbar/" class="btn-floating text-black btn-sm fs-2"><i class="fab fa-linkedin"></i></a>
                </li>
            </ul>
            </div>
        </div>
        </div>

        <div class="row d-flex justify-content-center mb-3">
        <div class="card p-3" style="width: 18rem;">
            <img src="assets/alan-profile.jpeg" class="rounded-circle mx-auto" alt="profile-image" style="width:200px">
            <div class="card-body">
            <h5 class="card-title">Mochammad Maulana</h5>
            <p class="card-text">Universitas Jember</p>
            <ul class="list-unstyled list-inline">
                <li class="list-inline-item">
                    <a target="_blank" href="https://www.instagram.com/m.alan14.pdf/" class="btn-floating text-black btn-sm fs-2"><i class="fab fa-instagram"></i></a>
                </li>
                <li class="list-inline-item">
                    <a target="_blank" href="https://github.com/Mochalan14" class="btn-floating text-black btn-sm fs-2"><i class="fab fa-github"></i></a>
                </li>
                <li class="list-inline-item">
                    <a target="_blank" href="https://www.linkedin.com/mwlite/in/mochammad-maulana-168286208" class="btn-floating text-black btn-sm fs-2"><i class="fab fa-linkedin"></i></a>
                </li>
            </ul>
            </div>
        </div>
        </div>

    
    `;
  }
}

customElements.define('our-team', ourTeam);
