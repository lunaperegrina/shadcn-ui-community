import Docs from '@/components/Docs';

export default function Page({ params }: { params: { slug: string } }) {

  return (
    <Docs params={
      { slug: params.slug }
    } />
  );
}