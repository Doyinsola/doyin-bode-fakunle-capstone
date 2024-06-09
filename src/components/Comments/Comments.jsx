import "./Comments.scss";
import deleteIcon from "../../assets/icons/icon-delete.svg";
import likesIcon from '../../assets/icons/likes.svg';

function Comments({ comment }) {
    const timeStamp = new Date(comment.timestamp);
    const commentDate = Intl.DateTimeFormat("en-US").format(timeStamp);
    return (
        <div className="comments">
            <div className="comments__avatar"></div>
            <div className="comments__container">
                <div className="comments__top">
                    <p className="comments__name">{comment.name}</p>
                    <p className="comments__date">{commentDate}</p>
                </div>
                <div className="comments__comment-container">
                    <p className="comments__text">{comment.comment_text}</p>
                    <div className="comments__icons-container">
                        <div className="comments__likes-container">         <img
                            src={likesIcon}
                            alt="like comment icon"
                            className="comments__likes-icon" />
                            <p className="comments__likes-count">{comment.likes}</p>
                        </div>
                        <img
                            src={deleteIcon}
                            alt="delete comment icon"
                            className="comments__delete-icon"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Comments;