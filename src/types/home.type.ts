import {UseDevices} from './device.type';
import {UserMembers} from './profile.type';
import {UseRooms} from './room.type';

export interface Home {
  id: string;
  title: string;
  members: string[];
  owner: string;
  createdAt: string;
}

export interface UseHome {
  data: Home | undefined;
  isLoading: boolean;
  isError: boolean;
}

export interface HomeContext {
  homeId: string | null;
  home: UseHome;
  members: UserMembers;
  devices: UseDevices;
  rooms: UseRooms;

  // actions

  updateHomeId: (id: string | null | undefined) => void;
}

export type HomeUpdates = Partial<Pick<Home, 'title'>>;
