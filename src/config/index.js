/**
 *
 * 项目全局配置文件
 */

// 获取 api 前置路径
export const API_BASE = (function fn() {
  if (process.env.NODE_ENV === 'development') {
    return '/api';
  }

  const ORIGIN = window.location.origin;
  return `${ORIGIN}/api`;
}());


// 多语言配置
export const LANGUAGES = [
  { name: '中文简体', lang: 'zh' },
  { name: 'English', lang: 'en' },
];


// 是否开启 mock data
export const HAS_MOCK = true;


// 菜单来源的模式. network: 服务的返回; router: 本地路由
export const MENU_MODE = 'network';


// 版权信息
export const COPYRIGHT = 'Copyright © 2019 技术体验部出品';


// 内容区域的 page header 显示内容默认配置
export const PAGE_HEADER = ['breadcrumb', 'pageInfo'];


// 首页路由配置
export const HOME_ROUTE = {
  path: '/dashboard',
  name: 'dashboard',
  meta: {
    title: '首页',
    icon: 'document',
  },
};

// 初始化路由配置
const INIT_ROUTERS = [HOME_ROUTE];
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  const { routerLabsMap } = require('@/router');
  INIT_ROUTERS.push(...routerLabsMap);
}
export const INIT_MENUS = [
  ...INIT_ROUTERS,
];
