import { Fragment } from "react";
import {
  BooleanInput,
  BulkDeleteButton,
  BulkExportButton,
  Button,
  Create,
  CreateButton,
  DateInput,
  DeleteButton,
  EditButton,
  List,
  ListBase,
  ListToolbar,
  NumberField,
  Pagination,
  ReferenceInput,
  ReferenceManyField,
  Show,
  SimpleForm,
  SimpleList,
  SimpleShowLayout,
  TabbedShowLayout,
  TextInput,
  TopToolbar,
  Edit,
  BooleanField,
  NumberInput,
  TitlePortal,
} from "react-admin";
import { Divider, useMediaQuery, Box } from "@mui/material";
import {
  Datagrid,
  DateField,
  ReferenceField,
  TextField,
  EmailField,
} from "react-admin";
import App from "../App";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import AlarmOffIcon from "@mui/icons-material/AlarmOff";

export const StudentBulkActionButtons = () => (
  <Fragment>
    <BulkExportButton />
    <BulkDeleteButton />
  </Fragment>
);

export const StudentLists = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <>
      <List>
        {isSmall ? (
          <SimpleList
            primaryText={(record) => record.Name}
            secondaryText={(record) => record.Surname}
            tertiaryText={(record) => record.Email}
          />
        ) : (
          <Datagrid
            editMode="row"
            rowClick="show"
            bulkActionButtons={<StudentBulkActionButtons />}
            sx={{
              width: "fullscreen",
              //     boxShadow: 2,
              border: 0.5,
              borderColor: "#808080",
              //     "& .MuiDataGrid-cell:hover": {
              //       color: "primary.main",
              //     },
            }}
          >
            <TextField source="Name" />
            <TextField source="Surname" />
            <EmailField source="Email_address" />
            <NumberField source="StudentNumber" />
            <TextField source="Address" multiline rows={5} />
            <TextField source="Field_of_Study" />
            <DateField source="Start_of_studies" />
            <DateField source="End_of_Studies" />
            <DateField source="Start_of_Lease" />
            <DateField source="End_of_Lease" />
            <NumberField source="Phone_Number" />
            <TextField source="Parking_Required" />
            <NumberField source="No_of_Rooms" />
            <DeleteButton mutationMode="pessimistic" />
            <EditButton action={StudentEdit}>
              <SimpleForm>
                <TextInput source="Name" reference="StudentName" />
              </SimpleForm>
            </EditButton>
          </Datagrid>
        )}
      </List>
    </>
  );
};

export default StudentLists;

export const StudentCreate = (props) => (
  <Create {...props}>
    <h1
      style={{
        alignItems: "center",
        paddingLeft: "75px",
      }}
    >
      Create Application
    </h1>
    <SimpleForm
      sx={{
        minWidth: "20em",
        paddingLeft: "3em",
        paddingRight: "87em",
        m: 2,
        float: "center",
        position: "flex",
      }}
    >
      <div></div>
      <TextInput source="Name" sx={{ float: "left" }} />
      <TextInput source="Surname" />
      <TextInput source="Email_address" />
      <NumberInput source="Student_Number" />
      <TextInput source="Address" multiline rows={5} />
      <TextInput source="Field_of_Study" />
      <DateInput source="Start_of_Studies" />
      <DateInput source="End_of_Studies" />
      <DateInput source="Start_of_Lease" />
      <DateInput source="End_of_Lease" />
      <TextInput source="Phone_Number" />
      <BooleanInput
        source="Parking_Required"
        TrueIcon={AlarmOnIcon}
        FalseIcon={AlarmOffIcon}
      />
      <TextInput source="No_of_Rooms" />
    </SimpleForm>
  </Create>
);

export const StudentEdit = (props) => (
  <>
    {" "}
    <TopToolbar>
      <Button>Back</Button>
    </TopToolbar>
    <Edit {...props}>
      <h1
        style={{
          paddingLeft: "65px",
        }}
      >
        Edit Form
      </h1>
      <SimpleForm
        sx={{
          minWidth: "20em",
          paddingLeft: "3em",
          paddingRight: "87em",
          m: 2,
          float: "center",
          position: "flex",
        }}
      >
        <TextInput source="Name" />
        <TextInput source="Surname" />
        <TextInput source="Email_address" />
        <NumberInput source="Student_Number" />
        <TextInput source="Address" multiline rows={5} />
        <NumberInput source="Phone_Number" />
        <TextInput source="Field_of_Study" />
        <DateInput source="End_of_Studies" />
        <BooleanInput
          source="Parking_Required"
          TrueIcon={AlarmOnIcon}
          FalseIcon={AlarmOffIcon}
        />
      </SimpleForm>
    </Edit>
  </>
);

export const StudentShow = ({ ...props }) => (
  <>
    {" "}
    <TopToolbar>
      <Button>Back</Button>
    </TopToolbar>
    <h1
      style={{
        textAlign: "center",
        paddingRight: "70px",
      }}
    >
      Student Record
    </h1>
    <Show
      label="Student Records"
      divider={<Divider flexitem />}
      sx={{
        backgroundColor: "black",
        position: "relative",
        minWidth: "20em",
        marginInlineStart: "21.59em",
        marginInlineEnd: "24.3em",
        textAlign: "center",
        fontSize: "25px",
        paddingBottom: "em",
      }}
    >
      <SimpleShowLayout divider={<Divider flexitem />}>
        <TextField source="Name" />
        <TextField source="Surname" />
        <TextField source="Address" />
        <TextField source="Phone_Number" />
        <TextField source="Email_address" />
        <NumberField source="StudentNumber" />
        <TextField source="Field_of_Study" />
        <DateField source="End_of_Studies" />
        <DateField source="End_of_Lease" />
        <BooleanField source="Parking_Required" />
      </SimpleShowLayout>
    </Show>
  </>
);