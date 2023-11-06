import React from 'react'

const CreateBlogPage = () => {
  return (
    <div className="min-h-screen py-8 px-4 md:px-12">
      <h2>新規作成</h2>

      <form className="p-5">
        <div className="mb-3">
          <label className="text-sm font-bold">URL</label>
          <input
            type="text"
            className="shadow bg-slate-100 boerder rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          />
        </div>

        <div className="mb-3">
          <label>タイトル</label>
          <input
            type="text"
            className="shadow bg-slate-100 boerder rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          />
        </div>

        <div>
          <label>本文</label>
          <textarea className="shadow bg-slate-100 boerder rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" />
        </div>

        <div>
          <button
            type="submit"
            className="py-2 px-4 border rounded-md bg-orange-300 font-bold"
          >
            送信
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateBlogPage
