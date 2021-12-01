import Link from "next/link";

const Button = (props) => {
  const classes = props.unstyled
    ? `${props.className}`
    : `button button--${props.size || "default"} ${
        props.inverse && "button--inverse"
      } ${props.danger && "button--danger"}
    ${props.shake && "button--animated--shake"}
    ${props.moveIn && "button--animated--move-in"}
    ${props.dangerInverse && "button--danger--inverse"}
    ${props.pulsating && "button--pulsating"} 
    ${props.className}`;

  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={classes}>{props.children}</a>
      </Link>
    );
  } else {
    return (
      <button
        className={classes}
        onClick={props.onClick}
        disabled={props.disabled}
        type={props.type}
      >
        {props.children}
      </button>
    );
  }
};

export default Button;
