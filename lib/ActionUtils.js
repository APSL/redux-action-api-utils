/* @flow */

import { createAction } from 'redux-actions'

export type ActionsType = {
  start: Function;
  success: Function;
  failure: Function;
  failureDismiss: Function;
}

export function generateActionsForFetchWithTypeName (typeName: string): ActionsType {
  const actions: ActionsType = {
    start: createAction(typeName),
    success: createAction(typeName + '_SUCCESS', json => json),
    failure: createAction(typeName + '_FAILURE', error => error),
    failureDismiss: createAction(typeName + '_FAILURE_DISMISS')
  }
  return actions
}
