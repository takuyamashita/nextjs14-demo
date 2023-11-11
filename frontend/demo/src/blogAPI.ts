import { Post } from './types'

export const getAllPosts = async (throwError: boolean = false): Promise<Post[]> => {
  // see https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating

  //const response = await fetch("http://golang:8080/api/v1/posts", {cache: "force-cache"}); // ssg(default)
  //const response = await fetch("http://golang:8080/api/v1/posts", {next: {revalidate: 30}}); // isr
  const response = await fetch(`${process.env.API_ENDPOINT}/api/v1/posts`, { cache: 'no-store' }) // ssr

  if (throwError || !response.ok) {
    throw new Error('Failed to fetch posts')
  }

  const posts = await response.json()

  await new Promise((resolve) => setTimeout(resolve, 2000))
  return posts
}
