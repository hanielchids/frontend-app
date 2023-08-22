import React, { useState } from "react";

interface CopyButtonProps {
  textToCopy: string;
}

function CopyButton({ textToCopy }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div>
      <button
        className="text-center text-bvnk_blue-light text-[15px] font-medium leading-normal"
        onClick={copyToClipboard}
      >
        {isCopied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}

export default CopyButton;
