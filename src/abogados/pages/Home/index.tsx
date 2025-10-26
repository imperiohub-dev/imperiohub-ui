import styles from "./index.module.scss";
import CallToActionHome from "../../components/utils/CallToActionHome";
import CallToActionList from "../../components/utils/CallToActionList";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <CallToActionHome />
      <CallToActionList />
      <Footer />
    </>
  );
}
