const About = {
  async render() {
    return `
    <main class="container">
      <div class="row">
        <div class="col-md-8 mt-2">
          <describe-web></describe-web>
        </div>
        
        <div class="col-md-4 mt-2 mx-auto text-center p-3">
          <our-team></our-team>
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
