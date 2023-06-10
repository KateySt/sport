import './App.css';
import FirstPage from "./component/mainScream/FirstPage";
import AboutUs from "./component/AboutUs/AboutUs";
import OurFeatures from "./component/OurFeatures/OurFeatures";
import ChooseProgram from "./component/ChooseProgram/ChooseProgram";
import OurTeam from "./component/OurTeam/OurTeam";
import Price from "./component/Price/Price";
import Recall from "./component/Recall/Recall";

const App = () => {
    return (
        <div className="App">
            <FirstPage/>
            <AboutUs/>
            <OurFeatures/>
            <ChooseProgram/>
            <OurTeam/>
            <Price/>
            <Recall/>
        </div>
    );
};

export default App;