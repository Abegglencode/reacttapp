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
  
  export const ApartmentList = () => (
    <List>
      <Datagrid
        rowClick="show"
        sx={{
          width: "104em",
          border: 0.5,
          borderColor: "#808080",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
        }}
      >
        <NumberField source="StudentName" />
        <NumberField source="Student_ID" />
        <TextField source="ContactDetails" />
        <NumberField source="ApartmentNumber" />
        <NumberField source="Rooms" />
        <DateField source="From" />
        <DateField source="To" />
        <BooleanField source="Availability" />
        <DeleteButton mutationMode="pessimistic" />
        <EditButton />
      </Datagrid>
    </List>
  );
  
  export const ApartmentCreate = () => (
    <>
      <TopToolbar>
        <Button>Back</Button>
      </TopToolbar>
      <Create>
        <h1 style={{}}>Apartment Form</h1>
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
          <NumberInput source="StudentName" />
          <NumberInput source="Student_ID" />
          <TextInput source="ContactDetails" />
          <NumberInput source="ApartmentNumber" />
          <NumberInput source="Rooms" />
          <DateInput source="From" />
          <DateInput source="To" />
          <BooleanInput source="Availability" />
        </SimpleForm>
      </Create>
    </>
  );
  
  export const ApartmentShow = () => (
    <>
      <TopToolbar>
        <Button>Back</Button>
      </TopToolbar>
      <h1
        style={{
          marginInlineEnd: "10em",
          textAlign: "center",
          paddingLeft: "280px",
        }}
      >
        Apartment Record
      </h1>
      <Show
        sx={{
          backgroundColor: "black",
          position: "relative",
          minWidth: "20em",
          marginInlineStart: "14em",
          marginInlineEnd: "21.45em",
          textAlign: "center",
          fontSize: "30px",
          marginTop: "3em",
          rowGap: "50px",
        }}
      >
        <SimpleShowLayout divider={<Divider flexitem />}>
          <NumberField source="StudentName" />
          <NumberField source="Student_ID" />
          <TextField source="ContactDetails" />
          <NumberField source="ApartmentNumber" />
          <NumberField source="Rooms" />
          <DateField source="From" />
          <DateField source="To" />
          <BooleanField source="Availability" />
        </SimpleShowLayout>
      </Show>
    </>
  );
  
  export const ApartmentEdit = (props) => (
    <>
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
          <NumberInput source="StudentName" />
          <NumberInput source="Student_ID" />
          <TextInput source="ContactDetails" />
          <NumberInput source="ApartmentNumber" />
          <NumberInput source="Rooms" />
          <DateInput source="From" />
          <DateInput source="To" />
          <BooleanInput source="Availability" />
        </SimpleForm>
      </Edit>
    </>
  );
  