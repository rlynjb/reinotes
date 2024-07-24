"use client";

import {
  FC,
} from "react";

interface itemsProps {
  label: string
  link?: string
}

interface BreadcrumbsProps {
  items?: itemsProps[]
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({items}) => {
  let initialItems = items || [
    { label: 'Home', link: '/' },
    { label: 'Sample', link: '/sample' },
    { label: 'Add Sample', link: '/sample/add' }
  ]

  return (
    <>
      <div className="text-sm breadcrumbs">
        <ul>
          {initialItems.map((item: any, index: number) => (
            <li key={index}>
              <a href={item.link}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Breadcrumbs;
