import "./CommentForm.scss";
import commentIcon from "../../assets/icons/add_comment.svg";
import FormField from "../FormField/FormField";
import CTA from "../CTA/CTA";

function CommentForm() {

    return (
        <div className="comments__form-container">
            <form className="comments__form" >
                <div className="comments__avatar"></div>
                <div className="comments__actions">
                    <FormField
                        componentClass="comments__text"
                        name="comments"
                        type="text"
                        placeholder="Add a comment"
                    />
                    <div className="comments__btn-container">
                        <img
                            src={commentIcon}
                            alt="add comment icon"
                            className="comments__btn-icon"
                        />
                        <CTA
                            componentClass="comments__comment-button"
                            componentText="COMMENT"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
}
export default CommentForm;