import eventbus, { EventBus, EventHandler, EventMap } from '../eventbus';

interface TestEventMap extends EventMap {
  foo: (data: string) => void;
  bar: (data: number) => void;
}

const eventData = 'test data';

describe('eventbus', () => {
  let bus: EventBus<TestEventMap>;

  beforeEach(() => {
    vitest.spyOn(console, 'debug').mockImplementation(() => {});
    bus = eventbus<TestEventMap>({ debug: true });
  });

  afterEach(() => {
    vitest.clearAllMocks();
  });

  test('emits event with correct data', () => {
    const fn = vitest.fn();
    bus.on('foo', fn);

    bus.emit('foo', eventData);

    expect(fn)
      .toBeCalledWith(eventData);
  });

  test('emits event with correct data twice', () => {
    const fn = vitest.fn();
    bus.on('foo', fn);

    bus.emit('foo', eventData);
    bus.emit('foo', eventData);

    expect(fn)
      .toBeCalledTimes(2);
  });

  test('notifies onError if event handler throws an error', () => {
    const onError = vitest.fn();

    const busWithErrorHandler = eventbus<TestEventMap>({
      onError,
    });
    const consoleError = vitest.spyOn(console, 'error').mockImplementation(() => {});

    const error = new Error('test error');
    const handler = () => {
      throw error;
    };

    busWithErrorHandler.on('foo', handler);

    busWithErrorHandler.emit('foo', eventData);

    expect(onError)
      .toBeCalledWith(error);

    expect(onError)
      .toHaveBeenCalledTimes(1);

    expect(consoleError).toBeCalledWith(error);
  });

  test('on, off and emit', () => {
    const fn1: EventHandler = vitest.fn();
    const fn2: EventHandler = vitest.fn();

    bus.on('foo', fn1);
    bus.on('foo', fn2);

    bus.off('foo', fn2);

    bus.emit('foo', eventData);

    expect(fn1).toBeCalledWith(eventData);
    expect(fn2).not.toBeCalled();
  });

  test('once', () => {
    const fn3: EventHandler = vitest.fn();
    bus.once('foo', fn3);

    bus.emit('foo', eventData);

    expect(fn3).toBeCalledWith(eventData);

    bus.emit('foo', eventData);

    expect(fn3).toHaveBeenCalledTimes(1);
  });

  test('on can dispose from return', () => {
    const fn1: EventHandler = vitest.fn();
    const dispose = bus.on('foo', fn1);
    dispose();

    bus.emit('foo', eventData);

    expect(fn1).not.toBeCalled();
  });
});
