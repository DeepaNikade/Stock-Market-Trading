import { React, useState } from "react";
import { DatePicker } from '@mui/lab';




import {
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  MenuItem,
  InputLabel,
  FormControl,
  Select,
} from "@mui/material";
import {
  ArrowBack,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";
import {
  useInsertIntoExpiryMasterData,
  useUpdateIntoExpiryMasterData,
  useDeleteIntoExpiryMasterData,
} from "../../hooks/expiryMaster/expiryMaster.mutation";
import { useColors } from "../../hooks/use-colors";
import CustomIconButton from "../../components/Buttons/CustomIconButton";
import ExpiryMasterRecords from "./expiryMasterRecords";
import MenuBar from "../menu/menuBar";
import { useIds } from "../IdsContext/IdsContext";

const ExpiryMasterForm = ({ data }) => {
  const { ids } = useIds();
  const [expiryMasterData, setExpiryMasterData] = useState({
    id: "",
    expiryDate: "",
  });

  const [expiryMasterId, setexpiryMasterId] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const [redirectToExpiryMasterRecords, setRedirectToExpiryMasterRecords] =
    useState(false);

  const handleInputData = (e) => {
    setExpiryMasterData({
      ...expiryMasterData,
      [e.target.name]: e.target.value,
    });
  };

  const handleExpiryMasterRecordsData = () => {
    setExpiryMasterData(data);
    setexpiryMasterId(data.id);
  };

  const handleClick = () => {
    setRedirectToExpiryMasterRecords(true);
  };

  const handleClear = () => {
    setexpiryMasterId(null);
    setExpiryMasterData({
      id: "",
      expiryDate: "",
    });
  };

  const insertExpiryMasterMutation = useInsertIntoExpiryMasterData();

  function handleInsertExpiryMasterData() {
    insertExpiryMasterMutation.mutate({
      ...expiryMasterData,
    });
  }
  const updateExpiryMasterMutation = useUpdateIntoExpiryMasterData();

  function handleUpdateExpiryMasterData() {
    const updateExpiryMasterData = {
      id: expiryMasterData.id,
      expiryDate: expiryMasterData.expiryDate,
    };
    updateExpiryMasterMutation.mutate(updateExpiryMasterData);
  }
  const deleteExpiryMasterMutation = useDeleteIntoExpiryMasterData();

  function handleDeleteExpiryMasterData() {
    deleteExpiryMasterMutation.mutate({ id: expiryMasterId });
    setexpiryMasterId(null);
    setExpiryMasterData({
      id: "",
      expiryDate: "",
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
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log("date",date);
  };
  return (
    <>
      {redirectToExpiryMasterRecords ? (
        <ExpiryMasterRecords />
      ) : (
        <>
          <MenuBar />
          <Box
            sx={{
              bgcolor: colors.bgColor,
              width: "100%",
              height: "100%",
              p: 2,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: 18,
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
                description={"Go Back To ExpiryMaster Records"}
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
                ExpiryMaster Form
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
                    placeholder="Enter Expiry Id"
                    label="Expiry Id"
                    disabled
                    variant="outlined"
                    value={expiryMasterId ?? ""}
                    //  InputLabelProps={{ shrink: length > 0 ? true : false }}
                    fullWidth
                    required
                  />
                </Grid>

                <Grid xs={12} sm={4} item>
                  <DatePicker
                    label="Select Date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  <TextField
                    placeholder="Enter Expiry Date"
                    label="Expiry Date"
                    disabled={isDisabled}
                    variant="outlined"
                    onChange={handleInputData}
                    name="expiryDate"
                    value={expiryMasterData.expiryDate}
                    fullWidth
                    required
                  />
                </Grid>
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
                    handleInsertExpiryMasterData();
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
                    handleExpiryMasterRecordsData();
                    setManageButton({
                      create: true,
                      save: true,
                      edit: true,
                      update: false,
                      delete: false,
                      cancel: false,
                      editCompanyId: true,
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
                    handleUpdateExpiryMasterData();
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
                    handleDeleteExpiryMasterData();
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
        </>
      )}
    </>
  );
};

export default ExpiryMasterForm;
