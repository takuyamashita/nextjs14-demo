import { notFound } from 'next/navigation'
import { Article } from './types'

export const getAllPosts = async (throwError: boolean = false): Promise<Article[]> => {
  // see https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating

  //const response = await fetch("http://golang:8080/api/v1/posts", {cache: "force-cache"}); // ssg(default)
  //const response = await fetch("http://golang:8080/api/v1/posts", {next: {revalidate: 30}}); // isr
  const response = await fetch(`${process.env.API_ENDPOINT}/api/v1/posts`, { cache: 'no-store' }) // ssr

  if (throwError || !response.ok) {
    throw new Error('Failed to fetch posts')
  }

  const article = await response.json()

  await new Promise((resolve) => setTimeout(resolve, 2000))
  return article
}

export const getDetailArticle = async (
  id: string,
  throwError: boolean = false,
): Promise<Article> => {
  const response = await fetch(`${process.env.API_ENDPOINT}/api/v1/posts/${id}`, {
    next: { revalidate: 5 },
  })

  if(response.status === 404) {
    notFound()
  }

  if (throwError || !response.ok) {
    throw new Error('Failed to fetch posts')
  }

  const article = await response.json()

  return article
}
