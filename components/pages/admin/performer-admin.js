import { useContext } from "react";

import TabContainer from "../../ui-elements/tabs/tab-container";
import TabHead from "../../ui-elements/tabs/tab-head";
import TabButton from "../../ui-elements/tabs/tab-button";
import TabBody from "../../ui-elements/tabs/tab-body";

import { AuthContext } from "../../../context/auth-context";

import Dashboard from "../../performers/performer-dashboard";

const PerformerAdmin = (props) => {
  const auth = useContext(AuthContext);

  return (
    <div className="general-admin__container home__container">
      <h2 className="heading-secondary general-admin__heading">
        Administrativní Sekce
      </h2>
      <TabContainer>
        <TabHead></TabHead>
        <TabBody>
          <Dashboard />
        </TabBody>
      </TabContainer>
    </div>
  );
};

export default PerformerAdmin;
