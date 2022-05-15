import "../styles/globals.css";
import "@src/utilities/string";
import "@src/utilities/array";
import React, { useState } from "react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ApolloClientProps, initWithApollo } from "@src/utilities/apollo";
import { ApolloProvider } from "@apollo/client";
import Layout from "@src/components/common/layout";
import { BBRRPClientProvider } from "@modules/client";

function MyApp({ Component, pageProps, apollo }: AppProps & ApolloClientProps) {
  // 서버사이드 렌더링으로 인한 오류를 방지하기 위해 사용
  const [queryClient] = useState(() => new QueryClient());
  return (
    <ApolloProvider client={apollo}>
      <QueryClientProvider client={queryClient}>
        <BBRRPClientProvider>
          <Layout>
            <Component {...pageProps} />
            <ReactQueryDevtools />
          </Layout>
        </BBRRPClientProvider>
      </QueryClientProvider>
    </ApolloProvider>
  );
}

export default initWithApollo(MyApp);
