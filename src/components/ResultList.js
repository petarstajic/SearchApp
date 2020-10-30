import React from 'react';
import Post from './Post';

class ResultList extends React.Component {
  state = {
    posts: '',
  };

  render() {
    return (
      <div>
        {this.props.posts.length === 0 ? (
          <div className="ui message">
            <p>Sorry, we couldn't find anything :(</p>
          </div>
        ) : (
          this.props.posts.map((post) => {
            return <Post postData={post} />;
          })
        )}
      </div>
    );
  }
}
export default ResultList;
