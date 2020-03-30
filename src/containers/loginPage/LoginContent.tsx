import * as React from "react";
import { Input, Button } from "antd";
import { Segment } from "../../components/segment/Segment";

interface Props {
  onLogin: (password: string) => any;
  loading: boolean;
}

export const LoginContent: React.FC<Props> = ({ onLogin, loading }) => {
  const [password, setPassword] = React.useState("");
  return (
    <Segment spacing={10}>
      <Input
        value={password}
        type="password"
        onChange={e => setPassword(e.target.value)}
        size="large"
        placeholder="Password"
        disabled={loading}
      />
      <Button type="primary" loading={loading} disabled={loading} onClick={() => onLogin(password)}>
        Login
      </Button>
    </Segment>
  );
};
