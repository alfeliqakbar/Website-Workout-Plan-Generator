import CONFIG from './config';

const API_ENDPOINT = {
  WORKOUT_PLAN_GENERATOR: ({
    duration,
    type,
    area,
    level,
  }) => `${CONFIG.BASE_URL}?type=${type}&area=${area}&level=${level}&duration=${duration}`,
};

export default API_ENDPOINT;
