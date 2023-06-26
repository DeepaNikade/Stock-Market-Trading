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
import { getAllExpiryMasterData } from "../../api/expiryMaster/expiryMaster.request";
import ExpiryMasterForm from "./expiryMasterForm";
import CustomIconButton from "../../components/Buttons/CustomIconButton";
import { Search } from "@mui/icons-material";
import { useIds } from "../IdsContext/IdsContext";

const ExpiryMasterRecords = () => {
  const { ids, setIds } = useIds();

  const [expiryMasterData, setExpiryMasterData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [redirectToExpiryMasterForm, setRedirectToExpiryMasterForm] =
    useState(false);
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    const fetchExpiryMasterData = async () => {
      try {
        const response = await getAllExpiryMasterData();
        setExpiryMasterData(response.data);
      } catch (error) {
        console.error("Failed to fetch expiry data:", error);
      }
    };
    fetchExpiryMasterData();
  }, []);

  const handleSearch = () => {
    if (searchQuery) {
      const filteredData = expiryMasterData.filter((data) =>
        data.expiryName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setExpiryMasterData(filteredData);
    } else {
      setExpiryMasterData(expiryMasterData);
    }
  };

  const handleClick = (expiry) => {
    console.log(expiry.id);
    const expiryMasterId = expiry.id;
    setIds((prev) => ({ ...prev, expiryMasterId }));
    setRedirectToExpiryMasterForm(true);
    setSelectedData(expiry);
  };

  const handleAddClick = () => {
    setRedirectToExpiryMasterForm(true);
  };

  if (redirectToExpiryMasterForm) {
    return <ExpiryMasterForm data={selectedData} />;
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
        ExpiryMaster Records
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
              handleAddClick();
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
            label="Enter a Expiry id"
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
            <TableCell style={{ fontWeight: "bold" }}>expiryDate</TableCell>
            
          </TableRow>
        </TableHead>

        <tbody>
          {expiryMasterData.map((data) => (
            <TableRow
              key={data.id}
              onClick={() => {
                handleClick(data);
              }}
              sx={{ cursor: "pointer" }}
            >
              <TableCell>{data.id}</TableCell>
              <TableCell>{data.expiryDate}</TableCell>
              
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Box>
  );
};

export default ExpiryMasterRecords;
