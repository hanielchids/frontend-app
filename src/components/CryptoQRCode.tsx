import React from "react";
import { QRCodeSVG } from "qrcode.react";

interface CryptoQRCodeProps {
  address: string;
}

const CryptoQRCode: React.FC<CryptoQRCodeProps> = ({ address }) => {
  const qrCodeSize = 128;

  return (
    <div className="w-[140px] h-[140px]">
      <QRCodeSVG fgColor="#0f1957" value={address} size={qrCodeSize} />
    </div>
  );
};

export default CryptoQRCode;
