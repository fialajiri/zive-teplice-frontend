import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AuthContext } from "../../../context/auth-context";


import Button from "../../ui-elements/button";

const NavLinks = (props) => {
  const router = useRouter();
  const auth = useContext(AuthContext);

  return (
    <ul className="nav__list">
      <li className={router.pathname === "/" ? "nav__list__item nav__list__item--active" : "nav__list__item"}>
        <Link href="/">Domů</Link>
      </li>
      <li className={router.pathname === "/program" ? "nav__list__item nav__list__item--active" : "nav__list__item"}>
        <Link href="/program">Program</Link>
      </li>
      <li className={router.pathname === "/gallery" ? "nav__list__item nav__list__item--active" : "nav__list__item"}>
        <Link href="/gallery">Galerie</Link>
      </li>
     {auth.token && <li className={router.pathname === "/admin" ? "nav__list__item nav__list__item--active" : "nav__list__item"}>
        <Link href="/admin">Admin</Link>
      </li>}

      {!auth.token && <li className={router.pathname === "/login" ? "nav__list__item nav__list__item--active" : "nav__list__item"}>
        <Link href="/login">Přihlásit se</Link>
      </li>}

      {auth.token && (
         <li className={router.pathname === "/login" ? "nav__list__item nav__list__item--active" : "nav__list__item"}>
           <div onClick={() => auth.logout(auth.token)}>Odhlásit se</div>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
