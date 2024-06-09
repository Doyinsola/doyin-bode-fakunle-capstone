import Comment from "../Comment/Comment";

function CommentsList({ comments }) {
    const reversedComments = [...comments].reverse();

    return (
        <div className="comments-list">
            {reversedComments.map((comment) => (
                <Comment
                    key={comment.id}
                    comment={comment}
                />
            ))}
        </div>
    );
}

export default CommentsList;