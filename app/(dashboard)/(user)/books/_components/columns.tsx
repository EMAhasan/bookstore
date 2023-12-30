"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, Pencil } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowUpDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Book } from "@prisma/client"
import { StaticImport } from "next/dist/shared/lib/get-img-props"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

// export type Book = {
//   id: string
//   userId: string
//   title: string
//    image:string
//   description:string|null
//   author: string|null
//   pageCount :number
// //   amount: number
// //   status: "pending" | "processing" | "success" | "failed"
// //   email: string
// }

export const columns: ColumnDef<Book>[] = [
    

 
  {
    accessorKey: "userId",
    header: "UserId",
  },
  {
    accessorKey: "image",
    header: () => <div className="text-right">Image</div>,
    cell: ({ row }) => {
      const imageUrl:string|StaticImport=row.getValue("image")||'vercel.svg'
     
      return (     <div className="relative aspect-video m-6 ">
      <Image
        alt="Upload"
        fill
        className="object-cover rounded-md"
        src={imageUrl}
      />
    </div>)
    },

  },
  {
    accessorKey: "title",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Title
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
  },
  {
    accessorKey: "author",
    header: "Author",
  },

  {
    accessorKey: "pageCount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("pageCount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)
 
      return <div className="text-right font-medium">{formatted}</div>
    },
    
},
{
    id: "actions",
    cell: ({ row }) => {
      const book = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
          <Link href={`/admin/books/${book.id}`}>
              <DropdownMenuItem>
                <Pencil className="h-4 w-4 mr-2" />
                Edit
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
