export interface Device {
  id: string;
  title: string;
  type: string;
  status: 'OFF' | 'ON';
  homeId: string;
  createdAt: string;
}

export interface UseDevices {
  data: Device[];
  isLoading: boolean;
  isError: boolean;
}

export type DeviceUpdates = Partial<Pick<Device, 'status' | 'title' | 'type'>>;
