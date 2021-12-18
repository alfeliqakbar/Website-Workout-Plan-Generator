import WorkoutPlanGeneratorSource from '../../data/workoutplangenerator-source';
import { createResultTemplate } from '../templates/template-workout';
// import changeLiveDuration from '../../utils/form';

const WorkoutPlan = {
  async render() {
    return `
    <div id="selections" class="container-sm my-5">
      <h2 class="text-center mb-3">Create Your Workout</h2>
      <form>
        <div class="form-group text-center">
          <h4>Duration</h4>
          <div class="row justify-content-center">
            <div class="col-md-6">
              <input type="range" class="form-range" min="10" max="50" step="1" id="durationrange"/>
            </div>
          </div>
      </form>
      <p><span class="badge rounded-pill bg-primary" id="durationValue">30</span> mins</p>
      <div class="container">
        <h4>Type</h4>
        <div id="btntypecontainer" class="btn-group" role="group">
          <input type="radio" class="btn-check" name="btntype" id="btnTypestrength" autocomplete="off" value="strength"checked />
          <label class="btn btn-outline-primary" for="btnTypestrength">Strength</label>
          <input type="radio" class="btn-check" name="btntype" id="btnTypecardio" autocomplete="off" value="cardio" />
          <label class="btn btn-outline-primary" for="btnTypecardio">Cardio</label>
        </div>
        <p></p>
        <h4>Target Area</h4>
        <div id="btnareacontainer" class="btn-group" role="group">
          <input type="radio" class="btn-check" name="btnarea" id="btnAreafull" autocomplete="off" value="full"
            checked />
          <label class="btn btn-outline-primary" for="btnAreafull">Full Body</label>
          <input type="radio" class="btn-check" name="btnarea" id="btnArealower" autocomplete="off" value="lower" />
          <label class="btn btn-outline-primary" for="btnArealower">Lower Body</label>
          <input type="radio" class="btn-check" name="btnarea" id="btnAreaupper" autocomplete="off" value="upper" />
          <label class="btn btn-outline-primary" for="btnAreaupper">Upper Body</label>
          <input type="radio" class="btn-check" name="btnarea" id="btnAreacore" autocomplete="off" value="core" />
          <label class="btn btn-outline-primary" for="btnAreacore">Core</label>
        </div>
        <p></p>
        <h4>Intensity</h4>
        <div id="btnintensitycontainer" class="btn-group" role="group">
          <input type="radio" class="btn-check" name="btnintensity" id="btnIntensitybeginner" autocomplete="off"
            value="beginner" checked />
          <label class="btn btn-outline-primary" for="btnIntensitybeginner">Beginner</label>
          <input type="radio" class="btn-check" name="btnintensity" id="btnIntensityintermediate" autocomplete="off"
            value="intermediate" />
          <label class="btn btn-outline-primary" for="btnIntensityintermediate">Intermediate</label>
          <input type="radio" class="btn-check" name="btnintensity" id="btnIntensityadvanced" autocomplete="off"
            value="advanced" />
          <label class="btn btn-outline-primary" for="btnIntensityadvanced">Advanced</label>
        </div>
      </div>
      <p></p>
      <div id="buttonContainer" class="container">
        <button type="button" class="btn m-2 btn-primary btn-lg d-inline" id="generateBtn"
          onclick="return getWorkout()">Generate Workout
        </button>
      </div>
      <button type="button" class="btn m-2 btn-danger btn-sm d-inline" id="resetBtn" onclick="resetOptions()">Reset
        Options
      </button>

      <div id="result" class="card p-3 mt-3"></div>
    </div>
    `;
  },

  async afterRender() {
    // fungsi yang dipanggil saat setelah page muncul jalan di dalam sini
    const workoutPlan = await WorkoutPlanGeneratorSource.getRandomWorkoutPlan();
    const resultContainer = document.querySelector('#result');

    resultContainer.innerHTML += createResultTemplate(workoutPlan);

    console.info(workoutPlan);

    const slider = document.querySelector('#durationrange');
    console.log(slider.value);
    const output = document.querySelector('#durationValue');
    slider.oninput = function () {
      output.innerHTML = this.value;
    };
  },
};

export default WorkoutPlan;
