import ColumnType from "./ColumnType";

type FrovItemType = {
  id: string;
  name: string;
  type: string;
  datakey: string;
  cell: string;
  shipment: string;
  selected?: boolean;
  error?: boolean;
  passedFIlter?: boolean;
  daysinstock: number;
  attachedFiles: string[];
  lastcheck: string;
};

export default FrovItemType;
