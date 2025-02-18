import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useLogin } from 'hooks/useLogin';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const mutation = useLogin();
  const navigate = useNavigate();


  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !email) {
      setError('Both fields are required');
      return;
    }

    mutation.mutate({ name: username, email }, {
      onSuccess: (data) => {
        // Navigate to a new page upon successful mutation
        navigate('/todo');  // Redirect to the 'thank-you' page
      }
    });

    // Reset form fields on successful submit
    setUsername('');
    setEmail('');
    setError(null);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <Typography variant="h5" className="text-center mb-4">
          Login
        </Typography>
        {error && (
          <Typography variant="body2" className="text-red-500 text-center mb-4">
            {error}
          </Typography>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              margin="normal"
            />
          </div>
          <div>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
            />
          </div>
          <div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              className="mt-4"
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
