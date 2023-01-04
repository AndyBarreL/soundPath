export type StateDevToolsAction =
| "init"
| "update"
| "reset"
| "setProperty"
| "add"
| "prepend"
| "set"
| "concat"
| "remove"
| "setActive"
| string;

export interface LegacyStoreOptions {
  name: string;
  resettable?: boolean;
  debug?: boolean;
}