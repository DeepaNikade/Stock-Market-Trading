import { React, useState } from "react";
import { Grid, TextField, Button, Typography, Box } from "@mui/material";
import {
  ArrowBack,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";
import {
  useInsertIntoScriptMasterData,
  useUpdateIntoScriptMasterData,
  useDeleteIntoScriptMasterData,
} from "../../hooks/scriptMaster/scriptMaster.mutation";
import { useColors } from "../../hooks/use-colors";
import CustomIconButton from "../../components/customIconButton";
import ScriptMasterRecords from "./scriptMasterRecord";

const ScriptMasterForm = (data) => {
  const [scriptMasterData, setScriptMasterData] = useState({
    scriptName: "",
    scriptType: "",
    lotSize: "",
    faceValue: "",
    scriptId:"",
    isinNo:"",
    createdBy: null,
    modifiedBy: null,
  });

  const [scriptMasterId, setScriptMasterId] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const [redirectToScriptMasterRecords, setRedirectToScriptMasterRecords] =
    useState(false);

  const handleInputData = (e) => {
    setScriptMasterData({ ...scriptMasterData, [e.target.name]: e.target.value });
  };

  const handleScriptMasterRecordsData = () => {
    setScriptMasterData(data.data);
    setScriptMasterId(data.data.id);
  };

  const handleClick = () => {
    setRedirectToScriptMasterRecords(true);
  };

  const handleClear = () => {
    setScriptMasterId(null);
    setScriptMasterData({
        scriptName: "",
        scriptType: "",
        lotSize: "",
        faceValue: "",
        scriptId:"",
        isinNo:"",
        createdBy: null,
        modifiedBy: null,
    });
  };

  const insertScriptMasterMutation = useInsertIntoScriptMasterData();

  function handleInsertScriptMasterData() {
    insertScriptMasterMutation.mutate(scriptMasterData);
  }
  const updateScriptMasterMutation = useUpdateIntoScriptMasterData();

  function handleUpdateScriptMasterData() {
    updateScriptMasterMutation.mutate(scriptMasterData);
  }
  const deleteScriptMasterMutation = useDeleteIntoScriptMasterData();

  function handleDeleteScriptMasterData() {
    deleteScriptMasterMutation.mutate({ id: scriptMasterId });
    setScriptMasterId(null);
    setScriptMasterData({
      scriptName: "",
      scriptType: "",
      lotSize: "",
      faceValue: "",
      scriptId:"",
      isinNo:"",
      createdBy: null,
      modifiedBy: null,
    });
  }

  const [manageButton, setManageButton] = useState({
    create: false,
    save: true,
    delete: false,
    update: false,
    cancel: false,
    edit: false,
  });

  const colors = useColors();

  return (
    <>
      {redirectToScriptMasterRecords ? (
        <ScriptMasterRecords />
      ) : (
        <Box
          sx={{
            bgcolor: colors.bgColor,
            width: "100%",
            height: "100%",
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box
            sx={{
              bgcolor: colors.card,
              p: 3,
              borderRadius: 3,
              display: "flex",
            }}
          >
            <CustomIconButton
              color={colors.blue[500]}
              onClick={() => {
                handleClick();
              }}
              description={"Go Back To ScriptMaster Records"}
            >
              <ArrowBack />
            </CustomIconButton>

            <Typography
              sx={{
                textTransform: "uppercase",
                fontWeight: 500,
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
              variant="h5"
            >
              ScriptMaster Form
            </Typography>
          </Box>

          <Box
            sx={{
              bgcolor: colors.card,
              p: 2,
              borderRadius: 2,
              py: 4,
            }}
          >
            <Grid container spacing={3}>
              <Grid xs={12} sm={4} item>
                <TextField
                  placeholder="Enter Script Id"
                  label="Script Id"
                  disabled
                  variant="outlined"
                  value={scriptMasterId || ""}
                  fullWidth
                  required
                />
              </Grid>

              <Grid xs={12} sm={4} item>
                <TextField
                  placeholder="Enter Script Name"
                  label="Script Name"
                  disabled={isDisabled}
                  variant="outlined"
                  onChange={handleInputData}
                  name="scriptName"
                  value={scriptMasterData.scriptName}
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={4} item>
                <TextField
                  placeholder="Enter script Type"
                  label="script Type"
                  disabled={isDisabled}
                  variant="outlined"
                  onChange={handleInputData}
                  name="scriptType"
                  value={scriptMasterData.scriptType || ""}
                  fullWidth
                />
              </Grid>
              <Grid xs={12} sm={4} item>
                <TextField
                  placeholder="Enter lot Size"
                  label="lot Size"
                  disabled={isDisabled}
                  variant="outlined"
                  onChange={handleInputData}
                  name="lotSize"
                  value={scriptMasterData.lotSize || ""}
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={4} item>
                <TextField
                  placeholder="Enter Face Value"
                  label="Face Value"
                  disabled={isDisabled}
                  variant="outlined"
                  onChange={handleInputData}
                  name="faceValue"
                  value={scriptMasterData.faceValue || ""}
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={4} item>
                <TextField
                  placeholder="Enter Isin No"
                  label="Isin No"
                  disabled={isDisabled}
                  variant="outlined"
                  onChange={handleInputData}
                  name="isinNo"
                  value={scriptMasterData.isinNo || ""}
                  fullWidth
                  required
                />
              </Grid>
              {/* <Grid xs={12} sm={4} item>
                <TextField
                  placeholder="Enter createdBy"
                  label="CreatedBy"
                  for="createdBy"
                  disabled={isDisabled}
                  variant="outlined"
                  onChange={handleInputData}
                  name="createdBy"
                  value={companyData.createdBy || ""}
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={4} item>
                <TextField
                  placeholder="Enter modifiedBy"
                  label="ModifiedBy"
                  disabled={isDisabled}
                  variant="outlined"
                  onChange={handleInputData}
                  name="modifiedBy"
                  value={companyData.modifiedBy || ""}
                  fullWidth
                />
              </Grid> */}
            </Grid>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 2,
              bgcolor: colors.card,
              borderRadius: 2,
            }}
          >
            <Box display="flex" gap={2}>
              <Button
                disabled={manageButton.create}
                onClick={() => {
                  setIsDisabled(!isDisabled);
                  setManageButton({
                    create: true,
                    save: false,
                    edit: true,
                    update: true,
                    delete: true,
                    cancel: false,
                  });
                }}
                color="green"
                variant="contained"
              >
                Add
              </Button>
              <Button
                disabled={manageButton.save}
                onClick={() => {
                  handleInsertScriptMasterData();
                  setIsDisabled(!isDisabled);
                }}
                color="green"
                variant="contained"
              >
                Save
              </Button>

              <Button
                disabled={manageButton.edit}
                onClick={() => {
                  setIsDisabled(!isDisabled);
                  handleScriptMasterRecordsData();
                  setManageButton({
                    create: true,
                    save: true,
                    edit: true,
                    update: false,
                    delete: false,
                    cancel: false,
                    // editCompanyId: true,
                  });
                }}
                color="blue"
                variant="contained"
              >
                Edit
              </Button>

              <Button
                disabled={manageButton.update}
                onClick={() => {
                  handleUpdateScriptMasterData();
                }}
                color="violet"
                variant="contained"
              >
                Update
              </Button>

              <Button
                disabled={manageButton.delete}
                onClick={() => {
                  setIsDisabled(isDisabled);
                  handleDeleteScriptMasterData();
                }}
                color="red"
                variant="contained"
              >
                Delete
              </Button>

              <Button
                onClick={() => {
                  handleClear();
                  setManageButton({
                    create: false,
                    save: true,
                    delete: false,
                    update: false,
                    cancel: false,
                    edit: false,
                  });
                }}
                variant="contained"
              >
                Clear
              </Button>
            </Box>

            <Box display="flex" gap={2}>
              <CustomIconButton
                onClick={() => {}}
                description={"Go To First"}
                color={colors.blue[400]}
              >
                <KeyboardDoubleArrowLeft sx={{ fontSize: "28px" }} />
              </CustomIconButton>

              <CustomIconButton
                onClick={() => {}}
                description={"Go To Prev"}
                color={colors.blue[300]}
              >
                <KeyboardArrowLeft sx={{ fontSize: "28px" }} />
              </CustomIconButton>
              <CustomIconButton
                onClick={() => {}}
                description={"Go To Next"}
                color={colors.blue[300]}
              >
                <KeyboardArrowRight sx={{ fontSize: "28px" }} />
              </CustomIconButton>

              <CustomIconButton
                onClick={() => {}}
                description={"Go To Last"}
                color={colors.blue[400]}
              >
                <KeyboardDoubleArrowRight sx={{ fontSize: "28px" }} />
              </CustomIconButton>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default ScriptMasterForm;
