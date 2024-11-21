import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'; 
import PostsComponent from './PostsComponent'; 
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsComponent />  {/* Your PostsComponent will go here */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
