import CommentForm from '../CommentForm/CommentForm';
import CommentsList from "../CommentsList/CommentsList";
import ApoImoApi from '../../classes/apo-imo-api';
import { useEffect, useState } from 'react';

function CommentsContainer({ contentID }) {
    const apoImoApi = new ApoImoApi();
    const [comments, setComments] = useState([]);
    const [refetchComment, setRefetchComment] = useState(false);

    useEffect(() => {
        async function getComments() {
            try {
                const response = await apoImoApi.getComments(contentID);
                setComments(response.data);
            } catch (error) {
                console.log("Error fetching comments", error)
            }
        }
        getComments();
        setRefetchComment(false);
    }, [contentID, refetchComment]);

    const addComment = async () => {
        setRefetchComment(true)
    }
    const likeComment = async (commentID) => {
        try {
            await apoImoApi.likeComment(contentID, commentID);
            setRefetchComment(true);
        } catch (error) {
            console.log("There seems to be an issue,try again", error);
        }
    }
    const deleteComment = async (commentID) => {
        try {
            await apoImoApi.deleteComment(contentID, commentID);
            setRefetchComment(true);
        } catch (error) {
            console.log("There seems to be an issue,try again", error);
        }
    }
    return (
        <section className="comments-container">
            <CommentForm contentID={contentID}
                addComment={addComment} />
            <CommentsList
                contentID={contentID}
                comments={comments}
                likeComment={likeComment}
                deleteComment={deleteComment} />
        </section>
    )
}

export default CommentsContainer;