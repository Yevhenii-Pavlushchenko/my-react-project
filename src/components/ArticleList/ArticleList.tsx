import { type Article } from '../../types/Article'

interface ArticleListProps{
    items: Article[]
}

export default function ArticleList({ items }: ArticleListProps) {
    return (
        <ul>
          {items.map((items) => (
            <li key={items.objectID}>
              <a href={items.url} target="_blank">{items.title}</a>
            </li>
          ))}
        </ul>
    )
}