import Link from "next/link";

const Tab = ({ href, isSelected, title }) => (
  <Link href={href}>
    <a className={`tab ${isSelected ? "tab--selected" : ""}`}>{title}</a>
  </Link>
);

export default Tab;
