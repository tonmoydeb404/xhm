export interface ServiceStates<T> {
  data: T;
  isError: boolean;
  isLoading: boolean;
  error: string | null;
}

export type ServiceAction<T = () => Promise<any>> = T;

export type ServiceReturn<ActionReturn, DataType> = [
  ServiceAction<ActionReturn>,
  ServiceStates<DataType>,
];
