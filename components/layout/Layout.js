import Head from "next/head";

import Header from "./Header";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>WooCommerce</title>
        {/* <link
          rel="stylesheet"
          href="https://bootswatch.com/5/lumen/bootstrap.min.css"
        /> */}
      </Head>
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
