import WorkoutPlanGeneratorSource from '../../data/workoutplangenerator-source';

const WorkoutPlan = {
  async render() {
    return `
      <h1>Workout Plan Page</h1>
    `;
  },

  async afterRender() {
    // fungsi yang dipanggil saat setelah page muncul jalan di dalam sini
    const workoutPlan = await WorkoutPlanGeneratorSource.getRandomWorkoutPlan();
    console.info(workoutPlan);
  },
};

export default WorkoutPlan;
