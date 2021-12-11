import TabContainer from "../../ui-elements/tabs/tab-container";
import TabHead from "../../ui-elements/tabs/tab-head";
import TabBody from "../../ui-elements/tabs/tab-body";
import Dashboard from "../../performers/performer-dashboard";

const PerformerAdmin = (props) => {
  return (
    <div className="general-admin__container home__container">
      <h2 className="heading-secondary general-admin__heading">
        Administrativní Sekce
      </h2>
      <TabContainer>
        <TabHead></TabHead>
        <TabBody>
          <Dashboard currentEvent={props.currentEvent}/>
        </TabBody>
      </TabContainer>
    </div>
  );
};

export default PerformerAdmin;
