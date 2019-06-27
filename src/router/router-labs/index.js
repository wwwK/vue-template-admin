import Layout from '@/layout';

export default [
  // labs
  {
    path: '/labs',
    name: 'Labs',
    component: Layout,
    redirect: '/labs/index',
    meta: {
      icon: 'labs',
      title: '实验室',
    },
    children: [
      {
        path: 'card',
        name: 'LabsCard',
        component: () => import('@/views/labs/card'),
        meta: {
          title: '卡片',
          desc: '卡片内容展示组件',
          // pageHeader: ['breadcrumb'],
        },
      },
      {
        path: 'filter',
        name: 'LabsFilter',
        component: () => import('@/views/labs/filter'),
        meta: {
          title: '全局过滤器',
        },
      },
      {
        path: 'flex',
        name: 'LabsFlex',
        component: () => import('@/views/labs/flex'),
        meta: {
          title: '弹性布局',
        },
      },
      {
        path: 'precision',
        name: 'LabsPrecision',
        component: () => import('@/views/labs/precision'),
        meta: {
          title: 'Precision 小数精准度',
        },
      },
      {
        path: 'tabs-page',
        name: 'LabsTabsPage',
        component: () => import('@/views/labs/tabs-page'),
        meta: {
          title: '标签页',
          pageHeader: ['breadcrumb'],
        },
      },
      {
        path: 'dialog',
        name: 'LabsDialog',
        component: () => import('@/views/labs/dialog.vue'),
        meta: {
          title: '弹窗尺寸',
        },
      },
    ],
  },

  // list
  {
    path: '/list',
    name: 'List',
    component: Layout,
    redirect: '/list/table-list',
    meta: {
      title: '列表页面',
    },
    children: [
      {
        path: 'table-list',
        name: 'ListTable',
        component: () => import('@/views/list/table-list'),
        meta: {
          icon: 'list',
          title: '查询表格',
        },
      },
    ],
  },

  // component
  {
    path: '/components',
    name: 'Components',
    component: Layout,
    redirect: '/components/status',
    meta: {
      title: '组件',
      icon: 'components',
    },
    children: [
      {
        path: 'status',
        name: 'ComponentsStatus',
        component: () => import('@/views/components-demo/status.vue'),
        meta: {
          title: '状态标签',
        },
      },
      {
        path: 'sticky',
        name: 'ComponentsSticky',
        component: () => import('@/views/components-demo/sticky.vue'),
        meta: {
          title: '滚动吸附',
        },
      },
      {
        path: 'count-to',
        name: 'ComponentsCountTo',
        component: () => import('@/views/components-demo/count-to.vue'),
        meta: {
          title: '计数效果',
        },
      },
      {
        path: 'viewer',
        name: 'ComponentsViewer',
        component: () => import('@/views/components-demo/viewer.vue'),
        meta: {
          title: '弹窗查看大图',
          desc: '基于viewer.js的vue灯箱',
        },
      },
    ],
  },

  // excel
  {
    path: '/excel',
    name: 'Excel',
    component: Layout,
    redirect: '/excel/export-excel',
    meta: {
      title: 'Excel',
      icon: 'excel',
    },
    children: [
      {
        path: 'export-excel',
        name: 'ExcelExport',
        component: () => import('@/views/excel/export-excel.vue'),
        meta: {
          title: '导出 Excel',
        },
      },
      {
        path: 'export-select-excel',
        name: 'ExcelSelectExport',
        component: () => import('@/views/excel/export-select-excel.vue'),
        meta: {
          title: '导出已选择项',
        },
      },
    ],
  },
];
