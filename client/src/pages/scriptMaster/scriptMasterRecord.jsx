import { React, useState, useEffect } from "react";
import {
  TableCell,
  TableRow,
  TableHead,
  Table,
  Button,
  Box,
  Typography,
  TextField,
} from "@mui/material";
import { getAllScriptMasterData } from "../../api/scriptMaster/scriptMaster.request";
import ScriptMasterForm from "../../pages/scriptMaster/ScriptMasterForm";
import CustomIconButton from "../../components/customIconButton";
import { Search } from "@mui/icons-material";

const ScriptMasterRecords = () => {
  const [scriptMasterData, setScriptMasterData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [redirectToScriptMasterForm, setRedirectToScriptMasterForm] =
    useState(false);
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    const fetchScriptMasterData = async () => {
      try {
        const response = await getAllScriptMasterData();
        setScriptMasterData(response.data);
      } catch (error) {
        console.error("Failed to fetch Script data:", error);
      }
    };
    fetchScriptMasterData();
  }, []);

  const handleSearch = () => {
    if (searchQuery) {
      const filteredData = scriptMasterData.filter((data) =>
        data.scriptName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setCompanyData(filteredData);
    } else {
      setCompanyData(scriptMasterData);
    }
  };

  const handleClick = (e) => {
    console.log(e);
    setRedirectToScriptMasterForm(true);
    setSelectedData(e);
    //console.log(setSelectedData(data));
  };

  if (redirectToScriptMasterForm) {
    return <ScriptMasterForm data={selectedData} />;
  }
  return (
    <Box
      sx={{
        maxWidth: "95%",
        maxHeight: "100%",
      }}
    >
      <Typography
        sx={{
          textTransform: "uppercase",
          fontWeight: 500,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 3,
        }}
        variant="h4"
      >
        ScriptMaster Records
      </Typography>
      <Box
        sx={{
          mt: 3,
          display: "flex",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Button
            sx={{ color: "black", bgcolor: "grey" }}
            onClick={() => {
              handleClick();
            }}
          >
            Add Data
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            gap: 1,
          }}
        >
          <TextField
            id="search-bar"
            className="text"
            label="Enter a Company name"
            variant="outlined"
            placeholder="Search..."
            value={searchQuery}
            size="small"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <CustomIconButton onClick={handleSearch}>
            <Search />
          </CustomIconButton>
        </Box>
      </Box>

      <Table
        stickyHeader
        aria-label="sticky table"
        style={{
          backgroundColor: "#f5f5f5",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }}>id</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>scriptName</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>scriptType</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>lotSize</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>faceValue</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>scriptId</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>isinNo</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>createdBy</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>modifiedBy</TableCell>
          </TableRow>
        </TableHead>

        <tbody>
          {scriptMasterData.map((data) => (
            <TableRow
              key={data.id}
              onClick={() => {
                handleClick(data);
              }}
              sx={{ cursor: "pointer" }}
            >
              <TableCell>{data.id}</TableCell>
              <TableCell>{data.scriptName}</TableCell>
              <TableCell>{data.scriptType}</TableCell>
              <TableCell>{data.lotSize}</TableCell>
              <TableCell>{data.facevalue}</TableCell>
              <TableCell>{data.scriptId}</TableCell>
              <TableCell>{data.isinNo}</TableCell>
              <TableCell>{data.createdBy}</TableCell>
              <TableCell>{data.modifiedBy}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>

      {/* {redirectToscriptForm && <scriptForm />} */}
    </Box>
  );
};

export default ScriptMasterRecords;
