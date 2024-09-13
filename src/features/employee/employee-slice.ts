import { Employee } from "@/constants/api-interface/employee";
import { SingleEntityAttributes } from "@/constants/api-interface/root";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type EmployeeState = {
  data: Employee | null;
  error: string | null;
};

const initialState: EmployeeState = {
  data: null,
  error: null,
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    setEmployee: (
      state,
      action: PayloadAction<SingleEntityAttributes<Employee>>
    ) => {
      state.data = action.payload?.data?.attributes || null;
      state.error = null;
    },
    removeEmployee: (state) => {
      state.data = null;
      state.error = null;
    },
  },
});

export const { setEmployee, removeEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
