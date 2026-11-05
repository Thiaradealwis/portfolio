/** Small rounded label. `size="sm"` is used for skill tags. */
export default function Pill({ size = 'md', children }) {
  return <li className={`pill pill--${size}`}>{children}</li>;
}
