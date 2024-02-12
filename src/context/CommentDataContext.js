import { createContext } from "react";

const CommentDataContext = createContext({commentData: [null], setCommentData: () => {}})

export default CommentDataContext;