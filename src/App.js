import React from "react";
import Form from "./components/form/Form";
import { AuthProvider } from "./components/context/Auth";

import { QueryClient, QueryClientProvider } from "react-query";
import FetchingQuery from "./components/query/FetchingQuery";
import HookForm from "./components/hook-form/HookForm";
import Counter from "./components/counter/Counter";
import LoginUser from "./components/login/LoginUser";

import { Provider } from "react-redux";
import { store } from "./components/redux/store";
import GetData from "./components/getData-redux/GetData";

const App = () => {

  const client = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false }
    }
  });

  return (
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <AuthProvider>
          {/* <Form /> */}
          {/* <FetchingQuery /> */}
          {/* <HookForm /> */}
          {/* <Counter /> */}
          {/* <LoginUser /> */}
          {/* <GetData /> */}
        </AuthProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
