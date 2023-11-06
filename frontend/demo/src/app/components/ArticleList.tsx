import { Post } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  posts: Post[]
}

const ArticleList = ({ posts }: Props) => {
  return (
    <div>
      {posts.map((post) => (
        <article
          className="shadow my-4"
          key={post.id}
        >
          <Link
            href={`/posts/${post.id}`}
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
            <p className="text-sm">{post.createdAt}</p>

            <Link
              href="#"
              className="text-2xl font-bold pb-6"
            >
              {post.content}
            </Link>
            <Link
              href="#"
              className="text-orange-300"
            >
              Read more
            </Link>
          </div>
        </article>
      ))}
    </div>
  )
}

export default ArticleList
