import {useState} from "react";

import {
  Select,
  TextField,
  Paper,
  FormControl,
  MenuItem,
  InputLabel,

  OutlinedInput,

  Box,
  Typography,

} from "@mui/material";

import "../App.css";
import { InputState } from "./variables";

import { Output } from "./output";

const errorStyle = {
  color: "red",
  background: "#F2F2F7",
  marginLeft: "0",
  marginTop: "0",
  width: "100%"
};

const labelStyle = {
  color: "black",fontWeight:"bold",fontSize:"95%"
}

const inputStyle = {background: "white",marginLeft:"0px",width:"100%"}
const inputSameRow = {display:"flex",FlexDirection:"row",justifyContent:"flex-start"}
 export const OvertimeCalculator = ():JSX.Element=>{

  const [inputState,setInputState] = useState<InputState>({
   regHours:40,
    regHoursFreq:"weekly",
   regPay:5000,
   regPayFreq:"monthly",
   extrHoursWorked:10,
   mult:1.5,
   daysWorkedPerWeek:5
  });


  return (
    <Paper
      className="myinput"
      style={{
        width: "90%",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginLeft: "20px",
        marginTop: "20px",
        background: "#F2F2F7",
      }}
    >
  
      <Typography sx={{marginLeft:"35%",size:"large"}}>
       <b> Regular Pay Input </b>
      </Typography>
     
     <Box style={{...inputSameRow,marginTop:"20px"}}>
      
     <Box style={{width:"100%",marginLeft:"0px"}}>
        <TextField
        size="small"
        type="number"
        style={{...inputStyle,width:"100%"}}
        inputProps={{min:0}}
      
        label="Earnings"
        value={inputState?.regPay}
        InputProps={{
          endAdornment:
          
          <Select style={{marginRight:"-14px",width:"50%"}} 
          
           value={inputState.regPayFreq} defaultValue="monthly" onChange={(e)=>{
            inputState.regPayFreq = e.target.value
            setInputState({...inputState})
          }}>
          <MenuItem value="annually">Annually</MenuItem>
          <MenuItem value="monthly">Monthly</MenuItem>
          <MenuItem value="weekly">Weekly</MenuItem>
          <MenuItem value="daily">Daily</MenuItem>
          </Select>,
        }}
        InputLabelProps={{
          shrink: true,
          style: labelStyle,
        }}
      //  value={inputState.date}
        onChange={e => {
          inputState.regPay=parseFloat(e.target.value)
          setInputState({...inputState})
        }}
        //error={ErrorInputState.date !== ""}
       // helperText={ErrorInputState.date}
        FormHelperTextProps={{
         // style: errorStyle,
        }}

      />      </Box>
       
        <Box style={{width:"100%",marginLeft:"20px"}}>
        <TextField
        size="small"
        type="number"
        style={{...inputStyle,width:"100%"}}
        inputProps={{min:0}}
        
        InputProps={{
          endAdornment:<Select value={inputState.regHoursFreq} style={{marginRight:"-14px",width:"50%"}} onChange={(e)=>{
            inputState.regHoursFreq = e.target.value
            setInputState({...inputState})
          }}>
          <MenuItem value="weekly">Weekly</MenuItem>
          <MenuItem value="daily">Daily</MenuItem></Select>,
        }}
     
        label="Working hours"
        value={inputState?.regHours}
        InputLabelProps={{
          shrink: true,
          style: labelStyle,
        }}
      //  value={inputState.date}
        onChange={e => {
          inputState!.regHours=parseFloat(e.target.value)
          setInputState({...inputState})
        }}
        //error={ErrorInputState.date !== ""}
       // helperText={ErrorInputState.date}
        FormHelperTextProps={{
         // style: errorStyle,
        }}

      />      </Box>
      <Box style={{width:"100%",marginLeft:"20px"}}>
        <TextField
        size="small"
        type="number"
        style={{...inputStyle,width:"100%"}}
       
        
     
        label="Days worked per week"
        value={inputState?.daysWorkedPerWeek}
        InputProps={{ inputProps: { min: 0, max: 7 } }}
        disabled={inputState.regHoursFreq==="daily"||inputState.regPayFreq==="daily"?false:true}
        InputLabelProps={{
          shrink: true,
          style: inputState.regHoursFreq==="daily"||inputState.regPayFreq==="daily"? labelStyle:{},
        }}
      //  value={inputState.date}
        onChange={e => {
          inputState!.daysWorkedPerWeek=parseFloat(e.target.value)
          setInputState({...inputState})
        }}
      

      />      </Box>
          
      </Box>
      <Typography sx={{marginLeft:"35%",size:"large",marginTop:"20px"}}>
       <b> Overtime Pay Input </b>
      </Typography>
      <Box style={{...inputSameRow,marginTop:"20px"}}>
      
     <Box style={{width:"100%",marginLeft:"0px"}}>
        <TextField
        size="small"
        type="number"
        style={{...inputStyle,width:"100%"}}
        inputProps={{min:0}}
        label="Multiplier"
        value={inputState?.mult}
        InputLabelProps={{
          shrink: true,
          style: labelStyle,
        }}
      //  value={inputState.date}
        onChange={e => {
          inputState!.mult=parseFloat(e.target.value)
          setInputState({...inputState})
        }}
        //error={ErrorInputState.date !== ""}
       // helperText={ErrorInputState.date}
        FormHelperTextProps={{
         // style: errorStyle,
        }}

      />      </Box>
       
        <Box style={{width:"100%",marginLeft:"20px"}}>
        <TextField
        size="small"
        type="number"
        style={{...inputStyle,width:"100%"}}
        inputProps={{min:0}}
        label="Overtime hours worked"
        value={inputState?.extrHoursWorked}
        InputLabelProps={{
          shrink: true,
          style: labelStyle,
        }}
      //  value={inputState.date}
        onChange={e => {
          inputState!.extrHoursWorked=parseFloat(e.target.value)
          setInputState({...inputState})
        }}
        //error={ErrorInputState.date !== ""}
       // helperText={ErrorInputState.date}
        FormHelperTextProps={{
         // style: errorStyle,
        }}

      />      </Box>
          
      </Box>


<Box style={{marginTop:"20px"}}>
<Output  props={inputState} />
</Box>


    </Paper>
  );
};
export const currencyFormat = (num: number): string => {

  return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

export const roundUpAll = (original: number): number => {
  const tempOr = original.toString();

  let value;
  if (tempOr.indexOf(".") === -1) return original;
  else {
    value = tempOr + "00";
  }
  let up = false;
  for (let i = value.indexOf(".") + 3; i < value.length; i++) {
    const d = value.charAt(i);
    if (d !== "0") {
      up = true;
      break;
    }
  }
  const digits = value.split(".")[1];
  if (up && digits[1] === "9" && digits[0] === "9") {
    return Math.round(original);
  } else if (up && digits[1] === "9") {
    return parseFloat(value.split(".")[0] + "." + (parseInt(digits[0]) + 1).toString());
  } else if (up) {
    return parseFloat(value.split(".")[0] +"." + digits[0] +  (parseInt(digits[1]) + 1).toString());
  } else {
    return original;
  }
};
