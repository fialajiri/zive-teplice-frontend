import { useContext } from "react";
import Link from "next/link";

import { AuthContext } from "../../../context/auth-context";

const FooterNavigation = (props) => {
  const auth = useContext(AuthContext);

  return (
    <ul className="footer__nav__list">
      <li className="footer__nav__list__item">
        <Link href="/">Domů</Link>
      </li>
      <li className="footer__nav__list__item">
        <Link href="/program">Program</Link>
      </li>
      <li className="footer__nav__list__item">
        <Link href="/gallery">Galerie</Link>
      </li>
      <li className="footer__nav__list__item">
        <Link href="/kontakt">Kontakt</Link>
      </li>
      {auth.token && (
        <li className="footer__nav__list__item">
          <Link href="/admin">Admin</Link>
        </li>
      )}
    </ul>
  );
};

export default FooterNavigation;
