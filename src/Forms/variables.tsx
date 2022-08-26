export interface InputState {

   regPay:number;   
   regPayFreq:string;
   regHours:number;
   regHoursFreq:string;
   mult:number;
   extrHoursWorked:number;
   daysWorkedPerWeek:number;

  }
 export interface OutputState {
    
   amount:number

  }
 
export const payPeriodMapping = {
    "annually":1/52,
    "monthly":12/52,
    "weekly":1,
    "daily":7
}
export const parseMonth = {
    "0": "Jan",
    "1": "Feb",
    "2": "Mar",
    "3": "Apr",
    "4": "May",
    "5": "Jun",
    "6": "Jul",
    "7": "Aug",
    "8": "Sep",
    "9": "Oct",
    "10": "Nov",
    "11": "Dec",
  };