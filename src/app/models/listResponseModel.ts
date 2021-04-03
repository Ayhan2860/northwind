import { ResponseModel } from "./responseModels";

export interface ListResponseModel<T> extends ResponseModel{
    data:T[];
}