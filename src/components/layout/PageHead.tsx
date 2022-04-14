import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  headTitle?: string;
};

const PageHead: React.FunctionComponent<Props> = ({ headTitle }) => {
  return (
    <Head>
      <title>{headTitle ? headTitle : "Hello Akash World!"}</title>
    </Head>
  );
};
export default PageHead;
