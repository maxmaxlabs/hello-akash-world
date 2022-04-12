import Layout from "../components/layout/Layout";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { ReactNode } from "react";
import { makeStyles } from "tss-react/mui";
import YoutubeIcon from "@mui/icons-material/Youtube";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import { DiscordIcon } from "@src/components/shared/icons";
import PageContainer from "@src/components/shared/PageContainer";
import ColorModeSwitch from "@src/components/layout/ColorModeSwitch";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";

type Props = {
  children?: ReactNode;
};

const useStyles = makeStyles()(theme => ({
  title: {
    fontSize: "4rem",
    fontWeight: "bold"
  },
  subTitle: {
    fontSize: "2rem",
    fontWeight: "lighter",
    marginBottom: "2rem"
  },
  socials: {
    paddingTop: "2rem",
    maxWidth: "500px",
    margin: "0 auto"
  },
  socialLink: {
    padding: "1rem",
    transition: ".3s all ease",
    "& path": {
      fill: theme.palette.mode === "dark" ? "#fff" : theme.palette.primary.main,
      transition: ".3s all ease"
    },
    "&:hover": {
      color: theme.palette.grey[500],
      "& path": {
        fill: theme.palette.grey[500]
      }
    }
  },
  socialIcon: {
    height: "3rem",
    width: "3rem",
    fontSize: "3rem",
    display: "block",
    margin: "0 auto"
  }
}));

const IndexPage: React.FunctionComponent<Props> = () => {
  const { classes } = useStyles();
  const theme = useTheme();

  return (
    <Layout title="Hello Akash World!">
      <PageContainer>
        <Box mb={4} sx={{ textAlign: "center" }}>
          <Typography variant="h1" className={classes.title}>
            Hello from Akash!
          </Typography>
          <Typography variant="h1" className={classes.subTitle}>
            Welcole to Akashlytics Deploy
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            This is a{" "}
            <a href="https://nextjs.org/" target="_blank">
              NextJS
            </a>{" "}
            app running inside a{" "}
            <a href="https://www.docker.com/" target="_blank">
              Docker container
            </a>{" "}
            on the{" "}
            <a href="https://akash.network" target="_blank">
              Akash Network.
            </a>
          </Typography>

          <Typography variant="body2">
            You can find all the documentation to deploy on akash{" "}
            <a href="https://docs.akash.network/" target="_blank">
              here!
            </a>
          </Typography>

          <Typography variant="caption">
            <a href="https://akashlytics.com" target="_blank">
              www.akashlytics.com
            </a>
          </Typography>

          <Grid container spacing={1} className={classes.socials}>
            <Grid item xs={6} sm={3}>
              <a href="https://discord.gg/rXDFNYnFwv" target="_blank" className={classes.socialLink}>
                <DiscordIcon className={classes.socialIcon} />
              </a>
            </Grid>
            <Grid item xs={6} sm={3}>
              <a href="https://www.youtube.com/channel/UC1rgl1y8mtcQoa9R_RWO0UA?sub_confirmation=1" target="_blank" className={classes.socialLink}>
                <YoutubeIcon className={classes.socialIcon} />
              </a>
            </Grid>
            <Grid item xs={6} sm={3}>
              <a href="https://twitter.com/akashlytics" target="_blank" className={classes.socialLink}>
                <TwitterIcon className={classes.socialIcon} />
              </a>
            </Grid>
            <Grid item xs={6} sm={3}>
              <a href="https://github.com/Akashlytics/akashlytics-deploy" target="_blank" className={classes.socialLink}>
                <GitHubIcon className={classes.socialIcon} />
              </a>
            </Grid>
          </Grid>

          <Box sx={{ pt: 5 }}>
            <ColorModeSwitch />
          </Box>

          <Box sx={{ height: "85px", position: "relative", width: "100%", pt: 5 }}>
            <a href="https://akash.network" target="_blank">
              <Image
                alt="Akash Network Logo"
                src={theme.palette.mode === "dark" ? "/images/akash-logo-white.svg" : "/images/akash-logo-black.svg"}
                quality={100}
                layout="fixed"
                priority
                width="280px"
                height="100px"
              />
            </a>
          </Box>
        </Box>
      </PageContainer>
    </Layout>
  );
};

export default IndexPage;

