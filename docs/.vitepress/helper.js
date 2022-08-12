export function genArrayMenu() {
  return [
    {
      text: 'Array(数组操作)',
      items: [
        {
          text: 'chunk(数组分块)',
          link: '/Array/chunk'
        },
        {
          text: 'compact(过滤假值)',
          link: '/Array/compact'
        }
      ]
    }
  ]
}

export function genCollectionMenu() {
  return [
    {
      text: 'Collection(集合操作)',
      items: [
        {
          text: 'countBy',
          link: '/Collection/countBy'
        }
      ]
    }
  ]
}

export const menu = [...genArrayMenu(), ...genCollectionMenu()]
