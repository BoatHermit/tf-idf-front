import Vue from "vue";
import VueRouter from "vue-router";
import { ROLE, PATH } from "../common/const";

const Error = () => import("../components/content/Error");
const Login = () => import("../views/auth/Login");
const Home = () => import("../views/Home");
const CommodityManagement = () =>
  import("../views/commodity/CommodityManagement");
const CommodityClassification = () =>
  import("../views/commodity/CommodityClassification");
const InventoryManagement = () => import("../views/inventory/InventoryManagement");
const InventoryCheck = () => import("../views/inventory/InventoryCheck");
const InventoryOperation = () =>
  import("../views/inventory/InventoryOperation");
const InventoryIn = () => import("../views/inventory/InventoryIn");
const InventoryOut = () => import("../views/inventory/InventoryOut");
const InventoryLoss = () => import("../views/inventory/InventoryLoss");
const InventoryOverflow = () => import("../views/inventory/InventoryOverflow");
const InventoryPresent = () => import("../views/inventory/InventoryPresent");
const InventoryView = () => import("../views/inventory/InventoryView");
const InventoryWarning = () => import("../views/inventory/InventoryWarning");
const PurchaseView = () => import("../views/purchase/PurchaseView");
const PurchaseReturnView = () => import("../views/purchase/PurchaseReturnView");
const SaleView = () => import("../views/sale/SaleView");
const SaleReturnView = () => import("../views/sale/SaleReturnView")
const CustomerView = () => import ("../views/purchase/CustomerView");
const Approval = () => import("../views/approval/Approval");
const Account = () => import("../views/financial/Account");
const PaymentView = () => import("../views/financial/PaymentView");
const ReceptionView = () => import("../views/financial/ReceptionView");
const SalaryView = () => import("../views/financial/SalaryView");
const EmployeeView = () => import("../views/hr/EmployeeView")
const PunchView = () => import("../views/hr/PunchView")
const SalaryStrategyView = () => import("../views/hr/SalaryStrategyView")
const PromotionStrategyView = () => import("../views/gm/PromotionStrategyView")
const SalesDetailView = () => import('../views/report_forms/SalesDetailView')
const BusinessHistory = () => import('../views/report_forms/BusinessHistory')
const BusinessCondition = () => import('../views/report_forms/BusinessCondition')


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/error",
    component: Error
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/register",
    component: () => import("@/views/auth/register.vue")
  },
  // 商品管理
  {
    path: PATH.COMMODITY_CLASSIFICATION.path,
    component: CommodityClassification,
    meta: { requiresAuth: PATH.COMMODITY_CLASSIFICATION.requiresAuth }
  },
  {
    path: PATH.COMMODITY_MANAGEMENT.path,
    component: CommodityManagement,
    meta: { requiresAuth: PATH.COMMODITY_MANAGEMENT.requiresAuth }
  },
  // 库存管理
  {
    path: PATH.INVENTORY_MANAGEMENT.path,
    component: InventoryManagement,
    meta: { requiresAuth: PATH.INVENTORY_MANAGEMENT.requiresAuth }
  },
  {
    path: PATH.INVENTORY_CHECK.path,
    component: InventoryCheck,
    meta: { requiresAuth: PATH.INVENTORY_CHECK.requiresAuth }
  },
  {
    path: PATH.INVENTORY_OPERATION.path,
    component: InventoryOperation,
    name: "InventoryOperation",
    meta: { requiresAuth: PATH.INVENTORY_OPERATION.requiresAuth }
  },
  {
    path: PATH.INVENTORY_IN.path,
    component: InventoryIn,
    name: "InventoryIn",
    meta: { requiresAuth: PATH.INVENTORY_LOSS.requiresAuth }
  },
  {
    path: PATH.INVENTORY_OUT.path,
    component: InventoryOut,
    name: "InventoryOut",
    meta: { requiresAuth: PATH.INVENTORY_LOSS.requiresAuth }
  },
  {
    path: PATH.INVENTORY_LOSS.path,
    component: InventoryLoss,
    name: "InventoryLoss",
    meta: { requiresAuth: PATH.INVENTORY_LOSS.requiresAuth }
  },
  {
    path: PATH.INVENTORY_OVERFLOW.path,
    component: InventoryOverflow,
    name: "InventoryOverflow",
    meta: { requiresAuth: PATH.INVENTORY_OVERFLOW.requiresAuth }
  },
  {
    path: PATH.INVENTORY_PRESENT.path,
    component: InventoryPresent,
    name: "InventoryPresent",
    meta: { requiresAuth: PATH.INVENTORY_PRESENT.requiresAuth }
  },
  {
    path: PATH.INVENTORY_VIEW.path,
    component: InventoryView,
    meta: { requiresAuth: PATH.INVENTORY_VIEW.requiresAuth }
  },
  {
    path: PATH.INVENTORY_WARNING.path,
    component: InventoryWarning,
    name: "InventoryWarning",
    meta: { requiresAuth: PATH.INVENTORY_WARNING.requiresAuth }
  },
  // 销售管理
  {
    path: PATH.PURCHASE_VIEW.path,
    component: PurchaseView,
    name: "PurchaseView",
    meta: { requiresAuth: PATH.PURCHASE_VIEW.requiresAuth }
  },
  {
    path: PATH.PURCHASE_RETURN_VIEW.path,
    component: PurchaseReturnView,
    name: "PurchaseReturnView",
    meta: { requiresAuth: PATH.PURCHASE_RETURN_VIEW.requiresAuth }
  },
  {
    path: PATH.SALE_VIEW.path,
    component: SaleView,
    name: "SaleView",
    meta: { requiresAuth: PATH.SALE_VIEW.requiresAuth }
  },
  {
    path: PATH.SALE_RETURN_VIEW.path,
    component: SaleReturnView,
    name: "SaleReturnView",
    meta: { requiresAuth: PATH.SALE_RETURN_VIEW.requiresAuth }
  },
  {
    path: PATH.CUSTOMER_VIEW.path,
    component: CustomerView,
    name: "CustomerView",
    meta: { requiresAuth: PATH.CUSTOMER_VIEW.requiresAuth }
  },
  // 审批
  {
    path: PATH.GM_APPROVAL.path,
    component: Approval,
    meta: { requiresAuth: PATH.GM_APPROVAL.requiresAuth }
  },

  //  财务管理
  {
    path: PATH.ACCOUNT_MANAGEMENT.path,
    component: Account,
    meta: { requiresAuth: PATH.ACCOUNT_MANAGEMENT.requiresAuth },
  },
  {
    path: PATH.PAYMENT_VIEW.path,
    component: PaymentView,
    meta: { requiresAuth: PATH.PAYMENT_VIEW.requiresAuth },
  },
  {
    path: PATH.RECEPTION_VIEW.path,
    component: ReceptionView,
    meta: { requiresAuth: PATH.RECEPTION_VIEW.requiresAuth },
  },
  {
    path: PATH.SALARY_VIEW.path,
    component: SalaryView,
    meta: { requiresAuth: PATH.SALARY_VIEW.requiresAuth },
  },

  //  人力资源管理
  {
    path: PATH.EMPLOYEE_VIEW.path,
    component: EmployeeView,
    meta: {requiresAuth: PATH.EMPLOYEE_VIEW.requiresAuth},
  },
  {
    path: PATH.PUNCH_VIEW.path,
    component: PunchView,
    meta: {requiresAuth: PATH.PUNCH_VIEW.requiresAuth},
  },
  {
    path: PATH.SALARY_STRATEGY_VIEW.path,
    component: SalaryStrategyView,
    meta: {requiresAuth: PATH.SALARY_STRATEGY_VIEW.requiresAuth},
  },

  //  总经理事项
  {
    path: PATH.PROMOTION_STRATEGY_VIEW.path,
    component: PromotionStrategyView,
    meta: {requiresAuth: PATH.PROMOTION_STRATEGY_VIEW.requiresAuth},
  },
  {
    path: PATH.SALE_DETAIL_VIEW.path,
    component: SalesDetailView,
    meta: {requiresAuth: PATH.SALE_DETAIL_VIEW.requiresAuth},
  },
  {
    path: PATH.BUSINESS_HISTORY.path,
    component: BusinessHistory,
    meta: {requiresAuth: PATH.BUSINESS_HISTORY.requiresAuth},
  },
  {
    path: PATH.BUSINESS_CONDITION.path,
    component: BusinessCondition,
    meta: {requiresAuth: PATH.BUSINESS_CONDITION.requiresAuth},
  },
  // -----------------------未找到页面-----------------------------
  {
    path: "*",
    redirect: "/error"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(async (to, from, next) => {
  // console.log(to.path);
  if (to.path === "/error" || to.path === "/login") {
    next();
  } else if (to.path === "/") {
    let token = sessionStorage.getItem("token");
    let role = sessionStorage.getItem("role");
    if (token == null || role == null) next("/login");
    else next();
  } else if (to.meta.requiresAuth) {
    if (
      to.meta.requiresAuth.some(
        role => role.toString() === sessionStorage.getItem("role")
      )
    ) {
      //有权限
      // console.log("获得访问权限");
      next()
    } else {
      // console.log("无权限访问");
      next("/"); //无权限,跳回主页
    }
  } else {
    // 非法路径, 直接next (跳转error)
    next();
  }
});

export default router;
