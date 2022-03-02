import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbarree from './components/Navbarree';



import ProfilePhoto from './components/Profile/ProfilePhoto';


function App() {
  return (
    <div className="App">
   <Navbarree/>
   <ProfilePhoto/>
   {/* <FullName/> */}
  
    </div>
  );
}

export default App;
