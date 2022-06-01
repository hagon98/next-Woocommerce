import Head from "next/head";
import { Container } from "react-bootstrap";

import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>WooCommerce - React </title>
      </Head>

      <Container fluid className={classes.main}>
        {props.children}
      </Container>
    </>
  );
};

export default Layout;
