"use client";

import {
  useContext,
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