import {
    CreateButton,
    BooleanField,
    Datagrid,
    DateField,
    List,
    NumberField,
    ReferenceField,
    TextField,
    TopToolbar,
    ListButton,
    Create,
    SimpleForm,
    TextInput,
    DateInput,
    DeleteButton,
    EditButton,
    SelectArrayInput,
    BooleanInput,
    NumberInput,
    Button,
    Show,
    Edit,
    SimpleShowLayout,
  } from "react-admin";
  import { Divider, Box } from "@mui/material";
  
  export const ParkingList = () => (
    <List>
      <Datagrid
        rowClick="show"
        sx={{
          width: "104em",
          // boxShadow: 1,
          border: 0.5,
          borderColor: "#808080",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
        }}
      >
        <TextField source="Name" />
        <NumberField source="ParkingNumber" />
        <TextField source="Surname" />
        <NumberField source="ID_Number" />
        <BooleanField source="Availability" />
        <NumberField source="LengthOfUse" />
        <DeleteButton mutationMode="pessimistic" />
        <EditButton />
      </Datagrid>
    </List>
  );
  
  export default ParkingList;
  
  export const CreateParking = () => (
    <>
      <TopToolbar>
        <Button>Back</Button>
      </TopToolbar>
      <Create>
        <h1
          style={{
            alignItems: "center",
            paddingLeft: "75px",
          }}
        >
          Parking Form
        </h1>
        <SimpleForm
          sx={{
            minWidth: "20em",
            paddingLeft: "3em",
            paddingRight: "87em",
            m: 2,
            float: "center",
            position: "flex",
            textAlign: "center",
          }}
        >
          <NumberInput source="ParkingNumber" />
          <TextInput source="Name" />
          <TextInput source="Surname" />
          <NumberInput source="ID_Number" />
          <DateInput source="Parking End" />
        </SimpleForm>
      </Create>
    </>
  );
  
  export const ParkingShow = () => (
    <>
      <TopToolbar>
        <Button>Back</Button>
      </TopToolbar>
      <h1
        style={{
          textAlign: "center",
          paddingRight: "70px",
        }}
      >
        Parking Record
      </h1>
      <Show
        sx={{
          marginInlineStart: "22em",
          marginInlineEnd: "24.569em",
          position: "relative",
          fontSize: "25px",
          minWidth: "20em",
          textAlign: "center",
        }}
      >
        <SimpleShowLayout divider={<Divider flexitem />}>
          <TextField source="Name" />
          <TextField source="Surname" />
          <NumberField source="ID_Number" />
          <NumberField source="ParkingNumber"/>
          <NumberField source="LengthOfUse" />
          <BooleanField source="Availability" />
        </SimpleShowLayout>
      </Show>
      <Box></Box>
    </>
  );
  
  export const ParkingEdit = (props) => (
    <>
      <TopToolbar>
        <Button>Back</Button>
      </TopToolbar>
      <Edit>
        <h1
          style={{
            paddingLeft: "75px",
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
          <NumberInput source="ID_Number" />
          <NumberInput source="ParkingNumber"/>
          <NumberInput source="LengthOfUse" />
          <BooleanInput source="Availability" />
        </SimpleForm>
      </Edit>
    </>
  );
  