class FootElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer class="bg-dark text-white pt-5 pb-4">
        <div class="container text-center text-md-left">
            <div class="row text-center text-md-left">
                <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5>Ez-Fit</h5>
                <p>Jalan Muda mudi karawang city 46</p>
            </div>
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <div class="text-center text-md-right">
                <h5>Follow Us</h5>
                <ul class="list-unstyled list-inline">
                    <li class="list-inline-item">
                        <a href="#" class="btn-floating btn-sm text-white fs-2"><i class="fab fa-instagram"></i></a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#" class="btn-floating btn-sm text-white fs-2"><i class="fab fa-facebook"></i></a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#" class="btn-floating btn-sm text-white fs-2"><i class="fab fa-youtube"></i></a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#" class="btn-floating btn-sm text-white fs-2"><i class="fab fa-twitter"></i></a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <p><a href="#" class="text-white" style="text-decoration: none;">Home</a></p>
            <p><a href="#" class="text-white" style="text-decoration: none;">My Plan</a></p>
            <p><a href="#" class="text-white" style="text-decoration: none;">About</a></p>
        </div>
        </div>
        <hr>
        <div class="row align-items-center mt-3">
            <div class="col">
            <p>Copyright@2021</p>
            </div>
        </div>

    </div>

    </footer>
      `;
  }
}

customElements.define('foot-element', FootElement);
