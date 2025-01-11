import { useAtom } from "jotai";
import { Select } from "@radix-ui/themes";
import { knownSocketUrlsAtom, websocketUrlAtom } from "../../api/ws/atoms";


export default function ValidatorSelector() {
  const [websocketUrl, setWebsocketUrl] = useAtom(websocketUrlAtom);
  const [knownSocketUrls] = useAtom(knownSocketUrlsAtom);

  return (
    <Select.Root value={websocketUrl} onValueChange={setWebsocketUrl}>
      <Select.Trigger />
      <Select.Content>
        {knownSocketUrls.map((validator) => (
          <Select.Item
            key={validator.url}
            value={validator.url}
            onSelect={() => setWebsocketUrl(validator.url)}
          >
            {validator.name}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
} 