import Example from "../src/components/example/Example";
import Navigation from "../src/components/navigation/Navigation";
import Time from "../src/components/time/Time";
import User from "../src/components/user/User";
import Weather from "../src/components/weather/Weather";
import Header from "../src/components/header/Header";

export default function Index() {
  // return <Example />;
  // return <User />;
  // return <Weather />
  // return <Time />
  return <Navigation />
  return (
    <div>
      <Header
        left={<User />}
        right={
          <>
            <Weather />
            <Time />
          </>
        }
      />
      {/* other content */}
    </div>
  );
}