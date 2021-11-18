const TabContainer = props => {
    return (
        <div className={`tab__container ${props.className}`}>
            {props.children}
        </div>
    )
}

export default TabContainer;