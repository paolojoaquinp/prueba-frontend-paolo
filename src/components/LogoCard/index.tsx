import React from "react";

const LogoCard: React.FC<any> = (props:any) => (
    <svg
      width={16}
      height={16}
      fill='none'
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width={6.737} height={6.737} rx={1} fill={props.fill} />
      <rect x={9.263} width={6.737} height={6.737} rx={1} fill={props.fill} />
      <rect y={9.263} width={6.737} height={6.737} rx={1} fill={props.fill} />
      <rect x={9.263} y={9.263} width={6.737} height={6.737} rx={1} fill={props.fill} />
    </svg>
  )
  
export default LogoCard;
  