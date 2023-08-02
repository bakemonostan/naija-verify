import { MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input"

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"


export default function property() {
    return (
        <div className="flex flex-col w-full   mx-8">
            <div className='py-6'>
                <h2 className='text-[26px] font-semibold '>Adeola Odeku Estate, Lekki</h2>
                <p className='text-gray-400'>34, Chirs Festroad, Lagos, CO 10021</p>
            </div>
            <div className='flex flex-col justify-center w-8/12'>
                <Button className='font-bold font-rubik text-sm bg-white border border-primary text-primary'>Edit Property</Button>
                <div className='py-10'>
                    <div className=''>
                        <Tabs defaultValue="account" className="w-full bg-white">
                            <TabsList className="flex flex-row bg-white text-gray-800  w-full">
                                <TabsTrigger value="account" className='text-primary bg-white active:text-primary active:border-b-primary'>Account</TabsTrigger>
                                <TabsTrigger value="password">Password</TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}