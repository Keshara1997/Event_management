import { Provider } from "react-redux";

import store from "./store";
import AppRouter from "./routers/AppRouter";

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />

      <br />

      <a href="https://github.com/Keshara1997" >Keshara1997</a>

    </Provider>

  );
};
export default App;
