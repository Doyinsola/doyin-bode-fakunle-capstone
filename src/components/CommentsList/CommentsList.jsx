import './CommentsList.scss';
import Comment from "../Comment/Comment";

function CommentsList({
    comments,
    likeComment,
    deleteComment
}) {



    const reversedComments = [...comments].reverse();

    if (comments.length === 0) {
        return <p className="comments-list__no-coment">No comments yet</p>
    }
    return (
        <div className="comments-list">
            <p className="comments-list__comment-count sub-header">
                {comments.length} Comments
            </p>
            {reversedComments.map((comment) => (
                <Comment
                    key={comment.id}
                    comment={comment}
                    likeComment={likeComment}
                    deleteComment={deleteComment}
                />
            ))}
        </div>
    );
}

export default CommentsList;