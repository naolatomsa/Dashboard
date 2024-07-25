import React from "react";
import { Button } from "@material-tailwind/react";
import { Card } from "@material-tailwind/react";
import ComplexNavbar from "./NavBar";
import MultiLevelSidebar from "./SideBar";
import SimpleCard from "./Card";
import "./App.css";
import LeftCard from "./LeftCard";
import BottomLeftBar from "./BottomLeftBar";

function App() {
  return (
    <div className="grid gap-3 w-full items-center">
      <div className="w-full">
        <ComplexNavbar />
      </div>
      <div className="w-full">
        <div className="flex justify-center gap-3 mx-5">
          <div className="w-1/4">
            <MultiLevelSidebar />
          </div>
          <div className="w-1/2">
            <SimpleCard />
          </div>
          <div className="w-1/4 ">
            <LeftCard />
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
