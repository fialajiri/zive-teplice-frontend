const SummaryText = (props) => {
  if (props.year === 2021) {
    return (
      <div
        className={`summary__text ${
          props.flip === true ? "summary__text--flip" : ""
        }`}
      >
        <h2 className="heading-secondary summary__text__heading-secondary">
          Teplice jsme oživili náramně{" "}
        </h2>
        <h3 className="heading-tertiary summary__text__heading-tertiary">
          21.8.2021 - 6. ročník
        </h3>
        <p className="paragraph summary__text__paragraph">
          Děkuji všem, kteří včera oživili Šanovský park! Troufám si říct, že to
          bylo skvělé a pozitivní atmosféra byla cítit na každém
          kroku.🥳🌞🌼Posílám malou ochutnávku fotek od Vandlis rádobyfotograf.
          🤩Pokud jste fotili nebo natáčeli, klidně to s námi sdílejte. Ať nám
          příjemné naladění vydrží ještě pár dní...🥰{" "}
        </p>
        <button className="btn btn--green summary__text__btn">
          kompletní galerie
        </button>
      </div>
    );
  } else if (props.year === 2020) {
    return (
      <div
        className={`summary__text ${
          props.flip === true ? "summary__text--flip" : ""
        }`}
      >
        <h2 className="heading-secondary summary__text__heading-secondary">
        Teplice v sobotu ožily
        </h2>
        <h3 className="heading-tertiary summary__text__heading-tertiary">
          21.8.2021 - 6. ročník
        </h3>
        <p className="paragraph summary__text__paragraph">
        Pátý ročník sousedské slavnosti byl krásný. Ani letos nás počasí nezradilo a pozitivní energie tekla proudem. :-)
        </p>
        <p className="paragraph summary__text__paragraph">
          Návštěvníci mohli ochutnávat veganské, vietnamské, indické či
          izraelské speciality, nakupovat autorské výrobky a poslechnout si
          skvělé lokální hudebníky. Pro děti byl připravený opravdu bohatý
          program a ani chvilku se nenudily. Bylo příjemné pozorovat jak
          Šanovský park ožívá, je plný barev a lidi nezávisle na věku si
          slavnost užívají...
        </p>
        <button className="btn btn--green summary__text__btn">
          kompletní galerie
        </button>
      </div>
    );
  }
};

export default SummaryText;
