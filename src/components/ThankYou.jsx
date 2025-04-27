import { Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

function ThankYou() {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "4rem 2rem",
        maxWidth: "700px",
        margin: "auto",
      }}
    >
      {/* Green Check Icon */}
      <CheckCircleOutlineIcon sx={{ fontSize: 80, color: "green", mb: 2 }} />

      <Typography variant="h3" fontWeight="bold" mb={2}>
        Merci pour votre confiance !
      </Typography>

      <Typography variant="h6" color="textSecondary" mb={4}>
        Votre demande a été envoyée. Nous allons vous contacter très bientôt
        pour créer votre site web.
      </Typography>

      <Button
        variant="contained"
        size="large"
        component={Link}
        to="/"
        sx={{
          bgcolor: "green",
          "&:hover": {
            bgcolor: "darkgreen",
          },
          fontWeight: "bold",
        }}
      >
        Retour à l'accueil
      </Button>
    </Box>
  );
}

export default ThankYou;
