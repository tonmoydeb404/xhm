type AsyncFunction<T, Args extends any[]> = (...args: Args) => Promise<T>;

const asyncWrapper =
  <T, Args extends any[]>(func: AsyncFunction<T, Args>) =>
  async (...props: Args) => {
    try {
      const data = await func(...props);
      return {data, error: false};
    } catch (error: any) {
      return {
        error: (error?.message as string) || 'Something went to wrong.',
        data: undefined,
      };
    }
  };

export default asyncWrapper;