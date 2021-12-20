import CONFIG from './config';

const API_ENDPOINT = {
  WORKOUT_PLAN_GENERATOR: ({
    type,
    area,
    level,
    duration,
  }) => `${CONFIG.BASE_URL}?type=${type}&area=${area}&level=${level}&duration=${duration}`,
};

export default API_ENDPOINT;
