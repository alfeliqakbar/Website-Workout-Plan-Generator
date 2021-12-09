import About from '../views/pages/about';
import Home from '../views/pages/home';
import MyPlan from '../views/pages/myplan';
import WorkoutPlan from '../views/pages/workout-plan';

const routes = {
  '/': Home,
  '/about': About,
  '/my-plan': MyPlan,
  '/workout-plan-generator': WorkoutPlan,
};

export default routes;
