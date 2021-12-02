import Button from "../../ui-elements/button";

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
        <div className="summary__text__paragraphs">
          <p className="paragraph summary__text__paragraph">
            Děkuji všem, kteří včera oživili Šanovský park! Troufám si říct, že
            to bylo skvělé a pozitivní atmosféra byla cítit na každém
            kroku.🥳🌞🌼Posílám malou ochutnávku fotek od Vandlis
            rádobyfotograf. 🤩Pokud jste fotili nebo natáčeli, klidně to s námi
            sdílejte. Ať nám příjemné naladění vydrží ještě pár dní...🥰{" "}
          </p>
        </div>

        <Button
          link="/gallery/2021"
          size="big"
          pulsating
          shake
          className="summary__text__btn"
        >
          kompletní galerie
        </Button>
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
          30.6.2021 - 5. ročník
        </h3>
        <div className="summary__text__paragraphs">
          <p className="paragraph summary__text__paragraph">
            Pátý ročník sousedské slavnosti byl krásný. Ani letos nás počasí
            nezradilo a pozitivní energie tekla proudem. :-)
          </p>
          <p className="paragraph summary__text__paragraph">
            Návštěvníci mohli ochutnávat veganské, vietnamské, indické či
            izraelské speciality, nakupovat autorské výrobky a poslechnout si
            skvělé lokální hudebníky. Pro děti byl připravený opravdu bohatý
            program a ani chvilku se nenudily. Bylo příjemné pozorovat jak
            Šanovský park ožívá, je plný barev a lidi nezávisle na věku si
            slavnost užívají...
          </p>
        </div>
        <Button
          link="/gallery/2020"
          size="big"
          pulsating
          shake
          className="summary__text__btn"
        >
          kompletní galerie
        </Button>
      </div>
    );
  } else if (props.year === 2019) {
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
          22.6.2021 - 4. ročník
        </h3>
        <div className="summary__text__paragraphs">
          <p className="paragraph summary__text__paragraph">
            Čtvrtý ročník sousedské slavnosti Živé Teplice se náramně vydařil. V
            sobotu 22. června 2019 se v Šanovském parku v Teplicích sešlo
            několik set lidí, aby si poslechli lokální hudebníky, ochutnali
            speciality z celého světa, nakoupili autorské výrobky a poznali, co
            vše jejich sousedé tvoří. Letos se přišlo podívat také mnoho rodin s
            dětmi a užily si divadelní vystoupení i několik připravených
            workshopů. Celé odpoledne i večer vládla velmi příjemná atmosféra.
            Spolek SAYFY z.s., který za organizací slavnosti stojí, se už těší
            na příští rok. Přihlášky pro účinkující a prodejce otevře už na jaře
            roku 2020.
          </p>
        </div>
        <Button
          link="/gallery/2019"
          size="big"
          pulsating
          shake
          className="summary__text__btn"
        >
          kompletní galerie
        </Button>
      </div>
    );
  } else if (props.year === 2018) {
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
          24.6.2021 - 3. ročník
        </h3>
        <div className="summary__text__paragraphs">
          <p className="paragraph summary__text__paragraph">
            V neděli 24.6. proběhl 3. ročník sousedské slavnosti Živé Teplice.
            Dobře udělali ti, kteří se nezalekli dešťové předpovědi a strávili s
            námi v Šanovském parku téměř celý den. Počasí se nakonec vydařilo
            náramně a zavládla moc milá atmosféra. Moc se těším na příští rok!
            Pokud byste se chtěli jakkoliv zapojit, neváhejte mne kontaktovat.
          </p>
        </div>
        <Button
          link="/gallery/2018"
          size="big"
          pulsating
          shake
          className="summary__text__btn"
        >
          kompletní galerie
        </Button>
      </div>
    );
  } else if (props.year === 2017) {
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
          25.6.2017 - 2. ročník
        </h3>
        <div className="summary__text__paragraphs">
          <p className="paragraph summary__text__paragraph">
            V neděli 25.6. proběhl v Šanovském parku u Mušle druhý ročník
            sousedské slavnosti Živé Teplice. Krásnou slunečnou neděli si
            návštěvníci zpříjemnili poslechem teplických hudebníků. Jako první
            zahrála folkrocková kapela Ukrutná veverka, po které posluchače
            pohodově naladilo nevšední nástrojové složení tří charizmatických
            hudebníků, Igor Barboi trio. Malou jazz-latino-šanson party sehrály
            Hambaeros a nakonec se předvedla mladá indierocková kapela Edafon.
          </p>
          <p className="paragraph summary__text__paragraph">
            Velkou roli v pozitivním naladění návštěvníků slavnosti sehrály také
            stánky s občerstvením. Vzhledem k tomu, že byl pravý letní den, není
            překvapením, že nejúspěšnějším bylo vozítko s domácí zmrzlinou. Ale
            také ostatní stánky, mimo jiné ty s vietnamskými a arabskými
            specialitami, lákaly k ochutnán
          </p>
        </div>
        <Button
          link="/gallery/2017"
          size="big"
          pulsating
          shake
          className="summary__text__btn"
        >
          kompletní galerie
        </Button>
      </div>
    );
  } else if (props.year === 2016) {
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
          26.6.2021 - 1. ročník
        </h3>
        <div className="summary__text__paragraphs">
          <p className="paragraph summary__text__paragraph">
            V neděli 26. 6. 2016 se v Šanovském parku u Mušle uskutečnila první
            sousedská slavnost Živé Teplice.
          </p>
          <p className="paragraph summary__text__paragraph">
            Vyšlo krásné počasí, panovala dobrá nálada a v průběhu celého dne se
            sešlo několik set návštěvníků. Skupinka dětí i dospělých
            odstartovali Živé Teplice lekcí jógy. Kolem 14.té hodiny se prostor
            kolem Šanovské Mušle zaplnil a lidé ochutnávali nabízené speciality,
            zkoušeli nové dovednosti u workshopových stánků, nakupovali autorské
            výrobky a projížděli se na Rekolech.
          </p>
          <p className="paragraph summary__text__paragraph">
            Velký úspěch měla výstava Teplická NEJ a prohlídka Breinbauerových
            varhan v kostele sv. Alžběty, na které se musela dokonce vystát
            fronta. Hudební vystoupení Komorní sboru Teplice, dua Kytička na
            Stráni, mladé kapely Edafon a partnerského dua Iamme & Cermaque měla
            úspěch a přilákala další posluchače.
          </p>
        </div>
        <Button
          link="/gallery/2016"
          size="big"
          pulsating
          shake
          className="summary__text__btn"
        >
          kompletní galerie
        </Button>
      </div>
    );
  } else if (props.year === "2021-muzeum") {
    return (
      <div
        className={`summary__text ${
          props.flip === true ? "summary__text--flip" : ""
        }`}
      >
        <h2 className="heading-secondary summary__text__heading-secondary">
          Děkujeme za jedinečnou atmosféru.
        </h2>
        <h3 className="heading-tertiary summary__text__heading-tertiary">
          20.11.2021 - v Jízdárně teplického zámku
        </h3>
        <div className="summary__text__paragraphs">
          <p className="paragraph summary__text__paragraph">
            Díky ve všem, kteří se zapojili, pomáhali a také těm, kteří se
            přišli na Živé Teplice v Muzeu podívat. Taková nálož pozitivní
            atmosféry v kombinaci se skvělou hudbou, krásnou výstavou a spoustou
            cideru, to mě bude hřát na duši ještě dlouho. Jste skvělí, že jste
            se nenechali zastavit všemožným omezením a přišli podpořit kulturu i
            tvůrce. Mrkněte na úžasný fotoreport od Lukyho Vandlise.
          </p>
          <p className="paragraph summary__text__paragraph">
            Těším se na vás zase v červnu v Šanovském parku!
          </p>
        </div>
        <Button
          link="/gallery/2016"
          size="big"
          pulsating
          shake
          className="summary__text__btn"
        >
          kompletní galerie
        </Button>
      </div>
    );
  }
};

export default SummaryText;
