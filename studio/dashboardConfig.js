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
                  buildHookId: '6064776704077c2196ba7d36',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-8fnw1zf3',
                  apiId: '29ec2270-e06c-4303-afea-011bb7624826'
                },
                {
                  buildHookId: '6064776708af72009ba7c8d7',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-i55t6cn6',
                  apiId: '15a40e6d-118d-43a8-aaf7-2e0eb51500f0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cghayden/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-i55t6cn6.netlify.app', category: 'apps'}
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
