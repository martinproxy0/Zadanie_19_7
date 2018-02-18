
import {connect} from 'react-redux';
import MessageInput from './MessageInput';
import {addComment} from './actions'

const mapDispatchToProps = dispatch => ({
    addComment: (text) => dispatch(addComment(text)),
});

export default connect(null, mapDispatchToProps)(MessageInput);