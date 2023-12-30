
import SideBar from '@/components/sidebar/sidebar'
import { Button } from '@/components/ui/button';
import React from 'react'
import { DataTable } from './_components/data-table';
import { Book, columns } from './_components/columns';
import prisma from '@/lib/prisma';
import Link from 'next/link';

type Props = {
    children: React.ReactNode;  
}

const page =async ({children}: Props) => {
    const data:Book[] =await prisma.book.findMany()
  return (
    <>
  
    <div className="p-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-2xl font-medium">
            Course setup
          </h1>
          <span className="text-sm text-slate-700">
            Complete all fields 8
          </span>
        </div>
        <Link href="/admin/create">
          <Button>create </Button>
        </Link>
      </div>
      <div className=" mt-16">
        
      {/* datatable */}
      <DataTable columns={columns} data={data} />
         
           
      </div>
    </div>
  </>
  )
}

export default page