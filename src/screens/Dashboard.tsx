import { Button } from '@mui/material'
import { useLogout } from 'hooks/useLogout'
import React from 'react'

const Dashboard: React.FC = () => {
  const mutate = useLogout()
  const handleLogout = () => {
    mutate.mutate()
  }
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Dashboard</h1>
      {/* Add your dashboard components here */}
      <Button variant="contained" color="primary" onClick={handleLogout}>
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
