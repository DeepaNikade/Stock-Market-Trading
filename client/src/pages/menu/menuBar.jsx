import React, { useState, useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputLabel,
  Popover,
  MenuItem,
} from "@mui/material";
import { useColors } from "../../hooks/use-colors";
import { Link } from "react-router-dom";

const MenuBar = () => {
  const colors = useColors();
  const [menuState, setMenuState] = useState({
    master: { anchorEl: null, openPopover: false },
    transaction: { anchorEl: null, openPopover: false },
    outward: { anchorEl: null, openPopover: false },
    report: { anchorEl: null, openPopover: false },
    bonusSplit: { anchorEl: null, openPopover: false },
  });

  const handleMenuClick = (event, menu) => {
    setMenuState((prevState) => ({
      ...prevState,
      [menu]: { anchorEl: event.currentTarget, openPopover: true },
    }));
  };

  const handleMenuClose = (menu) => {
    setMenuState((prevState) => ({
      ...prevState,
      [menu]: { anchorEl: null, openPopover: false },
    }));
  };

  return (
    <AppBar position="fixed">
      <Toolbar
        sx={{
          bgcolor: colors.card,
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Typography
          variant="h6"
          sx={{ cursor: "pointer", color: "black" }}
          onClick={(event) => handleMenuClick(event, "master")}
        >
          Master
        </Typography>
        <Popover
          open={menuState.master.openPopover}
          anchorEl={menuState.master.anchorEl}
          onClose={() => handleMenuClose("master")}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              p: 2,
              bgcolor: "white",
            }}
          >
            <MenuItem>
              <Link to="/accountMasterForm" style={{textDecoration:"none"}}>
                <InputLabel sx={{ color: "black"}}>AccountMaster</InputLabel>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/groupMasterForm" style={{textDecoration:"none"}}>
                <InputLabel sx={{ color: "black" }}>GroupMaster</InputLabel>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/itemMasterForm" style={{textDecoration:"none"}}>
                <InputLabel sx={{ color: "black" }}>ItemMaster</InputLabel>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/stateMasterForm" style={{textDecoration:"none"}}>
                <InputLabel sx={{ color: "black" }}>StateMaster</InputLabel>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/gstRateMasterForm" style={{textDecoration:"none"}}>
                <InputLabel sx={{ color: "black" }}>GstRateMaster</InputLabel>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/expiryMasterForm" style={{textDecoration:"none"}}>
                <InputLabel sx={{ color: "black" }}>ExpiryMaster</InputLabel>
              </Link>
            </MenuItem>
          </Box>
        </Popover>

        <Typography
          variant="h6"
          sx={{ cursor: "pointer", color: "black" }}
          onClick={(event) => handleMenuClick(event, "inward")}
        >
       
          Transaction
        </Typography>
        <Popover
          open={menuState.transaction.openPopover}
          anchorEl={menuState.transaction.anchorEl}
          onClose={() => handleMenuClose("transaction")}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              p: 2,
              bgcolor: "white",
            }}
          >
            <MenuItem>
              <Link to="/transactionHeadDetail" style={{textDecoration:"none"}}>
                <InputLabel sx={{ color: "black" }}>TransactionHeadDetail</InputLabel>
              </Link>
            </MenuItem>
            
          </Box>
        </Popover>
          
        <Typography
          variant="h6"
          sx={{ cursor: "pointer", color: "black" }}
          onClick={(event) => handleMenuClick(event, "outward")}
        >
          Outward
        </Typography>
        <Popover
          open={menuState.outward.openPopover}
          anchorEl={menuState.outward.anchorEl}
          onClose={() => handleMenuClose("outward")}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              p: 2,
              bgcolor: "white",
            }}
          >
            <MenuItem>
              <Link to="/equityPurchaseSale" style={{textDecoration:"none"}}>
                <InputLabel sx={{ color: "black" }}>EquityPurchaseSale</InputLabel>
              </Link>
            </MenuItem>
            
          </Box>
        </Popover>

        <Typography
          variant="h6"
          sx={{ cursor: "pointer", color: "black" }}
          onClick={(event) => handleMenuClick(event, "report")}
        >
          Reports
        </Typography>
        <Popover
          open={menuState.report.openPopover}
          anchorEl={menuState.report.anchorEl}
          onClose={() => handleMenuClose("report")}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              p: 2,
              bgcolor: "white",
            }}
          >
            <MenuItem>
              <Link to="/equityPurchaseRegister" style={{textDecoration:"none"}}>
                <InputLabel sx={{ color: "black" }}>Equity Purchase Register</InputLabel>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/equitysaleRegister" style={{textDecoration:"none"}}>
                <InputLabel sx={{ color: "black" }}>Equity Sale Register</InputLabel>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/balanceStock" style={{textDecoration:"none"}}>
                <InputLabel sx={{ color: "black" }}>Balance Stock</InputLabel>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/balanceStockRegister" style={{textDecoration:"none"}}>
                <InputLabel sx={{ color: "black" }}>
                  Balance Stock Register
                </InputLabel>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/global" style={{textDecoration:"none"}}>
                <InputLabel sx={{ color: "black" }}>Global</InputLabel>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/longTermProfit" style={{textDecoration:"none"}}>
                <InputLabel sx={{ color: "black" }}>Long Term Profit</InputLabel>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/shortTermProfit" style={{textDecoration:"none"}}>
                <InputLabel sx={{ color: "black" }}>
                  Short Term Profit
                </InputLabel>
              </Link>
            </MenuItem>
            
          </Box>
        </Popover>

        <Typography
        variant="h6"
        sx={{ cursor: "pointer", color: "black" }}
        onClick={(event) => handleMenuClick(event, "utility")}
      >
        bonus/split
        </Typography>
        <Popover
          open={menuState.utility.openPopover}
          anchorEl={menuState.utility.anchorEl}
          onClose={() => handleMenuClose("utility")}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              p: 2,
              bgcolor: "white",
            }}
          >
            <MenuItem>
              <Link to="/backUpForm" style={{textDecoration:"none"}}>
                <InputLabel sx={{ color: "black" }}>BackUp Database</InputLabel>
              </Link>
            </MenuItem>
            </Box>
        </Popover>

        <Typography
          variant="h6"
          sx={{ cursor: "pointer", color: "black" }}
          onClick={(event) => handleMenuClick(event, "utility")}
        >
          Utility
        </Typography>
        <Popover
          open={menuState.utility.openPopover}
          anchorEl={menuState.utility.anchorEl}
          onClose={() => handleMenuClose("utility")}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              p: 2,
              bgcolor: "white",
            }}
          >
            <MenuItem>
              <Link to="/backUpForm" style={{textDecoration:"none"}}>
                <InputLabel sx={{ color: "black" }}>BackUp Database</InputLabel>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/invoiceUtilityForm" style={{textDecoration:"none"}}>
                <InputLabel sx={{ color: "black" }}>Invoice Utility</InputLabel>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/companyParameterForm" style={{textDecoration:"none"}}>
                <InputLabel sx={{ color: "black" }}>
                  Company Parameter
                </InputLabel>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/userManagementForm" style={{textDecoration:"none"}}>
                <InputLabel sx={{ color: "black" }}>User Management</InputLabel>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/gstParameterSettingForm" style={{textDecoration:"none"}}>
                <InputLabel sx={{ color: "black" }}>
                  GstParameterSetting
                </InputLabel>
              </Link>
            </MenuItem>
          </Box>
        </Popover>

        <Typography variant="h6" sx={{ cursor: "pointer", color: "black" }}>
          Logout
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default MenuBar;