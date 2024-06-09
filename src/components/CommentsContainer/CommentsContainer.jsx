import CommentsList from "../CommentsList/CommentsList";

function CommentsContainer({
    comments
}) {
    return (
        <section className="comments-container"><CommentsList
            comments={comments} />
        </section>
    )
}

export default CommentsContainer;