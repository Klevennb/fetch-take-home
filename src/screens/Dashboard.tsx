import { Button } from '@mui/material'
import { useAuth } from 'hooks/useAuth'
import React from 'react'

const Dashboard: React.FC = () => {
  const { logout } = useAuth()

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Dashboard</h1>
      {/* Add your dashboard components here */}
      <Button variant="contained" color="primary" onClick={logout}>
        Logout
      </Button>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    height: '100vh'
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold'
  }
}

export default Dashboard
