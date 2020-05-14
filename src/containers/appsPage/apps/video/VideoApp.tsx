import * as React from "react";
import { Segment } from "../../../../components/segment/Segment";
import { Vertical, VerticalSpacer } from "gls/lib";
import { Button, PageHeader, Select } from "antd";
import { randomOne } from "../../../../features/utils/misc";

interface Props {
  onBack: () => any;
  onStartVideo: (options: { videoId: string }) => any;
  onStopVideo: () => any;
  isRunning: boolean;
  isCommand: boolean;
}

const videos = [`trippy1.mp4`, `trippy2.mp4`, `rotto.mp4`, `space.mp4`];

export const VideoApp: React.FC<Props> = ({
  onBack,
  onStartVideo,
  isRunning,
  onStopVideo,
  isCommand,
}) => {
  const [selectedVideo, setSelectedVideo] = React.useState(randomOne(videos));

  return (
    <Segment spacing={10} width="100%" maxWidth={500} height={"100%"}>
      <PageHeader ghost={false} onBack={onBack} title="Apps" subTitle="Video"></PageHeader>
      <VerticalSpacer space={10} />
      <Vertical spacing={20}>
        <Select
          defaultValue={selectedVideo}
          value={selectedVideo}
          onChange={value => setSelectedVideo(value)}
        >
          {Object.values(videos).map(id => (
            <Select.Option key={id} value={id}>
              {id}
            </Select.Option>
          ))}
        </Select>
        {!isRunning && (
          <Button
            type="primary"
            disabled={isCommand}
            onClick={() => onStartVideo({ videoId: selectedVideo })}
          >
            Start
          </Button>
        )}
        {isRunning && (
          <Button type="danger" onClick={onStopVideo}>
            Stop
          </Button>
        )}
      </Vertical>
    </Segment>
  );
};
