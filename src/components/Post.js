import React from 'react';

class Post extends React.Component {
  render() {
    return (
      <div className="ui message">
        <div className="header">{this.props.postData.title}</div>
        <p>{this.props.postData.body}</p>
      </div>
    );
  }
}
export default Post;
