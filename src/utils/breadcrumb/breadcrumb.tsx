"use client";

/**
 * Context API implement of BreadCrumbs
 * https://www.gcasc.io/blog/next-dynamic-breadcrumbs
 */

import {
  FC,
  createContext,
  useState,
  ReactNode,
} from "react";


interface itemsProps {
  label: string
  link?: string
}

interface BreadcrumbsContextProps {
  pathItems: itemsProps[]
  setPathItems: (items: itemsProps[]) => void
}

interface BreadcrumbsProviderProps {
  children?: ReactNode
}


export const BreadcrumbsContext = createContext<BreadcrumbsContextProps>({
  pathItems: [],
  setPathItems: (items: itemsProps[]) => {}
})

export const BreadcrumbsProvider: FC<BreadcrumbsProviderProps> = ({ children }) => {
  const [ pathItems, setPathItems] = useState<any[]>([])

  const context = {
    pathItems,
    setPathItems,
  }

  return (
    <BreadcrumbsContext.Provider value={context}>
      {children}
    </BreadcrumbsContext.Provider>
  )
}