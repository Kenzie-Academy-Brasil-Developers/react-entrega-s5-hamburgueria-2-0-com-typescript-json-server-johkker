import {
  AppBar,
  Autocomplete,
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  createFilterOptions,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { ReactComponent as Logo } from "../../assets/logo-primary.svg";
import { MdSearch, MdShoppingCart, MdLogout } from "react-icons/md";
import { useAuth } from "../../providers/authContext";
import { api } from "../../api/api";
import { ItemsList, ShoppingContainer } from "../../styles/styles";
import { useEffect, useState } from "react";

interface Product {
  id?: number;
  productId: number;
  name: string;
  category: string;
  price: number;
  img: string;
  amount: number;
}

export const Shopping = () => {
  const { accessToken, signOut } = useAuth();
  const token = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const [shoppingCart, setShoppingCart] = useState<Product[]>([]);
  const [shoppingShelf, setShoppingShelf] = useState<Product[]>([]);
  const [showSearch, setShowSearch] = useState(false);
  const [value, setValue] = useState<any>({});

  useEffect(() => {
    api.get<any>("/products", token).then((response: any) => {
      console.log(response);
      setShoppingShelf(response.data);
      setShoppingCart([]);
    });
  }, []);

  const addToCart = (element: Product) => {
    if (shoppingCart.includes(element)) {
      const newCart = shoppingCart.filter((product) => element !== product);
      element.amount++;
      setShoppingCart([...newCart, element]);
    } else {
      setShoppingCart([...shoppingCart, element]);
    }
  };

  const removeFromCart = (element: Product) => {
    if (element.amount !== 1) {
      const newCart = shoppingCart.filter((product) => element !== product);
      element.amount--;
      setShoppingCart([...newCart, element]);
    } else {
      const newCart = shoppingCart.filter((product) => element !== product);
      setShoppingCart([...newCart]);
    }
  };

  const filter = createFilterOptions<Product[]>();

  if (showSearch === false) {
    <AppBar sx={{ backgroundColor: "grey.100" }}>
      <Toolbar sx={{ padding: "0px" }}>
        <Autocomplete
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          id="free-solo-with-text-demo"
          options={shoppingShelf}
          getOptionLabel={(option) => {
            // Value selected with enter, right from the input
            if (typeof option === "string") {
              return option;
            }

            // Regular option
            return option.name;
          }}
          renderOption={(props, option) => <li {...props}>{option.name}</li>}
          sx={{ width: 300 }}
          freeSolo
          renderInput={(params) => (
            <TextField {...params} label="Pesquisar produtos" />
          )}
        />
      </Toolbar>
    </AppBar>;
  }

  return (
    <Box>
      <AppBar sx={{ backgroundColor: "grey.100" }}>
        <Toolbar sx={{ padding: "0px" }}>
          <Autocomplete
            value={value}
            onChange={(event, newValue: Product) => {
              console.log(newValue.name);
              setValue(newValue.name);
            }}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            id="free-solo-with-text-demo"
            options={shoppingShelf}
            getOptionLabel={(option) => {
              // Value selected with enter, right from the input
              if (typeof option === "string") {
                return option;
              }

              // Regular option
              return option.name;
            }}
            renderOption={(props, option) => <li {...props}>{option.name}</li>}
            sx={{ width: 300 }}
            freeSolo
            renderInput={(params) => (
              <TextField
                {...params}
                value=""
                onChange={(event) => {
                  console.log(event.target.value);
                  setValue(event.target.value);
                }}
                label="Pesquisar produtos"
              />
            )}
          />
        </Toolbar>
      </AppBar>
      ;
      <ShoppingContainer>
        <ItemsList>
          {shoppingShelf.map((element) => {
            return (
              <Box component="li">
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
                    image={element.img}
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
                      {element.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "grey.500",
                        lineHeight: "16px",
                      }}
                    >
                      {element.category}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        lineHeight: "24px",
                        color: "#27AE60",
                        fontWeight: "600",
                      }}
                    >
                      R${element.price.toFixed(2)}
                    </Typography>

                    <Button
                      variant="contained"
                      color="success"
                      sx={{ width: "40%" }}
                      onClick={() => addToCart(element)}
                    >
                      Adicionar
                    </Button>
                  </CardContent>
                </Card>
              </Box>
            );
          })}
        </ItemsList>
      </ShoppingContainer>
    </Box>
  );
};
