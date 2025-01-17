import { Box, Button, Container, Typography } from '@mui/material';
import { Home as HomeIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: '#dce3f1'
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            textAlign: 'center',
            py: 8,
            px: 2,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: '8rem',
              fontWeight: 'bold',
              color: 'primary.main',
              mb: 2
            }}
          >
            404
          </Typography>

          <Typography
            variant="h4"
            sx={{
              mb: 3,
              fontWeight: 'medium'
            }}
          >
            ¡Página no encontrada!
          </Typography>

            <img 
                src='gift.gif' 
                alt='error gif'
            />

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mb: 4
            }}
          >
            Lo sentimos, la página que estás buscando no existe o ha sido movida.
          </Typography>

          <Button
            variant="contained"
            size="large"
            startIcon={<HomeIcon />}
            onClick={handleGoHome}
            sx={{
              textTransform: 'none',
              px: 4,
              py: 1.5,
              borderRadius: 2
            }}
          >
            Volver al inicio
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default NotFound;