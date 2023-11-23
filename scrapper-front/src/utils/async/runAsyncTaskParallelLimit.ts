import chunk from 'lodash/chunk';

const runAsyncTaskParallelLimit = async <T>(tasks: (() => Promise<T>)[], limit: number) => {
  const tasksByChunks = chunk(tasks, limit);

  const results: PromiseSettledResult<Awaited<T>>[] = [];

  for (let i = 0; i < tasksByChunks.length; i++) {
    // Выполняем задания пачками по %limit% штук
    // eslint-disable-next-line no-await-in-loop
    const chunkResults: PromiseSettledResult<Awaited<T>>[] = await Promise
      .allSettled(
        tasksByChunks[i].map((cb) => cb()),
      );

    // chunkResults
    results.push(...Object.values(chunkResults));
  }

  return results;
};

export default runAsyncTaskParallelLimit;
