import { Stack } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "../Components/RequireAuth";
import Sidebar from "../Components/Sidebar";
import EditPage from "./EditPage";
import HomePage from "./HomePage";
import Login from "./Login";
import SignUp from "./SignUp";

const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <Stack direction={"row"} width="90%" margin={"auto"}>
              <Sidebar />
              <HomePage />
            </Stack>
          </RequireAuth>
        }
      />
      <Route
        path="/task/:id"
        element={
          <RequireAuth>
            <Stack direction={"row"}  width="90%" margin={"auto"}>
              <Sidebar />
              <EditPage />
            </Stack>
          </RequireAuth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default MainRoutes;
