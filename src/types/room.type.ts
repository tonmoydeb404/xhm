import {Device} from './device.type';

export interface Room {
  id: string;
  title: string;
  homeId: string;
  createdAt: string;
  devices: Device['id'][];
}

export type RoomUpdate = Partial<Pick<Room, 'title' | 'devices'>>;
export type RoomCreate = Pick<Room, 'title' | 'homeId'> &
  Partial<Pick<Room, 'devices'>>;

export interface UseRooms {
  data: Room[];
  isLoading: boolean;
  isError: boolean;

  // actions
  insert: (room: Room) => void;
  update: (id: string, updates: Partial<Room>) => void;
}
