import Button from "../Button";
import { useHistory } from "react-router";
import { useAuthContext } from "../../Providers/Auth";
const Dashboard = () => {
  const { Logout } = useAuthContext();

  return (
    <>
      <Button onClick={Logout}>Log Out</Button>
    </>
  );
};

export default Dashboard;
