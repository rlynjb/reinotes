"use client";

import {
  useContext,
  useEffect
} from "react";
import {
  Breadcrumbs
} from "@/ui/Breadcrumbs";
import {
  BreadcrumbsContext
} from "./breadcrumb";


export const Breadcrumb = () => {
  //if useBreadcrumb is used, use context
  const context = useContext(BreadcrumbsContext)

  return (
    <Breadcrumbs items={context.pathItems} />
  )
}

export const UseBreadcrumb = ({pathItems}: any) => {
  const context = useContext(BreadcrumbsContext)

  useEffect(() => {
    context.setPathItems(pathItems || [])

    return () => context.setPathItems([])
  })
}