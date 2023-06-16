// Source https://dawchihliou.github.io/articles/event-bus-for-react
// Example https://github.com/DawChihLiou/eventbus-demo

export type EventKey = string | symbol;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type EventHandler<T = any> = (payload: T) => void;
export type EventMap = Record<EventKey, EventHandler>;
export type Bus<E> = Record<keyof E, E[keyof E][]>;

type EventOnHandlerDisposer = () => void;

export interface EventBus<T extends EventMap> {
  on<Key extends keyof T>(key: Key, handler: T[Key]): EventOnHandlerDisposer;
  off<Key extends keyof T>(key: Key, handler: T[Key]): void;
  once<Key extends keyof T>(key: Key, handler: T[Key]): void;
  emit<Key extends keyof T>(key: Key, ...payload: Parameters<T[Key]>): void;
}

interface EventBusConfig {
  debug?: boolean,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onError?: (...params: any[]) => void;
}

function eventbus<E extends EventMap>(
  config?: EventBusConfig,
): EventBus<E> {
  const bus: Partial<Bus<E>> = {};

  const off: EventBus<E>['off'] = (key, handler) => {
    if (config?.debug) {
      // eslint-disable-next-line no-console
      console.debug('eventbus off', key, handler);
    }
    const index = bus[key]?.indexOf(handler) ?? -1;
    // eslint-disable-next-line no-bitwise
    bus[key]?.splice(index >>> 0, 1);
  };

  const on: EventBus<E>['on'] = (key, handler) => {
    if (config?.debug) {
      // eslint-disable-next-line no-console
      console.debug('eventbus on', key, handler);
    }

    if (bus[key] === undefined) {
      bus[key] = [];
    }
    bus[key]?.push(handler);

    return () => {
      off(key, handler);
    };
  };

  const once: EventBus<E>['once'] = (key, handler) => {
    if (config?.debug) {
      // eslint-disable-next-line no-console
      console.debug('eventbus once', key, handler);
    }

    const handleOnce = (payload: Parameters<typeof handler>) => {
      handler(payload);
      off(key, handleOnce as typeof handler);
    };

    on(key, handleOnce as typeof handler);
  };

  const emit: EventBus<E>['emit'] = (key, payload) => {
    if (config?.debug) {
      // eslint-disable-next-line no-console
      console.debug('eventbus emit', key, payload);
    }

    bus[key]?.forEach((fn) => {
      try {
        fn(payload);
      } catch (e) {
        console.error(e);
        if (config?.onError) {
          config?.onError(e);
        }
      }
    });
  };

  return {
    on,
    off,
    once,
    emit,
  };
}

export default eventbus;
