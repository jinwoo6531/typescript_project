/* eslint-disable import/first */
import React from "react";

import async from "../components/Async";

import {
  Calendar as CalendarIcon,
  CheckSquare,
  CreditCard,
  Grid,
  Heart,
  Layout,
  List,
  Map,
  Monitor,
  PieChart,
  Sliders,
  Users,
} from "react-feather";

// Guards
import AuthGuard from "../components/AuthGuard";

// Auth components
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import ResetPassword from "../pages/auth/ResetPassword";
import Page404 from "../pages/auth/Page404";
import Page500 from "../pages/auth/Page500";

// Components components
import Accordion from "../pages/components/Accordion";
import Alerts from "../pages/components/Alerts";
import Avatars from "../pages/components/Avatars";
import Badges from "../pages/components/Badges";
import Buttons from "../pages/components/Buttons";
import Cards from "../pages/components/Cards";

// Dashboards components
const Default = async(() => import("../pages/dashboards/Default"));

// Forms components
import SelectionCtrls from "../pages/forms/SelectionControls";
import Selects from "../pages/forms/Selects";
import TextFields from "../pages/forms/TextFields";
const Pickers = async(() => import("../pages/forms/Pickers"));
const Dropzone = async(() => import("../pages/forms/Dropzone"));
const Editors = async(() => import("../pages/forms/Editors"));
const Formik = async(() => import("../pages/forms/Formik"));

// Icons components
import MaterialIcons from "../pages/icons/MaterialIcons";
const FeatherIcons = async(() => import("../pages/icons/FeatherIcons"));

// Pages components
import InvoiceDetails from "../pages/pages/InvoiceDetails";
import InvoiceList from "../pages/pages/InvoiceList";
import Pricing from "../pages/pages/Pricing";
import Settings from "../pages/pages/Settings";
const Profile = async(() => import("../pages/pages/Profile"));
const Tasks = async(() => import("../pages/pages/Tasks"));
const Calendar = async(() => import("../pages/pages/Calendar"));

// Tables components
import SimpleTable from "../pages/tables/SimpleTable";
import AdvancedTable from "../pages/tables/AdvancedTable";

// Chart components
const Chartjs = async(() => import("../pages/charts/Chartjs"));

// Maps components
const GoogleMaps = async(() => import("../pages/maps/GoogleMaps"));
const VectorMaps = async(() => import("../pages/maps/VectorMaps"));

import Auth from "../hoc/auth";

// Landing
import Landing from "../pages/presentation/Landing";

// Protected routes
import ProtectedPage from "../pages/protected/ProtectedPage";

const dashboardsRoutes = {
  id: "메인",
  path: "/dashboard/default",
  icon: <Sliders />,
  containsHome: true,
  component: Auth(Default, true),
  children: null,
};

const pagesRoutes = {
  id: "서비스 관리",
  path: "/pages",
  icon: <Layout />,
  children: [
    {
      path: "/pages/settings",
      name: "기관 정보관리",
      component: Settings,
    },
    {
      path: "/pages/profile",
      name: "플랜 현황",
      component: Profile,
    },
    {
      path: "/pages/pricing",
      name: "비밀번호 변경",
      component: Pricing,
    },
  ],
  component: null,
};

const invoiceRoutes = {
  id: "사용자관리",
  path: "/invoices",
  icon: <CreditCard />,
  children: [
    {
      path: "/invoices",
      name: "사용자 계정관리",
      component: InvoiceList,
    },
    {
      path: "/invoices/detail",
      name: "탈퇴 계정관리",
      component: InvoiceDetails,
    },
  ],
  component: null,
};

const tasksRoutes = {
  id: "Tasks",
  path: "/tasks",
  icon: <CheckSquare />,
  badge: "17",
  component: Tasks,
  children: null,
};

const calendarRoutes = {
  id: "Calendar",
  path: "/calendar",
  icon: <CalendarIcon />,
  component: Calendar,
  children: null,
};

const authRoutes = {
  id: "Auth",
  path: "/auth",
  icon: <Users />,
  children: [
    {
      path: "/auth/sign-in",
      name: "Sign In",
      component: Auth(SignIn, false),
    },
    {
      path: "/auth/sign-up",
      name: "Sign Up",
      component: Auth(SignUp, false),
    },
    {
      path: "/auth/reset-password",
      name: "Reset Password",
      component: ResetPassword,
    },
    {
      path: "/auth/404",
      name: "404 Page",
      component: Page404,
    },
    {
      path: "/auth/500",
      name: "500 Page",
      component: Page500,
    },
  ],
  component: null,
};

