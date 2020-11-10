import React from "react";

import Navigation from "./Navigation";
import PetDetails from "./PetDetails";
import PetDetailList from "./PetDetailList";

const PetDetailPage = (props) => (
    <PetDetailList pet={props.pet}>
        <Navigation />
        <PetDetails pet={props.pet} />
    </PetDetailList>
);
export default PetDetailPage;
