import Button from "../../atoms/button";
import Typography from "../../atoms/typography";

type Props = {
  pageTitle: string;
  hasAddButton: boolean;
  btnLabel: string;
  onClick: () => void;
};

const PageHeader = ({ pageTitle, btnLabel, hasAddButton, onClick }: Props) => {
  return (
    <div className="flex flex-row items-start md:items-center justify-between gap-3 pb-5">
      <Typography variant="h4">{pageTitle}</Typography>

      {hasAddButton && (
        <Button variant="primary" size="sm" onClick={onClick}>
          {btnLabel}
        </Button>
      )}
    </div>
  );
};

export default PageHeader;
