const TabButton = (props) => {
  return (
    <button onClick={props.onClick} className={`tab__button ${props.className} ${props.isSelected? 'tab__button--selected' : ''}`}>
      {props.title}
    </button>
  );
};

export default TabButton;
