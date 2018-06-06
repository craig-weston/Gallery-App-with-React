import React from 'react';

import PhotoContainer from './PhotoContainer';

export default props => <PhotoContainer keyword={props.keyword || props.match.params.tag} />
