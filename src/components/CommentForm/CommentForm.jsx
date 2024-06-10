import "./CommentForm.scss";
import commentIcon from "../../assets/icons/add_comment.svg";
import FormField from "../FormField/FormField";
import CTA from "../CTA/CTA";
import ApoImoApi from "../../classes/apo-imo-api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function CommentForm({
    contentID,
    addComment
}) {
    const [commentText, setCommentText] = useState("");
    const apoImoApi = new ApoImoApi;

    const handleCommentText = (event) => {
        setCommentText(event.target.value);
    };
    const newComment = {
        content_id: contentID,
        user_id: 4,
        comment_text: commentText,
    };

    const isFormValid = () => {
        if (!commentText) {
            return false;
        }
        return true;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (isFormValid()) {
            async function postComments() {
                try {
                    await apoImoApi.postComments(contentID,
                        newComment
                    );
                    addComment();
                    toast.success("Your comment was successfully posted!", {
                        position: "top-center",
                    });
                } catch (error) {
                    toast.error("error posting comment", error, {
                        position: "top-center",
                    });
                }
            }
            postComments();
            event.target.reset();
        } else {
            toast.error("comment failed to post, you have errors in your form", {
                position: "top-center",
            });
        }
    };

    return (
        <div className="comments__form-container">
            <ToastContainer />
            <form className="comments__form"
                onSubmit={handleSubmit}>
                <div className="comments__avatar"></div>
                <div className="comments__actions">
                    <FormField
                        componentClass="comments__text"
                        name="comments"
                        type="text"
                        placeholder="Add a comment"
                        eventHandler={handleCommentText}
                        value={commentText}
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