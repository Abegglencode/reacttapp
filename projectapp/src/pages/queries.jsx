import {
    Create,
    Datagrid,
    DateField,
    DeleteButton,
    EditButtonClasses,
    EditButton,
    List,
    ListButton,
    ReferenceField,
    ReferenceInput,
    SimpleForm,
    TextField,
    TextInput,
    NumberInput,
    NumberField,
    DateInput,
    TopToolbar,
    Button,
    Show,
    SimpleShowLayout,
    Resource,
    Edit,
  } from "react-admin";
  import { Divider, useMediaQuery } from "@mui/material";
  
  export const QueryList = () => {
    const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    return (
      <List>
        {isSmall ? (
          <SimpleList
            primaryText={(record) => record.StudentName}
            secondaryText={(record) => record.StudentNumber}
            tertiaryText={(record) => record.Contents}
          />
        ) : (
          <Datagrid
            rowClick="show"
            sx={{
              width: "104em",
              //     boxShadow: 2,
              border: 0.5,
              borderColor: "#808080",
              "& .MuiDataGrid-cell:hover": {
                color: "primary.main",
              },
            }}
          >
            <TextField source="StudentName" />
            <NumberField source="PhoneNumber" />
            <NumberField source="StudentNumber" />
            <TextField source="contents" />
            <TextField source="id" />
            <DateField source="updated" />
            <DeleteButton mutationMode="pessimistic" /> <EditButton />
            {/* //pessimisitc allows the app to ask for confirmation before deletion */}
          </Datagrid>
        )}
      </List>
    );
  };
  
  export const QueryCreate = () => (
    <>
      <TopToolbar>
        <Button>Back</Button>
      </TopToolbar>
      <Create>
        <h1>Query Form</h1>
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
          <TextInput source="StudentName" />
          <NumberInput source="PhoneNumber" />
          <NumberInput source="StudentNumber" />
          <TextInput
            sx={{ minWidth: "10em" }}
            source="contents"
            placeholder={"Explain problem"}
            multiline
            rows={10}
          />
        </SimpleForm>
      </Create>
    </>
  );
  
  export const QueryShow = () => (
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
        Query Records
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
        <SimpleShowLayout label="Query Record" divider={<Divider flexitem />}>
          <TextField source="StudentName" />
          <NumberField source="StudentNumber" />
          <NumberField source="PhoneNumber" />
          <TextField source="contents" />
        </SimpleShowLayout>
      </Show>
    </>
  );
  
  export const QueryEdit = (props) => (
      <><TopToolbar><Button>Back</Button></TopToolbar>
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
        <TextInput source="StudentName" />
        <NumberInput source="StudentNumber" />
        <NumberField source="PhoneNumber" />
        <TextInput source="contents" multiline rows={10} placeholder="Explain problem"/>
      </SimpleForm>
    </Edit>
    </>);
  