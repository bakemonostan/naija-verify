import NoMaintenanceIcon from "@/components/Icons/NoMaintenanceIcon"
import { UserCircle } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectGroup,
    SelectLabel,
    SelectValue
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function MaintenancePage() {
    return (
        <div className="flex flex-col py-6">
            <div className="">
                <h4 className="font-semibold text-2xl font-prompt">Maintenance</h4>
                <p className="font-rubik text-gray-500 ">See all your maintenance request here</p>
                <div className="flex flex-col border border-gray-300 justify-center px-2 lg:px-4 mx-4 lg:mx-12 text-center mt-14">
                    <div className="  py-2 px-4">
                        <div className="flex fllg:px-0 ex-row justify-between text-gray-400 py-1">
                            <div className="flex flex-row items-center">
                                <div className="rounded-full bg-primary h-3 w-3 mr-4"></div>
                                <p className="text-xs text-left font-rubik">#Request 3E7H - Plumbing || Adeola Odeku Estate, Lekki</p>
                            </div>
                            <div className="hidden lg:block">
                                <div className="flex flex-row">  <UserCircle className="self-center mb-1 h-6 w-12 text-gray-400" /><span className="text-gray-400 text-sm self-center">Bolaji Suraj</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="h-px mx-5 bg-gray-300"></div>
                    <div className="flex flex-col text-left py-2 px-2 lg:px-5">
                        <h3 className="font-medium font-rubik text-lg mb-2">My room has stopped receiving water supply</h3>
                        <p className="text-sm text-gray-400 ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                        </p>

                    </div>
                    <div className="grid grid-cols-2 gap-y-2 lg:grid-cols-3 gap-x-2 lg:gap-x-5 w-full lg:w-6/12 px-3 my-6">
                        <img src="/images/interior.png" alt="" />
                        <img src="/images/interior2.png" alt="" />
                        <img src="/images/interior3.png" alt="" />

                    </div>
                    <div className="h-px mx-5 my-4 bg-gray-300"></div>
                    <div className="flex flex-col text-left h-full px-3">
                        <h4 className="font-medium font-rubik text-lg">Respond to Request</h4>
                        <div className="flex flex-col items-center lg:flex-row w-full lg:w-8/12 lg:space-x-6 space-y-8 h-20 py-6 lg:py-20">
                            <div className="flex flex-col w-full lg:mt-8">
                                <p className="text-xs">Tenant Mail</p>
                                <Input placeholder="Bolajisuraj@gmail.com" className="bg-gray-100 text-gray-400 py-3 mt-0" />

                            </div>
                            <Select >
                                <div className="flex flex-col w-full">

                                    <p className="text-xs">Request Type</p>

                                    <SelectTrigger className="border w-full border-gray-400 text-gray-400 flex flex-row justify-between lg:px-2">
                                        <SelectValue placeholder="Plumbing" />
                                    </SelectTrigger>
                                </div>
                                <SelectContent className="min-w-max py-2 px-4 space-y-4 font-rubik rounded-none shadow-sm">
                                    <SelectGroup>
                                        <SelectItem value="plumbing">Plumbing</SelectItem>
                                        <SelectItem value="electricity">Electricity</SelectItem>
                                        <SelectItem value="repair">Repair</SelectItem>
                                        <SelectItem value="replacement">Replacement</SelectItem>
                                    </SelectGroup>
                                </SelectContent>

                            </Select>

                            <Select >
                                <div className="flex flex-col w-full">
                                    <p className="text-xs">Status</p>

                                    <SelectTrigger className="border w-full ml-0 border-gray-400 text-gray-400 flex flex-row justify-between px-2">
                                        <SelectValue placeholder="Ongoing" />
                                    </SelectTrigger>
                                </div>
                                <SelectContent className="min-w-max py-2 px-4 space-y-4 font-rubik rounded-none shadow-sm">
                                    <SelectGroup>
                                        <SelectItem value="plumbing">Ongoing</SelectItem>
                                        <SelectItem value="plumbing">Completed</SelectItem>
                                    </SelectGroup>
                                </SelectContent>

                            </Select>


                        </div>
                        <div className=" lg:mt-0 mt-56 w-full lg:w-8/12">
                            <Textarea placeholder="Provide more details about your property" />
                        </div>
                        <div className="flex flex-row justify-end w-full lg:w-8/12 mt-6 pb-10">
                            <Button className="w-full lg:w-3/12 ">Reply</Button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}