import {
  AppBar,
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { ReactComponent as Logo } from "../../assets/logo-primary.svg";
import { MdSearch, MdShoppingCart, MdLogout } from "react-icons/md";
import { useAuth } from "../../providers/authContext";
// import { api } from "../../api/api";
import { ItemsList, ShoppingContainer } from "../../styles/Containers/styles";
//import { useState } from "react";

/*interface Product {
  id: number;
  productId: number;
  name: string;
  category: string;
  price: number;
  img?: string;
}

interface Cart {
  cart: Product;
}*/

export const Shopping = () => {
  const { /*accessToken, data,*/ signOut } = useAuth();
  //const [shoppingCart, setShoppingCart] = useState<Cart[]>([]);
  //const [refreshCart, setRefreshCart] = useState(false);

  /*const cart = useEffect(() => {
    api
      .get(`/carts/${data.user.id}/products`, {
        headers: {
          Authorization: `Bearer ${data.accessToken}`,
        },
      })
      .then((response: any) => {
        setShoppingCart(response);
      })
      .catch(() => {
        toast.error("Algo de errado não está certo!");
      });
  }, [refreshCart]);*/

  return (
    <Box>
      <AppBar sx={{ backgroundColor: "grey.100" }}>
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <Logo />
            <Box>
              <IconButton>
                <MdSearch />
              </IconButton>
              <IconButton>
                <Badge badgeContent={3} color="success" overlap="rectangular">
                  <MdShoppingCart />
                </Badge>
              </IconButton>
              <IconButton onClick={signOut}>
                <MdLogout />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <ShoppingContainer>
        <ItemsList>
          <Box component="ul" sx={{ padding: "0px" }}>
            <Card
              sx={{
                border: "2px solid #E0E0E0",
                "& :focus": { border: "2px solid #27AE60" },
                borderRadius: "5px",
              }}
            >
              <CardMedia
                sx={{
                  width: "300px",
                  height: "150px",
                  backgroundSize: "contain",
                }}
                image="http://www.kleberpatricio.com.br/wp-content/uploads/2019/01/cheddar_new.png"
              />
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  height: "196px",
                  padding: "3vh",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: "18px",
                    color: "#333333",
                    lineHeight: "24px",
                  }}
                >
                  Hamburger
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "grey.500",
                    lineHeight: "16px",
                  }}
                >
                  Categoria
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    lineHeight: "24px",
                    color: "#27AE60",
                    fontWeight: "600",
                  }}
                >
                  R$:12,00
                </Typography>

                <Button
                  variant="contained"
                  color="success"
                  sx={{ width: "40%" }}
                >
                  Adicionar
                </Button>
              </CardContent>
            </Card>
          </Box>
        </ItemsList>
      </ShoppingContainer>
    </Box>
  );
};
