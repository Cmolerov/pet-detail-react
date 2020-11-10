import React from "react";
import PetDetailPage from "./PetDetailPage";

function App(props) {
    return <PetDetailPage pets={props.pet} />;
}

export default App;
