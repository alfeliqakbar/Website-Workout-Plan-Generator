import WorkoutPlanGeneratorSource from '../../data/workoutplangenerator-source';
// import { createResultTemplate, createResult } from '../templates/template-workout';

const WorkoutPlan = {
  async render() {
    return `
    <div id="selections" class="container-sm my-5">
      <h2 class="text-center mb-3">Create Your Workout</h2>
      <form id="workout-generator-form">
        <div class="form-group text-center">
          <h4>Duration</h4>
          <div class="row justify-content-center">
            <div class="col-md-6">
              <input type="range" name="duration" class="form-range" min="10" max="50" step="1" id="durationrange"/>
            </div>
          </div>

          <p><span class="badge rounded-pill bg-primary" id="durationValue">30</span> mins</p>

          <div class="container">
            <h4>Type</h4>
            <div id="btntypecontainer" class="btn-group" role="group">
              <input type="radio" class="btn-check" name="btntype" id="btnTypestrength" autocomplete="off" value="strength"checked />
              <label class="btn btn-outline-primary" for="btnTypestrength">Strength</label>
              <input type="radio" class="btn-check" name="btntype" id="btnTypecardio" autocomplete="off" value="cardio" />
              <label class="btn btn-outline-primary" for="btnTypecardio">Cardio</label>
            </div>
            
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
          
          <div id="buttonContainer" class="container">
            <button type="submit" class="btn m-2 btn-primary btn-lg d-inline" id="generateBtn"
              >Generate Workout
            </button>
          </div>
          <button type="button" class="btn m-2 btn-danger btn-sm d-inline" id="resetBtn" onclick="resetOptions()">Reset
            Options
          </button>
        </div>
      </form>
    </div>
    <div id="result">
      <ul id="list-data">
      
      </ul>
    </div>
    `;
  },

  async afterRender() {
    // fungsi yang dipanggil saat setelah page muncul jalan di dalam sini
    // logic slider
    const slider = document.querySelector('#durationrange');
    const output = document.querySelector('#durationValue');
    slider.oninput = function () {
      output.innerHTML = this.value;
    };

    const formWorkout = document.querySelector('#workout-generator-form');


    // coba template
    const workout = await WorkoutPlanGeneratorSource.getRandomWorkout();
    const resultContainer = document.querySelector('#result');
    Object.entries(workout).forEach(([key, value]) => {
      // console.log(key, value);
      resultContainer.innerHTML += `<p>${key}</p>`;
      if (key !== 'parameters') {
        // console.log(value);
        value.forEach((data) => {
          const listContainer = document.querySelector('#list-data');
          listContainer.innerHTML += `<li><span>${data.ex}</span><br><span>${data.du}</span></li>`;
          console.log(data.ex);
          console.log(data.du);
        });
      }
    });
    // resultContainer.innerHTML += createResult(workout);

    // const workoutPlan = await WorkoutPlanGeneratorSource.getRandomWorkout();
    // console.log(workoutPlan);
    // workoutPlan.forEach((result) => {
    //   resultContainer.innerHTML += createResultTemplate(result);
    // });

//     formWorkout.addEventListener('submit', (event) => {
//       event.preventDefault();
//       const { duration } = formWorkout.elements;
//       const type = formWorkout.elements.btntype;
//       const area = formWorkout.elements.btnarea;
//       const intensity = formWorkout.elements.btnintensity;
//       console.log(`
//       Duration: ${duration.value},
//       Type: ${type.value},
//       Area: ${area.value},
//       Intentsity: :${intensity.value}`);
//       const param = {
//         duration: duration.value,
//         type: type.value,
//         area: area.value,
//         level: intensity.value,
//       };
//       // eslint-disable-next-line max-len
//       const workoutPlan = WorkoutPlanGeneratorSource.getRandomWorkoutPlan(param.duration, param.type, param.area, param.level);
//       resultContainer.innerHTML += createResultTemplate(workoutPlan);
//       console.log(workoutPlan);
//     });

  
  },
};

export default WorkoutPlan;
