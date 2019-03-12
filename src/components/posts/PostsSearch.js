import React, { Component } from 'react'
import PostsList from './PostsList'

class PostsSearch extends Component {
  state = {
    searchQuery: ''
  }

  handleSubmit = event => event.preventDefault();

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { state, handleSubmit, handleInputChange } = this;
    const { searchQuery } = state;

    return (
      <div>
        <h2>Search for Posts by Title</h2>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              name='searchQuery'
              value={searchQuery}
              onChange={handleInputChange}
              placeholder='Post Title'
            />
          </form>
        {searchQuery && <PostsList searchQuery={searchQuery} />}
      </div>
    );
  }
}

export default PostsSearch;