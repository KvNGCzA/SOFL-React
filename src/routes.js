import Home from './components/HomePage/HomePage';
import LoginSignupComponent from './components/Login-Signup/Login-Signup';
import SearchPageComponent from './components/SearchPage/SearchPage';
import PostQuestion from './components/PostQuestion/PostQuestion';
import ProfilePageComponent from './components/ProfilePage/ProfilePage';
import Question from './components/Question/Question';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/login-signup',
    component: LoginSignupComponent,
    exact: true
  },
  {
    path: '/search',
    component: SearchPageComponent
  },
  {
    path: '/post-question',
    component: PostQuestion,
    exact: true
  },
  {
    path: '/profile/:username',
    component: ProfilePageComponent,
  },
  {
    path: '/question/:id',
    component: Question,
  }
];

export default routes;
