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
                  buildHookId: '602821074e84c79a31803957',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-s9yxj9dj',
                  apiId: '636ccb19-d047-43bc-a903-b4b5406e0bf2'
                },
                {
                  buildHookId: '6028210724ed4fb4e47b5bd7',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-3ikfxr35',
                  apiId: '17ee5b7b-ce45-4df5-9de1-b811b6905dfd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/benwhit/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-3ikfxr35.netlify.app', category: 'apps'}
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
