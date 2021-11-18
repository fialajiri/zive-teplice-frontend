const TabBody = props => {
    return <div className={`tab__body ${props.className}`}>
        {props.children}
    </div>
}

export default TabBody;