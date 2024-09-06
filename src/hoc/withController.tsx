import React from "react";
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";

// Define the props that will be forwarded to the controlled component
type WithControllerProps<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
};

// Create the HOC that wraps the controlled component
const withController = <
  T extends FieldValues,
  P extends WithControllerProps<T>
>(
  Component: React.ComponentType<P>
) => {
  return ({
    control,
    name,
    ...props
  }: WithControllerProps<T> & Omit<P, keyof WithControllerProps<T>>) => (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <Component {...(props as P)} {...field} />}
    />
  );
};

export default withController;
