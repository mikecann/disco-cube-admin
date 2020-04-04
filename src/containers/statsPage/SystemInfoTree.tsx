import * as React from "react";
import { Tree } from "antd";
import { IconType } from "antd/lib/notification";

export interface DataNode {
  checkable?: boolean;
  children?: DataNode[];
  disabled?: boolean;
  disableCheckbox?: boolean;
  icon?: IconType;
  isLeaf?: boolean;
  key: string | number;
  title?: React.ReactNode;
  selectable?: boolean;
  switcherIcon?: IconType;
  /** Set style of TreeNode. This is not recommend if you don't have any force requirement */
  className?: string;
  style?: React.CSSProperties;
}

interface Props {
  info: any;
}

const convertInfoToTreeData = (info: any, title = "root", key = "root"): DataNode => {
  if (info == null) return { key, title };

  const isObject = typeof info === "object" && info !== null;

  if (isObject)
    return {
      key,
      title,
      children: Object.keys(info).map((k, i) => convertInfoToTreeData(info[k], k, key + "-" + k)),
    };

  return {
    key,
    title: title + ": " + info,
  };
};

export const SystemInfoTree: React.FC<Props> = ({ info }) => {
  const [treeData, setTreeData] = React.useState(() => [convertInfoToTreeData(info)]);

  React.useEffect(() => setTreeData([convertInfoToTreeData(info)]), [info]);

  return <Tree showLine={true} defaultExpandedKeys={["0-0-0"]} treeData={treeData} />;
};
