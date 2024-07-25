import React from "react";
import { Card, Typography, Button, Avatar } from "@material-tailwind/react";
import logo from "./assets/TestLogo.svg";
import seniorWomanDoctor from "./assets/senior-woman-doctor.png";
import settings from "./assets/settings.svg";
import home from "./assets/home.svg";
import group from "./assets/group.svg";

import schedule from "./assets/schedule.svg";

import chat from "./assets/chat.svg";

import creditCard from "./assets/creditCard.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

export default function ComplexNavbar() {
  return (
    <div className="w-full flex justify-center">
      <Card className="p-2 rounded-full mt-5 mx-5 w-full">
        <div className="w-full flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
          >
            <img src={logo} alt="Icon" className="w-[210.58px] h-[48px]" />
          </Typography>
          <div className="flex items-center justify-center">
            <div className="flex gap-2 p-5 items-center justify-center hover:bg-[#01F0D0] rounded-full cursor-pointer h-[41px]">
              <img src={home} />
              <Typography>Overview</Typography>
            </div>

            <div className="flex gap-2 p-5 items-center justify-center focus:bg-[#01F0D0] hover:bg-[#01F0D0] rounded-full cursor-pointer h-[41px]">
              <img src={group} /> <Typography>Patients</Typography>
            </div>

            <div className="flex gap-2 p-5 items-center justify-center hover:bg-[#01F0D0] rounded-full cursor-pointer h-[41px]">
              <img src={schedule} /> <Typography>Schedule</Typography>
            </div>

            <div className="flex gap-2 p-5 items-center justify-center hover:bg-[#01F0D0] rounded-full cursor-pointer h-[41px]">
              <img src={chat} /> <Typography>Message</Typography>
            </div>

            <div className="flex gap-2 p-3 items-center hover:bg-[#01F0D0] rounded-full cursor-pointer">
              <img src={creditCard} /> <Typography>Transactions</Typography>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3 mr-5 w h-[44px]">
            <div>
              <Avatar
                variant="circular"
                size="sm"
                alt="tania andrew"
                className="w-[44px] h-[44px]"
                src={seniorWomanDoctor}
              />
            </div>
            <div className="border-r-2 px-2">
              <Typography>Dr. Jose Simmons</Typography>
              <Typography className="text-gray-500">
                General Practitioner
              </Typography>
            </div>
            <div>
              <Avatar
                variant="circular"
                size="sm"
                alt="tania andrew"
                className="w-[18.94px] h-[20px]"
                src={settings}
              />
            </div>
            <div>
              <FontAwesomeIcon
                size="sm"
                icon={faEllipsisVertical}
                className="h-[20px] mt-2"
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
