import * as APIUtil from '../util/tags_api_util';
import { receiveErrors } from './sessions_actions';

export const RECEIVE_TAGS = 'RECEIVE_TAGS';
export const RECEIVE_TAG= 'RECEIVE_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveTag = (tag) => ({
  type: RECEIVE_TAG,
  tag,
});

export const receiveTags = (tags) => ({
  type: RECEIVE_TAGS,
  tags,
});

export const removeTag = (tag) => ({
  type: REMOVE_TAG,
  tag,
});

export const createTag = (tagData) => dispatch => {
  return APIUtil.createTag(tagData).then(
    tag => dispatch(receiveTag(tag)),
    errors => dispatch(receiveErrors(errors)));
};

export const fetchTags = () => dispatch => (
  APIUtil.fetchTags().then(
    tags => dispatch(receiveTags(tags)),
    errors => dispatch(receiveErrors(errors)))
);

export const fetchTag = (tagId) => dispatch => (
  APIUtil.fetchTags().then(
    tag => dispatch(receiveTag(tag)),
    errors => dispatch(receiveErrors(errors)))
);

export const deleteTag = (tagId) => dispatch => {
  return APIUtil.deleteTag(tagId).then(
    tagId => dispatch(removeTag(tagId)),
    errors => dispatch(receiveErrors(errors)));
};
