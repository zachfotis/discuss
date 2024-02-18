'use client';

import * as actions from '@/actions/search';
import { Input } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';

export default function SearchInput() {
  const searchParams = useSearchParams();

  return (
    <form action={actions.search}>
      <Input name="term" defaultValue={searchParams.get('term') || ''} placeholder="Search" size="sm" />
    </form>
  );
}
