// icon:rocket | Entypo http://entypo.com/ | Daniel Bruce
import * as React from "react";
import Svg, { Circle, Ellipse, Path, G, SvgProps } from "react-native-svg";

// Reemplazado: ahora el icono representa un planeta con anillo ("Orbitly").
function IconRocket(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 64 64"
      fill="none"
      height="1em"
      width="1em"
      {...props}
    >
      <G>
        {/* planeta */}
        <Circle cx="32" cy="28" r="12" fill="#4F46E5" />
        {/* tenue relieve */}
        <Path d="M26 24c1.8-2 5.8-3.2 8-2" stroke="#7C83FF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
        {/* anillo */}
        <Ellipse cx="32" cy="30" rx="20" ry="8" fill="none" stroke="#F9A8D4" strokeWidth="2" transform="rotate(-20 32 30)" opacity="0.95" />
        {/* pequeño satélite */}
        <Circle cx="46" cy="16" r="2" fill="#FCD34D" />
        {/* sombra debajo del planeta para dar profundidad */}
        <Ellipse cx="32" cy="42" rx="10" ry="2.5" fill="#0F172A" opacity="0.12" />
      </G>
    </Svg>
  );
}

export default IconRocket;

  