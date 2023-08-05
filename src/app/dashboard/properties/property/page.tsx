import { LayoutDashboard, Users2, DoorOpen, CheckCircle2, Link } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import NoTenantIcon from "@/components/Icons/NoTenantIcon";
import NoApplicantIcon from "@/components/Icons/NoApplicantIcon";

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import PropertyComp from './PropertyComp';


export default function property() {
    return (
        <div className="flex flex-col w-full mx-8">
            <PropertyComp />
        </div>
    )
}