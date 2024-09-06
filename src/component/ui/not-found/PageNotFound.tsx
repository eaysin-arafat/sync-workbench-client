import React from "react";
import Typography from "../typography";

/**
 * @description Page not found component
 */
const PageNotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-bgColor">
      <Typography variant="h1">404 - Page Not Found</Typography>
      <Typography variant="span">
        The page you are looking for does not exist.
      </Typography>
    </div>
  );
};

export default PageNotFound;
