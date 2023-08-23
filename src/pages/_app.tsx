import { Provider } from "react-redux";
import "../styles/globals.css";
import store from "@/store/store";

interface AppProps {
  Component: React.ElementType;
  pageProps: any;
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
