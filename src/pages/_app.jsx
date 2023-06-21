import "../../styles/globals.css";
import Navigation from "../components/navigation/navigation";
import Footer from "../components/footer";
import { wrapper } from "../redux/store";
import Session from "../components/client/userSession";

function MyApp({ Component, pageProps }) {
  return (
    <Session comp={Component}>
      <Navigation>
        <Component {...pageProps} />
      </Navigation>
      {/* footer */}
      <Footer />
    </Session>
  );
}

export default wrapper.withRedux(MyApp);
