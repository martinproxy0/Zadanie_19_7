
import {connect} from 'react-redux';
import Comment from './Comment';
import {editComment, removeComment, thumbUpComment, thumbDownComment} from './actions';

const mapDispatchToProps = dispatch => ({
  editComment: (id, text) => dispatch(editComment(id,text)),
  removeComment: (id) => dispatch(removeComment(id)),
  thumbUpComment: (id) => dispatch(thumbUpComment(id)),
  thumbDownComment: (id) => dispatch(thumbDownComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);