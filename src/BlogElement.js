import "./blogelement.css"
function BlogElement(props) {
    const aulink="https://github.com/" + props.author;
    return (
        <li className="b-element">
            <div>
                <a className="b-link" href="/#"><b>{props.title}</b> { props.tags.map((tag) => <a href="/#" className="tag">{tag}</a> ) }</a>
                <div className="b-meta-line">
                    <img className="b-author-image" alt={props.author} src={props.author_url} /> via <a className="b-user-click" href={aulink}>{props.author}</a> | Posted {props.time} ago | archive | {props.comments} comments
                </div>
            </div>
        </li>
    )
}

export default BlogElement