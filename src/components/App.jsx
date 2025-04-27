import "./App.css";
import { TextField, Button, Box, MenuItem, Typography } from "@mui/material";

function App() {
  return (
    <main className="App">
      {/* Main Title */}
      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="center"
        mt={4}
        mb={1}
      >
        Lancez votre site avec ReadySite 🚀
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="h6"
        textAlign="center"
        color="textSecondary"
        mb={4}
        sx={{ maxWidth: "600px", margin: "0 auto" }}
      >
        Remplissez ce formulaire pour nous transmettre les informations
        essentielles. Nous créerons rapidement un site professionnel adapté à
        votre entreprise.
      </Typography>

      <Box
        component="form"
        action="https://formsubmit.co/armangulistani@gmail.com"
        method="POST"
        className="App__form"
        sx={{
          backgroundColor: "#fafafa",
          padding: 4,
          borderRadius: 3,
          boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
          display: "flex",
          flexDirection: "column",
          gap: 2.5,
          maxWidth: "600px",
          margin: "2rem auto",
        }}
      >
        {/* Section Title */}
        <Typography variant="h5" fontWeight="bold" mb={1}>
          Informations de base
        </Typography>
        <TextField
          name="businessName"
          label="Nom de l'entreprise"
          helperText="Sera utilisé comme nom du site"
          variant="outlined"
          required
          fullWidth
        />
        <TextField
          name="contactEmail"
          label="Courriel"
          helperText="Entrez le courriel où vous souhaitez recevoir vos messages clients"
          type="email"
          variant="outlined"
          required
          fullWidth
        />
        <TextField
          name="instagram"
          label="Compte Instagram"
          helperText="Nom d'utilisateur Instagram"
          required
          variant="outlined"
          fullWidth
        />
        <TextField
          name="facebook"
          label="Compte Facebook"
          helperText="Nom d'utilisateur Facebook"
          required
          variant="outlined"
          fullWidth
        />
        <TextField
          name="tiktok"
          label="Compte TikTok (optionnel)"
          helperText="Nom d'utilisateur TikTok"
          variant="outlined"
          fullWidth
        />
        {/* Section Title */}
        <Typography variant="h5" fontWeight="bold" mt={4} mb={1}>
          Atmosphère et couleurs
        </Typography>
        <TextField
          name="atmosphere"
          label="Atmosphère du site web"
          helperText="Cela influencera le style de votre site (police, contenu, images)"
          variant="outlined"
          select
          required
          fullWidth
        >
          <MenuItem value="Modern">Moderne</MenuItem>
          <MenuItem value="Professional">Professionnel</MenuItem>
          <MenuItem value="Creative">Créatif</MenuItem>
          <MenuItem value="Luxury">Luxueux</MenuItem>
          <MenuItem value="Minimalist">Minimaliste</MenuItem>
          <MenuItem value="Bold">Audacieux</MenuItem>
          <MenuItem value="Friendly">Amical</MenuItem>
        </TextField>
        <TextField
          name="mainColor"
          label="Couleur principale"
          helperText="Choisissez la couleur dominante de votre site"
          type="color"
          required
          fullWidth
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          name="colorTheme"
          label="Thème de couleur"
          helperText="Thème clair ou sombre"
          variant="outlined"
          select
          required
          fullWidth
        >
          <MenuItem value="Light">Clair</MenuItem>
          <MenuItem value="Dark">Sombre</MenuItem>
        </TextField>
        {/* Section Title */}
        <Typography variant="h5" fontWeight="bold" mt={4} mb={1}>
          Informations sur l'entreprise
        </Typography>
        <TextField
          name="yearsExperience"
          label="Années d'expérience"
          type="number"
          variant="outlined"
          required
          fullWidth
          slotProps={{
            input: {
              min: 0,
              onInput: (e) => {
                e.target.value = Math.max(0, parseInt(e.target.value) || 0);
              },
            },
          }}
        />
        <TextField
          name="clientsServed"
          label="Nombre approximatif de clients servis"
          type="number"
          variant="outlined"
          required
          fullWidth
        />
        <TextField
          name="projectsCompleted"
          label="Nombre de projets complétés (si applicable)"
          type="number"
          variant="outlined"
          fullWidth
        />
        {/* Section Title */}
        <Typography variant="h5" fontWeight="bold" mt={4} mb={1}>
          Services et prix d'abonnements
        </Typography>
        <TextField
          name="services"
          label="Services offerts"
          helperText="Séparez chaque service par une virgule"
          variant="outlined"
          multiline
          minRows={3}
          required
          fullWidth
        />
        <TextField
          name="tiers"
          label="Paliers de services et prix"
          helperText="Expliquez ce qui est inclus dans chaque palier et combien chaque palier coûte"
          variant="outlined"
          multiline
          minRows={4}
          required
          fullWidth
        />
        {/* Section Title */}
        <Typography variant="h5" fontWeight="bold" mt={4} mb={1}>
          Heures d'ouverture
        </Typography>
        <TextField
          name="weekdayHours"
          label="Heures d'ouverture en semaine"
          helperText="Ex: Lun–Ven, 9h–18h"
          variant="outlined"
          required
          fullWidth
        />
        <TextField
          name="weekendHours"
          label="Heures d'ouverture la fin de semaine"
          helperText="Ex: Sam–Dim, 10h–16h"
          variant="outlined"
          fullWidth
        />
        {/* Section Title */}
        <Typography variant="h5" fontWeight="bold" mt={4} mb={1}>
          Pages supplémentaires
        </Typography>
        <TextField
          name="extraPages"
          label="Pages supplémentaires (optionnel)"
          helperText="Voulez-vous ajouter d'autres pages que celles du modèle ?"
          variant="outlined"
          multiline
          minRows={2}
          fullWidth
        />

        {/* Prevents Formsubmit from showing a CAPTCHA popup before sending the message */}
        <input type="hidden" name="_captcha" value="false" />

        {/* After successful form submission, redirect the user back to this URL
        (instead of showing Formsubmit’s default thank-you page) */}
        <input
          type="hidden"
          name="_next"
          value="https://readysite.netlify.app/merci"
        />

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{
            mt: 3,
            bgcolor: "#1976d2",
            "&:hover": {
              bgcolor: "#1565c0",
            },
            fontWeight: "bold",
            paddingY: 1.5,
          }}
        >
          Envoyer les informations
        </Button>
      </Box>
    </main>
  );
}

export default App;
