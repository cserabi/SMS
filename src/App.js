
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


import Banner from './Component/Banner/Banner';
import Contact from './Component/ContactUs/Contact';
import AuthProvider from './Component/Context/AuthProvider';
import PrivateRoute from './Component/Context/PrivateRoute';
import Dashboard from './Component/Dashboard/Dashboard';
import AddResult from './Component/Dashboard/DashBoardPages/AddResult';
import AddReview from './Component/Dashboard/DashBoardPages/AddReview';
import AddSchedule from './Component/Dashboard/DashBoardPages/AddSchedule';
import MakeAdmin from './Component/Dashboard/DashBoardPages/MakeAdmin';
import ManageOrders from './Component/Dashboard/DashBoardPages/ManageOrders';
import ManageProduct from './Component/Dashboard/DashBoardPages/ManageProduct';

import MyOrder from './Component/Dashboard/DashBoardPages/MyOrder';
import Pay from './Component/Dashboard/DashBoardPages/Pay';





import FAQ from './Component/FAQ/FAQ';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Register from './Component/Login/Register';
import Productadd from './Component/Productadd';
import Purchase from './Component/Purchase/Purchase';
import Results from './Component/Results/Results';
import Review from './Component/Review/Review';
import Schedule from './Component/Schedule/Schedule';
import PaidResources from './Component/Dashboard/DashBoardPages/PaidResources';
import MyPost from './Component/Dashboard/DashBoardPages/MyPost';


function App() {

  return (
    <div className="App">



      <AuthProvider>


        <Router>



          <Header></Header>


          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path='/home'>
              <Home></Home>
            </Route>

            <Route path='/topbanner'>
              <Banner></Banner>
            </Route>

            {/* <PrivateRoute path='/explore'>
              <Explore></Explore>
            </PrivateRoute> */}
            <PrivateRoute path='/Schedule'>
              <Schedule></Schedule>
            </PrivateRoute>


            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path="/MyPost">
              <MyPost></MyPost>
            </Route>

            <Route path='/Register'>
              <Register></Register>
            </Route>


            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>

            </PrivateRoute>

            <PrivateRoute path='/results'>
              <Results></Results>

            </PrivateRoute>
            <Route path="/purchase/:productId">
              <Purchase></Purchase>
            </Route>
            <Route path="/contactUs">
              <Contact></Contact>

            </Route>

            <Route path='/review'>
              <Review></Review>

            </Route>

            <Route path="/manageProducts">
              <ManageProduct></ManageProduct>
            </Route>

            <Route path="/manageOrders">
              <ManageOrders></ManageOrders>

            </Route>
            <Route path="/paidResources">
              <PaidResources>

              </PaidResources>

            </Route>



            <Route path='/faq'>
              <FAQ></FAQ>
            </Route>
            <Route path='/myorder'>
              <MyOrder></MyOrder>
            </Route>
            <Route path='/addProducts'>
              <Productadd></Productadd>
            </Route>

            <Route path='/addSchedule'>
              <AddSchedule></AddSchedule>
            </Route>

            <Route path='/addResult'>
              <AddResult></AddResult>
            </Route>


            <Route path='/admin'>
              <MakeAdmin></MakeAdmin>
            </Route>

            <Route path='/addreview'>
              <AddReview></AddReview>

            </Route>


          </Switch>


          {/* <Subscriber></Subscriber> */}



          <Footer></Footer>


        </Router>


      </AuthProvider>

    </div>
  );
}

export default App;
