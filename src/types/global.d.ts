declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.css';

// Images
declare module '*.svg' {
  const src: string;
  export default src;
}
declare module '*.svg?react' {
  import * as React from 'react';
  const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  export default ReactComponent;
}
declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.woff';
declare module '*.woff2';
declare module '*.ttf';
declare module '*.otf';
