import React from 'react'

interface HeadingProps {
  text: string;
}
function Heading({ text }: HeadingProps) {
  return (
    <h3 className="text-[18px] text-[#000000] font-[600]">{text}</h3>
  )
}

export default Heading