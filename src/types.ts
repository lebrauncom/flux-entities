export interface EntityMap<T> {
  [k: string]: T
}

export interface BaseState<T> {
  ids: Array<number | string>
  all: EntityMap<T>
}

export interface SelectableBaseState<T> extends BaseState<T> {
  selectedId?: number | string
}

export interface AjaxState<ErrorType = string> {
  ready: boolean
  loading: boolean
  touched: boolean
  errors: ErrorType[]
}

export interface AjaxBaseState<T, ErrorType = string> extends BaseState<T>, AjaxState<ErrorType> { }

export interface SelectableAjaxBaseState<T, ErrorType = string> extends SelectableBaseState<T>, AjaxState<ErrorType> { }