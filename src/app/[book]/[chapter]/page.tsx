export default function Page({ params }: { params: { chapter: string } }) {
  return <div>Chapter: {params.chapter}</div>
}