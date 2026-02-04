
import { Box, Grid, Button } from "@chakra-ui/react";

// Custom components
import Cards from "views/admin/team/components/Cards";
import General from "views/admin/profile/components/General";
import Notifications from "views/admin/profile/components/Notifications";
import Projects from "views/admin/profile/components/Projects";
import Storage from "views/admin/profile/components/Storage";
import Upload from "views/admin/profile/components/Upload";

// Assets
import banner from "assets/img/auth/banner.png";
import avatar from "assets/img/avatars/avatar11.jpeg";
import avatar2 from "assets/img/avatars/abvatar12.jpeg";
import avatar3 from "assets/img/avatars/avatar1.png";
import React from "react";

export default function Overview() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }} px='1rem'>
      {/* Main Fields */}
      <Grid
        templateColumns={{
          base: "1fr",
          lg: "1fr 1fr 1fr 1fr",
        }}
        templateRows={{
          base: "repeat(3, 1fr)",
          lg: "1fr",
        }}
        gap={{ base: "40px", xl: "2rem" }}>
       <Cards
  banner={banner}
  avatar={avatar}
  name="Jitesh Sharma"
  job="Backend Developer"
  phone="+91 98765 43210"
  email="sumit@networsys.com"
  techIcons={["php", "laravel"]}
/>

<Cards
  banner={banner}
  avatar={avatar2}
  name="Pramod Sharma"
  job="Ui Designer"
  phone="+91 99999 88888"
  email="pramod@networsys.com"
  techIcons={["figma"]}
/>

<Cards
  banner={banner}
  avatar={avatar}
  name="Rohit Chandra"
  job="Intern"
  phone="+91 77777 66666"
  email="rohit@networsys.com"
  techIcons={["php", "laravel", "html"]}
/>
<Cards
  banner={banner}
  avatar={avatar3}
  name="Yogita Tripathi"
  job="Wordpress Developer"
  phone="+91 77777 66666"
  email="yogita@networsys.com"
  techIcons={["wordpress", "html", "css"]}
/>
<Cards
  banner={banner}
  avatar={avatar2}
  name="Sumit Pal"
  job="Frontend Developer"
  phone="+91 77777 66666"
  email="sumit@networsys.com"
  techIcons={["php", "react", "js"]}
/>

      </Grid>
      
    </Box>
  );
}
