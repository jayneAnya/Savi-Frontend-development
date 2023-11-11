import chakraTheme from "@chakra-ui/theme";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./App.scss";
import { SaviRoutes } from "./navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
  

const client = new QueryClient();


function App() {
  const theme = extendTheme({
    fonts: {
      heading: "Inter",
      body: "Inter",
    },
    components: {
      Progress: {
        baseStyle: {
          track: {
            bg: "#f2f4f7",
          },
          filledTrack: {
            bg: "#b5179e",
          },
        },
      }
    }
  });
  return (
    
    <QueryClientProvider client={client}>
      <ChakraProvider theme={theme}>
        <SaviRoutes />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
