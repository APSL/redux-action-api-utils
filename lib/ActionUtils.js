/* @flow */

import { createAction } from 'redux-actions'

export function generateActionsForFetchWithTypeName (typeName: string): Object {
  let actions: Object = {}
  actions.start = createAction(typeName)
  actions.success = createAction(typeName + '_SUCCESS', json => json)
  actions.failure = createAction(typeName + '_FAILURE', error => error)
  actions.failureDismiss = createAction(typeName + '_FAILURE_DISMISS')
  return {...actions}
}
