import * as React from "react";
import { useHistory } from "react-router";
import { PaintApp } from "./PaintApp";

interface Props {}

export const ConnectedPaintApp: React.FC<Props> = ({}) => {
  const history = useHistory();
  return <PaintApp onBack={history.goBack} />;
};