const componentsRoutes = {
  id: "데이터 현황",
  path: "/components",
  icon: <Grid />,
  children: [
    {
      path: "/components/alerts",
      name: "지역별 데이터 현황",
      component: Alerts,
    },
    {
      path: "/components/accordion",
      name: "차량별 데이터 현황",
      component: Accordion,
    },
    {
      path: "/components/avatars",
      name: "센서별 데이터 현황",
      component: Avatars,
    },
    {
      path: "/components/badges",
      name: "공개/판매 데이터 현황",
      component: Badges,
    },
    {
      path: "/components/buttons",
      name: "예외 상황 데이터 현황",
      component: Buttons,
    },
    {
      path: "/components/cards",
      name: "수동 추가 데이터 관리",
      component: Cards,
    },
  ],
  component: null,
};

const formsRoutes = {
  id: "Forms",
  path: "/forms",
  icon: <CheckSquare />,
  children: [
    {
      path: "/forms/pickers",
      name: "Pickers",
      component: Pickers,
    },
    {
      path: "/forms/selection-controls",
      name: "Selection Controls",
      component: SelectionCtrls,
    },
    {
      path: "/forms/selects",
      name: "Selects",
      component: Selects,
    },
    {
      path: "/forms/text-fields",
      name: "Text Fields",
      component: TextFields,
    },
    {
      path: "/forms/dropzone",
      name: "Dropzone",
      component: Dropzone,
    },
    {
      path: "/forms/editors",
      name: "Editors",
      component: Editors,
    },
    {
      path: "/forms/formik",
      name: "Formik",
      component: Formik,
    },
  ],
  component: null,
};

const tablesRoutes = {
  id: "Tables",
  path: "/tables",
  icon: <List />,
  children: [
    {
      path: "/tables/simple-table",
      name: "Simple Table",
      component: SimpleTable,
    },
    {
      path: "/tables/advanced-table",
      name: "Advanced Table",
      component: AdvancedTable,
    },
  ],
  component: null,
};

const iconsRoutes = {
  id: "기기 관리",
  path: "/icons",
  icon: <Heart />,
  children: [
    {
      path: "/icons/material-icons",
      name: "기기 관리",
      component: MaterialIcons,
    },
    {
      path: "/icons/feather-icons",
      name: "전체 기관 기기현황",
      component: FeatherIcons,
    },
  ],
  component: null,
};

const chartRoutes = {
  id: "Charts",
  path: "/charts",
  icon: <PieChart />,
  component: Chartjs,
  children: null,
};

const mapsRoutes = {
  id: "Maps",
  path: "/maps",
  icon: <Map />,
  children: [
    {
      path: "/maps/google-maps",
      name: "Google Maps",
      component: GoogleMaps,
    },
    {
      path: "/maps/vector-maps",
      name: "Vector Maps",
      component: VectorMaps,
    },
  ],
  component: null,
};

const landingRoutes = {
  id: "Landing Page",
  path: "/",
  header: "Docs",
  icon: <Monitor />,
  component: Auth(Landing, true),
  children: null,
};

// This route is only visible while signed in
const protectedPageRoutes = {
  id: "Private",
  path: "/private",
  component: ProtectedPage,
  children: null,
  guard: AuthGuard,
};

// Routes using the Dashboard layout
export const dashboardLayoutRoutes = [
  dashboardsRoutes,
  pagesRoutes,
  invoiceRoutes,
  iconsRoutes,
  componentsRoutes,
  tasksRoutes,
  calendarRoutes,
  chartRoutes,
  formsRoutes,
  tablesRoutes,
  mapsRoutes,
];

// Routes using the Auth layout
export const authLayoutRoutes = [authRoutes];

// Routes using the Presentation layout
export const presentationLayoutRoutes = [landingRoutes];

// Routes that are protected
export const protectedRoutes = [protectedPageRoutes];

// Routes visible in the sidebar
export const sidebarRoutes = [
  dashboardsRoutes,
  pagesRoutes,
  invoiceRoutes,
  iconsRoutes,
  componentsRoutes,
  tasksRoutes,
  calendarRoutes,
  authRoutes,
  chartRoutes,
  formsRoutes,
  tablesRoutes,
  mapsRoutes,
];
