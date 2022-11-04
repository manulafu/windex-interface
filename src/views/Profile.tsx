import { Typography, useTheme } from '@mui/material'

const Profile = () => {
  const theme = useTheme()
  return (
    <Typography
      variant="h4"
      sx={{
        backgroundColor: theme.palette.primary.main,
        display: 'inline-block',
      }}
    >
      Profile
    </Typography>
  )
}

export default Profile
