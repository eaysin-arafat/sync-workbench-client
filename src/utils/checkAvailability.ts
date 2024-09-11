export const checkAvailability = ({
  value,
  currentValue,
  data,
}: {
  value: string;
  currentValue: string;
  data: { available: boolean };
}) => {
  if (!value) return false;
  if (value === currentValue) return true;

  return !data?.available;
};
