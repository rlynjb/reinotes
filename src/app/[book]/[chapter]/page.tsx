import {
  UseBreadcrumb
} from "@/utils/breadcrumb";
import { notesNav } from '@/constants';
import { ViewChapterNotes } from '@/features';


export default function Page({ params }: { params: { book: string, chapter: string } }) {
  const getItemObj = notesNav[params.book]
  const findChapter = getItemObj.find(chapter => chapter.id === params.chapter)

  const breadcrumb = [
    {
      label: 'Home',
      link: '/'
    },
    {
      label: findChapter?.book,
      link: '/'
    },
    {
      label: findChapter?.title,
      link: '/'
    }
  ]


  return (
    <>
      <UseBreadcrumb pathItems={breadcrumb} />
      <ViewChapterNotes selected={findChapter?.data} />
    </>
  )
}