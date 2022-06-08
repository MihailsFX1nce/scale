import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'scale-components',
  globalStyle: process.env.WHITELABEL
    ? 'src/global/whitelabel.css'
    : 'src/global/scale.css',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        {
          src:
            '../../../node_modules/@telekom/design-tokens/dist/assets/telekom/fonts',
          dest: 'build/fonts',
          warn: true,
        },
        // { src: '../../design-tokens/dist/*', dest: 'build/', warn: true },
        { src: './html/*', dest: './', warn: true },
        ...(!process.env.WHITELABEL
          ? [{ src: './html/telekom/*', dest: './', warn: true }]
          : []),
      ],
    },
  ],
};
