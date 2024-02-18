'use client';

import * as actions from '@/actions';
import { Button, Input, Popover, PopoverContent, PopoverTrigger, Textarea } from '@nextui-org/react';
import { useFormState } from 'react-dom';
import FormButton from '../common/formButton';

export default function TopicCreateForm() {
  const [formState, action] = useFormState(actions.createTopic, {
    errors: {},
  });

  return (
    <Popover placement="left-start">
      <PopoverTrigger>
        <Button color='primary'>Create a Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Topic</h3>
            <Input name="name" label="Name" labelPlacement="outside" placeholder="Name" isInvalid={!!formState.errors.name} errorMessage={formState.errors.name?.join(', ')} />
            <Textarea
              name="description"
              label="Description"
              labelPlacement="outside"
              placeholder="Description"
              isInvalid={!!formState.errors.description}
              errorMessage={formState.errors.description?.join(', ')}
            />

            {formState.errors._form ? <div className='p-2 bg-red-200 border border-red-400 rounded-lg text-center'>{formState.errors._form?.join(', ')}</div> : null}

            <FormButton>Create</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
