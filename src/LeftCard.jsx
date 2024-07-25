import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Avatar,
} from "@material-tailwind/react";

import jessica from "./assets/HealthCare Dashboard/Layer 2.png";
import BirthIcon from "./assets/Profile/BirthIcon.svg";
import FemaleIcon from "./assets/Profile/FemaleIcon.svg";
import InsuranceIcon from "./assets/Profile/InsuranceIcon.svg";
import PhoneIcon from "./assets/Profile/PhoneIcon.svg";
import BottomLeftBar from "./BottomLeftBar";

function LeftCard() {
  return (
    <div className="flex flex-col gap-5">
      <Card className="h-full">
        <CardBody>
          <div className="grid gap-5 items-center">
            <div className="text-center">
              <Avatar
                variant="circular"
                size="sm"
                alt="tania andrew"
                className="w-[200px] h-[200px]"
                src={jessica}
              />

              <Typography className="font-bold text-blue-gray-900 text-2xl mt-5 text-center">
                Jessica Taylor
              </Typography>
            </div>
            <div className="flex flex-col gap-5 justify-self-start">
              <div className="flex items-center gap-3">
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  <img src={BirthIcon} />
                </Typography>
                <Typography
                  color="blue-gray"
                  className="mr-auto font-bold text-blue-gray-900"
                >
                  <div className=" font-normal">Date of Birth</div>
                  <div>August 23, 1996</div>
                </Typography>
              </div>
              <div className="flex items-center gap-3">
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  <img src={FemaleIcon} />
                </Typography>
                <Typography
                  color="blue-gray"
                  className="mr-auto font-bold text-blue-gray-900"
                >
                  <div className=" font-normal">Gender</div>
                  <div>Female</div>
                </Typography>
              </div>
              <div className="flex items-center gap-3">
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  <img src={PhoneIcon} />
                </Typography>
                <Typography
                  color="blue-gray"
                  className="mr-auto font-bold text-blue-gray-900"
                >
                  <div className=" font-normal">Contact Info</div>
                  <div>(415) 555-1234</div>
                </Typography>
              </div>
              <div className="flex items-center gap-3">
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  <img src={PhoneIcon} />
                </Typography>
                <Typography
                  color="blue-gray"
                  className="mr-auto font-bold text-blue-gray-900"
                >
                  <div className=" font-normal">Emergency Contacts</div>
                  <div>(415) 555-5678</div>
                </Typography>
              </div>
              <div className="flex items-center gap-3">
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  <img src={InsuranceIcon} />
                </Typography>
                <Typography
                  color="blue-gray"
                  className="mr-auto font-bold text-blue-gray-900"
                >
                  <div className=" font-normal">Insurance Provider</div>
                  <div>Sunrise Health Assurance</div>
                </Typography>
              </div>
            </div>
            <div className="text-center">
              <Button className="bg-[#01F0D0] rounded-full text-blue-gray-900 normal-case text-base">
                Show All Information
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
      <BottomLeftBar />
    </div>
  );
}

export default LeftCard;
