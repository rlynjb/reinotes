"use client"

import {
  UseBreadcrumb,
} from "@/utils/breadcrumb";
import { notesNav } from '@/constants';
import { ViewChapterNotes } from '@/features';
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';


/**
 * TODO:
 * - implement router or ability to remember which item was selected for certain time period
 * -- so when browser is refreshed, it will remember the selected item
 * - add ability to edit notes
 *
 * - add simple note/desc to the top of page
 * - add ability to search notes
 * - add ability to filter notes by book or chapter
 * - add ability to add new notes
 * - add ability to delete notes
 * - add ability to share notes
 *
 * backlog:
 * - add ability to bookmark a note or just a important reminder feature
 * - add theme switcher with option of light and dark mode
 * - ex. https://cheatsheets.netlify.app/sheet/react/
 * - add ability to sort nav items by book or chapter
 * - improve UI table note section
 */


export default function Home() {
  const router = useRouter()
  const initialSelected = Object.values(notesNav)[0][0] // get first item in an object

  useEffect(() => {
    // redirect to first item in notesNav
    router.push(`/${initialSelected.bookId}/${initialSelected.id}`)
  }, [])
  

  const pathItems = [
    {
      label: 'Home',
      link: '/'
    },
    {
      label: initialSelected.book,
      link: '/'
    },
    {
      label: initialSelected.title,
      link: '/'
    }
  ]


  return (
    <>
      <UseBreadcrumb pathItems={pathItems} />

      <ViewChapterNotes selected={initialSelected.data} />
    </>
  );
}
