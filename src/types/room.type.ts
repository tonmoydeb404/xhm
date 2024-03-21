export interface Room {
  id: string;
  title: string;
  homeId: string;
  createdAt: string;
}

export type RoomUpdate = Partial<Pick<Room, 'title'>>;
export type RoomCreate = Pick<Room, 'title' | 'homeId'>;

export interface UseRooms {
  data: Room[];
  isLoading: boolean;
  isError: boolean;
}
