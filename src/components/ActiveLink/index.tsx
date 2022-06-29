import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { IconProps } from "phosphor-react";
import { cloneElement, ReactElement } from "react";

// type IconType = (props: IconProps) => JSX.Element;

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
  // icon?: IconType;
}

export function ActiveLink({children, activeClassName, ...rest}: ActiveLinkProps) {
  const {asPath} = useRouter()

  const className = asPath === rest.href
  ? activeClassName
  : '';
  
  return (
    <Link {...rest}>
      {cloneElement( children, {className})}
    </Link>
  );
}