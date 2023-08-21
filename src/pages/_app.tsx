import { Provider } from "react-redux";
import store from "../store/store";
import "../styles/globals.css";

interface AppProps {
  Component: React.ElementType;
  pageProps: any; // You can replace 'any' with a more specific type if needed
}

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <div className="bg-bvnk_gray-100">
        <Component {...pageProps} />
      </div>
    </Provider>
  );
};

export default MyApp;
