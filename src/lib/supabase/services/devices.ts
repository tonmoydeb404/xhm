import {Device, DeviceUpdates} from '@/types/device.type';
import asyncWrapper from '@/utils/asyncWrapper';
import {supabase} from '..';
import {tables} from '../config';

export const getDevices = asyncWrapper(async (homeId: string) => {
  const {data, error} = await supabase
    .from(tables.DEVICES)
    .select('*')
    .eq('homeId', homeId);

  if (error) throw new Error(error.message);

  return data as Device[];
});

export const updateDevice = asyncWrapper(
  async (id: string, updates: DeviceUpdates) => {
    const {data, error} = await supabase
      .from(tables.DEVICES)
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw new Error(error.message);

    return data as Device;
  },
);
