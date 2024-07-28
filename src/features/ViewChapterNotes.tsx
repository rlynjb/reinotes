"use client"

import {
  Table,
} from "@/ui"
import { ViewNote } from '@/features';
/*
import {
  useI18nTranslate,
} from "../utils/i18n"
*/

export const ViewChapterNotes = (props: any) => {
  //const translate = useI18nTranslate()

  /*
  const columns = [
    { name: `${translate('howtoField')}`, field: "problem" },
    { name: `${translate('solutionLabel')}`, field: "title" }
  ]
  */

  const columns = [
    { name: 'How To', field: "problem" },
    { name: 'Solution', field: "title" }
  ]

  return (
    <>
      <Table
        columns={columns}
        rows={props.selected}
      >
        {(customRows: any) => customRows.map((item: any, index: number) =>
          <tr key={index}>
            <td className="align-text-top">
              {item.problem ? item.problem : ''}
            </td>
            <td className="align-text-top">
              <ViewNote
                title={item.title}
                desc={item.desc}
                sample={item.sample}
              />
            </td>
          </tr>
        )}
      </Table>
    </>
  )
}

export default ViewChapterNotes;
