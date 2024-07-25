import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import download from "./assets/download.svg";

import "./Scrollbar.css";

function BottomLeftBar() {
  return (
    <div>
      <Card className="h-full p-5">
        <Typography className="font-bold text-blue-gray-900 text-xl">
          Lab Results
        </Typography>
        <CardBody className="h-[200px]">
          <div className="overflow-auto h-full scrollbar p-3">
            <div className="flex justify-between items-center hover:bg-blue-gray-100 p-2 rounded-sm cursor-pointer">
              <div>
                <Typography className="font-medium text-blue-gray-900">
                  Blood Test
                </Typography>
              </div>
              <div>
                <img src={download} />
              </div>
            </div>

            <div className="flex justify-between items-center hover:bg-blue-gray-100 p-2 rounded-sm cursor-pointer">
              <div>
                <Typography className="font-medium text-blue-gray-900">
                  CT Scans
                </Typography>
              </div>
              <div>
                <img src={download} />
              </div>
            </div>

            <div className="flex justify-between items-center hover:bg-blue-gray-100 p-2 rounded-sm cursor-pointer ">
              <div>
                <Typography className="font-medium text-blue-gray-900">
                  Radiology Reports
                </Typography>
              </div>
              <div>
                <img src={download} />
              </div>
            </div>

            <div className="flex justify-between items-center hover:bg-blue-gray-100 p-2 rounded-sm cursor-pointer">
              <div>
                <Typography className="font-medium text-blue-gray-900">
                  X-rays
                </Typography>
              </div>
              <div>
                <img src={download} />
              </div>
            </div>
            <div className="flex justify-between items-center hover:bg-blue-gray-100 p-2 rounded-sm cursor-pointer">
              <div>
                <Typography className="font-medium text-blue-gray-900">
                  urine Test
                </Typography>
              </div>
              <div>
                <img src={download} />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default BottomLeftBar;
