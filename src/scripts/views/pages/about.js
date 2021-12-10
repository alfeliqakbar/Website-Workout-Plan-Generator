const About = {
  async render() {
    return `
    <main class="container">
    <div class="row">
      <div class="col-md-8 mt-2">
        <div class="row p-3">
          <h2>Purpose</h2>
          <div class="col-md-6">
            <img src="../public/hero.jpg" class="img-fluid" alt="">
          </div>
          <div class="col-md-6">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, id delectus eius enim accusantium molestias. Molestiae pariatur laborum dignissimos possimus.</p>
          </div>
        </div>
        <div class="row mt-3 p-3">
          <h2>Anjass</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, tempore.</p>
        </div>
      </div>
      <div class="col-md-4 mt-2 mx-auto text-center p-3">
        <h2>Our Team</h2>
        <div class="row d-flex justify-content-center mb-3">
          <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

        <div class="row d-flex justify-content-center mb-3">
          <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        
        
      </div>
    </div>  
  </main>
    `;
  },

  async afterRender() {
    // fungsi yang dipanggil saat setelah page muncul jalan di dalam sini
  },
};

export default About;
