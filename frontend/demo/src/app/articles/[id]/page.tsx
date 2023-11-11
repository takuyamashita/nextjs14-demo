import { getDetailArticle } from '@/blogAPI'
import Image from 'next/image'
import React from 'react'

const Article = async ({ params }: { params: { id: string } }) => {

  const article = await getDetailArticle(params.id)

  return (
    <div className="max-w-3xl mx-auto p-5">
      <Image
        src="https://source.unsplash.com/collection/1236951/1000x500?sig=1"
        alt="article image"
        width={1000}
        height={500}
      />
      <h1 className="text-4xl text-center mb-10 mt-10">{article.title}</h1>
      <div className="text-lg leading-relaxed">
        <p>{article.content}</p>
      </div>
    </div>
  )
}

export default Article
