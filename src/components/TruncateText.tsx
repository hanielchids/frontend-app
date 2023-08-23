import React from "react";

interface TruncateTextProps {
  text: string | undefined;
  maxLength: number;
}

function TruncateText(props: TruncateTextProps) {
  const { text, maxLength } = props;

  const truncateMiddle = (
    text: string | undefined,
    maxLength: number
  ): string => {
    if (!text) return "";
    if (text.length <= maxLength) return text;

    const startLength = Math.floor((maxLength - 3) / 2);
    const endLength = maxLength - startLength - 3;

    const start = text.slice(0, startLength);
    const end = text.slice(-endLength);

    return `${start}...${end}`;
  };

  const truncatedText = truncateMiddle(text, maxLength);

  return <div>{truncatedText}</div>;
}

export default TruncateText;
