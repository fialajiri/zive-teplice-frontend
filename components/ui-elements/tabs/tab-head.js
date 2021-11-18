const TabHead = props => {
    return <div className={`tab__head ${props.className}`}>
        {props.children}
    </div>
}

export default TabHead;