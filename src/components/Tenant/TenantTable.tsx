'use client'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Pagination from "../Pagination"
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";




type Props = {}
export default function TenantTable({ }: Props) {
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(5);

    const table = [1, 2, 3, 4, 5, 6, 7,]
    return (
        <div className="w-full">
            <div className="p-2 space-y-4 md:items-center md:space-y-0 md:p-0 md:flex md:gap-5">
                <div className="md:w-72 md:mb-2">
                    <Input
                        title="Search Tenants"
                        placeholder="Search Tenants"
                    />
                </div>
                <div className="md:w-32">
                    <Button className="bg-[#f0eeee] text-secondary-10">
                        Filter by Date
                    </Button>
                </div>
            </div>
            <Table className="mt-5">
                <TableHeader>
                    <TableRow>
                        <TableHead >Name</TableHead>
                        <TableHead>Property</TableHead>
                        <TableHead>Phone No.</TableHead>
                        <TableHead>Move in Date</TableHead>
                        <TableHead>Tenancy Period</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {table.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell >Bolaji Suraji</TableCell>
                            <TableCell>Adeola Odeku Estate Lek...</TableCell>
                            <TableCell>+234783993721</TableCell>
                            <TableCell >12/01/2020</TableCell>
                            <TableCell >3 Years</TableCell>
                            <TableCell >icon</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(10 / rowsPerPage)}
                onPageChange={() => { }}
            />
        </div>

    )
}