const MyPlan = {
  async render() {
    return `
    <div class="container-lg text-center">
      <div class="row">
        <div class="col-sm">
          <h2 class="text-center">Workout Breakdown</h2>
          <div id="accordionPlaceholder" class="accordion"></div>
          <div class="container">
            <button type="button" class="btn m-3 btn-primary btn-lg" onclick="return changeOptions()">
              Change Options
            </button>
            <button type="button" class="btn m-3 btn-primary btn-lg" onclick="viewPageLoad()">
              Re-Generate Workout
            </button>
          </div>
        </div>
        <div class="col-sm">
          <h2 class="text-center">
            History
            <button type="button" class="btn m-2 btn-danger btn-sm d-inline" id="resetBtn" onclick="clearHistory()">
              Clear
            </button>
          </h2>
          <div id="listHistoryPlaceholder" class="accordion accordion-flush"></div>
        </div>
      </div>
    </div>
    `;
  },

  async afterRender() {
    // fungsi yang dipanggil saat setelah page muncul jalan di dalam sini
  },
};

export default MyPlan;
