export function genArrayMenu() {
  return [
    {
      text: 'Array(数组操作)',
      items: [
        {
          text: 'chunk',
          link: '/Array/chunk'
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
