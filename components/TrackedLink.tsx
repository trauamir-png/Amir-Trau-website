"use client";

import { sendGTMEvent } from "@next/third-parties/google";

type TrackedLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  gtmEvent: string;
};

export default function TrackedLink({ gtmEvent, onClick, ...props }: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        sendGTMEvent({ event: gtmEvent });
        onClick?.(event);
      }}
    />
  );
}
