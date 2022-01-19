import { Box, Link } from "@mui/material";
import { useHistory } from "react-router-dom";

export const PageNotFound = () => {
  const history = useHistory();

  return (
    <Box>
      <Link onClick={() => history.push("/")}>Faça login primeiro!</Link>
    </Box>
  );
};
