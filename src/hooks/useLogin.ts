import { useMutation } from '@tanstack/react-query';
import { login } from 'api/auth';

export function useLogin() {
  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      return
    },
    onError: (error: any) => {
      console.error('Error submitting form:', error); // Show error if any
    },
  })
}
