import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
	const login = useSelector((state) => state);
	return login ? <Outlet /> : <Navigate to="/negado" />;
};
export default PrivateRoutes;
