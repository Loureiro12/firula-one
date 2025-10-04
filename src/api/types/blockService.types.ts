export interface ITypeBlock {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface IGetTypeBlockResponse {
  typeBlock: ITypeBlock[];
}

export interface ICreateBlockRequest {
  name: string;
  valueForHour: string;
  sports: string[];
  imageUrl: string;
  typeBlockId: string;
  companyId: string;
}

export interface ICreateBlockResponse {
  blockId: string;
}

export interface IOpeningHoursType {
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  active: boolean;
  valueForHourDayUse: string;
  dayUseActive: boolean;
  priceForHour: string;
}

export interface ICreateBlockOpeningHoursRequest {
  companyBlockId: string;
  openingHours: IOpeningHoursType[];
}

export interface ICreateBlockOpeningHoursResponse {
  success: boolean;
}
