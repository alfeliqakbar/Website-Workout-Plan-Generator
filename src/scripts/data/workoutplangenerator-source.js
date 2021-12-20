import API_ENDPOINT from '../globals/api-endpoint';

class WorkoutPlanGeneratorSource {
  //  kasih parameter buat di input
  static async getRandomWorkoutPlan(duration, type, area, level) {
    const response = await fetch(API_ENDPOINT.WORKOUT_PLAN_GENERATOR({
      duration, type, area, level,
    }));
    const responseJson = await response.json();
    return responseJson;
  }

  // buat coba template
  static async getRandomWorkout() {
    const response = await fetch(API_ENDPOINT.WORKOUTPLAN);
    const responseJson = await response.json();
    return responseJson;
  }
}

export default WorkoutPlanGeneratorSource;
