import { handleActions } from 'redux-actions'

function generateHandlerActionsForType (type: string): Object {
  return {
    [type]: (state, action) => ({
      ...state,
      isFetching: true,
      payload: undefined,
      error: false,
    }),
    [type + '_SUCCESS']: (state, action) => ({
      ...state,
      isFetching: false,
      payload: action.payload,
    }),
    [type + '_FAILURE']: (state, action) => ({
      ...state,
      isFetching: false,
      error: action.error,
      payload: action.payload,
    }),
    [type + '_FAILURE_DISMISS']: (state, action) => ({
      ...state,
      error: false,
      paylaod: undefined,
    }),
    ...additionalActions
  }
}

export function handleFetchActionsForType (
  type: string,
  additionalActions: ?Object,
  additionalState: ?Object): Object
{
  const initialState: Object = {
    isFetching: false,
    error: false,
    payload: undefined,
    ...additionalState
  }
  return handleActions(generateHandlerActions(type), initialState)
}

export function handleFetchActionsForTypes(
  types: Array<string>,
  additionalActions: ?Object,
  additionalState: ?Object): Object
{
  const initialState: Object = {
    isFetching: false,
    error: false,
    payload: undefined,
    ...additionalState
  }
  let actions = {}
  types.forEach(type => {
    actions = generateHandlerActionsForType(type)
  })
  actions = {...actions, ...additionalActions}
  return handleActions(actions, initialState)
}
