const root = ReactDOM.createRoot(document.getElementById("root"));
let counter = 1;
const redLightColor = { backgroundColor: "rgba(223, 64, 64, 1)" };
const yellowLightColor = { backgroundColor: "rgba(233, 236, 106, 1)" };
const greenLightColor = { backgroundColor: "rgba(4, 202, 0, 1)" };
const LightOff = () => <div className="light" />;

//three separate containers of states
const RedLight = () => (
  <div className="lights__wrapper">
    <div className="light" style={redLightColor} />
    <LightOff />
    <LightOff />
  </div>
);
const YellowLight = () => (
  <div className="lights__wrapper">
    <LightOff />
    <div className="light" style={yellowLightColor} />
    <LightOff />
  </div>
);
const GreenLight = () => (
  <div className="lights__wrapper">
    <LightOff />
    <LightOff />
    <div className="light" style={greenLightColor} />
  </div>
);

function TrafficLight({ trafficLights }) {
  return (
    <div className="traffic-light__wrapper">
      <div className="light__el"></div>
      <div className="light__container">{trafficLights}</div>
    </div>
  );
}

function LightsContainer({ counter }) {
  switch (counter) {
    case 1:
      return <RedLight />;
    case 2:
      return <YellowLight />;
    case 3:
      return <GreenLight />;
  }
}

function lightsHandler() {
  if (counter === 3) {
    counter = 0;
  }
  counter += 1;
  root.render(
    <TrafficLight trafficLights={<LightsContainer counter={counter} />} />
  );
}

setInterval(lightsHandler, 2000);

root.render(<TrafficLight trafficLights={<LightsContainer counter={counter} />} />);
