import ThankYou from "./components/ThankYou.jsx";
import App from "./components/App.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/merci",
    element: <ThankYou />,
  },
];

export default routes;
