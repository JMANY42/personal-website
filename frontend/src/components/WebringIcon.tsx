import logoSrc from '../assets/logoFinal02_Normal.svg';

export default function WebringIcon({ size = 48 }: { size?: number }) {
  return <img src={logoSrc} alt="UTD CS Webring" width={size} height={size} />;
}