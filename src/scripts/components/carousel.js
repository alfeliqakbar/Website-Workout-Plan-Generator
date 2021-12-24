class Carousel extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div
          id="carouselExampleDark"
          class="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="5000">
              <div class="row d-flex align-items-center">
                <div class="col-md">
                  <div class="row text-center">
                    <div class="col">
                      <h5>Welcome to EZ-Fit</h5>
                    </div>
                    <div class="w-100"></div>
                    <div class="col">
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Impedit nihil ipsa quas provident vero similique
                        illo iste necessitatibus, repudiandae quisquam ab
                        molestiae officiis, maiores ut? Aut similique veniam
                        rerum a.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md">
                  <img
                    src="assets/pict-1.jpg"
                    class="d-block w-100 carousel-image"
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="5000">
              <div class="row d-flex align-items-center">
                <div class="col-md">
                  <div class="row text-center">
                    <div class="col">
                      <h5>First slide label</h5>
                    </div>
                    <div class="w-100"></div>
                    <div class="col">
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Impedit nihil ipsa quas provident vero similique
                        illo iste necessitatibus, repudiandae quisquam ab
                        molestiae officiis, maiores ut? Aut similique veniam
                        rerum a.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md">
                  <img
                    src="assets/pict-2.jpg"
                    class="d-block w-100 carousel-image"
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="5000">
              <div class="row d-flex align-items-center">
                <div class="col-md">
                  <div class="row text-center">
                    <div class="col">
                      <h5>First slide label</h5>
                    </div>
                    <div class="w-100"></div>
                    <div class="col">
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Impedit nihil ipsa quas provident vero similique
                        illo iste necessitatibus, repudiandae quisquam ab
                        molestiae officiis, maiores ut? Aut similique veniam
                        rerum a.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md">
                  <img
                    src="assets/pict-3.jpg"
                    class="d-block w-100 carousel-image"
                    alt="..."
                  />
                </div>
              </div>
            </div>
            
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
    `;
  }
}

customElements.define('carousel-container', Carousel);
