import { Container, Stack, Typography, Link } from '@mui/material'
 
export default function NotFound() {
  return (
    <Container maxWidth="sm">
      <Stack spacing={{ xs: 1, sm: 2 }} direction="column" useFlexGap flexWrap="wrap">
        <Typography align="center" variant="h3" component="h2">Not Found</Typography>
        <Typography align="center" variant="body1">Could not find requested resource</Typography>
        <Link align="center" underline="always" href="/">Return Home</Link>
      </Stack>
    </Container>
  )
}