import { Post } from './types'

export const getAllPosts = async (): Promise<Post[]> => {
  // see https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating

  //const response = await fetch("http://golang:8080/api/v1/posts", {cache: "force-cache"}); // ssg(default)
  //const response = await fetch("http://golang:8080/api/v1/posts", {next: {revalidate: 30}}); // isr
  const response = await fetch(`${process.env.API_ENDPOINT}/api/v1/posts`, { cache: 'no-store' }) // ssr

  const posts = await response.json()

  return posts
}
