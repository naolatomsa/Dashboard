import { Card, CardBody, Typography } from "@material-tailwind/react";
import Table from "./Table";
import HeartBPM from "./assets/bottomThreeCard/HeartBPM.svg";
import respiratoryRate from "./assets/bottomThreeCard/respiratory rate.svg";
import temperature from "./assets/bottomThreeCard/temperature.svg";
import BloodPressureChart from "./BloodPressureChart";
import ArrowDown from "./assets/smallIcons/ArrowDown.svg";
export default function SimpleCard() {
  return (
    <div className="flex justify-center flex-col gap-5 w-full">
      <Card className="w-full">
        <CardBody className="grid items-center gap-5">
          <Typography className="font-bold text-blue-gray-900 text-xl">
            Diagnosis History
          </Typography>
          <Card className="w-full bg-[#F4F0FE]">
            <CardBody className="flex  tems-center">
              <div className=" w-full">
                <BloodPressureChart />
              </div>
            </CardBody>
          </Card>
          <div className="flex gap-5 justify-center w-full h-full">
            <Card className="bg-[#E0F3FA] w-full">
              <CardBody>
                <div className="grid gap-3">
                  <div>
                    <img src={respiratoryRate} />
                  </div>
                  <div>
                    <Typography className="font-bold text-blue-gray-900">
                      Respiratory Rate
                    </Typography>
                    <Typography className="font-bold text-black text-3xl">
                      20bpm
                    </Typography>
                  </div>
                  <div>
                    <Typography className=" text-blue-gray-900">
                      Normal
                    </Typography>
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card className="bg-[#FFE6E9] w-full">
              <CardBody>
                <div className="grid gap-3">
                  <div>
                    <img src={temperature} />
                  </div>
                  <div>
                    <Typography className="font-bold text-blue-gray-900">
                      Temprature{" "}
                    </Typography>
                    <Typography className="font-bold text-black text-3xl">
                      98.6&deg;F{" "}
                    </Typography>
                  </div>
                  <div>
                    <Typography className=" text-blue-gray-900">
                      Normal
                    </Typography>
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card className="bg-[#FFE6F1] w-full">
              <CardBody className="">
                <div className="grid gap-3">
                  <div>
                    <img src={HeartBPM} />
                  </div>
                  <div>
                    <Typography className="font-bold text-blue-gray-900">
                      Heart Rate
                    </Typography>
                    <Typography className="font-bold text-black text-3xl">
                      78bpm
                    </Typography>
                  </div>
                  <div>
                    <div className="flex gap-2 items-center">
                      <img src={ArrowDown} />
                      <Typography className=" text-blue-gray-900">Lower than Average</Typography>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </CardBody>
      </Card>
      <Card className=" ">
        <CardBody>
          <Typography className="font-bold text-blue-gray-900 text-xl mb-5">
            Diagnostic List
          </Typography>
          <Table />
        </CardBody>
      </Card>
    </div>
  );
}
