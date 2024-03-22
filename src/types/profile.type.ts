export interface Profile {
  id: string;
  email: string;
  avatar: string | null;
  fullName: string;
}

export interface UseMembers {
  data: Profile[];
  isLoading: boolean;
  isError: boolean;
}
