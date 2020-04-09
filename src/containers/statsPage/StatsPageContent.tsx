import * as React from "react";
import { Segment } from "../../components/segment/Segment";
import { PageHeader, Statistic, Button, Progress } from "antd";
import { Stretch, Horizontal, Vertical } from "gls/lib";
import { SystemInfoTree } from "./SystemInfoTree";
import { formatDistanceToNow } from "date-fns";
import { Label } from "../../components/label/Label";

interface Props {
  isConnected: boolean;
  statusChangedAt: Date | undefined;
  cpuLoadsPercent: number[];
  memUsagePercent: number;
  allSystemInfo: object;
  cpuTemperature: number;
  batteryPercentage: number;
}

const getProgressStrokeColorFromPercentage = (percent: number) => {
  if (percent > 80) return "#cf1322";
  return "#108ee9";
};

export const StatsPageContent: React.FC<Props> = ({
  isConnected,
  statusChangedAt,
  cpuLoadsPercent,
  allSystemInfo,
  memUsagePercent,
  cpuTemperature,
  batteryPercentage,
}) => {
  return (
    <Segment spacing={10} width="100%" maxWidth={500} height={"100%"} scroll="vertical">
      <h1>Disco Cube</h1>
      <Vertical spacing={30}>
        <Horizontal spacing={40}>
          <Stat label="Status">
            <div>
              <span style={{ color: isConnected ? "#3f8600" : "#cf1322" }}>
                {isConnected ? "Connected" : "Disconnected"}
              </span>
              <span style={{ color: "rgba(0, 0, 0, 0.45)", fontSize: "0.75em" }}>
                {statusChangedAt ? " " + formatDistanceToNow(statusChangedAt) + " ago" : ""}
              </span>
            </div>
          </Stat>
          <Stat label="CPU temperature">
            <span>{cpuTemperature}</span>
          </Stat>
        </Horizontal>
        <Horizontal spacing={40}>
          <Stat label="CPU LOADS">
            <Vertical>
              {cpuLoadsPercent.map((c, i) => (
                <Progress
                  key={i}
                  percent={Math.round(c)}
                  strokeColor={{
                    from: getProgressStrokeColorFromPercentage(c),
                    to: getProgressStrokeColorFromPercentage(c),
                  }}
                />
              ))}
            </Vertical>
          </Stat>
          <Stat label="Mem usage">
            <Progress
              type="circle"
              width={80}
              percent={Math.round(memUsagePercent)}
              strokeColor={{
                from: getProgressStrokeColorFromPercentage(memUsagePercent),
                to: getProgressStrokeColorFromPercentage(memUsagePercent),
              }}
            />
          </Stat>
          <Stretch />
        </Horizontal>

        <Horizontal spacing={40}>
          <Stat label="All System Info" width={360}>
            <SystemInfoTree info={allSystemInfo} />
          </Stat>
        </Horizontal>
      </Vertical>
    </Segment>
  );
};

const Stat: React.FC<{ label: string; width?: number }> = ({ label, width, children }) => (
  <Vertical width={width ?? 180} spacing={5}>
    <Label>{label}</Label>
    {children}
  </Vertical>
);
