import {Profile} from '@/types/profile.type';
import asyncWrapper from '@/utils/asyncWrapper';
import {supabase} from '..';
import {tables} from '../config';

export const getProfiles = asyncWrapper(async (idList: string[]) => {
  const {data, error} = await supabase
    .from(tables.PROFILES)
    .select('*')
    .in('id', idList);

  if (error) throw new Error(error.message);

  return data as Profile[];
});
