import { Outlet } from "react-router-dom";
import NavbarAP from "../projects/animalpara/components/navbar/navbarAP";

export default function AnimalParaLayout() {
  return (
    <>
      <NavbarAP />
      <Outlet />
      132
    </>
  )
}
