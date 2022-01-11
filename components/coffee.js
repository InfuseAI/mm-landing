import React from 'react'
import {
  InboxIcon,
  SparklesIcon,
  UserGroupIcon
} from '@heroicons/react/outline'

import CFUrl from './cf'

export default function Coffee () {
  return (
    <div className="relative pt-16 pb-32 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100" />
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center"
                  style={{backgroundColor: "#365abd"}}
                >
                  <InboxIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  However you work, we make it work
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Integrate whatever workflow and tools your infrastructure is made of to PrimeHub. Expand your ML tech stack endlessly through an open API. Pick your tools and give it a go now.
                </p>
                <div className="mt-6">
                  <a
                    href={CFUrl}
                    className="inline-flex bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                    style={{backgroundColor: "#365abd"}}
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo;This is a Game Changer
                    &rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-6 w-6 rounded-full"
                        src="/yunfang.jpg"
                        alt=""
                      />
                    </div>
                    <div className="text-base font-medium text-gray-700">
                      Yunfang, Data Team Lead
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="./neil-thomas-SIU1Glk6v5k-unsplash.jpg"
                alt="Inbox user interface"
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
                  style={{backgroundColor: "#365abd"}}
                >
                  <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  No commitment until you find the right tool
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Frustrated with the infinite selection of ML tools out there? We are, too. That’s why PrimeHub is designed for you to integrate the tools you like, instead of locking you with the “house” selection.
                </p>
                <div className="mt-6">
                  <a
                    href={CFUrl}
                    className="inline-flex bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                    style={{backgroundColor: "#365abd"}}
                  >
                    Try it now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/designed-daniel-mccullough-unsplash-optimized.jpg"
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>

        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24 mt-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center"
                  style={{backgroundColor: "#365abd"}}
                >
                  <UserGroupIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Track your model at any stage
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Keep your ML models and products on track. Full features for you to manage your ML before, during, and after deployment with model versioning and tracking.
                </p>
                <div className="mt-6">
                  <a
                    href={CFUrl}
                    className="inline-flex bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                    style={{backgroundColor: "#365abd"}}
                  >
                    Try free
                  </a>
                </div>
                <span className="text-sm text-gray-400 block mt-4">No credit card required.<br />Free for 1 group, starting from $999/month for extra group and 3 users</span>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/collaborate-annie-spratt-unsplash-optimized.jpg"
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>

        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center"
                  style={{backgroundColor: "#365abd"}}
                >
                  <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Focus on what you are best at
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Whether you are a data scientist, an IT manager, or a data engineer, your time should be spent on where it generates the most value. PrimeHub makes sure of it with easy integration and operation setup.
                </p>
                <div className="mt-6">
                  <a
                    href={CFUrl}
                    className="inline-flex bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                    style={{backgroundColor: "#365abd"}}
                  >
                    Easy setup
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/nicolas-hoizey--4trKf0Kbow-unsplash.jpg"
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
