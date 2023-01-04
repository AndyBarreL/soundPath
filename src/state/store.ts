import { computed, ComputedRef, ref, Ref } from "vue";
import { LegacyStoreOptions, StateDevToolsAction } from "./store.model";

// TDo more core features
export interface LegacyStore<T> {
  // computedValue: ComputedRef<T>;
  // options: LegacyStoreOptions;
  // set(value: T, actionName?: StateDevToolsAction): void;
  computedProperty<K extends keyof T>(key: K): ComputedRef<T[K]>;
  value(): T;
  // update(diff: Partial<T>, actionName?: StateDevToolsAction): void;
  // mergeProperty<K extends keyof T>(
  //   key: K,
  //   diff: Partial<T[K]> & Record<string, unknown>,
  //   actionName?: StateDevToolsAction
  // ): void;
  // reset(): void;
  // updateOptions(updatedOptions: Partial<LegacyStoreOptions>): void;
}

interface StoreAction<T = unknown> {
  name: StateDevToolsAction;
  diff?: T;
}

export function useLegacyStore<T>(
  state: Ref<T>,
  options: LegacyStoreOptions
): LegacyStore<T> {
  const value = () => state.value;

  function computedProperty<K extends keyof T>(key: K) {
    return (computed(() => value()[key as K]).value as unknown) as ComputedRef<T[K]>;
  }

  return {
    computedProperty,
    value,
  };
}