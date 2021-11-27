import React, { Fragment, useState, useReducer } from "react";

import PerformerList from "../../performers/performer-list";

import TabContainer from "../../ui-elements/tabs/tab-container";
import TabHead from "../../ui-elements/tabs/tab-head";
import TabBody from "../../ui-elements/tabs/tab-body";
import TabButton from "../../ui-elements/tabs/tab-button";

import { getPerformers } from "../../../lib/dummy_data";
import ProgramTab from "./program-tab";

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

const Program = (props) => {
  const [tabState, dispatch] = useReducer(tabStateReducer, {
    tabOneIsActive: true,
    tabTwoIsActive: false,
    tabThreeIsActive: false,
  });

  const performers = getPerformers();

  return (
    <div className="program">
      <h2 className="heading-secondary program__heading">Program </h2>
      <TabContainer>
        <TabHead>
          <TabButton
            onClick={() => dispatch({ type: "tabOne" })}
            title="Program"
            isSelected={tabState.tabOneIsActive}
          />
          <TabButton
            onClick={() => dispatch({ type: "tabTwo" })}
            title="Prodejci"
            isSelected={tabState.tabTwoIsActive}
          />
          <TabButton
            onClick={() => dispatch({ type: "tabThree" })}
            title="Účinkující"
            isSelected={tabState.tabThreeIsActive}
          />
        </TabHead>
        <TabBody>
          {tabState.tabOneIsActive && (
           <ProgramTab />
          )}
          {tabState.tabTwoIsActive && (
            <PerformerList performers={performers} type="prodejce" />
          )}
          {tabState.tabThreeIsActive && (
            <PerformerList performers={performers} type="učinkující" />
          )}
        </TabBody>
      </TabContainer>
    </div>
  );
};

export default Program;
