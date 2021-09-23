import React from 'react';
import { IModel, State } from 'services/models/model';
export interface ISetComponentRefsParams<T extends State> {
  refElement: React.MutableRefObject<any> | object;
  model: IModel<T>;
}