import React from 'react';

const MC_VERSION = '1.21.8';

export default function McTexture({ item, width = '16px', alt }) {
  const src = `https://assets.mcasset.cloud/${MC_VERSION}/assets/minecraft/textures/${item}.png`;

  return (
    <img
      src={src}
      alt={alt ?? item}
      title={item}
      style={{
        width,
        height: width,
        display: 'inline-block',
        imageRendering: 'pixelated',
        verticalAlign: 'middle',
      }}
    />
  );
}
