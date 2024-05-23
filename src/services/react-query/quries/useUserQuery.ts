import { useQuery } from '@tanstack/react-query';
import { fetchUser } from '../apis/api';

export const useUserQuery = (userId: string) => {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
  });
};
