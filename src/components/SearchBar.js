import React from 'react';

const SEARCH_WAIT_INTERVAL = 300;

class SearchBar extends React.Component {
  state = {
    term: '',
  };

  searchTimer = undefined;

  onValueChange = (term) => {
    this.setState({ term });
    if (term !== '') {
      if (this.searchTimer !== undefined) {
        clearTimeout(this.searchTimer);
      }
      this.searchTimer = setTimeout(async () => {
        this.props.onSearchValueChange(term);
      }, SEARCH_WAIT_INTERVAL);
    }
  };

  render() {
    return (
      <div>
        <form className="ui form">
          <div className="field">
            <div className="ui icon input">
              <input
                className="prompt"
                type="text"
                placeholder="Please, start entering the text to search"
                value={this.state.term}
                onChange={(e) => this.onValueChange(e.target.value)}
              />
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
