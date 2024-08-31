const InputError = ({ errMsg }: { errMsg?: string }) => {
  return (
    <span className="text-danger font-normal text-sm mt-1 ms-[2px]">
      {errMsg}!
    </span>
  );
};

export default InputError;
