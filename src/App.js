import { Dimensions } from "react-native";
import { Toaster } from "react-hot-toast";

import Desktop from "./screens/desktop";
import Mobile from "./screens/mobile";

const { width, height } = Dimensions.get("window");
const isDesktop = width > height;
const App = () => (
  <>
    {isDesktop ? <Desktop /> : <Mobile />}
    <Toaster />
  </>
);

export default App;