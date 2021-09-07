import React from 'react';
import {
  IMetricTrace,
  IParamTrace,
  IRun,
} from 'types/services/models/metrics/runModel';
export interface IRunDetailParamsTabProps {
  runParams: { [key: string]: any };
  isRunInfoLoading: boolean;
}

export interface IRunsProps {
  tableData: IRun<IMetricTrace | IParamTrace>[];
}
export interface IRunDetailMetricsAndSystemTabProps {
  runHash: string;
  runTraces: any;
  runBatch: any;
  isSystem?: boolean;
  isRunBatchLoading: boolean;
}
export interface IRunDetailSettingsTabProps {
  runHash: string;
  isArchived: boolean;
}

export interface IRunBatch {
  context: { [key: string]: string };
  iters: number[];
  metric_name: string;
  values: number[];
}

export interface IRunsTableProps {
  tableRef: React.RefObject<any>;
  runsList: ITagProps[];
  isRunsDataLoading: boolean;
  columns: any;
  tableRowHeight: number;
}
