import React from "react";
import "./Scrollbar.css";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Accordion,
  AccordionHeader,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import emilly from "./assets/HealthCare Dashboard/Layer 8.png";
import ryan from "./assets/HealthCare Dashboard/Layer 1.png";
import brandon from "./assets/HealthCare Dashboard/Layer 3.png";
import jessica from "./assets/HealthCare Dashboard/Layer 2.png";
import samantha from "./assets/HealthCare Dashboard/Layer 6.png";
import ashley from "./assets/HealthCare Dashboard/Layer 12.png";
import olivia from "./assets/HealthCare Dashboard/Layer 10.png";
import tyler from "./assets/HealthCare Dashboard/Layer 9.png";
import kevin from "./assets/HealthCare Dashboard/Layer 4.png";
import dylan from "./assets/HealthCare Dashboard/Layer 5.png";
import nathan from "./assets/HealthCare Dashboard/Layer 7.png";
import mike from "./assets/HealthCare Dashboard/pexels-photo-1222271.png";

export default function MultiLevelSidebar() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="mb-5 max-h-[90%] w-full p-4  shadow-xl shadow-blue-gray-900/5 ">
      <div className="mb-2 p-4 flex items-center justify-between">
        <Typography variant="h5" color="blue-gray">
          Patients
        </Typography>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <List className="overflow-auto scrollbar">
        <Accordion>
          <ListItem className="p-0">
            <AccordionHeader className="border-b-0 p-3">
              <ListItemPrefix>
                <Avatar
                  variant="circular"
                  size="sm"
                  alt="tania andrew"
                  className="w-[44px] h-[44px]"
                  src={emilly}
                />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-bold text-blue-gray-900"
              >
                <div>Emmilly Williams</div>
                <div className="text-gray-600 font-normal">Female, 18</div>
              </Typography>
              <Typography
                color="blue-gray"
                className="mr-auto font-normal"
              ></Typography>
              <FontAwesomeIcon icon={faEllipsis} />
            </AccordionHeader>
          </ListItem>
        </Accordion>
        <Accordion>
          <ListItem className="p-0">
            <AccordionHeader className="border-b-0 p-3">
              <ListItemPrefix>
                <Avatar
                  variant="circular"
                  size="sm"
                  alt="tania andrew"
                  className="w-[44px] h-[44px]"
                  src={ryan}
                />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-bold text-blue-gray-900"
              >
                <div>Ryan Johnson</div>
                <div className="text-gray-600 font-normal">Male, 45</div>
              </Typography>
              <FontAwesomeIcon icon={faEllipsis} />
            </AccordionHeader>
          </ListItem>
        </Accordion>
        <Accordion>
          <ListItem className="p-0">
            <AccordionHeader className="border-b-0 p-3">
              <ListItemPrefix>
                <Avatar
                  variant="circular"
                  size="sm"
                  alt="tania andrew"
                  className="w-[44px] h-[44px]"
                  src={brandon}
                />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-bold text-blue-gray-900"
              >
                <div>Brandon Mitchell</div>
                <div className="text-gray-600 font-normal">Male, 31</div>
              </Typography>
              <FontAwesomeIcon icon={faEllipsis} />
            </AccordionHeader>
          </ListItem>
        </Accordion>
        <Accordion>
          <ListItem className="p-0 bg-[#D8FCF7] hover:bg-[#D8FCF7]">
            <AccordionHeader className="border-b-0 p-3">
              <ListItemPrefix>
                <Avatar
                  variant="circular"
                  size="sm"
                  alt="tania andrew"
                  className="w-[44px] h-[44px]"
                  src={jessica}
                />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-bold text-blue-gray-900"
              >
                <div className="">Jessica Taylor</div>
                <div className="text-gray-600 font-normal">Female, 28</div>
              </Typography>
              <FontAwesomeIcon icon={faEllipsis} />
            </AccordionHeader>
          </ListItem>
        </Accordion>
        <Accordion>
          <ListItem className="p-0">
            <AccordionHeader className="border-b-0 p-3">
              <ListItemPrefix>
                <Avatar
                  variant="circular"
                  size="sm"
                  alt="tania andrew"
                  className="w-[44px] h-[44px]"
                  src={samantha}
                />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-bold text-blue-gray-900"
              >
                <div>Samantha Johnson</div>
                <div className="text-gray-600 font-normal">Female, 56</div>
              </Typography>
              <FontAwesomeIcon icon={faEllipsis} />
            </AccordionHeader>
          </ListItem>
        </Accordion>
        <Accordion>
          <ListItem className="p-0">
            <AccordionHeader className="border-b-0 p-3">
              <ListItemPrefix>
                <Avatar
                  variant="circular"
                  size="sm"
                  alt="tania andrew"
                  className="w-[44px] h-[44px]"
                  src={ashley}
                />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-bold text-blue-gray-900"
              >
                <div>Ashley Martinez</div>
                <div className="text-gray-600 font-normal">Female, 54</div>
              </Typography>
              <FontAwesomeIcon icon={faEllipsis} />
            </AccordionHeader>
          </ListItem>
        </Accordion>
        <Accordion>
          <ListItem className="p-0">
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <Avatar
                  variant="circular"
                  size="sm"
                  alt="tania andrew"
                  className="w-[44px] h-[44px]"
                  src={olivia}
                />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-bold text-blue-gray-900"
              >
                <div>Olivia</div>
                <div className="text-gray-600 font-normal">Female, 32</div>
              </Typography>
              <FontAwesomeIcon icon={faEllipsis} />
            </AccordionHeader>
          </ListItem>
        </Accordion>
        <Accordion>
          <ListItem className="p-0">
            <AccordionHeader className="border-b-0 p-3">
              <ListItemPrefix>
                <Avatar
                  variant="circular"
                  size="sm"
                  alt="tania andrew"
                  className="w-[44px] h-[44px]"
                  src={tyler}
                />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-bold text-blue-gray-900"
              >
                <div>Tyler Davis</div>
                <div className="text-gray-600 font-normal">Male, 19</div>
              </Typography>
              <FontAwesomeIcon icon={faEllipsis} />
            </AccordionHeader>
          </ListItem>
        </Accordion>
        <Accordion>
          <ListItem className="p-0">
            <AccordionHeader className="border-b-0 p-3">
              <ListItemPrefix>
                <Avatar
                  variant="circular"
                  size="sm"
                  alt="tania andrew"
                  className="w-[44px] h-[44px]"
                  src={kevin}
                />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-bold text-blue-gray-900"
              >
                <div>Kevin Anderson</div>
                <div className="text-gray-600 font-normal">Male, 30</div>
              </Typography>
              <FontAwesomeIcon icon={faEllipsis} />
            </AccordionHeader>
          </ListItem>
        </Accordion>
        <Accordion>
          <ListItem className="p-0">
            <AccordionHeader className="border-b-0 p-3">
              <ListItemPrefix>
                <Avatar
                  variant="circular"
                  size="sm"
                  alt="tania andrew"
                  className="w-[44px] h-[44px]"
                  src={dylan}
                />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-bold text-blue-gray-900"
              >
                <div>Dylan Thomson</div>
                <div className="text-gray-600 font-normal">Male, 36</div>
              </Typography>
              <FontAwesomeIcon icon={faEllipsis} />
            </AccordionHeader>
          </ListItem>
        </Accordion>
        <Accordion>
          <ListItem className="p-0">
            <AccordionHeader className="border-b-0 p-3">
              <ListItemPrefix>
                <Avatar
                  variant="circular"
                  size="sm"
                  alt="tania andrew"
                  className="w-[44px] h-[44px]"
                  src={nathan}
                />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-bold text-blue-gray-900"
              >
                <div>Nathan Evans</div>
                <div className="text-gray-600 font-normal">Male, 58</div>
              </Typography>
              <FontAwesomeIcon icon={faEllipsis} />
            </AccordionHeader>
          </ListItem>
        </Accordion>
        <Accordion>
          <ListItem className="p-0">
            <AccordionHeader className="border-b-0 p-3">
              <ListItemPrefix>
                <Avatar
                  variant="circular"
                  size="sm"
                  alt="tania andrew"
                  className="w-[44px] h-[44px]"
                  src={mike}
                />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-bold text-blue-gray-900"
              >
                <div>Mike Nolan</div>
                <div className="text-gray-600 font-normal">Male, 31</div>
              </Typography>
              <FontAwesomeIcon icon={faEllipsis} />
            </AccordionHeader>
          </ListItem>
        </Accordion>

      </List>
    </Card>
  );
}
