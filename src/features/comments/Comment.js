import {formatDate} from "../../utils/formatDate";

const Comment = ({comment}) => {
    // Note how we destruct and rename text to commentText
    const {text: commentText, rating, author, date} = comment;

    return (
        <p>
            {commentText}
            <br/>
            {rating}/5 stars -- {author}, {formatDate(date)}
        </p>
    );
};

export default Comment;