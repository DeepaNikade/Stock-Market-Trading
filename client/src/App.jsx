import { useState } from 'react'
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserTheme from "./hoc/themeProvider.jsx";
import './App.css';

import {CompanyRoutes} from "./routes/companyRoutes";
import {ScriptMasterRoutes} from "./routes/scriptMasterRoutes";
import {StateMasterRoutes}  from "./routes/stateMasterRoutes";

const queryClient = new QueryClient();

function App() {
 
  return (
    <QueryClientProvider client={queryClient}>
    <UserTheme>
      <CssBaseline />
      <Container
        disableGutters={true}
        maxWidth={false}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <CompanyRoutes />
        <ScriptMasterRoutes/>
        <StateMasterRoutes/>
      </Container>
    </UserTheme>
  </QueryClientProvider>
  );
}

export default App
