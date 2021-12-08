import React from "react";

import { makeStyles, createStyles, ITheme } from "@chainsafe/common-theme";
import CustomDrawer from "../Components/Custom/CustomDrawer";
import { Button, Typography } from "@chainsafe/common-components";

const useStyles = makeStyles(({ constants }: ITheme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    buttons: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      "& *": {
        marginRight: constants.generalUnit,
        textDecoration: "none",
      },
    },
  })
);

interface IAboutDrawerProps {
  open: boolean;
  close: () => void;
}

const AboutDrawer: React.FC<IAboutDrawerProps> = ({
  open,
  close,
}: IAboutDrawerProps) => {
  const classes = useStyles();

  return (
    <CustomDrawer onClose={close} open={open} className={classes.root}>
      <Typography variant="h1" component="h4">
        
      </Typography>
      <Typography component="p" variant="h5">
        Liquidchain Bridge is a multi-directional blockchain bridge to allow
        data and value transfer between Liquidchain and other blockchains. <br /><br />
		
		When transferring token “A” from other blockchain to Liquidchain, a wrapped version of token “A” is minted on Liquidchain. Transferring the token back will burn the minted tokens on Liquidchain. <br /><br />
		
		Currently, Binance Smart Chain is supported in the bridge. <br /><br />
      </Typography>
      <section className={classes.buttons}>
        <Button onClick={() => close()} variant="outline">
          OK
        </Button>
        <a
          rel="noopener noreferrer"
          href="https://t.me/LiquidchainChat"
          target="_blank"
        >
          <Button variant="outline">
            Ask a question
          </Button>
        </a>
      </section>
    </CustomDrawer>
  );
};

export default AboutDrawer;
