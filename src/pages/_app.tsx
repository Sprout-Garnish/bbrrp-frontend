import "../styles/globals.css";
import React, { useState } from "react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ApolloClientProps, initWithApollo } from "@src/utilities/apollo";
import { ApolloProvider } from "@apollo/client";

function MyApp({ Component, pageProps, apollo }: AppProps & ApolloClientProps) {
  // 서버사이드 렌더링으로 인한 오류를 방지하기 위해 사용
  const [queryClient] = useState(() => new QueryClient());
  return (
    <ApolloProvider client={apollo}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ApolloProvider>
  );
}

export default initWithApollo(MyApp);
