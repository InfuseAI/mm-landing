import React from 'react'
import {
  InboxIcon,
  SparklesIcon,
  UserGroupIcon
} from '@heroicons/react/outline'

import { useTranslation } from 'next-i18next';

import CFUrl from './cf'

export default function Coffee () {
  const { t } = useTranslation('common');
  return (
    <div className="relative pt-16 pb-32 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100" />
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center"
                  style={{backgroundColor: "FFB258"}}
                >
                  <InboxIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  {t('section-secondary-title')}
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  {t('section-secondary-content')}
                </p>
                <div className="mt-6">
                  <a
                    href={CFUrl}
                    className="inline-flex bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                    style={{backgroundColor: "#9244f3"}}
                  >
                  {t('section-secondary-action')}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={t('section-secondary-img')}
                alt={t('section-secondary-img-alt')}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center"
                  style={{backgroundColor: "FFB258"}}
                >
                  <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  {t('section-third-title')}
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  {t('section-third-content')}
                </p>
                <div className="mt-6">
                  <a
                    href={CFUrl}
                    className="inline-flex bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                    style={{backgroundColor: "#9244f3"}}
                  >
                    {t('section-third-action')}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src={t('section-third-img')}
                alt={t('section-third-img-alt')}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center"
                  style={{backgroundColor: "FFB258"}}
                >
                  <InboxIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  {t('section-fourth-title')}
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  {t('section-fourth-content')}
                </p>
                <div className="mt-6">
                  <a
                    href={CFUrl}
                    className="inline-flex bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                    style={{backgroundColor: "#9244f3"}}
                  >
                  {t('section-fourth-action')}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={t('section-fourth-img')}
                alt={t('section-fourth-img-alt')}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center"
                  style={{backgroundColor: "FFB258"}}
                >
                  <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  {t('section-subscribe-title')}
                </h2>
                <div className="mt-4 text-lg text-gray-500">
                  <form
                    action="https://infuseai.us1.list-manage.com/subscribe/post?u=2b18366427f11835f05f68aeb&amp;id=b82bfd845e"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    target="_blank"
                    noValidate
                  >
                    <div className="mt-4">
                      <input
                        type="email"
                        name="EMAIL"
                        id="mce-EMAIL"
                        placeholder="Email Address"
                        className="inline-flex bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow"
                        style={{width: 300}}
                      />
                    </div>
                    <div className="mt-4">
                      <input
                        type="text"
                        name="FNAME"
                        id="mce-FNAME"
                        placeholder="First Name"
                        className="inline-flex bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow"
                        style={{width: 300}}
                      />
                    </div>
                    <div className="mt-4">
                      <input
                        type="text"
                        name="LNAME"
                        id="mce-LNAME"
                        placeholder="Last Name"
                        className="inline-flex bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow"
                        style={{width: 300}}
                      />
                    </div>
                    <div className="mt-4">
                      <input
                        type="url"
                        name="MMERGE3"
                        id="mce-MMERGE3"
                        placeholder="LinkedIn Profile URL"
                        className="inline-flex bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow"
                        style={{width: 300}}
                      />
                    </div>
                    <div className="mt-6">
                      <input
                        type="submit"
                        value={t('section-subscribe-action')}
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        className="inline-flex bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                        style={{backgroundColor: '#9244f3'}}
                    />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src={t('section-subscribe-img')}
                alt={t('section-subscribe-img-alt')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
