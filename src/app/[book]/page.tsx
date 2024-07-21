export default function Page({ params }: { params: { book: string } }) {
  return <div>Book: {params.book}</div>
}