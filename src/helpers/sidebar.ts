import DashboardIcon from "@/components/Icons/DashboardIcon";
import MaintenanceIcon from "@/components/Icons/MaintenanceIcon";
import PropertiesIcon from "@/components/Icons/PropertiesIcon";
import TenantIcon from "@/components/Icons/TenantIcon";
import LeaseIcon from "@/components/Icons/LeaseIcon";
import ApplicantIcon from "@/components/Icons/ApplicantIcon";
import ReportIcon from "@/components/Icons/ReportIcon";
import SettingsIcon from "@/components/Icons/SettinigsIcon";

interface ISideBarData {
  title: string;
  path: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  iconActive?: JSX.Element;
}
export const SideBarData: ISideBarData[] = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: DashboardIcon,
  },
  {
    title: "Properties",
    path: "/dashboard/properties",
    icon: PropertiesIcon,
  },
  {
    title: "Tenant",
    path: "/dashboard/tenant",
    icon: TenantIcon,
  },
  {
    title: "Lease",
    path: "/dashboard/lease",
    icon: LeaseIcon,
  },
  {
    title: "Maintenance",
    path: "/dashboard/maintenance",
    icon: MaintenanceIcon,
  },
  {
    title: "Applicant",
    path: "/dashboard/applicant",
    icon: ApplicantIcon,
  },
  {
    title: "Report",
    path: "/dashboard/report",
    icon: ReportIcon,
  },
  {
    title: "Settings",
    path: "/dashboard/settings",
    icon: SettingsIcon,
  },
];
