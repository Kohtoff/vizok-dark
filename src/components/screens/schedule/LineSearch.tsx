import { useState } from 'react';
import { Tab } from '@headlessui/react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function LineSearch() {
  let [categories] = useState({
    Buses: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14],
    Trains: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14],
    Trolleybuses: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14],
  });

  return (
    <div className='w-full px-2 py-5 sm:px-0'>
      <Tab.Group>
        <Tab.List className='flex space-x-1 rounded-xl p-1'>
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 focus:ring-none rounded-lg focus-visible:outline-none focus-visible:ring-none text-sm font-medium leading-5',
                  selected
                    ? 'bg-white/[0.12] hover:text-white shadow'
                    : 'hover:bg-white/[0.12] hover:text-white',
                )
              }>
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className='mt-2'>
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl',
                ' focus:outline-none focus-visible:outline-none',
              )}>
              <ul className='flex grow flex-wrap gap-y-2 gap-3'>
                {posts.map((post) => (
                  <li
                    key={post}
                    className='relative items-center justify-center flex rounded-md border-2 w-[32px] h-[32px]  aspect-[1/2] hover:bg-gray'>
                    {post}
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
