import styles from "./tileBusy.module.css";
import { Flex, Text } from "@radix-ui/themes";

interface TileBusyProps {
  busy?: number;
}

export default function TileBusy({ busy }: TileBusyProps) {
  const pct = busy !== undefined ? Math.trunc(busy * 100) : undefined;

  return (
    <Flex gap="1" align="end">
      <Text
        className={styles.busy}
        style={{
          color: `color-mix(in srgb, #55BA83, #D94343 ${pct}%)`,
        }}
      >
        {pct ?? "-"}%
      </Text>
    </Flex>
  );
}