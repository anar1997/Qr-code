import QRCode from 'qrcode.react'
import React from 'react'

const QRCodeComponent = ({ url }) => {
  return (
    <div>
        <QRCode value={url}/>
        <p>Qr kodu skan edin.</p>
    </div>
  )
}

export default QRCodeComponent