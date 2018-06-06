import React, { Component } from 'react';
import apiKey from '../config.js';

import Photo from './Photo';

class PhotoContainer extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    this.search(this.props.keyword);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.keyword !== this.props.keyword) {
      this.search(nextProps.keyword);
    }
  }

  search(keyword) {
    this.setState({loading: true})
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${keyword}&per_page=24&safe_search=1&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(data => {
        this.setState({images: data.photos.photo, loading: false});
      });
  }

  render() {
    return (
      <div className="photo-container">
        <h2>{this.props.keyword}</h2>
        {
          (this.state.loading)
          ? <h4>Loading...</h4>
          : <Photo images={this.state.images} />
        }
      </div>
    );
  }
}

export default PhotoContainer;
