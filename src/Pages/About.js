import React from "react";
import Layout from "./../Components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
          Nestled in the heart of Dhaka, The Spice Route stands as a testament to the rich culinary heritage of India. This renowned Indian restaurant has garnered a loyal following for its commitment to authenticity, offering a dining experience that transports patrons straight to the bustling streets and serene villages of India. The Spice Route is more than just a restaurant; it is a cultural journey that delights the senses and warms the heart. Among the standout offerings at The Spice Route are its signature dishes, each crafted with precision and care. The Butter Chicken, a perennial favorite, is a rich and creamy delight that perfectly balances tangy tomatoes with aromatic spices. The Rogan Josh, a tender lamb curry from Kashmir, is a symphony of flavors, where the heat of the spices is tempered by the sweetness of caramelized onions and yogurt.

          Vegetarian dishes are given equal prominence, reflecting India's deep-rooted vegetarian traditions. The Paneer Tikka, made with homemade cottage cheese marinated in a blend of spices and grilled to perfection, is a must-try. The restaurant's Dosa, a crispy South Indian crepe made from fermented rice and lentil batter, served with coconut chutney and sambar, is another highlight that showcases the versatility and depth of Indian vegetarian cuisine.
        </p>
        <br />
        <p>
          At The Spice Route, authenticity is paramount. The restaurant's menu boasts a diverse array of dishes that span the vast and varied landscape of Indian cuisine. From the robust flavors of North India to the aromatic and nuanced dishes of the South, every meal is a celebration of India's culinary diversity. The chefs, many of whom hail from different regions of India, bring with them traditional recipes and cooking techniques passed down through generations. This dedication ensures that each dish is as close to the original as possible, providing a genuine taste of India. Dining at The Spice Route is not just about the food; it is a holistic experience that engages all the senses. The restaurant's interior is designed to evoke the spirit of India, with vibrant colors, traditional artworks, and intricate wood carvings adorning the walls. The warm and inviting ambiance is complemented by the gentle strains of classical Indian music, creating an atmosphere that is both relaxing and invigorating.

          The aroma of freshly ground spices and slow-cooked curries fills the air, whetting the appetite and promising a feast to come. Each dish is presented with an artistic flair, showcasing the vibrant colors and varied textures that are the hallmarks of Indian cuisine. The attentive and knowledgeable staff further enhance the dining experience, offering recommendations and insights into the history and preparation of each dish.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
