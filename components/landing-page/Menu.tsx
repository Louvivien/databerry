import { Popover, Transition } from '@headlessui/react';
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from '@heroicons/react/20/solid';
import {
  ArrowPathIcon,
  ChartPieIcon,
  ChatBubbleLeftEllipsisIcon,
  CpuChipIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  ServerIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline';
import { Fragment } from 'react';

const solutions = [
  {
    name: 'Embed Agent on your website',
    description:
      'Automate customer support with a ChatGPT Bot trained on your data',
    href: '#for-customer-support',
    icon: ChatBubbleLeftEllipsisIcon,
  },
  {
    name: 'Crisp Plugin',
    description:
      'Connect your agent to Crisp. Summarize conversations and more!',
    href: 'https://www.databerry-one.vercel.app/products/crisp-plugin',
    icon: (props: any) => (
      <img
        {...props}
        src="https://www.freelance-stack.io/wp-content/uploads/2022/07/crispchat-logo.png"
        alt="Crisp Logo"
      />
    ),
  },
  {
    name: 'Slack Bot',
    description: 'Deploy an Agent trained on your data to Slack',
    href: 'https://www.databerry-one.vercel.app/products/slack-bot',
    icon: (props: any) => (
      <img
        {...props}
        src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg"
        alt="Slack Logo"
      />
    ),
  },
  {
    name: 'Datberry API',
    description: 'Document Retrieval as a service',
    href: 'https://docs.databerry-one.vercel.app/introduction',
    icon: ServerIcon,
  },
  {
    name: 'On Premise',
    description: 'Install Databerry on your own infrastructure',
    href: 'https://github.com/gmpetrov/databerry',
    icon: CpuChipIcon,
  },
];
const callsToAction = [
  {
    name: 'Watch demo',
    href: 'https://www.youtube.com/watch?v=LPISZdaiDBM',
    icon: PlayCircleIcon,
  },
  {
    name: 'Book a Call',
    href: 'https://calendly.com/databerry-georges/15min',
    icon: PhoneIcon,
  },
];

export default function Example() {
  return (
    <Popover className="relative">
      <Popover.Button className="popover-button inline-flex items-center text-sm font-semibold leading-6 text-violet-400 gap-x-1 !bg-none">
        <span>Solutions</span>
        <ChevronDownIcon className="w-5 h-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute z-10 flex w-screen px-4 mt-5 -translate-x-1/2 left-1/2 max-w-max">
          <div className="flex-auto w-screen max-w-md overflow-hidden text-sm leading-6 bg-white shadow-lg rounded-3xl ring-1 ring-gray-900/5">
            <div className="p-4">
              {solutions.map((item) => (
                <div
                  key={item.name}
                  className="relative flex p-4 rounded-lg group gap-x-6 hover:bg-gray-50"
                >
                  <div className="flex items-center justify-center flex-none mt-1 rounded-lg h-11 w-11 bg-gray-50 group-hover:bg-white">
                    <item.icon
                      className="w-6 h-6 text-gray-600 group-hover:text-indigo-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <a href={item.href} className="font-semibold text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
              {callsToAction.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                >
                  <item.icon
                    className="flex-none w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
