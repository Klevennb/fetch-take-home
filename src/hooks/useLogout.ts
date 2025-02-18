import { useMutation } from '@tanstack/react-query';
import { logout } from 'api/auth';

export function useLogout() {
    
  return useMutation({
    mutationFn: logout,
    onError: (error: any) => {
      console.error('Error logging out', error);
    },
  })
}
