import uuid from 'uuid';

const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';


function addComment(text) {
  return {
    type: ADD_COMMENT,
    id: uuid.v4(),
    text: text
  }
}

function editComment(id, text) {
  return {
      type: EDIT_COMMENT,
      text,
      id
  }
}

function removeComment(id) {
  return {
      type: REMOVE_COMMENT,
      id
  }
}

function thumbUpComment(commentId) {
  return {
    type: THUMB_UP_COMMENT,
    id: commentId
  }
}

function thumbDownComment(commentid) {
	return {
		type: THUMB_DOWN_COMMENT,
		id: commentid
	}
}

export {addComment, editComment, removeComment, thumbUpComment, thumbDownComment, ADD_COMMENT, EDIT_COMMENT, REMOVE_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT};