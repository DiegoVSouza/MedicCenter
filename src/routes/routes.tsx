import { Switch, Route } from 'react-router-dom';

import DashBoard from '../pages/DashBoard';
import Home from '../pages/Home';
import SingUp from '../pages/SignUp';
import SingIn from '../pages/SignIn';
import SingUpClinicStepOne from '../pages/SignUpClinicStepOne';
import SingUpClinicStepTwo from '../pages/SignUpClinicStepTwo';
import SignUpPatient from '../pages/SignUpPatient';
import SignInPatient from '../pages/SignInPatient';
import SignInApart from '../pages/SignInApart';
import SignUpApart from '../pages/SignUpApart';
import DashBoardPatient from '../pages/DashBoardPatient';
import SchedulingPage from '../pages/SchedulingPage';
import HomePatient from '../pages/HomePatient';


// import Router from "./Router";




const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/signupclinicone" component={SingUpClinicStepOne}/>
      <Route path="/signupclinictwo" component={SingUpClinicStepTwo}/>
      <Route path="/signup" component={SingUp}/>
      <Route path="/signupapart" component={SignUpApart}/>
      <Route path="/signuppatient" component={SignUpPatient}/>
      <Route path="/signin" component={SingIn}/>
      <Route path="/signinapart" component={SignInApart}/>
      <Route path="/signinpatient" component={SignInPatient}/>
      <Route path="/dashboard" component={DashBoard} />
      <Route path="/schedulingpage" component={SchedulingPage} />
      <Route path="/dashboardpatient" component={DashBoardPatient} />
      <Route path="/homepatient" component={HomePatient} />
      <Route path="/" component={Home} />

    </Switch>
  );
};

export default Routes;
