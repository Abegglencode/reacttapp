import "./App.css";
import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
  Layout,
  ListButton,
} from "react-admin";
import { PocketBaseProvider } from "./auth.jsx";
import {
  StudentLists,
  StudentCreate,
  StudentEdit,
  StudentShow,
} from "./pages/studentlist";
import {
  CreateParking,
  ParkingEdit,
  ParkingList,
  ParkingShow,
} from "./pages/parkinglist.jsx";
import myTheme from "./style.jsx";
import {
  QueryCreate,
  QueryEdit,
  QueryList,
  QueryShow,
} from "./pages/queries.jsx";
import {
  ApartmentEdit,
  ApartmentList,
  ApartmentShow,
  ApartmentCreate,
} from "./pages/apartmentlist.jsx";
import PeopleIcon from "@mui/icons-material/People";
import DirectionsCarIcon from "@mui/icons-material/Directionscar";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import CreateIcon from "@mui/icons-material/Create";

export const MyLayout = (props) => <Layout {...props} appBar={MyAppBar} />;
export const CommentListButton = () => <ListButton label="comments" />;
const pbProvider = new PocketBaseProvider("http://127.0.0.1:8090");
export const App = () => (
  <Admin
    layout={MyLayout}
    theme={myTheme}
    dataProvider={pbProvider.dataProvider}
    authProvider={pbProvider.authProvider}
  >
    <Resource
      name="Student_Applications"
      list={StudentLists}
      create={StudentCreate}
      show={StudentShow}
      icon={PeopleIcon}
      recordRepresentation="Name"
      edit={StudentEdit}
    />
    <Resource
      name="Queries"
      list={QueryList}
      create={QueryCreate}
      show={QueryShow}
      icon={CreateIcon}
      recordRepresentation="Student number"
      edit={QueryEdit}
    />

    <Resource
      name="Parking"
      list={ParkingList}
      create={CreateParking}
      show={ParkingShow}
      icon={DirectionsCarIcon}
      recordRepresentation={"Name"}
      edit={ParkingEdit}
    />

    <Resource
      name="Apartments"
      list={ApartmentList}
      create={CreateApartment}
      show={ApartmentShow}
      icon={SingleBedIcon}
      edit={ApartmentEdit}
    />
  </Admin>
);

export default App;
