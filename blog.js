function renderBlogList(posts) {
  try {
    const list = document.getElementById('blogList')
    if (!list || !Array.isArray(posts)) {
      return
    }

    list.innerHTML = ''

    posts.forEach((post) => {
      if (!post || typeof post.title !== 'string' || typeof post.date !== 'string') {
        return
      }

      const item = document.createElement('div')
      item.classList.add('blog-item')

      const title = document.createElement(post.url ? 'a' : 'span')
      title.classList.add('blog-title')
      title.textContent = post.title
      if (post.url) {
        title.href = post.url
      }

      const date = document.createElement('span')
      date.classList.add('blog-date')
      date.textContent = post.date

      item.appendChild(title)
      item.appendChild(date)
      list.appendChild(item)
    })
  } catch (error) {
    console.error('Failed to render blog list', error)
  }
}

renderBlogList(typeof blogPosts === 'undefined' ? [] : blogPosts)


