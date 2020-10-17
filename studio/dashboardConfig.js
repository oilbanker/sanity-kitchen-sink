export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8a9a56324f6542b6fc33ca',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-nfr852is',
                  apiId: 'ba40e36b-8903-422d-9c7d-d0cd7f821fa0'
                },
                {
                  buildHookId: '5f8a9a5783cc5764dd1c873a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-wevdpscw',
                  apiId: '6247d34a-cda3-4990-a951-85e9ac4c0fb9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/oilbanker/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-wevdpscw.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
