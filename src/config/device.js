const size = {
  md: '744px',
  lg: '1128px'
}

export const device = {
  smallSize: `(max-width: ${size.md})`,
  middleSize: `(min-width: ${size.md}) and (max-width: ${size.lg})`,
  largeSize: `(min-width: ${size.lg})`
}