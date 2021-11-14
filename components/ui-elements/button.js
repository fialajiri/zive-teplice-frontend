import Link from "next/link";

import classes from "./Button.module.css";

const Button = (props) => {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={classes.btn}>{props.children}</a>
      </Link>
    );
  } else {
    return (
      <button className={classes.btn} onClick={props.onClick} disabled={props.disabled} type={props.type} >
        {props.children}
      </button>
    );
  }
};

export default Button;
