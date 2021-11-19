const UpdateNewsItem = props => {
    console.log(props.newsItem.message)

    return <div>
        {props.newsItem.message}
    </div>
}

export default UpdateNewsItem;