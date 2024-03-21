import {Home, HomeUpdates} from '@/types/home.type';
import asyncWrapper from '@/utils/asyncWrapper';
import {supabase} from '..';
import {tables} from '../config';

export const getHome = asyncWrapper(async (id: string) => {
  const {data, error} = await supabase
    .from(tables.HOMES)
    .upsert({id, title: 'My Home'})
    .select('*')
    .single();

  if (error) throw new Error(error.message);

  return data as Home;
});

export const updateHome = asyncWrapper(
  async (id: string, updates: HomeUpdates) => {
    const {data, error} = await supabase
      .from(tables.HOMES)
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw new Error(error.message);

    return data as Home;
  },
);
