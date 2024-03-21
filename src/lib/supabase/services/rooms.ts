import {Room, RoomCreate, RoomUpdate} from '@/types/room.type';
import asyncWrapper from '@/utils/asyncWrapper';
import {supabase} from '..';
import {tables} from '../config';

export const getRooms = asyncWrapper(async (homeId: string) => {
  const {data, error} = await supabase
    .from(tables.ROOMS)
    .select('*')
    .eq('homeId', homeId);

  if (error) throw new Error(error.message);

  return data as Room[];
});

export const updateRoom = asyncWrapper(
  async (id: string, updates: RoomUpdate) => {
    const {data, error} = await supabase
      .from(tables.ROOMS)
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw new Error(error.message);

    return data as Room;
  },
);

export const CreateRoom = asyncWrapper(async (createData: RoomCreate) => {
  const {data, error} = await supabase
    .from(tables.ROOMS)
    .insert(createData)
    .select()
    .single();

  if (error) throw new Error(error.message);

  return data as Room;
});
