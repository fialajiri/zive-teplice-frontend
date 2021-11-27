import React, { useReducer } from "react";

import TabContainer from "../../ui-elements/tabs/tab-container";
import TabHead from "../../ui-elements/tabs/tab-head";
import TabBody from "../../ui-elements/tabs/tab-body";
import TabButton from "../../ui-elements/tabs/tab-button";

import PerformerTable from "../../performers/performer-table";
import NewsTable from "../../news/news-table";

import { getNews, getPerformers } from "../../../lib/dummy_data";
import ProgramTab from "../program/program-tab";

const tabStateReducer = (currTabState, action) => {
  switch (action.type) {
    case "tabOne":
      return {
        tabOneIsActive: true,
        tabTwoIsActive: false,
        tabThreeIsActive: false,
      };
    case "tabTwo":
      return {
        tabOneIsActive: false,
        tabTwoIsActive: true,
        tabThreeIsActive: false,
      };
    case "tabThree":
      return {
        tabOneIsActive: false,
        tabTwoIsActive: false,
        tabThreeIsActive: true,
      };
    default:
      throw new Error("Should not be reached");
  }
};

const GeneralAdmin = (props) => {
  const [tabState, dispatch] = useReducer(tabStateReducer, {
    tabOneIsActive: true,
    tabTwoIsActive: false,
    tabThreeIsActive: false,
  });

  return (
    <div className="general-admin__container">
      <h2 className="heading-secondary general-admin__heading">
        Administrativní Sekce
      </h2>
      <TabContainer>
        <TabHead>
          <TabButton
            onClick={() => dispatch({ type: "tabOne" })}
            title="Účinkující"
            isSelected={tabState.tabOneIsActive}
          />
          <TabButton
            onClick={() => dispatch({ type: "tabTwo" })}
            title="Program"
            isSelected={tabState.tabTwoIsActive}
          />
          <TabButton
            onClick={() => dispatch({ type: "tabThree" })}
            title="Aktuality"
            isSelected={tabState.tabThreeIsActive}
          />
        </TabHead>
        <TabBody>
          {tabState.tabOneIsActive && (
            <PerformerTable
              performers={props.users}
              onDelete={props.onDeleteUser}
            />
          )}
          {tabState.tabTwoIsActive && (
            <ProgramTab />
          )}
          {tabState.tabThreeIsActive && (
            <NewsTable news={props.news} onDelete={props.onDeleteNews} />
          )}
        </TabBody>
      </TabContainer>
    </div>
  );
};

export default GeneralAdmin;
