// 部署url
export const REQUEST_BASE_URL_PROD = "http://ismzl.com/";
// 开发url （mock的地址
export const REQUEST_BASE_URL_DEV = "http://localhost:8080";

export const ROLE = {
  INVENTORY_MANAGER: "INVENTORY_MANAGER", //库存管理人员
  SALE_STAFF: "SALE_STAFF", // 进货销售人员
  SALE_MANAGER: "SALE_MANAGER", //销售经理
  FINANCIAL_STAFF: "FINANCIAL_STAFF", // 财务人员
  HR: "HR", // 人力资源人员
  GM: "GM", // 总经理
  ADMIN: "ADMIN" // 最高权限
};


export const PATH = {
  // INVENTORY_MANAGER
  COMMODITY_CLASSIFICATION: {
    path: '/commodityClassification',
    requiresAuth: [ROLE.INVENTORY_MANAGER,ROLE.ADMIN]
  },
  COMMODITY_MANAGEMENT: {
    path: '/commodityManagement',
    requiresAuth: [ROLE.INVENTORY_MANAGER,ROLE.ADMIN]
  },
  INVENTORY_MANAGEMENT: {
    path: '/inventoryManagement',
    requiresAuth: [ROLE.INVENTORY_MANAGER,ROLE.ADMIN]
  },
  INVENTORY_OPERATION: {
    path: '/inventoryOperation',
    requiresAuth: [ROLE.INVENTORY_MANAGER,ROLE.ADMIN]
  },
  INVENTORY_CHECK: {
    path: '/inventoryCheck',
    requiresAuth: [ROLE.INVENTORY_MANAGER,ROLE.ADMIN]
  },
  INVENTORY_IN: {
    path: '/inventoryIn',
    requiresAuth: [ROLE.INVENTORY_MANAGER,ROLE.ADMIN]
  },
  INVENTORY_OUT: {
    path: '/inventoryOut',
    requiresAuth: [ROLE.INVENTORY_MANAGER,ROLE.ADMIN]
  },
  INVENTORY_LOSS: {
    path: '/inventoryLoss',
    requiresAuth: [ROLE.INVENTORY_MANAGER,ROLE.ADMIN]
  },
  INVENTORY_WARNING: {
    path: '/inventoryWarning',
    requiresAuth: [ROLE.INVENTORY_MANAGER,ROLE.ADMIN]
  },
  INVENTORY_OVERFLOW: {
    path: '/inventoryOverflow',
    requiresAuth: [ROLE.INVENTORY_MANAGER,ROLE.ADMIN]
  },
  INVENTORY_PRESENT: {
    path: '/inventoryPresent',
    requiresAuth: [ROLE.INVENTORY_MANAGER,ROLE.ADMIN]
  },
  INVENTORY_VIEW: {
    path: '/inventoryView',
    requiresAuth: [ROLE.INVENTORY_MANAGER,ROLE.ADMIN]
  },

  // SALE_STAFF & SALE_MANAGER
  PURCHASE_VIEW: {
    path: '/purchaseView',
    requiresAuth: [ROLE.SALE_STAFF,ROLE.SALE_MANAGER,ROLE.GM,ROLE.ADMIN]
  },
  PURCHASE_RETURN_VIEW: {
    path: '/purchaseReturnView',
    requiresAuth: [ROLE.SALE_STAFF,ROLE.SALE_MANAGER,ROLE.GM,ROLE.ADMIN]
  },
  SALE_VIEW: {
    path: '/saleView',
    requiresAuth: [ROLE.SALE_STAFF,ROLE.SALE_MANAGER,ROLE.GM,ROLE.ADMIN]
  },
  SALE_RETURN_VIEW: {
    path: '/saleReturnView',
    requiresAuth: [ROLE.SALE_STAFF,ROLE.SALE_MANAGER,ROLE.GM,ROLE.ADMIN]
  },
  CUSTOMER_VIEW: {
    path: '/customerView',
    requiresAuth: [ROLE.SALE_STAFF,ROLE.SALE_MANAGER,ROLE.GM,ROLE.ADMIN]
  },

  // GM
  GM_APPROVAL: {
    path: '/approval',
    requiresAuth: [ROLE.GM,ROLE.ADMIN]
  },

  // FINANCIAL_STAFF
  ACCOUNT_MANAGEMENT: {
    path: '/account',
    requiresAuth: [ROLE.FINANCIAL_STAFF,ROLE.ADMIN]
  },
  PAYMENT_VIEW: {
    path: '/payment',
    requiresAuth: [ROLE.FINANCIAL_STAFF,ROLE.GM,ROLE.ADMIN]
  },
  RECEPTION_VIEW: {
    path: '/reception',
    requiresAuth: [ROLE.FINANCIAL_STAFF,ROLE.GM,ROLE.ADMIN]
  },
  SALARY_VIEW: {
    path: '/salary',
    requiresAuth: [ROLE.FINANCIAL_STAFF,ROLE.HR,ROLE.GM,ROLE.ADMIN]
  },

  //HR
  EMPLOYEE_VIEW: {
    path: '/employee',
    requiresAuth: [ROLE.HR,ROLE.ADMIN]
  },
  PUNCH_VIEW: {
    path: '/punch',
    requiresAuth: [ROLE.INVENTORY_MANAGER,ROLE.SALE_STAFF,ROLE.SALE_MANAGER,ROLE.FINANCIAL_STAFF,ROLE.HR,ROLE.GM,ROLE.ADMIN]
  },
  SALARY_STRATEGY_VIEW: {
    path: '/SalaryStrategyView',
    requiresAuth: [ROLE.HR,ROLE.ADMIN]
  },

  //GM
  PROMOTION_STRATEGY_VIEW: {
    path: '/promotion',
    requiresAuth: [ROLE.GM, ROLE.ADMIN]
  },
  SALE_DETAIL_VIEW: {
    path: '/saleDetailView',
    requiresAuth: [ROLE.FINANCIAL_STAFF, ROLE.GM, ROLE.ADMIN]
  },
  BUSINESS_HISTORY: {
    path: '/businessHistory',
    requiresAuth: [ROLE.FINANCIAL_STAFF, ROLE.GM, ROLE.ADMIN]
  },
  BUSINESS_CONDITION: {
    path: '/businessCondition',
    requiresAuth: [ROLE.FINANCIAL_STAFF, ROLE.GM, ROLE.ADMIN]
  },
}
