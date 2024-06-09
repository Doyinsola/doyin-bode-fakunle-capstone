import './CommentsContainer.scss';
import CommentForm from '../CommentForm/CommentForm';
import CommentsList from "../CommentsList/CommentsList";

function CommentsContainer({
    comments
}) {
    return (
        <section className="comments-container">
            <p className="comments-container__comment-count sub-header">
                {comments.length} Comments
            </p>
            <CommentForm />
            <CommentsList
                comments={comments} />
        </section>
    )
}

export default CommentsContainer;