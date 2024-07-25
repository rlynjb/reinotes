"use client"

import {
  MenuWithTitle
} from "@/ui"
import {
  Breadcrumb,
} from "@/utils/breadcrumb";
import { notesNav } from '@/constants';
import { useRouter } from 'next/navigation'



export const MainLayout = ({ children }: any) => {
  const router = useRouter()
  const initialSelected = Object.values(notesNav)[0][0] // get first item in an object

  const gotoItem = (item: any) => {    
    // [book]/[chapter]
    router.push(`/${item.bookId}/${item.id}`)
  }


  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12">
        <Breadcrumb />
      </div>

      <div className="col-span-3">
        <MenuWithTitle
          navItems={notesNav}
          initialItem={initialSelected}
          selectedItem={(item: any) => gotoItem(item)}
        />
      </div>

      <div className="col-span-9">
        {children}
      </div>
    </div>
  )
}