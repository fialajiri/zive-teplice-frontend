import React, { Fragment, useState } from "react";


import PerformerList from "../../performers/performer-list";

import TabContainer from "../../ui-elements/tabs/tab-container";
import TabHead from "../../ui-elements/tabs/tab-head";
import TabBody from "../../ui-elements/tabs/tab-body";
import TabButton from "../../ui-elements/tabs/tab-button";

import { getPerformers } from "../../../lib/dummy_data";

const Program = (props) => {
  const [tabOneIsActive, setTabOneIsActive] = useState(true);
  const [tabTwoIsActive, setTabTwoIsActive] = useState(false);
  const [tabThreeIsActive, setTabThreeIsActive] = useState(false);

  const clickTabHandler = (tabNumber) => {
    if (tabNumber === 1) {
      setTabOneIsActive(true);
      setTabTwoIsActive(false);
      setTabThreeIsActive(false);
    }
    if (tabNumber === 2) {
      setTabOneIsActive(false);
      setTabTwoIsActive(true);
      setTabThreeIsActive(false);
    }
    if (tabNumber === 3) {
      setTabOneIsActive(false);
      setTabTwoIsActive(false);
      setTabThreeIsActive(true);
    }
  };
  
  const performers = getPerformers();

  

  return (
    <div className="program">
      <h2 className="heading-secondary program__heading">Program </h2>
      <TabContainer >
        <TabHead >
          <TabButton
            onClick={()=> clickTabHandler(1)}
            title="Program"
            isSelected={tabOneIsActive}
          />
          <TabButton
            onClick={()=> clickTabHandler(2)}
            title="Prodejci"
            isSelected={tabTwoIsActive}
          />
          <TabButton
            onClick={()=> clickTabHandler(3)}
            title="Účinkující"
            isSelected={tabThreeIsActive}
          />
        </TabHead>
        <TabBody >
          {tabOneIsActive && (
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
          {tabTwoIsActive && (
            <PerformerList performers={performers} type="prodejce" />
          )}
          {tabThreeIsActive && (
            <PerformerList performers={performers} type="učinkující" />
          )}
        </TabBody>
      </TabContainer>
    </div>
  );
};

export default Program;
