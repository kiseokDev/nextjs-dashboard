import { headers } from 'next/headers';

export default function Page() {
  const headersList = headers();
  const pathname = headersList.get('x-pathname');
  return (
    <p>
      Dashboard Page
      <p>{`pathname : ${pathname}`}</p>
    </p>
  );
}
