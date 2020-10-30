import React from 'react';
import SearchBar from './SearchBar';
import ResultList from './ResultList';
import search from './../api/jsonApi';
import './../css/style.css';

class App extends React.Component {
  state = {
    posts: undefined,
    loading: false,
  };

  searchTermChanged = async (searchTerm) => {
    this.setState({ loading: true });
    const result = await search(searchTerm);
    this.setState({ posts: result, loading: false });
  };

  render() {
    console.log(this.state.posts);
    return (
      <div className=" ui container container-grey">
        <div className="ui segment">
          <SearchBar onSearchValueChange={this.searchTermChanged} />
          {this.state.posts !== undefined && <div class="ui divider"></div>}
          {!this.state.loading ? (
            this.state.posts !== undefined && (
              <ResultList posts={this.state.posts} />
            )
          ) : (
            <div className="ui message">
              <p>
                <div class="ui tiny active inline loader"></div>
                <span>Loading...</span>
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
