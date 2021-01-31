import React, {FunctionComponent} from 'react'
import Markdown from 'react-markdown'
import Image from 'next/image'
import {NextSeo} from 'next-seo'

type InstructorProps = {
  name: string
  company?: string
  twitterHandle: string
  websiteURL?: string
  children?: string
  imageUrl: string
  className?: string
  slug: string
}

const Instructor: FunctionComponent<InstructorProps> = ({
  name,
  slug,
  company,
  imageUrl,
  children,
  className,
  websiteURL,
  twitterHandle,
}) => {
  return (
    <>
      <NextSeo
        title={`Learn web development from ${name} on egghead`}
        twitter={{
          handle: twitterHandle,
          site: `@eggheadio`,
          cardType: 'summary_large_image',
        }}
        openGraph={{
          title: `Learn web development from ${name} on egghead`,
          images: [
            {
              url: `http://og-image-react-egghead.now.sh/instructor/${slug}?v=20201103`,
            },
          ],
        }}
      />

      <div
        className={`bg-white dark:bg-gray-800 dark:text-gray-200 shadow-sm h-full relative items-start overflow-hidden rounded-md  grid md:grid-cols-8 md:gap-4 ${
          className ? className : ''
        }`}
      >
        <div
          className="md:col-span-4 flex flex-col justify-start h-full relative"
          style={{
            minHeight: '400px',
          }}
        >
          <Image
            layout="fill"
            src={imageUrl}
            className="h-full w-full shadow object-cover object-top"
            alt={name}
          />
        </div>
        <div className="md:col-span-4  flex flex-col justify-start h-full p-8">
          <p className="text-xs uppercase text-gray-500">{company}</p>
          <h1 className="sm:text-2xl text-xl font-bold">{name}</h1>
          <div className="mt-2">
            <ul className="flex space-x-5">
              {twitterHandle && (
                <li>
                  <a
                    href={`http://twitter.com/${twitterHandle}`}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
              )}

              {websiteURL && (
                <li>
                  <a
                    href={websiteURL}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Website</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>
                  </a>
                </li>
              )}
            </ul>
          </div>

          {children && (
            <Markdown className="prose dark:prose-dark pt-2 sm:text-base text-sm leading-thight text-gray-800 dark:text-gray-200 mt-2 md:mt-8">
              {children}
            </Markdown>
          )}
        </div>
      </div>
    </>
  )
}

export default Instructor
