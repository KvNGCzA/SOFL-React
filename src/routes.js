import Home from '../src/components/HomePage/HomePage';
import LoginSignup from '../src/components/Login-Signup/Login-Signup';
import SearchPage from './components/SearchPage/SearchPage';
import PostQuestion from './components/PostQuestion/PostQuestion';
import ProfilePage from './components/ProfilePage/ProfilePage';
import Question from './components/Question/Question';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/login-signup',
    component: LoginSignup,
    exact: true
  },
  {
    path: '/search',
    component: SearchPage
  },
  {
    path: '/post-question',
    component: PostQuestion,
    exact: true
  },
  {
    path: '/profile/:username',
    component: ProfilePage,
  },
  {
    path: '/question/:id',
    component: Question,
  }
];

export default routes;
