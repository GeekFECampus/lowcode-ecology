import { snippets } from './snippets';
import props from './propsSchema';

const FormilyInputMeta = {
  componentName: 'FormilyDatePicker',
  title: 'DatePicker',
  group: 'Formily',
  category: '输入组件',
  npm: {
    package: '@seada/formily-materials',
    version: 'latest',
    exportName: 'FormilyDatePicker',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props,
    supports: {
      style: true,
    },
  },
  advanced: {},
  icon: 'https://img.alicdn.com/imgextra/i3/O1CN01G7Lc8e1pZL7p4cdKc_!!6000000005374-2-tps-112-112.png',
};

export default {
  ...FormilyInputMeta,
  snippets,
};