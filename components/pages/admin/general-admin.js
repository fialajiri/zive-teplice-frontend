import React, { useState } from "react";

import TabContainer from "../../ui-elements/tabs/tab-container";
import TabHead from "../../ui-elements/tabs/tab-head";
import TabBody from "../../ui-elements/tabs/tab-body";
import TabButton from "../../ui-elements/tabs/tab-button";

import PerformerTable from "../../performers/performer-table";
import NewsTable from "../../news/news-table";

import { getNews, getPerformers } from "../../../lib/dummy_data";


const GeneralAdmin = () => {
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
  const news = getNews();

  

  return (
    <div className="general-admin__container">
      <h2 className="heading-secondary general-admin__heading">
        Administrativní Sekce
      </h2>
      <TabContainer>
        <TabHead>
          <TabButton
            onClick={() => clickTabHandler(1)}
            title="Účinkující"
            isSelected={tabOneIsActive}
          />
          <TabButton
            onClick={() => clickTabHandler(2)}
            title="Program"
            isSelected={tabTwoIsActive}
          />
          <TabButton
            onClick={() => clickTabHandler(3)}
            title="Aktuality"
            isSelected={tabThreeIsActive}
          />
        </TabHead>
        <TabBody>
        {tabOneIsActive && (
            <PerformerTable performers={performers} />
          )}
           {tabThreeIsActive && (
            <NewsTable news={news} />
          )}
        </TabBody>
      </TabContainer>
    </div>
  );
};

export default GeneralAdmin;
