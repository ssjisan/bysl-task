import {
  Box,
  Card,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
  Checkbox,
  Button
} from "@mui/material";
import React from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
export default function RightPart() {
  return (
    <Box style={{ marginTop: "80px" }}>
      <Card style={{ padding: "5%", marginBottom:"80px"}}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <TextField label="First Name" size="small" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField label="Last Name" size="small" fullWidth />
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={2}>
            <TextField label="+62" size="small" disabled fullWidth />
          </Grid>
          <Grid item xs={10} sm={4} md={4} lg={4}>
            <TextField label="Phone Number" size="small" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Select
              //   value={age}
              //   label="Age"
              //   onChange={handleChange}
              size="small"
              fullWidth
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <OutlinedInput
              // value={values.weight}
              // onChange={handleChange('weight')}
              endAdornment={
                <InputAdornment position="end">@squareteam.com</InputAdornment>
              }
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <OutlinedInput
              placeholder="Password"
              //   value={values.password}
              //   onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    // onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {
                      // values.showPassword ?
                      //  <VisibilityOff /> :
                      <Visibility />
                    }
                  </IconButton>
                </InputAdornment>
              }
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <OutlinedInput
              placeholder="Confirm Password"
              //   value={values.password}
              //   onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    // onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {
                      // values.showPassword ?
                      //  <Visibility /> :
                      <VisibilityOff />
                    }
                  </IconButton>
                </InputAdornment>
              }
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}lg={12}>
            <Typography
              style={{
                fontSize: "14px",
                fontWeight: 400,
                marginBottom: "15px",
              }}
            >
              Tell us about yourself
            </Typography>
            <TextField
              id="filled-multiline-flexible"
              placeholder="Hello my name..."
              multiline
              rows={4}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}lg={12} style={{display:"flex",alignItems: "center"}}>
            <Checkbox defaultChecked />{" "}
            <Typography>
              Copy I agree to Square’s Cookie and Privacy Policy.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}lg={12} style={{display:"flex",justifyContent: "center"}}>
              <Button style={{width:"60%",backgroundColor:"#002855", borderRadius:"10px"}} variant="contained">Get Started</Button>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
