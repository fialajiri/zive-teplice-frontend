import React, { Fragment } from "react";

import { useEffect } from "react";
import PerformerList from "../../performers/performer-list";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Tab from "../../ui-elements/tabs/tab";

import { getPerformers } from "../../../lib/dummy_data";

const Program = (props) => {
  const { query } = useRouter();
  console.log(query);

  let isTabOneSelected = !!query.tabOne;
  const isTabTwoSelected = !!query.tabTwo;
  const isTabThreeSelected = !!query.tabThree;

  const performers = getPerformers();

  useEffect(() => {
    if (!isTabOneSelected && !isTabTwoSelected && !isTabThreeSelected)
      isTabOneSelected = true;
  }, []);

  return (
    <div className="program">
      <h2 className="heading-secondary program__heading">Program </h2>
      <div className="tab__container">
        <div className="tab__container__head">
          <Tab
            href="/program/?tabOne=true"
            title="Program"
            isSelected={isTabOneSelected}
          />
          <Tab
            href="/program/?tabTwo=true"
            title="Prodejci"
            isSelected={isTabTwoSelected}
          />
          <Tab
            href="/program/?tabThree=true"
            title="Účinkující"
            isSelected={isTabThreeSelected}
          />
        </div>
        <div className="tab__container__body">
          {isTabOneSelected && (
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
          {isTabTwoSelected && (
            <Fragment>
              <PerformerList performers={performers} type="prodejce" />
            </Fragment>
          )}
          {isTabThreeSelected && (
            <Fragment>
              {" "}
              <PerformerList performers={performers} type="učinkující" />
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default Program;
