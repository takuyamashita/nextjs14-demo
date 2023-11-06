import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ArticleList = () => {
  return (
    <div>
      <article className="shadow my-4">
        <Link
          href="#"
          className="hover:opacity-75"
        >
          <Image
            src="https://source.unsplash.com/collection/1236951/1000x500?sig=1"
            alt="article image"
            width={1000}
            height={500}
          />
        </Link>
        <div className="flex flex-col justify-start p-4">
          <Link
            href="#"
            className="text-orange-300 pb-4 font-bold"
          >
            Technology
          </Link>
          <Link
            href="#"
            className="text-orange-300"
          >
            Linkutomotive
          </Link>
          <p className="text-sm">Published on 2023</p>

          <Link
            href="#"
            className="text-2xl font-bold pb-6"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Link>
          <Link
            href="#"
            className="text-orange-300"
          >
            Read more
          </Link>
        </div>
      </article>
      <article className="shadow my-4">
        <Link
          href="#"
          className="hover:opacity-75"
        >
          <Image
            src="https://source.unsplash.com/collection/1236951/1000x500?sig=2"
            alt="article image"
            width={1000}
            height={500}
          />
        </Link>
        <div className="flex flex-col justify-start p-4">
          <Link
            href="#"
            className="text-orange-300 pb-4 font-bold"
          >
            Technology
          </Link>
          <Link
            href="#"
            className="text-orange-300"
          >
            Linkutomotive
          </Link>
          <p className="text-sm">Published on 2023</p>

          <Link
            href="#"
            className="text-2xl font-bold pb-6"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Link>
          <Link
            href="#"
            className="text-orange-300"
          >
            Read more
          </Link>
        </div>
      </article>
      <article className="shadow my-4">
        <Link
          href="#"
          className="hover:opacity-75"
        >
          <Image
            src="https://source.unsplash.com/collection/1236951/1000x500?sig=3"
            alt="article image"
            width={1000}
            height={500}
          />
        </Link>
        <div className="flex flex-col justify-start p-4">
          <Link
            href="#"
            className="text-orange-300 pb-4 font-bold"
          >
            Technology
          </Link>
          <Link
            href="#"
            className="text-orange-300"
          >
            Linkutomotive
          </Link>
          <p className="text-sm">Published on 2023</p>

          <Link
            href="#"
            className="text-2xl font-bold pb-6"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Link>
          <Link
            href="#"
            className="text-orange-300"
          >
            Read more
          </Link>
        </div>
      </article>
    </div>
  )
}

export default ArticleList
