import './CommentsList.scss';
import Comment from "../Comment/Comment";
import ApoImoApi from '../../classes/apo-imo-api';
import { useEffect, useState } from 'react';
function CommentsList({ contentID }) {

    const apoImoApi = new ApoImoApi();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        async function getComments() {
            try {
                const response = await apoImoApi.getComments(contentID)
                console.log(response.data)
                setComments(response.data);
            } catch (error) {
                console.log("Error fetching comments", error)
            }
        }
        getComments()
    }, [contentID]);

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
                />
            ))}
        </div>
    );
}

export default CommentsList;