import CommentForm from '../CommentForm/CommentForm';
import CommentsList from "../CommentsList/CommentsList";
import ApoImoApi from '../../classes/apo-imo-api';
import { useEffect, useState } from 'react';

function CommentsContainer({ contentID }) {
    return (
        <section className="comments-container">
            <CommentForm />
            <CommentsList
                contentID={contentID} />
        </section>
    )
}

export default CommentsContainer;