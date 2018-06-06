import React from 'react';

export default props => {

  const photos = props.images.map(image => {
    return (
      <li key={image.id}>
        <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_q.jpg`} alt="flickr images" />
      </li>
    )
  });

  if (props.images.length > 0) {
    return (
      <ul>
        { photos }
      </ul>
    )
  } else {
    return (
      <div>
        <h3>No Results Found</h3>
        <p>You search did not return any results, please try again.</p>
      </div>
    )
  }
}
