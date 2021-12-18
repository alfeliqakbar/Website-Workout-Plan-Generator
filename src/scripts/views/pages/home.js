const Home = {
  async render() {
    return `
      <section id="jumbotron">
        <jumbotron-section></jumbotron-section>
      </section>
      <section id="description" class="text-center">
        <h3 class="mt-5">It's Time To Get Fit</h3>
        <h4 class="mx-auto mb-5 fw-normal px-5 lh-base">
          People usually confused when it’s time planning a workout program for
          them. Many people think that building muscle can only be done on a gym
          and with equipment. It’s time to change that perspective! We provide
          you a workout plan based on your time, level, muscle group and type.
          Having a healthy and fit body is everybody rights.<br />
          Get fit with us now!
        </h4>
      </section>
      <section id="carousel">
        <carousel-container></carousel-container>
      </section>
      <section id="callToAction" class="text-center my-5">
        <call-to-action></call-to-action>
      </section>
    `;
  },

  async afterRender() {
    // fungsi yang dipanggil saat setelah page muncul jalan di dalam sini
  },
};

export default Home;
