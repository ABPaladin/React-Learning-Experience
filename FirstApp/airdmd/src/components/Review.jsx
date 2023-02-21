function Review({ login, message }) {
    return (
        <div className="review">
            <h3>{ message }</h3>
            <span><em>- {login}</em></span>
        </div>
    )
}

export default Review;