import React, { Fragment, useState, useReducer } from "react";

import PerformerList from "../../performers/performer-list";

import TabContainer from "../../ui-elements/tabs/tab-container";
import TabHead from "../../ui-elements/tabs/tab-head";
import TabBody from "../../ui-elements/tabs/tab-body";
import TabButton from "../../ui-elements/tabs/tab-button";

import { getPerformers } from "../../../lib/dummy_data";

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
            <Fragment>
              Fusce lacus enim, accumsan vel commodo quis, tristique a eros.
              Phasellus porttitor nulla sem, vel vehicula velit consequat non.
              Suspendisse tincidunt dolor sed ipsum finibus, id commodo nibh
              elementum. Fusce venenatis viverra nisl sit amet pellentesque.
              Donec turpis augue, tincidunt a felis sodales, facilisis gravida
              sapien. Nunc augue tellus, cursus eu nisl vitae, porttitor blandit
              nisl. Suspendisse faucibus velit ligula, quis elementum eros
              pulvinar ac. Nulla vel pulvinar justo, eu efficitur tortor. Aenean
              sit amet mi sed nunc condimentum maximus. Cras nec lacus ac nisi
              elementum condimentum. Quisque pellentesque rutrum tortor at
              posuere. Quisque sit amet congue ipsum. Fusce ac velit vel dui
              fringilla congue. Fusce auctor, magna eget lacinia rhoncus, libero
              elit semper magna, suscipit sagittis nisi lorem fringilla odio.
              Nam mattis, dui a dignissim finibus, purus sem sodales purus, a
              sagittis odio ante at erat. Vivamus at enim leo.
            </Fragment>
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
