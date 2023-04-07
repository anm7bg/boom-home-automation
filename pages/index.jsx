import Example from "../src/components/example/Example";
import Navigation from "../src/components/navigation/Navigation";
import Time from "../src/components/time/Time";
import User from "../src/components/user/User";
import Weather from "../src/components/weather/Weather";
import Header from "../src/components/header/Header";
import Energy from "../src/components/energy/Energy";
import Thermostat from "../src/components/thermostat/Thermostat";
import Card from "../src/components/card/Card";
import Scenes from "../src/components/scenes/Scenes";
import Cameras from "../src/components/cameras/Cameras";
import Dashboard from "./Dashboard";

export default function Index() {
  // return <Example />;
  // return <User />;
  // return <Weather />
  // return <Time />
  // return <Navigation />
  // return (
  //   <div>
  //     <Header
  //       left={<User />}
  //       right={
  //         <>
  //           <Weather />
  //           <Time />
  //         </>
  //       }
  //     />
  //     {/* other content */}
  //   </div>
  // );
  return <Dashboard />
  // return <Thermostat />
  // return <Card />
  // return <Scenes />
  // return <Cameras />
}