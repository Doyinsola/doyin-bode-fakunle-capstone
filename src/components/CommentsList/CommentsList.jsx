import Comments from "../Comments/Comments";

function CommentsList({ comments }) {
    const reversedComments = [...comments].reverse();

    return (
        <div className="comments-list">
            {reversedComments.map((comment) => (
                <Comments
                    key={comment.id}
                    comment={comment}
                />
            ))}
        </div>
    );
}

export default CommentsList;