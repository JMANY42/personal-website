export default function WebringIcon({
  size = 48,
}: {
  color?: string;
  size?: number;
}) {
  return (
    <img
            src='https://cs.utdring.com/icon.white.svg'
            alt='CS Webring'
            style={{ width: size, height: 'auto', opacity: 0.8 }}
        />
  );
}