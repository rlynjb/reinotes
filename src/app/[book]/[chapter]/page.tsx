"use client"

import {
  UseBreadcrumb
} from "@/utils/breadcrumb";
import { notesNav } from '@/constants';
import { ViewChapterNotes } from '@/features';
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';


export default function Page({ params }: { params: { book: string, chapter: string } }) {
  const router = useRouter()
  const getItemObj = notesNav[params.book]
  const findChapterNotes = getItemObj.find(chapter => chapter.id === params.chapter)

  useEffect(() => {
    console.log(getItemObj[0].title)
  }, [getItemObj])


  const breadcrumb = [
    {
      label: 'Home',
      link: '/'
    },
    {
      label: getItemObj[0].book,
      link: '/'
    },
    {
      label: getItemObj[0].title,
      link: '/'
    }
  ]


  return (
    <>
      <UseBreadcrumb pathItems={breadcrumb} />
      <ViewChapterNotes selected={findChapterNotes?.data} />
    </>
  )
}